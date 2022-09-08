import { useCarQuery, useDeleteCarMutation } from '../generated/graphql';
import { useParams, useNavigate } from 'react-router-dom';
import Condition from '../components/Condition';
import Image from '../components/Image';
import Button from '../components/Button';
import styled from 'styled-components';
import Spinner from '../components/Spinner';
import Swal from 'sweetalert2';


const CarDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 60%, rgba(0,95,255,1) 100%);
`;

const CarDetail = styled.div`
  div{
    font-weight: bold;
    span{
      font-weight: lighter;
    }
    margin: 0.5rem 0;
  }
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
  width: 100%;
  display: flex;
  justify-content: center;
`

const CarDetails = () => {

  const {id} = useParams();
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

  return (
    <CarDetailsContainer>
      { loading 
      ? <Spinner/> 
        :<CarDetail>
          <CarTitle>Car Details</CarTitle>
          <Image/>
          <div>{data?.cars[0]?.title}</div>
          <div>Batch: <span>{data?.cars[0]?.batch}</span></div>
          <div>Brand: <span>{data?.cars[0]?.model.brand.name}</span></div>
          <div>Model: <span>{data?.cars[0]?.model.name}</span></div>
          <div>Odometer: <span>{data?.cars[0]?.odometer}</span></div>
          <div>Price: <span>{data?.cars[0]?.price}</span></div>
          <div>Vin: <span>{data?.cars[0]?.vin}</span></div>
          <div>Year: <span>{data?.cars[0]?.year}</span></div>
          <div>Color: <span>{data?.cars[0]?.color.name}</span></div>
          <div>Sale Date: <span>{data?.cars[0]?.sale_date}</span></div>
          <div>State: <span>{data?.cars[0]?.city.state.name}</span></div>
          <div>State: <span>{data?.cars[0]?.city.name}</span></div>
          <Condition condition={data?.cars[0].condition}/>
          <Buttons>
            <Button StyledButton={DeleteButton} onClick={()=>deleteCar(Number(data?.cars[0].id))}>Delete Car</Button>
          </Buttons>
        </CarDetail>
      }
    </CarDetailsContainer>
  )
}

export default CarDetails