import React, { useState } from 'react'

export default function TotalNumberComponent() {
    const [agentNumber, setagentNumber] = useState("3480");
    const [beneficiaryNumber, setbeneficiaryNumber] = useState("3480")
    const [wardNumber, setwardNumber] = useState("3480")
    const [storeNumber, setstoreNumber] = useState("3480")

  return (
    <div className='mt-20'>
       <div className='bg-[#00621C] relative w-300 h-300 flex p-8'>
        <div className='ml-20 px-20 text-white text-center'>
        Totol Number <br/>of Agents <br/><p className='text-2xl font-bold'>{agentNumber} </p>
        </div>
        <div className='ml-40 pl-5 text-white'>
        Totol Number <br/>of Beneficiary <br/><p className='text-2xl font-bold'>{agentNumber} </p>
        </div>
        <div className='ml-40 pl-5 text-white'>
        Totol Number <br/>of Wards <br/><p className='text-2xl font-bold'>{agentNumber} </p>
        </div>
        <div className='ml-40 pl-5 text-white'>
        Totol Number <br/>of Stores <br/><p className='text-2xl font-bold'>{agentNumber} </p>
        </div>
        <div className='ml-40 pl-5 text-white'>
        Totol Number <br/>of Agents <br/><p className='text-2xl font-bold'>{agentNumber} </p>
        </div>
 
    </div>

    </div>
   
  )
}