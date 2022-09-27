import { Users } from '../generated/graphql';

export const carsDataTest = [
  {
    batch: '521161a4-0022-452c-92c6-76fcfde50e4f',
    city: {
      __typename: 'cities',
      name: 'San Diego',
      id: 6,
      state: {
        __typename: 'states',
        id: 2,
        name: 'CALIFORNIA',
      },
    },
    color: {
      __typename: 'colors',
      id: 3,
      name: 'Black',
    },
    condition: 'N',
    id: 236,
    model: {
      __typename: 'models',
      id: 6,
      name: 'Rav4',
      brand: {
        __typename: 'brands',
        id: 2,
        name: 'Toyota',
      },
    },
    odometer: 45000,
    price: '$10,600.00',
    sale_date: '2022-09-23',
    title: 'Rav 4 2017',
    vin: 'MTE4584',
    year: 2017,
    __typename: 'cars',
  },
  {
    __typename: 'cars',
    id: 238,
    title: 'Ford Mustang 2021',
    model: {
      __typename: 'models',
      id: 25,
      name: 'Mustang',
      brand: {
        __typename: 'brands',
        id: 4,
        name: 'Ford',
      },
    },
    color: {
      __typename: 'colors',
      id: 5,
      name: 'Gray',
    },
    odometer: 10000,
    sale_date: '2022-10-25',
    city: {
      __typename: 'cities',
      name: 'Orlando',
      id: 9,
      state: {
        __typename: 'states',
        id: 3,
        name: 'FLORIDA',
      },
    },
    year: 2021,
    condition: 'A',
    price: '$9,750.00',
    batch: 'b58c2373-a2b2-49cb-9578-b0dd18593372',
    vin: '123512341234',
  },
  {
    __typename: 'cars',
    id: 248,
    title: 'BMW M4 2022',
    model: {
      __typename: 'models',
      id: 24,
      name: 'M4',
      brand: {
        __typename: 'brands',
        id: 6,
        name: 'BMW',
      },
    },
    color: {
      __typename: 'colors',
      id: 1,
      name: 'Red',
    },
    odometer: 8000,
    sale_date: '2022-09-24',
    city: {
      __typename: 'cities',
      name: 'Los Angeles',
      id: 5,
      state: {
        __typename: 'states',
        id: 2,
        name: 'CALIFORNIA',
      },
    },
    year: 2022,
    condition: 'A',
    price: '$15,000.00',
    batch: '3bd90848-9654-4be7-9ed9-0e57787b8222',
    vin: '1M8GDM9A_KP042711',
  },
];

export const brandsDataTest = [
  {
    id: 1,
    name: 'Jeep',
  },
  {
    id: 2,
    name: 'Toyota',
  },
  {
    id: 3,
    name: 'Nissan',
  },
  {
    id: 4,
    name: 'Ford',
  },
  {
    id: 6,
    name: 'BMW',
  },
  {
    id: 7,
    name: 'Subaru',
  },
  {
    id: 8,
    name: 'Dodge',
  },
];

export const colorsDataTest = [
  {
    id: 1,
    name: 'Red',
    __typename: 'colors',
  },
  {
    id: 2,
    name: 'White',
    __typename: 'colors',
  },
  {
    id: 3,
    name: 'Black',
    __typename: 'colors',
  },
  {
    id: 4,
    name: 'Blue',
    __typename: 'colors',
  },
  {
    id: 5,
    name: 'Gray',
    __typename: 'colors',
  },
  {
    id: 7,
    name: 'Yellow',
    __typename: 'colors',
  },
];

export const statesDataTest = [
  {
    id: 1,
    name: 'UTAH',
    __typename: 'states',
  },
  {
    id: 2,
    name: 'CALIFORNIA',
    __typename: 'states',
  },
  {
    id: 3,
    name: 'FLORIDA',
    __typename: 'states',
  },
];

export const modelsDataTest = [
  {
    id: 1,
    name: 'Patriot',
    __typename: 'models',
  },
  {
    id: 2,
    name: 'Renegade',
    __typename: 'models',
  },
  {
    id: 3,
    name: 'Compass',
    __typename: 'models',
  },
];

export const citiesDataTest = [
  {
    id: 1,
    name: 'Provo',
    __typename: 'cities',
  },
  {
    id: 3,
    name: 'American Fork',
    __typename: 'cities',
  },
  {
    id: 4,
    name: 'Salt lake city',
    __typename: 'cities',
  },
];

export const carCreateDataTest = {
  batch: 'b5bac009-52a1-43b8-8480-adb6c041d368',
  title: 'Jeep Patriot 2022',
  brand_id: 1,
  model_id: 1,
  color_id: 1,
  odometer: 500,
  sale_date: '2022-10-08',
  city_id: 1,
  state_id: 1,
  year: 2022,
  price: 20000,
  condition: 'N',
  vin: '1M8GDM9A_KP042700',
};

export const resultCreateCarDataTest = {
  ...carCreateDataTest,
  id: 500,
  __typename: 'cars',
};

export const testUser: Users = {
  email: 'dianacalderon@ravn.co',
  first_name: 'Diana',
  id: 7,
  last_name: 'Calderón',
  uuid: '2307a94b-bbed-4a6c-a23e-5afcbb3ec092',
  __typename: 'users',
};

export const invalidEmailUser = 'dianacalderon@.com';

export const nonExistentEmailUser = 'dianacalderon@raven.com';

export const favoritesCars = [
  {
    id: 1225,
    car_id: 236,
    __typename: 'user_cars',
  },
];
