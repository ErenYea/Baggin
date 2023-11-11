import Intro from "@/components/Intro";
import servicesImg from "../../../public/services.jpg";
import MiscellaneousServicesOutlinedIcon from "@mui/icons-material/MiscellaneousServicesOutlined";
import Image from "next/image";

const services = [
  { title: "DJ" },
  { title: "MC" },
  { title: "Full Lighting Production" },
  { title: "Cloud/Fog Effect" },
  { title: "Tall Mirror Photobooth" },
  { title: "360 Video Booth" },
  { title: "Cold Indoor Sparkler Fountain Effect" },
  { title: "Dancefloor & Customised Dancefloor Vinyl Wrap" },
  { title: "Customised Backdrop + Balloonist" },
  { title: "Piping and Draping" },
  { title: "Confetti" },
  { title: "LED Screen Display" },
  { title: "Custom Builds" },
];

const Services = () => {
  return (
    <>
      <Intro title="Our Services" bgImage={servicesImg.src} />
      <div className="flex justify-evenly flex-wrap gap-8 items-center my-8 pageMiddle">
        {services.map((service) => (
          <div
            key={service.title}
            className="w-80 shadow-xl shadow-neutral-900 rounded-md bg-neutral-900 py-3 px-4 text-primary"
          >
            <div className="flex justify-center p-3 w-fit mx-auto rounded-full">
              {/* <MiscellaneousServicesOutlinedIcon className='text-4xl'/> */}
              <Image src="/logo_big.png" alt="Logo" width={60} height={60} />
            </div>
            <h3 className="text-2xl text-center mt-4 font-semibold">
              {service.title}
            </h3>
            <p className="text-base text-center mt-2 font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              quasi consectetur tempora sed asperiores perferendis provident
              animi sint ipsum autem magni, et ab. Expedita eius officiis
              voluptatibus sint dolores porro!
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
