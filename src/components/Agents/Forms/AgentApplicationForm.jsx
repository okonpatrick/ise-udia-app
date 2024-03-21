import React from 'react'
import LessThanIcon from "../../../assets/Vector.png";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function AgentApplicationForm() {
    const [isFirstName, setFirstName] = useState('');
    const [isLastName, setLastName] = useState('');
    const [isBusinessName, setBusinessName] = useState('');
    const [isStoreLocator, setStoreLocator] = useState('');

    // Define state variables to store selected L.G.A and Product
  const [selectedLGA, setSelectedLGA] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  

  // Define arrays containing options for L.G.A and Product
  const LGAs = [
    "Abak",
    "Eastern Obolo",
    "Eket",
    "Esit-Eket",
    "Essien Udim",
    "Etim-Ekpo",
    "Etinan",
    "Ibeno",
    "Ibesikpo-Asutan",
    "Ibiono-Ibom",
    "Ika",
    "Ikono",
    "Ikot Abasi",
    "Ikot Ekpene",
    "Ini",
    "Itu",
    "Mbo",
    "Mkpat-Enin",
    "Nsit-Atai",
    "Nsit-Ibom",
    "Nsit-Ubium",
    "Obot-Akara",
    "Okobo",
    "Onna",
    "Oron",
    "Oruk Anam",
    "Ukanafun",
    "Udung-Uko",
    "Uruan",
    "Urue-Offong/Oruko",
    "Uyo"
  ];
  
  const products = ['Rice', 'Beans', 'Garri', 'Yam'];

    function LessThanFunc() {
        //come back to this
        return (
            alert("no functionality for now!")
        )
    }

    let navigate = useNavigate();

    function AgentSubmissionForm(){
        alert("Your details have been submitted. Please confirm registration in your email and Login!")
        navigate("/");
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
        if (selectedLGA && selectedProduct && isFirstName && isLastName && isBusinessName && isStoreLocator) {
          AgentSubmissionForm(); // Call the submission function if both inputs are selected
        } else {
          alert("Please select all the fields before submitting.");
        }
      }

    return (<>
        <div><section className="">
            <div className="flex flex-col items-center justify-center px-20 py-8 md:h-screen lg:py-0">

                <div className="w-full bg-[#B0CEB9] rounded-3xl shadow" style={{ marginTop: "-220px" }}>
                    <div className="p-6 space-y-4 md:space-y-2 sm:p-6">
                        <button className='bg-white p-3 rounded-lg' onClick={LessThanFunc}><img src={LessThanIcon} /></button>
                        <hr className='text-white bg-white border w-full'></hr>

                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Apply as an agent
                        </h1>
                        <p className='text-sm font-normal'>We believe the best vehicle for such intervention, was to set up<br /> an agency that will do a direct intervention in the market and get <br />staple food items to our people at a reduced price.  </p>
                        <form className="space-y-4 md:space-y-2" action="#">
                            <div className='flex'>
                                <div>
                                    <label htmlFor="text" className="block mb-1 text-sm font-medium text-black dark:text-white">First Name</label>
                                    <input type="text" value={isFirstName} onChange={(e) => setFirstName(e.target.value)} name="email" id="email" className="w-60 bg-white border  text-black sm:text-sm font-normal rounded-2xl focus:ring-white focus:border-white block p-4 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your first name..." required />
                                </div>
                                <div className='pl-4'>
                                    <label htmlFor="text" className="block mb-1  pl-4 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                    <input type="text" value={isLastName} onChange={(e) => setLastName(e.target.value)} name="email" id="email" className="bg-white border w-60 ml-4 text-black sm:text-sm font-normal rounded-2xl focus:ring-white focus:border-white block p-4 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your first name..." required />
                                </div>

                            </div>

                            <div>
                                <label htmlFor="text" className="block mb-1 text-sm font-medium">Business name</label>
                                <input type="text" value={isBusinessName} onChange={(e) => setBusinessName(e.target.value)} name="text" id="password" placeholder="your business name..." className="font-normal bg-white border  text-black sm:text-sm rounded-2xl focus:ring-white focus:border-white block w-full p-4 dark:bg-gray-700 dark:border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 " required />
                            </div>
                            <div>
                                <label htmlFor="text" className="block mb-1 text-sm font-medium text-black">Store Location</label>
                                <input type="text" value={isStoreLocator}  onChange={(e) => setStoreLocator(e.target.value)} name="store-location" id="text" placeholder="your store location..." className=" font-normal bg-white border border-white text-black sm:text-sm rounded-2xl focus:ring-white focus:border-white block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            <div>

<div className="flex">
      <div>
        <label htmlFor="lga" className="block mb-1 text-sm font-medium text-black dark:text-white">L.G.A</label>
        <select
          id="lga"
          className="bg-white w-60 mr-8  border text-black sm:text-sm font-normal rounded-2xl focus:ring-white focus:border-white block p-4 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedLGA}
          onChange={(e) => setSelectedLGA(e.target.value)}
          required
        >
          <option value="">Select L.G.A</option>
          {LGAs.map((lga) => (
            <option key={lga} value={lga}>
              {lga}
            </option>
          ))}
        </select>
      </div>
      <div className="">
        <label htmlFor="product" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product</label>
        <select
          id="product"
          className="bg-white border w-60 text-black sm:text-sm font-normal rounded-2xl focus:ring-white focus:border-white block p-4 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          required
        >
          <option value="">Select Product</option>
          {products.map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </select>
      </div>
    </div>
                            </div>

                            <button type="submit" className="w-full text-white text-lg bg-[#00621C] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleSubmit}>Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </>

    )
}
