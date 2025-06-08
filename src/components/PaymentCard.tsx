
import { card } from '../assets'
const PaymentCard = () => {
  return (
    <div className='flex  justify-between w-full px-[10%] pt-16'>
        <div className='flex flex-col gap-y-8'>
            <h1 className='text-5xl font-semibold w-[570px] leading-[160%] text-[#FFFFFF]'>Find a better card deal in few easy steps.</h1>
            <p className='text-lg font-normal leading-[170%] w-[500px] text-[#FFFFFFB2]'>
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            <button className='text-black w-[170px]  h-16 rounded-xl bg-gradient-to-b from-[#DEF9FA]  via-[#9DEDF0] to-[#33BBCF]'>Get Started</button>
        </div>
        <div>
            <img src={card} alt="" className='h-[449px] w-[513px]'/>
        </div>
    </div>
  )
}

export default PaymentCard