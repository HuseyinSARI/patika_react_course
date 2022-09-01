import { object, string, number, date, InferType, ref } from 'yup';

const validation = object({
    email: string().email("Geçerli bir email giriniz").required("Bu alanı boş bırakamazsınız."),
    password: string().min(5,"En az 5 haneli olmalı.").required("Bu alanı boş bırakamazsınız."),
    passwordConfirm : string().oneOf([ref('password')],"Parola eşleşmedi.").required("Bu alanı boş bırakamazsınız."),
  });

export default validation;