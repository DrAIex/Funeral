import { makeAutoObservable, runInAction } from 'mobx';
import * as api from '../api/api';
import { Company, Contact, CompanyUpdatePayload, ContactUpdatePayload, Photo } from '../types';

class CompanyStore {
  company: Company | null = null;
  companies: Company[] = [];
  contact: Contact | null = null;
  loading: boolean = false;
  error: string | null = null;
  authenticated: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  async authenticate(username: string) {
    this.loading = true;
    this.error = null;

    try {
      await api.authenticate(username);
      
      runInAction(() => {
        this.authenticated = true;
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = 'Authentication error';
        this.loading = false;
      });
      console.error('Authentication error:', error);
    }
  }

  async fetchCompany(id: string) {
    this.loading = true;
    this.error = null;

    try {
      const company = await api.getCompany(id);
      
      runInAction(() => {
        this.company = company;
        this.loading = false;
      });

      if (company.contactId) {
        this.fetchContact(company.contactId);
      }
    } catch (error) {
      runInAction(() => {
        this.error = 'Error loading company data';
        this.loading = false;
      });
      console.error('Error loading company data:', error);
    }
  }

  async fetchContact(id: string) {
    try {
      const contact = await api.getContact(id);
      
      runInAction(() => {
        this.contact = contact;
      });
    } catch (error) {
      console.error('Error loading contact data:', error);
    }
  }

  async updateCompany(id: string, data: CompanyUpdatePayload) {
    this.loading = true;
    this.error = null;

    try {
      await api.updateCompany(id, data);
      await this.fetchCompany(id);
    } catch (error) {
      runInAction(() => {
        this.error = 'Error updating company data';
        this.loading = false;
      });
      console.error('Error updating company data:', error);
    }
  }

  async updateContact(id: string, data: ContactUpdatePayload) {
    this.loading = true;
    this.error = null;

    try {
      await api.updateContact(id, data);
      await this.fetchContact(id);
      
      runInAction(() => {
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = 'Error updating contact data';
        this.loading = false;
      });
      console.error('Error updating contact data:', error);
    }
  }

  async deleteCompany(id: string) {
    this.loading = true;
    this.error = null;

    try {
      await api.deleteCompany(id);
      
      runInAction(() => {
        this.company = null;
        this.contact = null;
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = 'Error deleting company';
        this.loading = false;
      });
      console.error('Error deleting company:', error);
    }
  }

  async uploadImage(id: string, file: File) {
    this.loading = true;
    this.error = null;

    try {
      const photoData = await api.uploadCompanyImage(id, file);
      
      if (this.company) {
        runInAction(() => {
          this.company = {
            ...this.company!,
            photos: [...(this.company?.photos || []), photoData]
          };
          this.loading = false;
        });
      }
    } catch (error) {
      runInAction(() => {
        this.error = 'Error uploading image';
        this.loading = false;
      });
      console.error('Error uploading image:', error);
    }
  }

  async deleteImage(companyId: string, imageName: string) {
    this.loading = true;
    this.error = null;

    try {
      await api.deleteCompanyImage(companyId, imageName);
      
      if (this.company && this.company.photos) {
        runInAction(() => {
          if (this.company) {
            this.company = {
              ...this.company,
              photos: this.company.photos.filter(photo => photo.name !== imageName)
            };
          }
          this.loading = false;
        });
      }
    } catch (error) {
      runInAction(() => {
        this.error = 'Error deleting image';
        this.loading = false;
      });
      console.error('Error deleting image:', error);
    }
  }

  reset() {
    this.company = null;
    this.companies = [];
    this.contact = null;
    this.loading = false;
    this.error = null;
    this.authenticated = false;
  }
}

export default new CompanyStore(); 