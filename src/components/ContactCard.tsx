import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useContactStore } from '../stores/StoreContext';
import { ContactUpdatePayload } from '../types';
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
  IconWrapper
} from '../styles/CardStyles';

const formatPhoneNumber = (phone: string): string => {
  if (phone.length === 11) {
    return `+${phone.slice(0, 1)} ${phone.slice(1, 4)} ${phone.slice(4, 7)} ${phone.slice(7)}`;
  }
  return phone;
};

export const ContactCard: React.FC = observer(() => {
  const contactStore = useContactStore();
  const { contact, loading } = contactStore;
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<ContactUpdatePayload & { fullName?: string }>({
    lastname: '',
    firstname: '',
    phone: '',
    email: '',
    fullName: ''
  });
  
  useEffect(() => {
    if (contact && !isEditing) {
      setFormData({
        lastname: contact.lastname,
        firstname: contact.firstname,
        phone: contact.phone,
        email: contact.email,
        fullName: `${contact.lastname}`
      });
    }
  }, [contact, isEditing]);
  
  if (!contact) {
    return <div>Loading contact data...</div>;
  }
  
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'fullName') {
      const parts = value.split(' ');
      const lastname = parts[0] || '';
      const firstname = parts.slice(1).join(' ') || '';
      
      setFormData({
        ...formData,
        fullName: value,
        lastname,
        firstname
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleSubmit = async () => {
    if (contact) {
      const updatePayload: ContactUpdatePayload = {
        lastname: formData.lastname,
        firstname: formData.firstname,
        phone: formData.phone,
        email: formData.email
      };
      await contactStore.updateContact(contact.id, updatePayload);
      setIsEditing(false);
    }
  };
  
  const handleCancel = () => {
    setIsEditing(false);
    if (contact) {
      setFormData({
        lastname: contact.lastname,
        firstname: contact.firstname,
        phone: contact.phone,
        email: contact.email,
        fullName: `${contact.lastname}`
      });
    }
  };
  
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>Contacts</CardTitle>
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
              <X style={{ margin: '0 5px' }}/>
              Cancel
            </Button>
          </ButtonGroup>
        )}
      </CardHeader>
      <CardBody>
        {isEditing ? (
          <>
            <FieldRow style={{marginBottom: 0}}>
              <Field>
                <Label>Responsible person</Label>
                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  fullWidth
                  placeholder="Lastname"
                />
              </Field>
            </FieldRow>
            
            <FieldRow style={{marginBottom: 0}}>
              <Field>
                <Label>Phone number</Label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  type="tel"
                  fullWidth
                />
              </Field>
            </FieldRow>
            
            <FieldRow style={{marginBottom: 0}}>
              <Field>
                <Label>E-mail</Label>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  fullWidth
                />
              </Field>
            </FieldRow>
          </>
        ) : (
          <>
            <FieldRow>
              <FieldValue>
                <Label>Responsible person:</Label>
                <Value>{contact.lastname}</Value>
              </FieldValue>
            </FieldRow>
            
            <FieldRow>
              <FieldValue>
                <Label>Phone number:</Label>
                <Value>{formatPhoneNumber(contact.phone)}</Value>
              </FieldValue>
            </FieldRow>
            
            <FieldRow>
              <FieldValue>
                <Label>E-mail:</Label>
                <Value>{contact.email}</Value>
              </FieldValue>
            </FieldRow>
          </>
        )}
      </CardBody>
    </CardContainer>
  );
});

export default ContactCard; 