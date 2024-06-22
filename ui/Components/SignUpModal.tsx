'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaBell, FaStar } from 'react-icons/fa6'
import { useLinkStore } from './Links/store';
import { FaXing } from 'react-icons/fa';


function SignUpButton() {
    const { setSignUpFormOpen: setIsOpen } = useLinkStore();

    return (
            <div onClick={() => setIsOpen(true)}>
                <div className="text-white text-center w-full font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 bg-black hover:bg-zinc-950 focus:outline-none  border border-zinc-800">
                    <div className="flex mx-auto space-x-2 items-center justify-center">
                        <FaBell />
                        <p className="font-owners font-bold">{'Get Notified!'}</p>{" "}
                    </div>
                </div>
            </div>
    )
}

export default SignUpButton


export function SignUpModal() {
    const { setSignUpFormOpen: setIsOpen } = useLinkStore();

    return (
        <div className='absolute w-screen h-screen z-30 bg-black bg-opacity-90 overscroll-none overflow-hidden'>
            <div onClick={() => setIsOpen(false)} className='static'>
                <div className="text-white text-center w-sm font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 bg-black hover:bg-zinc-950 focus:outline-none  border border-zinc-800">
                    <div className="flex mx-auto space-x-2 items-center justify-center">
                        <FaXing />
                        <p className="font-owners font-bold">{'Close'}</p>{" "}
                    </div>
                </div>
            </div>
            <SignUpForm />
           
        </div>
    )
}
function SignUpForm() {
    return (
        <iframe className='mx-auto h-full w-full top-16 relative overscroll-none overflow-hidden' src="https://cdn.forms-content.sg-form.com/4e1db927-3039-11ef-bd50-d645ce6f8043" />
    )
    
}