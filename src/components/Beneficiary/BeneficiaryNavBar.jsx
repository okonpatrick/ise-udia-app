import React from 'react'
import Aklogo from "../../assets/aklogo.png";
import AriseLogo from "../../assets/image7.png";
import bellIcon from "../../assets/notification-bing.png";
import userIcon from "../../assets/Ellipse.png";

export default function BeneficiaryNavBar() {
  return (
    <>
    <div className='flex mt-2 mb-5 ml-10'>
        <img className='ml-20' src={Aklogo} width={70} alt="Akwa Ibom State logo" />
        <img className='ml-4' src={AriseLogo} width={70} alt="Arise logo" />
        <div className='mr-60'></div>
   <div>
   </div>

   <div className="mt-5 ml-80 pl-80">
        <button className=' bg-[#D9E7DD] rounded-3xl border-3xl ml-40 p-3'><img src={bellIcon} alt="Bell icon" /></button>
    </div>
    <div className='relative'>  
    <button className='border-0 rounded-3xl mt-4 ml-4 p-2'>
        <img src={userIcon} width={40} alt="User icon" />
    </button>
    <button className='bg-green-500 rounded-xl absolute bottom-0 right-2 p-2'>
        
        {/* Green icon or any content you want */}
    </button>
    
</div>
   

<div>  
     
</div>

</div>
<div className='bg-[#FBFBEA] p-20'></div>
</>

  )
}