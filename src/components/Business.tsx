import React from 'react'
import { star,shield,send } from '../assets'
const Business = () => {
  return (
    <div className='flex w-[80%] pl-[10%] '>
        <div className='w-1/2'>
            <h1 className='text-5xl font-semibold leading-[160%]'>You do the business, we’ll handle the money.</h1>
            <p className='text-lg font-normal leading-[170%] text-[#FFFFFFB2] '>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            <button className='text-lg leading-[150%] font-medium bg-gradient-to-bl  from-[#cbf5f6]  to-[#33BBCF] h-16 w-40 text-center rounded-2xl text-black mt-14'>Get Started</button>
        </div>
        <div className='flex flex-col '>
            <div>
                <img src={star} alt="" />
                <div>
                    <h1>Rewards</h1>
                    <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                </div>
            </div>
            <div>
                <img src={shield} alt="" />
                <div>
                    <h1>100% Secured</h1>
                    <p>We take proactive steps make sure your information and transactions are secure.</p>
                </div>
            </div>
            <div>
                <img src={send} alt="" />
                <div>
                    <h1>Balance Transfer</h1>
                    <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
                </div>
            </div>
        </div>
        <div>
            hii
        </div>
    </div>
  )
}

export default Business