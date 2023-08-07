import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  time: yup.date().required(),
  guest_id: yup.string().nullable(),
  table_id: yup.string().nullable(),
});
