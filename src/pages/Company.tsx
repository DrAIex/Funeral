import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useCompanyStore, useContactStore } from '../stores/StoreContext';
import { CompanyUpdatePayload } from '../types';
import CompanyCard from '../components/CompanyCard';
import ContactCard from '../components/ContactCard';
import PhotosCard from '../components/PhotosCard';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Input from '../components/Input';
import { ReactComponent as Approve } from '../assets/icons/Vector.svg';
import { ReactComponent as X } from '../assets/icons/X.svg';
import { EditIcon, DeleteIcon } from '../components/icons/IconComponents';

import {
  PageContainer,
  PageTitleContainer,
  PageTitle,
  HeaderActions,
  IconButton
} from '../styles/PageStyles';

import {
  Modal,
  ModalContent,
  ModalTitle,
  ModalActions
} from '../styles/ModalStyles';

const COMPANY_ID = '12';
const CONTACT_ID = '16';

const Company: React.FC = observer(() => {
  const navigate = useNavigate();
  const companyStore = useCompanyStore();
  const contactStore = useContactStore();
  
  const [showNameModal, setShowNameModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [organizationName, setOrganizationName] = useState('');

  useEffect(() => {
    companyStore.fetchCompany(COMPANY_ID);
    contactStore.fetchContact(CONTACT_ID);
  }, [companyStore, contactStore]);

  const { company, loading: companyLoading } = companyStore;
  const { contact, loading: contactLoading } = contactStore;

  useEffect(() => {
    if (company) {
      setOrganizationName(company.name);
    }
  }, [company]);

  if (companyLoading || contactLoading) {
    return (
      <Layout>
        <PageContainer>
          <div>Loading...</div>
        </PageContainer>
      </Layout>
    );
  }

  if (!company) {
    return (
      <Layout>
        <PageContainer>
          <div>Company not found</div>
        </PageContainer>
      </Layout>
    );
  }

  const handleDeleteCompany = async () => {
    if (company) {
      await companyStore.deleteCompany(company.id);
      setShowDeleteModal(false);
      navigate('/login');
    }
  };
  
  const handleUpdateName = async () => {
    if (company) {
      const updatePayload: CompanyUpdatePayload = {
        name: organizationName,
      };
      await companyStore.updateCompany(company.id, updatePayload);
      setShowNameModal(false);
    }
  };

  return (
    <Layout>
      <PageContainer>
        <PageTitleContainer>
          <PageTitle>{company.name}</PageTitle>
          <HeaderActions>
            <IconButton onClick={() => setShowNameModal(true)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => setShowDeleteModal(true)}>
              <DeleteIcon />
            </IconButton>
          </HeaderActions>
        </PageTitleContainer>
        <CompanyCard />
        <ContactCard />
        <PhotosCard />

        {showNameModal && (
          <Modal>
            <ModalContent>
              <ModalTitle>Specify the Organization's name</ModalTitle>
              <Input
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
                fullWidth
              />
              <ModalActions>
                <Button onClick={handleUpdateName}>
                  <Approve style={{ margin: '0 5px' }} />
                  Save changes
                </Button>
                <Button variant="secondary" onClick={() => setShowNameModal(false)}>
                  <X style={{ margin: '0 5px' }} />
                  Cancel
                </Button>
              </ModalActions>
            </ModalContent>
          </Modal>
        )}

        {showDeleteModal && (
          <Modal>
            <ModalContent>
              <ModalTitle>Remove the Organization?</ModalTitle>
              <p>Are you sure you want to remove this Organization?</p>
              <ModalActions>
                <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>No</Button>
                <Button variant="danger" onClick={handleDeleteCompany}>Yes, remove</Button>
              </ModalActions>
            </ModalContent>
          </Modal>
        )}
      </PageContainer>
    </Layout>
  );
});

export default Company; 