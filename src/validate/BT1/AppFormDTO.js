import * as Yup from 'yup'

const AppFormDTO2 = Yup.object().shape({
    title: Yup.string().required("Title không được để trống"),
    number: Yup.string().required("Number không được để trống"),
  })
  
  export default AppFormDTO2