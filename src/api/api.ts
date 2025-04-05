import axios from 'axios';
import { Company, Contact, CompanyUpdatePayload, ContactUpdatePayload } from '../types';

const API_URL = 'https://test-task-api.allfuneral.com';

let token: string | null = null;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authenticate = async (username: string): Promise<string> => {
  const response = await axios.get(`${API_URL}/auth`, { params: { user: username } });
  const authHeader = response.headers.authorization;
  
  if (!authHeader) {
    throw new Error('Authorization token not received');
  }
  
  const extractedToken = authHeader.replace('Bearer ', '');
  token = extractedToken;
  return extractedToken;
};


export const getCompany = async (id: string): Promise<Company> => {
  const response = await api.get<Company>(`/companies/${id}`);
  return response.data;
};

export const updateCompany = async (id: string, data: CompanyUpdatePayload): Promise<Company> => {
  const response = await api.patch<Company>(`/companies/${id}`, data);
  return response.data;
};

export const deleteCompany = async (id: string): Promise<void> => {
  await api.delete(`/companies/${id}`);
};

export const uploadCompanyImage = async (id: string, file: File): Promise<any> => {
  const formData = new FormData();
  formData.append('file', file);
  
  const response = await api.post(`/companies/${id}/image`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  
  return response.data;
};

export const deleteCompanyImage = async (companyId: string, imageName: string): Promise<void> => {
  await api.delete(`/companies/${companyId}/image/${imageName}`);
};

export const getContact = async (id: string): Promise<Contact> => {
  const response = await api.get<Contact>(`/contacts/${id}`);
  return response.data;
};

export const updateContact = async (id: string, data: ContactUpdatePayload): Promise<Contact> => {
  const response = await api.patch<Contact>(`/contacts/${id}`, data);
  return response.data;
}; 