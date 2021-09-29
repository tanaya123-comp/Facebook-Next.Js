import React from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/client'
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid"
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { useRef } from 'react'
import {db} from '../firebase'

function InputBox() {

    const session=useSession();
    console.log(session);
    const inputRef=useRef(null);

    const sendPost=(e)=>{

        e.preventDefault();

        if(!inputRef.current.value) return;

        db.collection('posts').add({
            message:inputRef.current.value,
            name:session[0].user.name,
            email:session[0].user.email,
            image:session[0].user.image,
            timestamp:firebase.firestore.FieldValue.serverTimestamp()
        })

        inputRef.current.value="";


    }


    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6 mr-10">
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
                    ref={inputRef}
                    placeholder={`What's on your mind, ${session[0].user.name} ?`}
                    />

                    <button hidden onClick={sendPost} type="submit">submit</button>

                </form>


            </div>

            <div className="flex justify-evenly p-3 border-t">

                <div className="inputIcon">
                <VideoCameraIcon className="h-7 text-red-500" />
                <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>

                <div className="inputIcon">
                <CameraIcon className="h-7 text-green-400" />
                <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                </div>

                <div className="inputIcon">
                <EmojiHappyIcon className="h-7 text-yellow-300" />
                <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>

            </div>

        </div>
    )
}

export default InputBox
