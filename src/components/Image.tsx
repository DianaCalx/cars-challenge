import styled from 'styled-components';

import carImage from './../images/car.svg';

const ImageComp = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Image = () => <ImageComp alt="carImage" src={carImage} />;

export default Image;
