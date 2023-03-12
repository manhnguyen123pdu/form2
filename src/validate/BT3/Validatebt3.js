import React from 'react'
import { useFormik } from 'formik'
import AppFormDTO3 from './AppFormDTO3'

export default function Validatebt3() {
    let {values,errors,handleChange,handleSubmit}= useFormik({
        initialValues:{
            name:"",
            email:"",
            phone:"",
            massage:""
        },
        validationSchema:AppFormDTO3,
        onSubmit:()=>{
            alert("name: "+values.name+" email :"+ values.email+" phone: "+ values.phone +" massage: "+ values.massage)

        }
    })
    return (
        <div className='container w-50'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label> <br />
                    <input value={values.name} name="name" type="text" className="form-control" onChange={handleChange} />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className="form-group">
                    <label>phone</label> <br />
                    <input value={values.phone} name="phone" type="number" className="form-control" onChange={handleChange} />
                    {errors.phone && <p>{errors.phone}</p>}
                </div>
                <div className="form-group">
                    <label>Email</label> <br />
                    <input value={values.email} name="email" type="text" className="form-control" onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-group">
                    <label>Massge</label> <br />
                    <textarea value={values.massage} name="massage" type="text" className="form-control" onChange={handleChange}/>
                </div>
               
                <button className=' btn btn-success mt-3'>submit</button>
            </form>

            
        </div>
    )
}
