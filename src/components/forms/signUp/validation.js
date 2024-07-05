import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(3, 'Must be at least 3 characters'),
});

export default SignUpSchema;
