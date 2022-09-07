import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  background-color: black;
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ImageCarDesc = styled.div`
  width: 20%;
`;

const InformationLotDesc = styled.div`
  width: 25%;
`;

const SalesDesc = styled.div`
  width: 20%;
`;

const DescriptionVehDesc = styled.div`
  width: 15%;
`;

const BranModel = styled.div`
  width: 10%;
`

const ConditionDesc = styled.div`
  width: 10%;
`;



const Description = () => {
  return (
    <Container>
      <ImageCarDesc>Image</ImageCarDesc>
      <InformationLotDesc>Lot Information</InformationLotDesc>
      <DescriptionVehDesc>Vehicle Information</DescriptionVehDesc>
      <BranModel>Brand/Model</BranModel>
      <ConditionDesc>Condition</ConditionDesc>
      <SalesDesc>Sales Information</SalesDesc>    
    </Container>
  )
}

export default Description