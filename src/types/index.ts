export interface Company {
  id: string;
  contactId: string;
  name: string;
  shortName: string;
  businessEntity: string;
  contract: Contract;
  type: string[];
  status: string;
  photos: Photo[];
  createdAt: string;
  updatedAt: string;
}

export interface Contract {
  no: string;
  issue_date: string;
}

export interface Photo {
  name: string;
  filepath: string;
  thumbpath: string;
  createdAt: string;
}

export interface Contact {
  id: string;
  lastname: string;
  firstname: string;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export type BusinessEntityType = 'Individual' | 'Partnership' | 'Corporation';

export type CompanyType = 'funeral_home' | 'logistics_services' | 'burial_care_contractor';

export interface CompanyUpdatePayload {
  name?: string;
  shortName?: string;
  businessEntity?: string;
  contract?: {
    no?: string;
    issue_date?: string;
  };
  type?: string[];
}

export interface ContactUpdatePayload {
  lastname?: string;
  firstname?: string;
  phone?: string;
  email?: string;
} 