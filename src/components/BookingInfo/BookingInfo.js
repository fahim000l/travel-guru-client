import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookingInfo = () => {
    const placeInfo = useLoaderData();
    const { name, details } = placeInfo;
    return (
        <div className='lg:flex items-center'>
            <div className='flex mt-[10%] lg:w-[40%] w-[90%] mx-auto'>
                <div className='text-white lg:ml-[150px] lg:mr-[50px] text-start'>
                    <div className='font-bold text-5xl'>
                        {name}
                    </div>
                    <div>
                        {details}
                    </div>
                </div>
            </div>
            <div className='lg:w-[60%] mt-10 lg:mt-0 mx-auto flex items-center justify-center text-black'>
                <div className='bg-white p-5 lg:w-[50%] w-[90%] rounded-lg'>
                    <div className='mt-5 text-start'>
                        <label className='text-xl mb-2 block' htmlFor="origin">Origin</label>
                        <input className='rounded-lg border-2 border-solid border-gray-500 font-bold px-3 py-2 w-full bg-[#F2F2F2]' type="text" name="origin" id="" />
                    </div>
                    <div className='mt-5 text-start'>
                        <label className='text-xl mb-2 block' htmlFor="destination">Destination</label>
                        <input className='rounded-lg border-2 border-solid border-gray-500 font-bold px-3 py-2 w-full bg-[#F2F2F2]' defaultValue={name} readOnly type="text" name="destination" id="" />
                    </div>
                    <div className='lg:flex mt-5 w-full'>
                        <div className='text-start mx-5'>
                            <label className='text-xl mb-2 block' htmlFor="from">From</label>
                            <input className='rounded-lg border-2 border-solid border-gray-500 font-bold px-3 py-2 w-full bg-[#F2F2F2]' type="date" name="destination" id="" />
                        </div>
                        <div className='text-start mx-5'>
                            <label className='text-xl mb-2 block' htmlFor="to">To</label>
                            <input className='rounded-lg border-2 border-solid border-gray-500 font-bold px-3 py-2 w-full bg-[#F2F2F2]' type="date" name="destination" id="" />
                        </div>
                    </div>
                    <div>
                        <button className='bg-[#F9A51A] w-full mt-5 rounded-lg py-5 font-bold text-2xl'>Start booking</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingInfo;