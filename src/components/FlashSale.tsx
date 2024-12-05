import Image from "next/image";
import Rect from '../public/Rectangle 18.png';
export default function FlashSale(){
    return <div className="p-20">
        <div className="flex gap-3">
            <div className="w-3 h-3"><Image src={Rect} alt="x"/></div>
            <div className="text-1xl text-red-500">Today's</div>
        </div>
        <div className="text-6xl flex text-black gap-6">
            <div className="text-4xl ">Flash Sales</div>
            <div className="text-4xl">
            <div className="flex items-center justify-center space-x-4 text-lg font-bold text-gray-800">
      {/* Days */}
      <div className="text-center">
        <div className="text-2xl text-black">01</div>
        <div className="text-sm text-black">Days</div>
      </div>
      <span className="text-xl">:</span>
      {/* Hours */}
      <div className="text-center">
        <div className="text-2xl text-black">15</div>
        <div className="text-sm text-black">Hours</div>
      </div>
      <span className="text-xl">:</span>
      {/* Minutes */}
      <div className="text-center">
        <div className="text-2xl text-black">43</div>
        <div className="text-sm text-black">Minutes</div>
      </div>
      <span className="text-xl">:</span>
      {/* Seconds */}
      <div className="text-center">
        <div className="text-2xl text-black">12</div>
        <div className="text-sm text-black">Seconds</div>
      </div>
    </div> 
            </div>    
        </div>
    </div>
}