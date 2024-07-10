import React from 'react'

const ResultList = ({results}) => {

  return (
    <div className={`bg-[#fff] w-[90%] h-max absolute top-12 z-[99999] rounded-md shadow border-2 border-[#D0D0D0] p-3 transition-all`}>
      {results?.data?.length == 0 ? <div className='flex items-center justify-center text-sm font-bold'>Not Found</div> : results?.data?.map((item,index) => (
          <div className='flex items-center gap-2 hover:bg-[#eeeded] p-1 rounded-md transition-all cursor-pointer'key={index}>
              <div className='flex'>
                  <img src={`${process.env.REACT_APP_LOCAL_URL}/${item?.profile_picture_url}`} className='w-[35px] h-[35px] object-cover rounded-full' style={{maxWidth:"none"}} />
              </div>
              <div className='flex flex-col'>
                  <div>{item?.name}</div>
                  {/* <div className='text-xs searchTitleOver w-full' style={{textOverflow: 'ellipsis'}}>
                      {item?.description}
                  </div> */}
               </div>
           </div>
      ))}
    </div>
  )
}

export default ResultList
