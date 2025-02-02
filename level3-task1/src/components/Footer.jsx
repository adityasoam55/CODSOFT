import React from 'react';
import { TfiEmail } from 'react-icons/tfi';
import { GrFacebookOption } from 'react-icons/gr';
import { RxInstagramLogo } from 'react-icons/rx';

function Footer() {
    return (
        <div className="box-border bg-gray-400 text-white text-sm w-full text-center flex flex-col items-center pt-10 pb-2 ">
            <div className="flex items-center flex-col gap-4 px-8 max-md:w-full">
                <span className="text-4xl font-mono font-black mb-1">Join us</span>
                <span className='w-8/12 max-md:w-full pb-2 max-md:font-normal max-md:text-xs'>
                    We will let you know when we have new arrivals, events and promo's don't
                    worry we send them infrequently, just a friendly hi now and
                    again!
                </span>

                <div className='w-7/12 flex justify-center mb-2'>
                    <form action="" className='w-full'>
                        <div className="relative flex items-center">
                            <input
                                className="text-lg bg-gray-400  placeholder:text-white outline-none border-b-2 w-full"
                                type="text"
                                placeholder="Enter your email"
                            />
                            <TfiEmail className="absolute right-0.5 text-lg" />
                        </div>
                    </form>
                </div>

            </div>

            <div className="py-5 flex flex-col gap-3 justify-center items-center max-md:px-8">
                <div className="flex flex-wrap justify-center gap-2.5 max-md:font-normal max-md:text-xs">
                    <a className='max-md:px-2.5 max-md:py-1.5' href="">Contact</a>
                    <a className='max-md:px-2.5 max-md:py-1.5' href="">FAQ</a>
                    <a className='max-md:px-2.5 max-md:py-1.5' href="">Shipping</a>
                    <a className='max-md:px-2.5 max-md:py-1.5' href="">Returns</a>
                    <a className='max-md:px-2.5 max-md:py-1.5' href="">Privacy Policy</a>
                </div>

                <div className='max-md:mt-2.5 max-md:font-normal max-md:text-xs'>
                    © 2025 TryCasuals
                </div>
            </div>
        </div>
    );
}

export default Footer;
