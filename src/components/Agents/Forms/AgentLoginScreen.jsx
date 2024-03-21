import React from 'react'
import Aklogo from "../../../assets/aklogo.png";
import AriseLogo from "../../../assets/image7.png";
import AgentLoginForm from './AgentLoginForm';

export default function AgentLoginScreen() {
  return (
    <div>
        <div className="relative w-screen h-screen bg-[#FBFBEA]">
            <div className="flex p-5">
                <img className=" ml-40 pt-1 w-50px h-52.21px" src={Aklogo} alt="Akwa Ibom State logo" />
                <div className="ml-80 pt-6 text-lg">
                    <span className="mr-10 ml-60 text-[#00621C]"><a href='#store/location'>Store locator</a></span>
                    <span className="mr-20 text-[#00621C]"><a href='#contact'>Contact Support</a></span>
                    <button className="px-8 py-4 rounded-lg bg-[#B0CEB9] text-white" disabled>Apply as an Agent</button>
                </div>
            </div>

            <div className="flex pl-5 text-6xl font-bold mt-2 bg-[#FBFBEA]">
                <div className="pt-10 ml-40 font-bold text-7xl leading-tight bg-[#FBFBEA]">
                <p className='text-lg text-[#00621C] p-3'>Welcome Login as an Agent</p>
                    <p>Akwa Ibom State</p>

                    <p> Subsidy</p>
                    <p className="text-[#FD6502]">   Programme
                    </p>
                    <p className="text-[#00621C] mt-10 text-lg font-normal">
                Akwa Ibom State Governor, Pastor Umo Eno, signed the BulkPurchase Agency <br /> and Assets Management and Maintenance Agency Bills, these is aimed at<br /> reducing the high cost of staple food in the state to cushion the effect of harsh <br />economic realities.
            </p>
           
                </div>
                {/* <img src={AriseLogo} width={400} className="ml-80" /> */}
                <AgentLoginForm/>
            </div>
            <div className="pb-40 bg-[#FBFBEA]">{" "}</div>
        </div>

   </div>
    );
}