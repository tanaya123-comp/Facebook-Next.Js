import React from 'react'
import Stories from './Stories'
import InputBox from './InputBox'

function Feed() {
    return (
        <div className="flex-grow  pb-44 pt-6 justify-center">
                {/* Stories */}
                <Stories/>

                {/* InputBox */}
                <InputBox/>

                    {/* Posts */}
        </div>
    )
}

export default Feed
