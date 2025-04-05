import styled from 'styled-components';

export const PhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const PhotoItem = styled.div`
  position: relative;
  width: 144px;
  height: 108px;
  border-radius: 10px;
  overflow: hidden;
`;

export const DeletePhotoButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: #3B3B3B;
  border-radius: 30%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #656565;
  font-size: 16px;
  z-index: 2;
  transition: all 0.3s ease;
  border: none;
  
  &:hover {
    color: #ffffff;
    border-color: #656565;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`; 