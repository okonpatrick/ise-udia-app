import React from 'react'
import LessThanIcon from "../../../assets/Vector.png";

export default function AgentApplicationForm() {
    return (<>
        <div><section className="">
            <div className="flex flex-col items-center justify-center px-40 py-8 md:h-screen lg:py-0">

                <div className="w-full bg-[#B0CEB9] rounded-3xl shadow ">
                    <div className="p-6 space-y-4 md:space-y-3 sm:p-10">
                        <button className='bg-white p-3 rounded-lg'><img src={LessThanIcon}/></button>
                    <hr className='text-white bg-white border font-lg w-full'></hr>

                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Apply as an agent
                        </h1>
                        <p className='text-sm font-normal'>We believe the best vehicle for such intervention, was to set up<br /> an agency that will do a direct intervention in the market and get <br />staple food items to our people at a reduced price.  </p>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div className='flex'>
                                <div>
                                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-black dark:text-white">First Name</label>
                                    <input type="text" name="email" id="email" className="bg-white border  text-black sm:text-sm font-normal rounded-2xl focus:ring-white focus:border-white block p-4 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your first name..." required />
                                </div>
                                <div className='pl-4'>
                                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                    <input type="text" name="email" id="email" className="bg-white border  text-black sm:text-sm font-normal rounded-2xl focus:ring-white focus:border-white block p-4 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your first name..." required />
                                </div>

                            </div>

                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm font-medium">Business name</label>
                                <input type="text" name="text" id="password" placeholder="your business name..." className="font-normal bg-white border  text-black sm:text-sm rounded-2xl focus:ring-white focus:border-white block w-full p-4 dark:bg-gray-700 dark:border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 " required />
                            </div>
                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-black">Store Location</label>
                                <input type="text" name="store-location" id="text" placeholder="your store location..." className=" font-normal bg-white border border-white text-black sm:text-sm rounded-2xl focus:ring-white focus:border-white block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>

                            <div>

                                <div className='flex'>
                                    <div>
                                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-black dark:text-white">L.G.A</label>
                                        <input type="text" name="email" id="email" className="bg-white border  text-black sm:text-sm font-normal rounded-2xl focus:ring-white focus:border-white block p-4 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your L.G.A..." required />
                                    </div>
                                    <div className='pl-4'>
                                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product</label>
                                        <input type="text" name="email" id="email" className="bg-white border  text-black sm:text-sm font-normal rounded-2xl focus:ring-white focus:border-white block p-4 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your product..." required />
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="w-full text-white bg-[#00621C] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </>

    )
}
