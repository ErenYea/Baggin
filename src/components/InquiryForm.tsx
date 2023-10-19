'use client'
import {useRef} from 'react'
import countries from '../data/countries.json'

const InputField = ({input,handleChange}:InputFieldProps)=>{
    return (
        <div className='my-4 mx-auto'>
            <label htmlFor="">{input.label}</label>
            <input className='block mt-2 w-full h-10 py-2 px-4 rounded-md' type={input.type} name={input.name} onChange={handleChange}/>
        </div>
    )
}

const Dropdown = ({input,handleChange}:InputFieldProps)=>{
    return (
        <div className=" w-full">
            <label htmlFor="">{input.label}</label>
            <div className='dropdown w-full bg-base-100 py-2.5 rounded-md mt-2'>
            <label tabIndex={0} className="m-1">Choose Country</label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full h-36 overflow-y-scroll">
                {input.options.map((option:any)=>(
                    <li key={option.name} className='block w-full'><a>{option.name}</a></li>
                ))}
            </ul>
            </div>
        </div>
    )
}

const inputs = [
    {label:'Name',type:'text',name:'name'},
    {label:'Email',type:'email',name:'email'},
    {label:'Contact Number',type:'text',name:'contactNumber'},
    {label:'Country',type:'dropdown',name:'country',options:countries},    
]

const InquiryForm = () => {
    const inputFields = useRef({name:'',email:'',contactNumber:'',country:''})

    const handleChange = (e:any)=>{
        inputFields.current = {...inputFields.current,[e.target.name]:e.target.value}
    }
    
    return ( 
        <form className='w-96'>
            <h3 className='text-2xl text-center uppercase'>Inquire</h3>
            {inputs.map((input)=>{
                return(
                    <>
                    {input.type === 'dropdown' ?
                    <Dropdown key={input.name} input={input} handleChange={handleChange}/>
                    :
                    <InputField key={input.name} input={input} handleChange={handleChange}/>
                }
                    </>
                )
            }
            )}
            <button className='w-full text-lg border-2 mt-4 py-2'>Submit</button>
        </form>
     );
}
 
export default InquiryForm;


type InputFieldProps = {
    input:{
    label:string,
    type:string,
    name:string,
    options?:any
    // value:string
    }
    handleChange:(e:any)=>void
}

type InputProps = {
        name:string,
        email:string,
        contactNumber:string,
        country:string
}
