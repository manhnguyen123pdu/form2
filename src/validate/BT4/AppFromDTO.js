import * as Yup from "yup"
const AppFormDTO4 = Yup.object().shape({
    name:Yup.string().required("name không được để trống"),
    indentify:Yup.string().required("indentify không được để trống"),
    born:Yup.number().required("born không được để trống").min(1900,"năm sinh phải lớn hơn 1900"),
    nationality:Yup.string().required("nationality không được để trống"),
    province:Yup.string().required("province không được để trống"),
    district:Yup.string().required("district không được để trống"),
    commune:Yup.string().required("commune không được để trống"),
    village:Yup.string().required("village không được để trống"),
    phone:Yup.string().required("phone không được để trống"),
    email: Yup.string().required("Email không được để trống").test(
        'is-james',
        (d) => `${d.path} sai định dạng`,
        (value) => value == null || /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value),
      )
  })
  
  export default AppFormDTO4