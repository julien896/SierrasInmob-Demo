import * as Yup from 'yup';

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  motivo: Yup.string()
    .min(25, 'Too Short!')
    .max(40, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
    mensaje: Yup.string()
    .min(50, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
});

export default Schema;