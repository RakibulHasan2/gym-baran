import Image from "next/image";
import pic1 from '../../Images/crucified-pose.png'
import pic2 from '../../Images/dancer-balance-posture-on-one-leg.png'
import pic3 from '../../Images/dancer-motion.png'
import {AiOutlineArrowRight} from 'react-icons/ai';
const WorkoutPlan = () => {
    return (
        <div className="flex border justify-center text-white">
            <div className="p-14 lg:w-4/5  mt-14 " style={{ background: 'linear-gradient(87.05deg, #6462F0 0%, #9190E9 95.5%)', borderRadius: '20px' }}>
                <div className="lg:flex justify-evenly font-bold">
                    <div className="flex lg:mb-0 mb-10">
                        <Image className="mt-4" src={pic1} style={{ height: '55px', backgroundColor: 'rgb(151, 155, 223)', padding: '10px',borderRadius: '10px' }} ></Image>
                        <div className="mx-5  ">
                            <h1 className="mb-4">Get The 11 line <br /> in 30 days</h1>
                            <button className="flex"><small>Learn More</small><AiOutlineArrowRight className="mt-1 ml-5 text-sm"></AiOutlineArrowRight></button>
                        </div>
                    </div>
                    <div className="flex lg:mb-0 mb-10">
                        <Image className="mt-4" src={pic2} style={{ height: '55px',backgroundColor: 'rgb(151, 155, 223)', padding: '10px',borderRadius: '10px' }} ></Image>
                        <div className="mx-5  ">
                            <h1 className="mb-4">Get The 11 line <br /> in 30 days</h1>
                            <button className="flex"><small>Learn More</small> <AiOutlineArrowRight className="mt-1 ml-5 text-sm"></AiOutlineArrowRight></button>
                        </div>
                    </div>
                    <div className="flex">
                        <Image className="mt-4" src={pic3} style={{ height: '55px',backgroundColor: 'rgb(151, 155, 223)', padding: '10px',borderRadius: '10px' }} ></Image>
                        <div className="mx-5  ">
                            <h1 className="mb-4">Get The 11 line <br /> in 30 days</h1>
                            <button className="flex"><small>Learn More</small> <AiOutlineArrowRight className="mt-1 ml-5 text-sm"></AiOutlineArrowRight></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutPlan;