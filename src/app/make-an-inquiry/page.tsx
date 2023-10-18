import InquiryForm from "@/components/InquiryForm";


const MakeAnInquiry = () => {
    return ( 
        <div className="grid grid-cols-8 px-16 my-4 gap-8">
            <div className="col-span-5">
                <div className="my-8">
                    <h2 className="text-2xl font-semibold">LET'S HELP YOU GET STARTED!</h2>
                    <p className="mt-2 text-lg">Are you in need of event management, production, creative services, strategic planning, or any other specialized support for your upcoming event? You're in the right place. By providing us with some initial details about your event, you can arrange a brief consultation with the team at Endless Events.</p>
                </div>
                <div className="my-8">
                    <h2 className="text-2xl font-semibold">WE'RE HERE TO UNDERSTAND YOU AND YOUR EVENT.</h2>
                    <p className="mt-2 text-lg">Once you've submitted your request through this form, you'll have the opportunity to schedule a discovery call with one of our seasoned event experts. We genuinely want to get to know you, your event's unique requirements, and your overarching objectives. This ensures that we have a comprehensive understanding of your larger strategy before we present you with a proposal brimming with tailored solutions.</p>
                </div>
            </div>
            <div className="col-span-3">
                <InquiryForm/>
            </div>
        </div>
     );
}
 
export default MakeAnInquiry;