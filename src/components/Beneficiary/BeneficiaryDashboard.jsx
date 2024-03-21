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
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);

    return (
      <div>
        {formattedDate}
      </div>
    );
  }

  return (<>
    <div className='bg-[#FBFBEA]'><BeneficiaryNavBar />
    </div>
    <div className='bg-[#00621C] relative' style={{ marginTop: "-160px" }}>
      <div className='flex'>
        <div>
          
        </div>
        <p className='text-white text-lg ml-40 pt-14'>Dashboard Overview</p>
        <button className='border-lg rounded bg-[#D9E7DD] text-[#00220A] p-3 mt-10 ml-shiftTransactionHisBtn text-2xl'>
          Transaction History</button>
<div>

 <button className='flex ml-10 bg-white rounded-lg border-3xl p-2 mt-8'>
 <button className='flex bg-[#D9E7DD] rounded-3xl p-2'><img src={calendarIcon} alt="Bell icon" /></button>
<div>


<p className='flex pl-3 pr-3'>
              Today's date </p>
          <p className='pl-3 pr-3'>{DynamicDate()}</p> 
</div>
          </button>
</div>
      </div>

      <p className='ml-20 pl-20 text-white text-3xl pb-3'>{isUserName}</p>
      <button className='text-lg border-lg rounded bg-[#D9E7DD] text-[#00220A] pl-3 pr-3 mt-2 m-40 text-2xl'>
        ID Number: 565665565655</button>
        
      
    </div>
    
  </>

  )
}