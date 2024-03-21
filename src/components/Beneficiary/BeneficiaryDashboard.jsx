import React, { useState, useEffect } from 'react';
import BeneficiaryNavBar from "../Beneficiary/BeneficiaryNavBar";
import calendarIcon from "../../assets/icon.png";

export default function BeneficiaryDashboard() {

  const [isUserName, setUserName] = useState("Iniobong Ekpenyong")


  function DynamicDate() {
    // Define state to hold the current date
    const [currentDate, setCurrentDate] = useState(new Date());
  
    // Update the current date every second
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentDate(new Date());
      }, 1000);
  
      // Clean up the interval when the component unmounts
      return () => clearInterval(interval);
    }, []); // Empty dependency array to run the effect only once when the component mounts
  
    // Format the date as desired (e.g., "Monday, March 20, 2024")
    const options = { day: 'numeric', month: 'long', year: 'numeric'  };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
  
    return (
      <div>
        
       {formattedDate}
      </div>
    );
  }

  return (<>
   <div className='bg-[#FBFBEA]'><BeneficiaryNavBar/>
    </div>
    <div className='bg-[#00621C] relative'style={{ marginTop: "-160px" }}>
    <div className='flex'>
      <p className='text-white text-lg ml-40 pt-5 pb-5'>Dashboard Overview</p>
      <button className='border-lg rounded bg-[#D9E7DD] text-[#00220A] p-2 mt-5 ml-shiftTransactionHisBtn text-2xl'>Transaction History</button>

       </div>
       <p className='ml-20 pl-20 text-white text-3xl'>{isUserName}</p>

      <div className="flex p-8">
        <button className=' flex bg-white rounded-lg border-3xl p-6'> <button className=' bg-[#D9E7DD] rounded-3xl border-3xl p-3'><img src={calendarIcon} alt="Bell icon" /></button> 
       

         <p className='px-2'>
        Today's date </p> {DynamicDate()}
</button>
    </div>
    </div>
  </>
   
  )
}




