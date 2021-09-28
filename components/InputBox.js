import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/client'

function InputBox() {

    const session=useSession();
    console.log(session);

    const sendPost=(e)=>{

    }


    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image
                src={session[0].user.image}
                height={40}
                width={40}
                layout="fixed"
                />

                <form className="flex flex-1">
                    <input
                    className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                    type="text"
                    placeholder={`What's on your mind, ${session[0].user.name} ?`}
                    />

                    <button onClick={sendPost} type="submit">submit</button>

                </form>


            </div>
        </div>
    )
}

export default InputBox
