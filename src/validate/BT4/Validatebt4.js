import { useFormik } from 'formik'
import React from 'react'
import AppFormDTO4 from './AppFromDTO'

export default function Validatebt4() {
    let { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            indentify: "",
            born: "",
            sex: "",
            nationality: "",
            company: "",
            working: "",
            healthInsurance: "",
            province: "",
            district: "",
            commune: "",
            village: "",
            phone: "",
            email: "",
            passingCountry: "",
            health:[],
            TX:[],
        },
        onSubmit: (value) => {
            alert(JSON.stringify(value))
        },
        validationSchema: AppFormDTO4
    })

    return (
        <div className='container w-50'>
            <form onSubmit={handleSubmit}>
                <h3>Tờ khai y tế</h3>
                <div >
                    <label>Họ tên</label> <br />
                    <input value={values.name} name="name" type="text" className="w-75" onChange={handleChange} />
                    {errors.name && <p className='text-danger'>{errors.name}</p>}
                </div>
                <div >
                    <label>Số hộ chiếu /CMND</label> <br />
                    <input value={values.indentify} name="indentify" type="text" className="w-75" onChange={handleChange} />
                    {errors.indentify && <p className='text-danger'>{errors.indentify}</p>}
                </div>
                <div >
                    <label>Năm sinh</label> <br />
                    <input value={values.born} name="born" type="number" className="w-75" onChange={handleChange} />
                    {errors.born && <p className='text-danger'>{errors.born}</p>}
                </div>

                <div>
                    <span>Giới tính</span>
                    <label className='ml-4'>
                        <input type="radio" name="sex" value={"nam"} onChange={handleChange} />  Nam
                    </label>
                    <label className='ml-2'>
                        <input type="radio" name="sex" value={"nữ"} onChange={handleChange} />  Nữ
                    </label>
                </div>
                <div>
                    <label>Quốc tịch</label> <br />
                    <input value={values.nationality} name="nationality" type="text" className="w-75" onChange={handleChange} />
                    {errors.nationality && <p className='text-danger'>{errors.nationality}</p>}
                </div>
                <div>
                    <label>Công ty làm việc</label> <br />
                    <input value={values.company} name="company" type="text" className="w-75" onChange={handleChange} />
                </div>
                <div>
                    <label>Bộ phận làm việc</label> <br />
                    <input value={values.working} name="working" type="text" className="w-75" onChange={handleChange} />
                </div>
                <div>
                    <span>Có thẻ bảo hiểm i tế</span>
                    <label className='ml-4'>
                        <input type="checkbox" value={"có"} name="healthInsurance" onChange={handleChange} />  Nam
                    </label>
                </div>
                <h4>Địa chỉ liên lạc tại việt nam</h4>
                <div>
                    <label>Tỉnh thành</label> <br />
                    <input value={values.province} name="province" type="text" className="w-75" onChange={handleChange} />
                    {errors.province && <p className='text-danger'>{errors.province}</p>}
                </div>
                <div>
                    <label>Quận /huyện</label> <br />
                    <input value={values.district} name="district" type="text" className="w-75" onChange={handleChange} />
                    {errors.district && <p className='text-danger'>{errors.district}</p>}
                </div>
                <div>
                    <label>Phường /xã</label> <br />
                    <input value={values.commune} name="commune" type="text" className="w-75" onChange={handleChange} />
                    {errors.commune && <p className='text-danger'>{errors.commune}</p>}
                </div>
                <div>
                    <label>Số nhà, phố, tổ dân phố /thôn /</label> <br />
                    <input value={values.village} name="village" type="text" className="w-75" onChange={handleChange} />
                    {errors.village && <p className='text-danger'>{errors.village}</p>}
                </div>
                <div>
                    <label>Điện thoại</label> <br />
                    <input value={values.phone} name="phone" type="text" className="w-75" onChange={handleChange} />
                    {errors.phone && <p className='text-danger'>{errors.phone}</p>}
                </div>
                <div>
                    <label>Email</label> <br />
                    <input value={values.email} name="email" type="text" className="w-75" onChange={handleChange} />
                    {errors.email && <p className='text-danger'>{errors.email}</p>}
                </div>
                <div>
                    <label className='w-75'><b>Trong vòng 14 ngày qua Anh/Chị có đến quốc gia/ vùng lãnh thổ  nào(có thể đi qua nhiều cuốc gia</b></label> <br />
                    <textarea value={values.passingCountry} name="passingCountry" type="text" className="w-75" onChange={handleChange} />
                    {errors.passingCountry && <p className='text-danger'>{errors.passingCountry}</p>}
                </div>
                <div>
                    <label className='w-75'><b>Trong vòng 14 ngày qua Anh/Chị có thấy dấu hiệu nào sau đây không</b></label> <br />
                    <input type="checkbox" value={"sốt"} name="health" onChange={handleChange} />  Sốt <br/>
                    <input type="checkbox" value={"ho"} name="health" onChange={handleChange} />  Ho <br/>
                    <input type="checkbox" value={"khó thở"} name="health" onChange={handleChange} />  Khó thở <br/>
                    <input type="checkbox" value={"viêm phổi"} name="health" onChange={handleChange} />  Viêm phổi <br/>
                    <input type="checkbox" value={"đau họng"} name="health" onChange={handleChange} />  Đau họng <br/>
                    <input type="checkbox" value={"mệt mỏi"} name="health" onChange={handleChange} />  Mệt mỏi <br/>
                </div>
                <div>
                    <label className='w-75'><b>Trong vòng 14 ngày qua Anh/Chị tiếp súc với</b></label> <br />
                    <input type="checkbox" value={"TX1"} name="TX" onChange={handleChange} />  Người bệnh hoặc nghi ngờ mắc COVID-19 <br/>
                    <input type="checkbox" value={"TX2"} name="TX" onChange={handleChange} />  Người từ nước có bệnh COVID-19<br/>
                    <input type="checkbox" value={"TX3"} name="TX" onChange={handleChange} />  Người có biểu hiện (Ho,Sốt,Khó thở,viêm phổi) <br/>
                </div>

                <button className=' btn btn-success mt-3'>submit</button>
            </form>


        </div>
    )
}
