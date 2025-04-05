import { makeAutoObservable, runInAction } from 'mobx';
import { Contact, ContactUpdatePayload } from '../types';
import * as api from '../api/api';

class ContactStore {
  contact: Contact | null = null;
  loading: boolean = false;
  error: Error | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchContact(id: string) {
    this.loading = true;
    this.error = null;

    try {
      const contact = await api.getContact(id);
      runInAction(() => {
        this.contact = contact;
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error as Error;
        this.loading = false;
      });
    }
  }

  async updateContact(id: string, data: ContactUpdatePayload) {
    this.loading = true;
    this.error = null;

    try {
      const updatedContact = await api.updateContact(id, data);
      runInAction(() => {
        this.contact = updatedContact;
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error as Error;
        this.loading = false;
      });
    }
  }

  reset() {
    this.contact = null;
    this.loading = false;
    this.error = null;
  }
}

export default new ContactStore(); 