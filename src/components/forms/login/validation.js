import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  login: Yup.string().email('Invalid email address!').required('Required'),
  password: Yup.string()
    .required('Required')
    .min(6, 'Must be at least 6 characters'),
});

export default LoginSchema;
