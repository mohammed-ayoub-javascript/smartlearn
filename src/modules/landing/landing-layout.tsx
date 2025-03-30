import React from 'react'

const LandingLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className=' h-full w-full'>
        {children}
    </div>
  )
}

export default LandingLayout