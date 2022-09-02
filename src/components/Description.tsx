import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  background-color: black;
  color: white;
  padding: 1rem 0;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ImageCarDesc = styled.div`
  width: 20%;
`;

const InformationLotDesc = styled.div`
  width: 30%;
`;

const SalesDesc = styled.div`
  width: 20%;
`;

const DescriptionVehDesc = styled.div`
  width: 15%;
`;

const ConditionDesc = styled.div`
  width: 10%;
`;

const SelectButtonDesc = styled.div`
  width: 5%;
`;

const Description = () => {
  return (
    <Container>
      <ImageCarDesc>Image</ImageCarDesc>
      <InformationLotDesc>Lot Information</InformationLotDesc>
      <DescriptionVehDesc>Vehicle Information</DescriptionVehDesc>
      <ConditionDesc>Condition</ConditionDesc>
      <SalesDesc>Sales Information</SalesDesc>    
      <SelectButtonDesc>Others</SelectButtonDesc>
    </Container>
  )
}

export default Description