import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useCompanyStore } from '../stores/StoreContext';
import { CompanyUpdatePayload, BusinessEntityType, CompanyType } from '../types';
import Button from './Button';
import Input from './Input';
import { EditIcon } from './icons/IconComponents';
import { ReactComponent as Approve } from '../assets/icons/Vector.svg';
import { ReactComponent as X } from '../assets/icons/X.svg';
import {
  CardContainer,
  CardHeader,
  CardTitle,
  CardBody,
  FieldRow,
  Label,
  Value,
  Field,
  FieldValue,
  ButtonGroup,
  IconWrapper,
  TypeBadge
} from '../styles/CardStyles';

import {
  SelectField,
  CheckboxGroup,
  CheckboxLabel
} from '../styles/FormStyles';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '.');
};

const CompanyTypeLabels: Record<CompanyType, string> = {
  'funeral_home': 'Funeral home',
  'logistics_services': 'Logistics services',
  'burial_care_contractor': 'Burial care contractor'

};

const businessEntities: BusinessEntityType[] = ['Individual', 'Partnership', 'Corporation'];
const companyTypes: CompanyType[] = ['funeral_home', 'logistics_services', 'burial_care_contractor'];

export const CompanyCard: React.FC = observer(() => {
  const companyStore = useCompanyStore();
  const { company, loading } = companyStore;
  
  const [isEditing, setIsEditing] = useState(false);
  
  const [formData, setFormData] = useState<CompanyUpdatePayload>({
    name: '',
    shortName: '',
    businessEntity: '',
    contract: {
      no: '',
      issue_date: ''
    },
    type: []
  });
  
  useEffect(() => {
    if (company && !isEditing) {
      setFormData({
        name: company.name,
        shortName: company.shortName,
        businessEntity: company.businessEntity,
        contract: {
          no: company.contract.no,
          issue_date: company.contract.issue_date
        },
        type: [...company.type]
      });
    }
  }, [company, isEditing]);
  
  if (!company) {
    return <div>Loading data...</div>;
  }
  
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...(formData[parent as keyof CompanyUpdatePayload] as object),
          [child]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData({
        ...formData,
        type: [...(formData.type || []), value]
      });
    } else {
      setFormData({
        ...formData,
        type: formData.type?.filter(type => type !== value)
      });
    }
  };
  
  const handleSubmit = async () => {
    if (company) {
      const updatePayload: CompanyUpdatePayload = {
        name: formData.name,
        shortName: formData.shortName,
        businessEntity: formData.businessEntity,
        contract: {
          no: formData.contract?.no,
          issue_date: formData.contract?.issue_date
        },
        type: formData.type
      };
      await companyStore.updateCompany(company.id, updatePayload);
      setIsEditing(false);
    }
  };
  
  const handleCancel = () => {
    setIsEditing(false);
    if (company) {
      setFormData({
        name: company.name,
        shortName: company.shortName,
        businessEntity: company.businessEntity,
        contract: {
          no: company.contract.no,
          issue_date: company.contract.issue_date
        },
        type: [...company.type]
      });
    }
  };
  
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>Company Details</CardTitle>
        {!isEditing ? (
          <Button onClick={handleEditToggle} variant="outline" size="small" style={{fontWeight: '600', fontSize: '11px'}}>
            <EditIcon />
            Edit
          </Button>
        ) : (
          <ButtonGroup>
            <Button onClick={handleSubmit} disabled={loading} size="small">
              <Approve style={{ margin: '0 5px' }} />
              Save changes
            </Button>
            <Button variant="secondary" onClick={handleCancel} size="small">
              <X style={{ margin: '0 5px' }} />
              Cancel
            </Button>
          </ButtonGroup>
        )}
      </CardHeader>
      <CardBody>
        {isEditing ? (
          <>
            <FieldRow>
              <Field>
                <Label>Agreement number</Label>
                <Input
                  name="contract.no"
                  value={formData.contract?.no}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Field>
              <Field>
                <Label>Agreement date</Label>
                <Input
                  name="contract.issue_date"
                  type="date"
                  value={formData.contract?.issue_date ? formData.contract.issue_date.split('T')[0] : ''}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Field>
            </FieldRow>
            
            <FieldRow>
              <Field>
                <Label>Business entity</Label>
                <SelectField
                  name="businessEntity"
                  value={formData.businessEntity}
                  onChange={handleInputChange}
                >
                  {businessEntities.map(entity => (
                    <option key={entity} value={entity}>{entity}</option>
                  ))}
                </SelectField>
              </Field>
            </FieldRow>
            
            <FieldRow>
              <Field>
                <Label>Company type</Label>
                <CheckboxGroup>
                  {companyTypes.map(type => (
                    <CheckboxLabel key={type}>
                      <input
                        type="checkbox"
                        value={type}
                        checked={formData.type?.includes(type)}
                        onChange={handleTypeChange}
                      />
                      {CompanyTypeLabels[type]}
                    </CheckboxLabel>
                  ))}
                </CheckboxGroup>
              </Field>
            </FieldRow>
          </>
        ) : (
          <>
            <FieldRow>
              <FieldValue>
                <Label>Agreement:</Label>
                <Value>{company.contract.no}</Value>
                <p style={{fontSize: '14px', color: '#7a7a7a'}}> / </p>
                <Value>{formatDate(company.contract.issue_date)}</Value>
              </FieldValue>
            </FieldRow>
            
            <FieldRow>
              <FieldValue>
                <Label>Business entity:</Label>
                <Value>{company.businessEntity}</Value>
              </FieldValue>
            </FieldRow>
            
            <FieldRow>
              <FieldValue>
                <Label>Company type:</Label>
                <div style={{textAlign: 'right'}}>
                <TypeBadge>
                  {company.type.slice(0, 2).map(type => CompanyTypeLabels[type as CompanyType]).join(', ')}
                </TypeBadge>
                </div>
              </FieldValue>
            </FieldRow>
          </>
        )}
      </CardBody>
    </CardContainer>
  );
});

export default CompanyCard; 