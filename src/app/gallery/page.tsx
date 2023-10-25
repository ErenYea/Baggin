import Intro from '@/components/Intro';
import galleryImg from '../../../public/gallery.jpg'

const Gallery = () => {
    return ( 
        <>
        <Intro title='Gallery' bgImage={galleryImg.src}/>
        </>
     );
}
 
export default Gallery;