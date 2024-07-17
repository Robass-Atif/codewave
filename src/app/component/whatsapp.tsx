
import React from 'react'
import Image from 'next/image'
function whatsapp() {
    return (
        <div>

            <div className="fixed right-5 bottom-10">

                <a href="https://wa.me/93266150854" target="_blank" rel="noopener noreferrer">
                    <Image src="/whatsapp.png" alt="whatsapp" width={100} height={100} />
                </a>
            </div>


        </div>
    )
}

export default whatsapp;
