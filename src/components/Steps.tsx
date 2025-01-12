import { GoDiscussionClosed } from "react-icons/go";
import { PiShootingStar } from "react-icons/pi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import Step from "./Step";

const Steps = () => {

  const steps = [
    {
      icon: <GoDiscussionClosed />,
      title: 'Free discovery meeting',
      desc: 'Explain your vision and goals before taking on any risk',
    },
    {
      icon: <PiShootingStar />,
      title: 'Taste your dream',
      desc: 'See a customized sample of your idea and perfect your product',
    },
    {
      icon: <MdOutlineLocalShipping />,
      title: 'Order and receive',
      desc: 'Order the right quantity and save on transportation',
    },
    {
      icon: <FaCamera />,
      title: 'Professional product shots',
      desc: 'Save time and money getting high quality photography and editing done for your product listings and marketing',
    },
    {
      icon: <CiGlobe />,
      title: 'Marketing plan',
      desc: 'Get support in your marketing launch plan ',
    },
  ]

  return (
    <>
      {steps.map((step, index) => {
        return <Step icon={step.icon} title={step.title} desc={step.desc} key={index} />
      })}
    </>
  );
}

export default Steps;