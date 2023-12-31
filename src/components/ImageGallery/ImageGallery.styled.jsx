import styled from '@emotion/styled';

export const ImageGalleryUl = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  background-color: #f9ebc7;
  padding-top: 70px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
