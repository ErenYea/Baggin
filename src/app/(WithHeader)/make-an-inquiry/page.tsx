import InquiryForm from "@/components/InquiryForm";
import Intro from "@/components/Intro";
import servicesImg from "../../../../public/make-an-inquiry.jpg";

const MakeAnInquiry = () => {
  return (
    <>
      <Intro title="Make An Inquiry" bgImage={servicesImg.src} />
      <div className="grid grid-cols-8 px-8 sm:px-12 lg:px-16 my-8 lg:my-20 gap-8 pageMiddle">
        <div className="col-span-8 lg:col-span-5">
          <div className="my-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary uppercase lg:text-start text-center">
              LET&apos;S HELP YOU GET STARTED!
            </h2>
            <p className="mt-2 text-base sm:text-lg text-primary">
              Are you in need of event management, production, creative
              services, strategic planning, or any other specialized support for
              your upcoming event? You&apos;re in the right place. By providing
              us with some initial details about your event, you can arrange a
              brief consultation with the team at Endless Events.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary uppercase lg:text-start text-center">
              WE&apos;RE HERE TO UNDERSTAND YOU AND YOUR EVENT.
            </h2>
            <p className="mt-2 text-base sm:text-lg text-primary">
              Once you&apos;ve submitted your request through this form,
              you&apos;ll have the opportunity to schedule a discovery call with
              one of our seasoned event experts. We genuinely want to get to
              know you, your event&apos;s unique requirements, and your
              overarching objectives. This ensures that we have a comprehensive
              understanding of your larger strategy before we present you with a
              proposal brimming with tailored solutions.
            </p>
          </div>
        </div>
        <div className="col-span-8 lg:col-span-3 justify-self-auto sm:justify-self-center lg:justify-self-start">
          <InquiryForm />
        </div>
      </div>
    </>
  );
};

export default MakeAnInquiry;
