import { string, object } from 'yup'
export const loginValidationSchema = object().shape({
  username: string().required('Tên đăng nhập là bắt buộc'),
  password: string().required('Mật khẩu là bắt buộc')
})
