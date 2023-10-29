'use client'
import {useRef, useState} from 'react'
import countries from '../data/countries.json'

const InputField = ({input,handleChange}:InputFieldProps)=>{
    return (
        <div className='my-4 mx-auto'>
            <label htmlFor="">{input.label}</label>
            <input className='block mt-2 w-full h-10 py-2 px-4 rounded-md bg-neutral-800' type={input.type} data-name={input.name} onBlur={handleChange}/>
        </div>
    )
}

const Dropdown = ({input,handleDropdown}:DropdownFieldProps)=>{
    return (
        <div className=" w-full">
            <label htmlFor="">{input.label}</label>
            <div className='dropdown w-full py-2.5 rounded-md mt-2 bg-neutral-800'>
            <label tabIndex={0} className="m-1 w-full px-2 block cursor-pointer">Choose Country</label>
            <ul tabIndex={0} className="dropdown-content block z-[1] menu p-2 shadow bg-neutral-800 rounded-box w-full h-36 overflow-auto">
                {input.options.map((option:any)=>(
                    <li key={option.name} className='block w-full' onClick={(e)=>handleDropdown('country',option.name)}><a>{option.name}</a></li>
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
    const [inputFields,setInputFields] = useState({name:'',email:'',contactNumber:'',country:''})

    const handleChange = (e:any)=>{
        setInputFields(prev=>({...prev,[e.target.dataset.name]:e.target.value}))
    }

    const handleDropdown = (country:string,value:string)=>{
        // console.log(country,value)
        setInputFields(prev=>({...prev,country:value}))
    }

    const handleSubmit = (e:any)=>{
        e.preventDefault()
        console.log(inputFields)
    }

    console.log(inputFields)
    
    return ( 
        <form className='w-96' onSubmit={handleSubmit}>
            <h3 className='text-2xl text-center uppercase'>Inquire</h3>
            {inputs.map((input)=>{
                return(
                    <>
                    {input.type === 'dropdown' ?
                    <Dropdown key={input.name} input={input} handleDropdown={handleDropdown}/>
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
    handleChange:(e:any)=>void,
}

type DropdownFieldProps = {
    input:{
    label:string,
    type:string,
    name:string,
    options?:any
    // value:string
    }
    handleDropdown:(country:string,value:string)=>void
}

type InputProps = {
        name:string,
        email:string,
        contactNumber:string,
        country:string
}
