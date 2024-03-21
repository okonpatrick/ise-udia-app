import React from 'react'
import Aklogo from "../../assets/aklogo.png";
import AriseLogo from "../../assets/image7.png";
import { useNavigate } from "react-router-dom";
import AgentApplicationForm from "./Forms/AgentApplicationForm";

export default function AgentsRegistrationForm() {

    let navigate = useNavigate();

    function AuthenticateAgent(){
        //write your logic to submit the form to the endpoint given
        // use the backend api here
        navigate("/agent/api/authentication?");
    }
  return (
    <div>
        <div className="relative w-screen h-screen bg-[#FBFBEA]">
            <div className="flex p-2">
                <img className=" ml-40 pt-0 w-50px h-52.21px" src={Aklogo} alt="Akwa Ibom State logo" />
                <div className="ml-80 pt-5 text-lg">
                    <span className="mr-10 ml-60 text-[#00621C]"><a href='#store/location'>Store locator</a></span>
                    <span className="mr-20 text-[#00621C]"><a href='#contact'>Contact Support</a></span>
                    <button className="px-8 py-4 rounded-lg bg-[#B0CEB9] text-white" disabled>Apply as an Agent</button>
                </div>
            </div>

            <div className="flex pl-5 text-6xl font-bold mt-10 bg-[#FBFBEA]">
                <div className="pt-5 ml-40 font-bold text-7xl leading-tight bg-[#FBFBEA]">
                <p className='text-lg text-[#00621C] p-3'>Welcome Register as an Agent</p>
                    <p>Akwa Ibom State</p>

                    <p> Subsidy</p>
                    <p className="text-[#FD6502]">   Programme
                    </p>
                    <p className="text-[#00621C] mt-10 text-lg font-normal">
                Akwa Ibom State Governor, Pastor Umo Eno, signed the BulkPurchase Agency <br /> and Assets Management and Maintenance Agency Bills, these is aimed at<br /> reducing the high cost of staple food in the state to cushion the effect of harsh <br />economic realities .
            </p>
           
                </div>
                {/* <img src={AriseLogo} width={400} className="ml-80" /> */}
                <AgentApplicationForm/>
            </div>
            <div className="pb-40 bg-[#FBFBEA]">{" "}</div>
        </div>

   </div>
    );
}
