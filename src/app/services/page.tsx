import Intro from '@/components/Intro';
import servicesImg from '../../../public/services.jpg'
import MiscellaneousServicesOutlinedIcon from '@mui/icons-material/MiscellaneousServicesOutlined';

const services = [
    {title:'DJ'},
    {title:'MC'},
    {title:'Full Lighting Production'},
    {title:'Cloud/Fog Effect'},
    {title:'Tall Mirror Photobooth'},
    {title:'360 Video Booth'},
    {title:'Cold Indoor Sparkler Fountain Effect'},
    {title:'Dancefloor & Customised Dancefloor Vinyl Wrap'},
    {title:'Customised Backdrop + Balloonist'},
    {title:'Piping and Draping'},
    {title:'Confetti'},   
    {title: 'LED Screen Display'},
    {title:'Custom Builds'}
]

const Services = () => {
    return (
        <>
        <Intro title='Our Services' bgImage={servicesImg.src}/>
        <div className='flex justify-evenly flex-wrap gap-8 items-center my-8'>
            {services.map((service)=>(
                <div className='w-80 shadowl-xl rounded-md bg-white py-3 px-4 text-slate-900'>
                <div className='flex justify-center bg-slate-900 p-3 text-white w-fit mx-auto rounded-full'>
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
 
export default Services;