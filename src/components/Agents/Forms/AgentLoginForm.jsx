import React from 'react'
import LessThanIcon from "../../../assets/Vector.png";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function AgentLoginForm() {
    const [isIDNumber, setisIDNumber] = useState('');
    const [isPassword, setisPassword] = useState('');

    function LessThanFunc() {
        //come back to this
        return (
            alert("no functionality for now!")
        )
    }

    let navigate = useNavigate();

    function AgentSubmissionLoginForm() {
        alert("Your details have been submitted. Please confirm registration in your email and Login!")
        navigate("/agent/dashboard");
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
            AgentSubmissionLoginForm(); // Call the submission function if both inputs are selected
        } else {
            alert("Please select all the fields before submitting.");
        }
    }

    return (<>
        <div><section className=""style={{ marginTop: "-60px" }}>
            <div className="flex flex-col items-center justify-center px-20 py-8 md:h-screen lg:py-0">

                <div className="w-full bg-[#B0CEB9] rounded-3xl shadow ">
                    <div className="p-6 space-y-4 md:space-y-3 sm:p-10">
                        <button className='bg-white p-3 rounded-lg' onClick={LessThanFunc}><img src={LessThanIcon} /></button>
                        <hr className='text-white bg-white border w-full'></hr>

                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login as an agent
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
    </>

    )
}
