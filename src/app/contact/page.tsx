import Intro from '@/components/Intro';
import contactImg from '../../../public/contact.jpg'
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';

const services = [
    {title:'DJ'},
    {title:'MC'},
    {title:'Full Lighting Production'},
    {title:'Cloud/Fog Effect'},
    {title:'Tall Mirror Photobooth'},
    {title:'360 Video Booth'},
    {title:'Cold Indoor Sparkler Fountain Effect'},
    {title:'Dancefloor'},
    {title:'Customised Backdrop + Balloonist'},
    {title:'Piping and Draping'},
    {title:'Confetti'},   
    {title: 'LED Screen Display'},
    {title:'Custom Builds'}
]

const Contact = () => {
    return ( 
        <>
        <Intro title='Contact Us' bgImage={contactImg.src}/>
        <div className='flex justify-evenly flex-wrap gap-8 items-center my-8 pageMiddle'>
            {services.map((service)=>(
                <div className='w-80 shadow-xl shadow-neutral-900 rounded-md bg-neutral-900 py-3 px-4 text-gray-300'>
                    <div className='flex justify-center bg-neutral-800 p-3 w-fit mx-auto rounded-full'>
                        <MiscellaneousServicesOutlinedIcon className='text-4xl'/>
                    </div>
                    <h3 className='text-2xl text-center mt-4 font-semibold'>{service.title}</h3>
                    <p className='text-base text-center mt-2 font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quasi consectetur tempora sed asperiores perferendis provident animi sint ipsum autem magni, et ab. Expedita eius officiis voluptatibus sint dolores porro!</p>
                </div>
            ))}
            
        </div>
        </> 
     );
}
 
export default Contact;