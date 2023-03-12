import * as Yup from "yup"
const AppFormDTO3 = Yup.object().shape({
    name: Yup.string().required("name không được để trống"),
    phone: Yup.string().required("name không được để trống"),
    email: Yup.string().required("Number không được để trống").test(
        'is-james',
        (d) => `${d.path} sai định dạng`,
        (value) => value == null || /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value),
      )
  })
  
  export default AppFormDTO3