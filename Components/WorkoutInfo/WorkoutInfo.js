import Image from "next/image";
import headerPic from '../../Images/Group 3892.png'
import {AiOutlineArrowRight} from 'react-icons/ai';
const WorkoutInfo = () => {
    return (
        <div className="mt-20 lg:flex lg:flex-row flex flex-col-reverse">
            <Image className="lg:mr-10 " src={headerPic} width={600}></Image>
            <div className="lg:mx-0 mx-10 mb-10">
                <h1 className="text-5xl lg:mt-14">Best Full Body <br /> Workout to lose fat</h1>
                <p className="mt-9 mb-9 lg:w-4/5">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. </p>
                <button className="btn bg-blue-800">Get Started <AiOutlineArrowRight className="ml-5"></AiOutlineArrowRight></button>
            </div>
        </div>
    );
};

export default WorkoutInfo;