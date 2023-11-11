import Intro from "@/components/Intro";
import galleryImg from "../../../public/gallery.jpg";
import pic1 from "../../../public/gallery-pics/gallery1.jpg";
import pic2 from "../../../public/gallery-pics/gallery2.jpg";
import pic3 from "../../../public/gallery-pics/gallery3.jpg";
import pic4 from "../../../public/gallery-pics/gallery4.jpg";
import pic5 from "../../../public/gallery-pics/gallery5.jpg";
import pic6 from "../../../public/gallery-pics/gallery6.jpg";
import pic7 from "../../../public/gallery-pics/gallery7.jpg";
import Image from "next/image";

const images = [
  { img: pic1.src },
  { img: pic2.src },
  { img: pic3.src },
  { img: pic4.src },
  { img: pic5.src },
  { img: pic6.src },
  { img: pic7.src },
];

const Gallery = () => {
  return (
    <>
      <Intro title="Gallery" bgImage={galleryImg.src} />
      <div className="my-10 pageMiddle px-16">
        <h3 className="text-4xl font-medium uppercase text-center text-amber-200">
          Highlights
        </h3>
        <div className="flex justify-evenly gap-4 mt-8 flex-wrap">
          {images.map((image, i) => (
            <div key={image.img} className="w-80 h-56">
              <Image
                src={image.img}
                alt={`pic${i + 1}`}
                width={350}
                height={250}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
