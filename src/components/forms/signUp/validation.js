import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(3, 'Must be at least 3 characters'),
  day: Yup.string().required('Required'),
  month: Yup.string().required('Required'),
  year: Yup.string().required('Required'),
});

export default SignUpSchema;
