import React from 'react';
import { observer } from 'mobx-react-lite';
import { useCompanyStore } from '../stores/StoreContext';
import { AddPhotoIcon, DeleteIcon } from './icons/IconComponents';
import {
  CardContainer,
  CardHeader,
  CardTitle,
  CardBody
} from '../styles/CardStyles';
import {
  UploadButtonLabel,
  HiddenInput
} from '../styles/FormStyles';
import {
  PhotosContainer,
  PhotoItem,
  DeletePhotoButton,
  Photo
} from '../styles/PhotoStyles';

export const PhotosCard: React.FC = observer(() => {
  const companyStore = useCompanyStore();
  const { company } = companyStore;
  
  if (!company) {
    return null;
  }
  
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0 && company) {
      await companyStore.uploadImage(company.id, files[0]);
    }
  };
  
  const handleDeleteImage = async (imageName: string) => {
    if (company && window.confirm('Are you sure you want to delete this image?')) {
      await companyStore.deleteImage(company.id, imageName);
    }
  };
  
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>Photos</CardTitle>
        <UploadButtonLabel>
          <AddPhotoIcon size={18} />
          Add
          <HiddenInput
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </UploadButtonLabel>
      </CardHeader>
      <CardBody>
        <PhotosContainer>
          {company.photos.map(photo => (
            <PhotoItem key={photo.name}>
              <DeletePhotoButton
                onClick={() => handleDeleteImage(photo.name)}
                title="Delete"
              >
                <DeleteIcon size={20} color="white" />
              </DeletePhotoButton>
              <Photo src={photo.filepath} alt="Company photo" />
            </PhotoItem>
          ))}
        </PhotosContainer>
      </CardBody>
    </CardContainer>
  );
});

export default PhotosCard; 