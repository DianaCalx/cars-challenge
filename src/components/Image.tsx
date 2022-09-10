import carImage from './../images/car.svg';
import styled from 'styled-components';

const ImageComp = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Image = () => <ImageComp alt="carImage" src={carImage}/>

export default Image