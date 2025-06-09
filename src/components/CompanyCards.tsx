// import React from 'react'
import { airbnb,binance,coinbase,dropbox } from '../assets'
const CompanyCards = () => {
  return (
    <div className='w-full px-[10%] flex items-center justify-evenly mb-10 '>
        <img src={airbnb} alt="" className='h-[32px] w-1/4 object-contain' />
        <img src={binance} alt="" className='h-[32px] w-1/4 object-contain'/>
        <img src={coinbase} alt="" className='h-[32px] w-1/4 object-contain'/>
        <img src={dropbox} alt="" className='h-[32px] w-1/4 object-contain'/>
    </div>
  )
}

export default CompanyCards
