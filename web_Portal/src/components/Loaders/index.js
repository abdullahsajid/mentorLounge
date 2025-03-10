import React from 'react'
import { Oval } from 'react-loader-spinner'
const Loaders = (props) => {
  return (
    <div className={`${props.sty}`}>
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

export default Loaders
