"use client";
import { useState } from "react";

const InputField = ({ input, handleChange }: InputFieldProps) => {
  return (
    <div className="my-4 mx-auto">
      <label htmlFor="" className="text-amber-300 font-medium ">
        {input.label}
      </label>
      <input
        className="block mt-2 w-full h-10 py-2 px-4 rounded-md bg-neutral-800"
        type={input.type}
        data-name={input.name}
        onBlur={handleChange}
      />
    </div>
  );
};

const TextAreaField = ({ input, handleChange }: InputFieldProps) => {
  return (
    <div className="my-4 mx-auto">
      <label htmlFor="" className="text-amber-300">
        {input.label}
      </label>
      <textarea
        className="block mt-2 w-full h-10 py-2 px-4 rounded-md bg-neutral-800"
        data-name={input.name}
        onBlur={handleChange}
        rows={5}
        cols={10}
      ></textarea>
    </div>
  );
};

const inputs = [
  { label: "Name", type: "text", name: "name" },
  { label: "Email", type: "email", name: "email" },
  { label: "Contact Number", type: "text", name: "contactNumber" },
  { label: "Suggestions", type: "textarea", name: "suggestions" },
];

const ContactForm = () => {
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    contactNumber: "",
    suggestions: "",
  });

  const handleChange = (e: any) => {
    setInputFields((prev) => ({
      ...prev,
      [e.target.dataset.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(inputFields);
  };

  return (
    <form className="w-full sm:w-80 lg:w-96" onSubmit={handleSubmit}>
      <h3 className="text-2xl text-center font-medium text-amber-300 uppercase">
        Reach out to us
      </h3>
      {inputs.map((input) => {
        return (
          <div key={input.name}>
            {input.type === "textarea" ? (
              <TextAreaField input={input} handleChange={handleChange} />
            ) : (
              <InputField input={input} handleChange={handleChange} />
            )}
          </div>
        );
      })}
      <button className="submit-btn">Submit</button>
    </form>
  );
};

export default ContactForm;

type InputFieldProps = {
  input: {
    label: string;
    type: string;
    name: string;
    options?: any;
    // value:string
  };
  handleChange: (e: any) => void;
};

type DropdownFieldProps = {
  input: {
    label: string;
    type: string;
    name: string;
    options?: any;
    // value:string
  };
  handleDropdown: (country: string, value: string) => void;
};

type InputProps = {
  name: string;
  email: string;
  contactNumber: string;
  country: string;
};
