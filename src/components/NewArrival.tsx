import Image from "next/image";
import Rect from "../public/Rectangle 18.png";
import NA1 from '../public/na1.png'
import Na2 from '../public/na2.png';
import NA3 from '../public/na3.png';
import NA4 from '../public/na4.png';
export default function NewArrival(){
    return <div className="flex flex-col bg-white p-12">
    {/* First Row */}
    <div className="flex  p-4 bg-white gap-3">
      <Image src={Rect} alt="x"/>
      <h1 className="text-2xl font-bold text-red-500">Today's</h1>
    </div>
    {/* Second Row */}
    <div className="lg:flex lg:items-center lg:justify-between p-6 bg-white shadow-md sm:flex-row">
      {/* Flash Sale and Countdown */}
      <div className="flex gap-2">
        <h2 className="text-4xl font-semibold text-black">Flash Sales</h2>
    </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-black p-4 relative">
    <Image src={NA1} alt="C"/>
    <div className="relative bottom-0 left-0 w-full bg-black bg-opacity-60 p-4">
    <h1 className="text-white text-lg font-medium">Play Station</h1>
    <p className="text-white">Black and White version of the PS5 coming out on sale.</p>
    <button className="text-white">Shop Now</button>
  </div>
    </div>
     <div className="p-4 grid grid-rows-2 gap-4">
    <div className="bg-black">
      <Image src={Na2} alt="c"/>
      <div className="relative bottom-0 left-0 w-full bg-black bg-opacity-60 p-4">
        <h1 className="text-white text-lg font-medium">Women’s Collections</h1>
        <p className="text-white">Featured woman collections that give you another vibe..</p>
        <button className="text-white">Shop Now</button>
    </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-black p-4">
        <Image src={NA3} alt="c"/>
        <div className="relative bottom-0 left-0 w-full bg-black bg-opacity-60 p-4">
        <h1 className="text-white text-lg font-medium">Women’s Collections</h1>
        <p className="text-white">Featured woman collections that give you another vibe..</p>
        <button className="text-white">Shop Now</button>
    </div>
      </div>
      <div className="bg-black p-4">
        <Image src={NA4} alt="XC"/>
        <div className="relative bottom-0 left-0 w-full bg-black bg-opacity-60 p-4">
        <h1 className="text-white text-lg font-medium">Women’s Collections</h1>
        <p className="text-white">Featured woman collections that give you another vibe..</p>
        <button className="text-white">Shop Now</button>
    </div>
      </div>
    </div>
  </div>
</div>

    </div>

}