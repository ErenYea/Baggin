"use client";
import { useRef, useState } from "react";
import countries from "../data/countries.json";

const InputField = ({ input, handleChange }: InputFieldProps) => {
  return (
    <div className="my-4 mx-auto text-primary">
      <label htmlFor="" className="font-medium">
        {input.label}
      </label>
      <input
        className="block mt-2 w-full h-10 py-2 px-4 rounded-md bg-neutral-800 outline-none focus:bg-neutral-700"
        type={input.type}
        data-name={input.name}
        onBlur={handleChange}
      />
    </div>
  );
};

const Dropdown = ({ input, handleDropdown }: DropdownFieldProps) => {
  const [currentOption, setCurrentOption] = useState("");
  return (
    <div className="text-primary w-full my-4 mx-auto">
      <label htmlFor="" className="font-medium">
        {input.label}
      </label>
      <div className="dropdown w-full py-2.5 rounded-md mt-2 bg-neutral-800">
        <label tabIndex={0} className="m-1 w-full px-2 block cursor-pointer">
          {currentOption ? currentOption : "Choose Option"}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content block z-[1] menu p-2 shadow bg-neutral-800 rounded-box w-full h-36 overflow-auto"
        >
          {input.options.map((option: any) => (
            <li
              key={option.name}
              className="block w-full"
              onClick={(e) => {
                handleDropdown(input.name, option.name);
                setCurrentOption(option.name);
              }}
            >
              <a>{option.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const inputs = [
  { label: "Name", type: "text", name: "name" },
  { label: "Email", type: "email", name: "email" },
  { label: "Contact Number", type: "text", name: "contactNumber" },
  {
    label: "Event Country",
    type: "dropdown",
    name: "country",
    options: countries,
  },
  {
    label: "Date",
    type: "date",
    name: "date",
  },
  {
    label: "Event Type",
    type: "dropdown",
    name: "type",
    options: [{ name: "Hybrid" }, { name: "Virtual" }, { name: "In-Person" }],
  },
  {
    label: "Event Services",
    type: "dropdown",
    name: "services",
    options: [
      { name: "Event Strategy" },
      { name: "Event Venue Sourcing" },
      { name: "Overall Event Management" },
      { name: "Event Technology/Platforms/Registration" },
      { name: "Production/Audiovisual" },
      { name: "Creative Services" },
      { name: "Food & Beverage Management" },
    ],
  },
];

// Add date ,event type(dropdown), event services(multiple options dropdown) (done)
// Send email to baggins team and client on submission
// Add dashboard
// Vendor submission form

const VendorSubmissionForm = () => {
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    contactNumber: "",
    country: "",
    date: "",
    type: "",
    services: "",
  });

  const handleChange = (e: any) => {
    setInputFields((prev) => ({
      ...prev,
      [e.target.dataset.name]: e.target.value,
    }));
  };

  const handleDropdown = (name: string, value: string) => {
    setInputFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(inputFields);
  };

  return (
    <form className="w-full sm:w-80 lg:w-96" onSubmit={handleSubmit}>
      <h3 className="text-2xl text-center uppercase text-primary font-semibold">
        Vendor Submission
      </h3>
      {inputs.map((input) => {
        return (
          <>
            {input.type === "dropdown" ? (
              <Dropdown
                key={input.name}
                input={input}
                handleDropdown={handleDropdown}
              />
            ) : (
              <InputField
                key={input.name}
                input={input}
                handleChange={handleChange}
              />
            )}
          </>
        );
      })}
      <button className="submit-btn">Submit</button>
    </form>
  );
};

export default VendorSubmissionForm;

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
