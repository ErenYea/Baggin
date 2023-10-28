import InquiryForm from "@/components/InquiryForm";
import Intro from '@/components/Intro';
import servicesImg from '../../../public/make-an-inquiry.jpg'


const MakeAnInquiry = () => {
    return (
        <>
        <Intro title='Make An Inquiry' bgImage={servicesImg.src}/>
        <div className="grid grid-cols-8 px-16 mb-4 mt-20 gap-8 pageMiddle">
            <div className="col-span-5">
                <div className="my-8">
                    <h2 className="text-2xl font-semibold">LET&apos;S HELP YOU GET STARTED!</h2>
                    <p className="mt-2 text-lg">Are you in need of event management, production, creative services, strategic planning, or any other specialized support for your upcoming event? You&apos;re in the right place. By providing us with some initial details about your event, you can arrange a brief consultation with the team at Endless Events.</p>
                </div>
                <div className="my-8">
                    <h2 className="text-2xl font-semibold">WE&apos;RE HERE TO UNDERSTAND YOU AND YOUR EVENT.</h2>
                    <p className="mt-2 text-lg">Once you&apos;ve submitted your request through this form, you&apos;ll have the opportunity to schedule a discovery call with one of our seasoned event experts. We genuinely want to get to know you, your event&apos;s unique requirements, and your overarching objectives. This ensures that we have a comprehensive understanding of your larger strategy before we present you with a proposal brimming with tailored solutions.</p>
                </div>
            </div>
            <div className="col-span-3">
                <InquiryForm/>
            </div>
        </div>
        </> 
     );
}
 
export default MakeAnInquiry;
