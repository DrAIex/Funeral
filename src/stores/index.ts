import CompanyStore from './CompanyStore';
import ContactStore from './ContactStore';

export interface RootStore {
  companyStore: typeof CompanyStore;
  contactStore: typeof ContactStore;
}

const rootStore: RootStore = {
  companyStore: CompanyStore,
  contactStore: ContactStore,
};

export default rootStore; 