import React, { useState } from 'react'
import { useFormik } from 'formik';
import AppFormDTO2 from './AppFormDTO';

export default function Validatebt1() {
    let [book, setBook]=useState({
        book:[
            {title:"book1", number:1},
            {title:"book2", number:1},
        ]
    })

    /* A custom hook. */
    let {errors,values, setValues,handleChange,handleSubmit}=useFormik({
        initialValues:{
            title:"",
            number: "",
        },
        onSubmit:(value)=>{
            let newarrBook=[...book.book]
            let index=newarrBook.findIndex((book)=>{return book.title==value.title})
            if(index==-1){
                newarrBook.push(value)
                setBook({
                    book: newarrBook
            })}
            else{
                newarrBook[index].number=value.number
                setBook({
                    book: newarrBook
            })
            }
        },
        validationSchema: AppFormDTO2
        
    })

    let DeleteItem=(item)=>{
        let newarrBook=[...book.book]
        let index=newarrBook.findIndex((book)=>{return book.title==item.title})
        if(index!=-1){
            newarrBook.splice(index,1);
            setBook({
                book: newarrBook
        })
        }
    }
    
    let edit=(item)=>{
        setValues({
            title:item.title,
            number: item.number,
        })

    }


    let renderList=()=>{
        return book.book.map((item,key)=>{
            return <tr key={key}>
                <td>{item.title}</td>
                <td>{item.number}</td>
                <td>
                    <button onClick={()=>{DeleteItem(item)}}>xóa</button>
                    <button onClick={()=>{edit(item)}}>edit</button>
                </td>
            </tr>
        })
        
    }
    return (
        <div className='container w-50'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Tiêu đề</label> <br />
                    <input value={values.title} name="title" type="text" className="form-control" onChange={handleChange} />
                    {errors.title&& <p>{errors.title}</p>}
                </div>
                <div className="form-group">
                    <label>Số lượng</label><br />
                    <input type="number" value={values.number} name="number"  className="form-control" onChange={handleChange}/>
                    {errors.number&& <p>{errors.number}</p>}

                </div>
                <button className=' btn btn-success mt-3'>submit</button>
            </form>

            <table className="table">
                <thead>
                    <tr>
                      <th>Title</th>
                      <th>Number</th>
                      <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {renderList()}
                    
                </tbody>
            </table>

        </div>
    )
}
