'use client'
import React from 'react'
import { useLinkStore } from 'ui/Components/Links/store';
import {SignUpModal} from 'ui/Components/SignUpModal'

function Layout({ children }: { children: React.ReactNode }) {
    const { song, signUpFormOpen } = useLinkStore();

    return (
        <div>
            {signUpFormOpen &&
            <div className={signUpFormOpen ? `overscroll-none w-screen h-96 absolute z-30 left-0 right-0 top-0` : ``}>
                <SignUpModal />
            </div>}
            {children}
        </div>
    )
}

export default Layout