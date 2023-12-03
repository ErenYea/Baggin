import Intro from "@/components/Intro";
import contactImg from "../../../../public/contact.jpg";
import ContactForm from "@/components/ContactForm";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";

const details = [
  {
    id: 1,
    title: "Contact Number:",
    value: "+1(234)44322553",
    icon: <PhoneOutlinedIcon />,
  },
  {
    id: 2,
    title: "Email:",
    value: "baggins@mail.com",
    icon: <EmailOutlinedIcon />,
  },
  {
    id: 3,
    title: "Address:",
    value: "LakeView Road, Dallas, Texas",
    icon: <HouseOutlinedIcon />,
  },
];

const Contact = () => {
  return (
    <>
      <Intro title="Contact Us" bgImage={contactImg.src} />
      <div className="grid grid-cols-12 w-full px-8 sm:px-12 lg:px-16 my-8 lg:my-20 gap-8 pageMiddle">
        <div className="col-span-12 lg:col-span-7 justify-self-start sm:justify-self-center">
          {details.map((detail) => (
            <div key={detail.id} className="my-8">
              <h2 className="flex items-center gap-3 text-xl sm:text-2xl font-semibold text-amber-300">
                <span className="bg-amber-300 text-black rounded-full py-2 px-3 sm:py-2.5 sm:px-3.5">
                  {detail.icon}
                </span>
                {detail.title}
              </h2>
              <p className="mt-2 text-base sm:text-lg ml-8 lg:ml-16 text-amber-50 font-medium">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
        <div className="col-span-12 lg:col-span-5 justify-self-auto sm:justify-self-center lg:justify-self-start">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Contact;
