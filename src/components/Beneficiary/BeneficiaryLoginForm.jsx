import React from 'react'
import LessThanIcon from "../../assets/Vector.png";
import Aklogo from "../../assets/aklogo.png";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function BeneficiaryLoginForm() {

    const [isIDNumber, setisIDNumber] = useState('');
    const [isPassword, setisPassword] = useState('');
    let navigate = useNavigate();

    function LessThanFunc() {
        //come back to this
        return (
            alert("no functionality for now!")
        )
    }

    function BeneficiaryLoginForm() {
        alert("Welcome back! Your details have been submitted!")
        navigate("/beneficiary/dashboard");
        //write logic to handle submission to database!
        return (
            <>
                <div>Your details have been submitted. Please confirm registration in your email and Login!</div>
            </>
        )
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Check if both L.G.A and Product are selected
        if (isIDNumber && isPassword) {
            BeneficiaryLoginForm(); // Call the submission function if both inputs are selected
        } else {
            alert("Please select all the fields before submitting.");
        }
    }

    return (
        <>
            <div className="relative w-screen h-screen bg-[#FBFBEA]">
                <div className="flex pt-0 pl-5 pb-0">
                    <img className=" ml-40 pt-3 w-50px h-52.21px" src={Aklogo} alt="Akwa Ibom State logo" />
                    <div className="ml-80 pl-40 pt-12 text-lg">
                        <span className="mr-10 ml-60 text-[#00621C]"><a href='store-locator'>Store locator</a></span>
                        <span className="mr-20 text-[#00621C]"><a href='store-locator'>Contact Support</a></span>
                    </div>
                </div>

                <p className='text-center text-[#00621C] text-3xl mt-0'>Welcome Login as Beneficiary</p>

                <div><section className="py-0 mt-0">
                    <div className="flex flex-col items-center justify-center px-10 py-2 md:h-screen lg:py-0">
                        <div className="bg-[#B0CEB9] rounded-3xl shadow" style={{ marginTop: "-160px" }}>
                            <div className="p-6 space-y-4 md:space-y-3 sm:p-10">
                                <button className='bg-white p-3 rounded-lg' onClick={LessThanFunc}><img src={LessThanIcon} /></button>
                                <hr className='text-white bg-white border w-full'></hr>

                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Login as a Beneficiary
                                </h1>
                                <p className='text-sm font-normal'>We believe the best vehicle for such intervention, was to set up<br /> an agency that will do a direct intervention in the market and get <br />staple food items to our people at a reduced price.  </p>
                                <form className="space-y-4 md:space-y-6" action="#">

                                    <div>
                                        <label htmlFor="text" className="block mb-2 text-sm font-medium">Identification Number</label>
                                        <input type="number" value={isIDNumber} onChange={(e) => setisIDNumber(e.target.value)} name="text" id="password" placeholder="your login ID..." className="font-normal bg-white border  text-black sm:text-sm rounded-2xl focus:ring-white focus:border-white block w-full p-4 dark:bg-gray-700 dark:border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 " required />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-black">Password</label>
                                        <input type="password" value={isPassword} onChange={(e) => setisPassword(e.target.value)} name="store-location" id="text" placeholder="your password..." className=" font-normal bg-white border border-white text-black sm:text-sm rounded-2xl focus:ring-white focus:border-white block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div>
                                    </div>

                                    <button type="submit" className="w-full text-white text-lg bg-[#00621C] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleSubmit}>Login</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </div>
        </>
    )
}