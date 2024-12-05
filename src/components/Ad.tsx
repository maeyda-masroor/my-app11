import Image from "next/image";
import Ads from '../public/ad.png';
export default function Ad(){
    return <div className="container mx-auto grid grid-cols-1 items-center p-8 hidden md:grid">
    {/* Left Section: 1/6 */}
    
    {/* Right Section: 5/6 */}
    <div className="col-span-1 flex bg-black text-white p-4">
    <div className='mb-5'>
      <div className='h-20 w-56 gap-10 p-4 text-green-500'>
          <h3 className='pt-3'>categories</h3>
      </div>
      <div className='p-4'>            
      <h1 className='text-7xl mb-3'>Enhance Your Music Experience</h1>
      <div className="flex gap-5 mb-3">
        <div className="rounded-full w-12 h-12  bg-white">
            <p className="p-2 text-black text-[12px]">23 <br/> hours</p>
        </div>
        <div className="rounded-full w-12 h-12  bg-white">
            <p className="p-2 text-black text-[12px]">23 <br/> hours</p>
        </div>
        <div className="rounded-full w-12 h-12  bg-white">
            <p className="p-2 text-black text-[12px]">23 <br/> hours</p>
        </div>
        <div className="rounded-full w-12 h-12  bg-white">
            <p className="p-2 text-black text-[12px]">23 <br/> hours</p>
        </div>
      </div>
      <button className="bg-green-500 w-32 h-11">
        Buy Now
      </button>
      </div>
      </div>
      <Image src={Ads} alt='c'/>
      
    </div>
  </div>

}