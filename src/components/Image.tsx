import carImage from './../images/car.svg';
import styled from 'styled-components';

const ImageComp = styled.img`
  width: 20rem;
  height: 14rem;
  object-fit: cover;
`

const Image = () => {
  return (
    <>
      <ImageComp alt="carImage" src={carImage}/>
    </>
  )
}

export default Image