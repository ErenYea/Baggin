import Intro from "@/components/Intro";
import vendorImg from "../../../public/vendor-submission.jpg";
import VendorSubmissionForm from "@/components/VendorSubmissionForm";

const VendorSubmission = () => {
  return (
    <>
      <Intro title="Vendor Submission" bgImage={vendorImg.src} />
      <div className="grid grid-cols-8 px-8 sm:px-12 lg:px-16 my-8 lg:my-20 gap-8 pageMiddle">
        <div className="col-span-8 lg:col-span-5 justify-self-start">
          <div className="my-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary uppercase lg:text-start text-center">
              How can we help you!
            </h2>
            <p className="mt-2 text-base sm:text-lg text-primary">
              Whether you're planning a corporate gathering, a wedding, or a
              community event, we're here to alleviate the stress of
              coordination and elevate your experience. Our dedicated team of
              experienced event planners is committed to understanding your
              unique requirements, ensuring that every detail aligns with your
              vision. From conceptualization to execution, we offer a
              comprehensive range of services, including meticulous planning,
              creative design, logistical coordination, and post-event analysis.
              Let us be your partners in crafting moments that leave lasting
              impressions. Your event is a reflection of your story, and we're
              here to ensure it's told with perfection.
            </p>
          </div>
          <div className="my-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary uppercase lg:text-start text-center">
              Why a good vendor is necessary for your event.
            </h2>
            <p className="mt-2 text-base sm:text-lg text-primary">
              The selection of a good vendor is paramount for the success of any
              event. A reliable vendor is not just a service provider; they are
              a crucial partner in bringing your vision to life. Their
              competence, professionalism, and commitment significantly impact
              the overall quality of the event. A good vendor contributes not
              only their expertise but also a collaborative spirit that enhances
              the planning and execution phases. From catering and decor to
              technology and logistics, a reliable vendor ensures seamless
              coordination and problem-solving, mitigating potential challenges
              before they arise.
            </p>
          </div>
        </div>
        <div className="col-span-8 lg:col-span-3 justify-self-auto sm:justify-self-center lg:justify-self-start">
          <VendorSubmissionForm />
        </div>
      </div>
    </>
  );
};

export default VendorSubmission;
