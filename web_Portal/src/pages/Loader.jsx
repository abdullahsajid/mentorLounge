import React from 'react'
import { Oval } from 'react-loader-spinner'
const Loader = () => {
    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <Oval
                height={30}
                width='100%'
                color="#743C95"
                secondaryColor="rgb(120, 86, 255)"
                strokeWidth={3}
            />
        </div>
    )
}

export default Loader
