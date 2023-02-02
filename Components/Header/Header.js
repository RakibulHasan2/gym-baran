import Image from "next/image";
import headerPic from '../../Images/Group 4227.png'
import logo1 from '../../Images/Mask Group (3).png'
import logo2 from '../../Images/Mask Group (2).png'
import logo3 from '../../Images/Mask Group.png'
import logo4 from '../../Images/Mask Group (1).png'
import { BsFillArrowRightCircleFill} from 'react-icons/bs';
import { AiFillPlayCircle} from 'react-icons/ai';
const Header = () => {
    return (
        <div className=" lg:flex justify-center mt-8">
            <div className="lg:w-96 mx-auto lg:p-0 p-8">
                <h1 className="font-bold" style={{ fontSize: '45px' }}>Healthy in side <br /> <span style={{ color: '#6765F0' }}>fresh</span> out side</h1>
                <p className="mt-9">Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
                <div className="flex mt-4">
                    <button className="btn">Get Started <BsFillArrowRightCircleFill className="ml-4"></BsFillArrowRightCircleFill> </button>
                    <button className="btn hover:bg-sky-200 bg-slate-100 text-blue-800  mx-7"><AiFillPlayCircle className="mr-4 text-xl"></AiFillPlayCircle> Learn More</button>
                </div>
                <p className="mt-10">Brands: </p>
                <div className="flex p-5">
                    <Image src={logo1} width={58}  alt=""></Image>
                    <Image className="mx-3" src={logo2} width={58}  alt=""></Image>
                    <Image className="mx-3" src={logo3} width={58}  alt=""></Image>
                    <Image className="mx-5" src={logo4} width={78}  alt=""></Image>
                </div>
            </div>
            <Image className="lg:mr-10 " src={headerPic} width={600}></Image>
        </div>
    );
};

export default Header;