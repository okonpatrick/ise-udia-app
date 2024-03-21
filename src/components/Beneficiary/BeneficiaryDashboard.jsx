import React, { useState } from 'react'
import BeneficiaryNavBar from "../Beneficiary/BeneficiaryNavBar";
import calendarIcon from "../../assets/icon.png";

export default function BeneficiaryDashboard() {

  const [isUserName, setUserName] = useState("Iniobong Ekpenyong")

  return (<>
   <div className='bg-[#FBFBEA]'><BeneficiaryNavBar/>
    </div>
    <div className='bg-[#00621C] relative'style={{ marginTop: "-160px" }}>
      <p className='text-white text-lg ml-custom pt-5 pb-5'>Dashboard Overview</p>
     
      <button className='border-lg rounded bg-[#D9E7DD] text-[#00220A] p-2 text-2xl'>Transaction History</button>
      <div className=" p-0">
        <button className='flex bg-white rounded-lg border-3xl p-8'><img className='' src={calendarIcon} alt="Bell icon" />  
         <p className='px-2'>
        Today's date </p> 
</button>
    </div>
{/* <p className='text-white text-3xl'>{isUserName}</p> */}



    </div>
  </>
   
  )
}
