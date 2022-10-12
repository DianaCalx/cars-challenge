import { Navigate, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';

import Button from '../components/button';
import Error from '../components/error';
import Image from '../components/image';
import Spinner from '../components/spinner';
import { useCarQuery, useDeleteCarMutation } from '../generated/graphql';
import { getCondition } from '../utils/get-condition';

const CarDetailsContainer = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background: ${(props) => props.theme.gradient};
`;

const CarDetail = styled.div`
  div {
    font-weight: bold;
    span {
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

const CarTitle = styled.div`
  text-align: center;
  font-size: 3rem;
  font-family: 'Dancing Script', sans-serif;
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
          _eq: Number(id),
        },
      },
    },
  });

  const [deleteCarMutation, { error: errorDeleteCar }] = useDeleteCarMutation({
    optimisticResponse: {
      delete_cars_by_pk: {
        id: Number(id),
      },
    },
    update(cache, { data }) {
      cache.modify({
        fields: {
          cars: (existingFieldsData) => {
            return existingFieldsData.filter(
              (car: any) => car.__ref !== `cars:${data?.delete_cars_by_pk?.id}`
            );
          },
        },
        optimistic: true,
      });
    },
  });
  const deleteCar = (id: number) => {
    Swal.fire({
      title: 'Are you sure that you want to delete this car?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: "Don't delete",
    }).then(async (result) => {
      if (result.isConfirmed) {
        navigate('/dashboard');
        await deleteCarMutation({
          variables: {
            deleteCarsByPkId: id,
          },
        });
        Swal.fire('Deleted', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('Task was not deleted');
      }
    });
  };

  const {
    title,
    batch,
    model,
    odometer,
    price,
    vin,
    year,
    color,
    sale_date,
    city,
    condition,
  } = data?.cars?.at(0) || {};

  if (error) {
    return (
      <CarDetailsContainer>
        <Error type="detailError">There was an error</Error>
      </CarDetailsContainer>
    );
  }

  if (!title && !loading) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <CarDetailsContainer>
      {loading ? (
        <Spinner />
      ) : (
        <CarDetail>
          <CarTitle>Car Details</CarTitle>
          <Image />
          <div>{title}</div>
          <div>
            Batch: <span>{batch}</span>
          </div>
          <div>
            Brand: <span>{model?.brand?.name}</span>
          </div>
          <div>
            Model: <span>{model?.name}</span>
          </div>
          <div>
            Odometer: <span>{odometer}</span>
          </div>
          <div>
            Price: <span>{price}</span>
          </div>
          <div>
            Vin: <span>{vin}</span>
          </div>
          <div>
            Year: <span>{year}</span>
          </div>
          <div>
            Color: <span>{color?.name}</span>
          </div>
          <div>
            Sale Date: <span>{sale_date}</span>
          </div>
          <div>
            State: <span>{city?.state?.name}</span>
          </div>
          <div>
            State: <span>{city?.name}</span>
          </div>
          <div>
            Condition: <span>{getCondition(condition)}</span>
          </div>
          <Buttons>
            <Button
              styleButton="DeleteButton"
              onClick={() => deleteCar(Number(id))}
            >
              Delete Car
            </Button>
          </Buttons>
          {errorDeleteCar ? <Error type="normalError">There was an error Deleting Car</Error> : null}
        </CarDetail>
      )}
    </CarDetailsContainer>
  );
};

export default CarDetails;
