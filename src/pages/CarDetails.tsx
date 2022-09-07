import { useCarQuery } from '../generated/graphql';
import { useParams } from 'react-router-dom';
import {  } from '../generated/graphql';

const CarDetails = () => {

  const {id} = useParams();

  const { loading, data, error } = useCarQuery({
    variables: {
      where: {
        id: {
          _eq: Number(id)
        }
      }
    }
  });

  console.log(data);

  return (
    <>
      <div>CarDetails</div>
      <div>{data?.cars[0]?.title}</div>
    </>
  )
}

export default CarDetails