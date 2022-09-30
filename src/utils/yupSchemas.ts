import * as Yup from "yup";
import moment from 'moment';

import { emailRegex } from '../utils/regularExp';

export const formSchema = Yup.object().shape({
  title: Yup.string().typeError('Must be a string').min(8).max(40).required(),
  brand: Yup.number().required(),
  model: Yup.number().required(),
  color: Yup.number().required(),
  odometer: Yup.number().typeError('Must be a number').min(0).required().max(9999999,'Mus be less than 999999'),
  sale_date: Yup.string().required(),
  state: Yup.number().required(),
  city: Yup.number().required(),
  year: Yup.number().typeError('Must be a number').required().lessThan(Number(moment().format('YYYY'))+1).min(1970),
  price: Yup.number().typeError('Must be a number').required().min(0, 'Must be greater than zero').max(999999,'Mus be less than 999999'),
  condition: Yup.string().required(),
  vin: Yup.string().min(8).max(20).required(),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().required().matches(emailRegex,'Invalid Email'),
});