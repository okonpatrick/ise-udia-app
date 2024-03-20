import Aklogo from "../assets/aklogo.png";
import AriseLogo from "../assets/image7.png";
import { useNavigate } from "react-router-dom";

export default function LoginMenu() {
    let navigate = useNavigate();

    function RouteToAgentRegForm(){
        navigate("/agent/registration");
    }

    return (
        <div className="relative w-screen h-screen bg-[#FBFBEA]">
            <div className="flex p-5">
                <img className=" ml-40 pt-5 w-50px h-52.21px" src={Aklogo} alt="Akwa Ibom State logo" />
                <div className="ml-80 pt-10 text-lg">
                    <span className="mr-10 ml-60">Store locator</span>
                    <span className="mr-20">Contact Support</span>
                    <button className="px-8 py-4 rounded-lg bg-[#00621C] text-white">Apply as an Agent</button>
                </div>
            </div>

            <div className="flex pl-5 text-6xl font-bold mt-10">

                <div className="pt-10 ml-40 font-bold text-7xl leading-tight">
                    <p>Akwa Ibom State</p>

                    <p> Subsidy</p>
                    <p className="text-[#FD6502]">   Programme
                    </p>
                    <p className="text-[#00621C] mt-10 text-lg font-normal">
                Akwa Ibom State Governor, Pastor Umo Eno, signed the Bulk<br /> Purchase Agency and Assets Management and Maintenance<br /> Agency Bills, these is aimed at reducing the high cost of staple food in <br />the state to cushion the effect of harsh economic realities .
            </p>
            <button className="font-normal text-sm px-8 py-4 rounded-lg bg-[#FD6502] text-white" onClick={RouteToAgentRegForm}>Log in as an Agent</button>
            <button className="font-normal m-5 text-sm px-8 py-4 rounded-lg bg-[#00621C] text-white">Log in as a Benefeciary</button>

                </div>
                <img src={AriseLogo} width={400} className="ml-60 mb-20" />
                
            </div>
            <div className="pb-40 mb-40 bg-[#FBFBEA]">{" "}</div>
            
        </div>
    );
}
