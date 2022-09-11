import { useCarQuery, useDeleteCarMutation } from '../generated/graphql';
import { useParams, useNavigate } from 'react-router-dom';
import Condition from '../components/Condition';
import Image from '../components/Image';
import Button from '../components/Button';
import styled from 'styled-components';
import Spinner from '../components/Spinner';
import Swal from 'sweetalert2';

const CarDetailsContainer = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background: ${props => props.theme.gradient};
`;

const CarDetail = styled.div`
  div{
    font-weight: bold;
    span{
      font-weight: lighter;
    }
    &:not(:last-of-type) {
      margin: 0.5rem 0;
    }
  }
  margin: 0px auto;
  width: 50rem;
  background-color: white;
  padding: 2rem 3rem;
  border-radius: 0.5rem;
`;

const DeleteButton = styled.button`
  background-color: ${props => props.theme.colors.errorColorLight};
  border: none;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  :hover{
    background-color: ${props => props.theme.colors.errorColorDark};
  }
`;

const CarTitle = styled.div`
  text-align: center;
  font-size: 3rem;
  font-family: "Dancing Script", sans-serif;
`;

const Buttons = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CarDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const { loading, data, error } = useCarQuery({
    variables: {
      where: {
        id: {
          _eq: Number(id)
        }
      }
    }
  });

  const [deleteCarMutation, {data : dataDeleteCar, loading: loadingDeleteCar, error: errorDeleteCar}] = useDeleteCarMutation();

  const deleteCar = (id:number) => {
    Swal.fire({
      title: 'Are you sure that you want to delete this car?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: "Don't delete",
    }).then(async result => {
      if (result.isConfirmed) {
        await deleteCarMutation({
          variables: {
            deleteCarsByPkId: id
          }
        })
        navigate('/dashboard');
        Swal.fire('Deleted', '', 'success');       
      } else if (result.isDenied) {
        Swal.fire('Task was not deleted');
      }
    });
  }

  const { title, batch, model, odometer, price, vin, year, color, sale_date, city, condition } = data?.cars?.at(0) || {}

  return (
    <CarDetailsContainer>
      { loading 
      ? <Spinner/> 
        :<CarDetail>
          <CarTitle>Car Details</CarTitle>
          <Image/>
          <div>{title}</div>
          <div>Batch: <span>{batch}</span></div>
          <div>Brand: <span>{model?.brand?.name}</span></div>
          <div>Model: <span>{model?.name}</span></div>
          <div>Odometer: <span>{odometer}</span></div>
          <div>Price: <span>{price}</span></div>
          <div>Vin: <span>{vin}</span></div>
          <div>Year: <span>{year}</span></div>
          <div>Color: <span>{color?.name}</span></div>
          <div>Sale Date: <span>{sale_date}</span></div>
          <div>State: <span>{city?.state?.name}</span></div>
          <div>State: <span>{city?.name}</span></div>
          <Condition condition={condition}/>
          <Buttons>
            <Button StyledButton={DeleteButton} onClick={()=>deleteCar(Number(id))}>Delete Car</Button>
          </Buttons>
        </CarDetail>
      }
    </CarDetailsContainer>
  )
}

export default CarDetails