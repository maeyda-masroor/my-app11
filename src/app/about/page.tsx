import Image from "next/image";
import About1 from '../../public/about.png';
import S1 from '../../public/s1.png';
import S2 from '../../public/s2.png';
import S3 from '../../public/s3.png';
import S4 from '../../public/s4.png';
import P1 from '../../public/pr1.png';
import facebook from '../../public/Icon-Facebook.png';
import linkedin from '../../public/Icon-Linkedin.png';
import Features from "@/components/Features";
export default function About(){
    return <div className="p-10"><nav className="flex text-sm font-medium">
    <ol className="flex space-x-2">
        <li>
        <a href="#" className="text-blue-600 hover:text-blue-800">Home</a>
        </li>
        <li>
        <span className="text-gray-500">/</span>
        </li>
        <li>
        <a href="#" className="text-blue-600 hover:text-blue-800">About</a>
        </li>
    </ol>
    </nav>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    <div className=" text-white p-4 justify-center mt-20">
      <h1 className="text-7xl text-black">
      Our Story
      </h1>
      <p className="text-black">
      Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
      </p>
      <p className="text-black">
      Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
      </p>
    </div>
    <div className="text-white p-10">
    <Image src={About1} alt="c"/>
    </div>
    </div>
    <div className="grid lg:grid-cols-4 gap-2 sm:grid-cols-1 p-8">
  <div className="bg-white border-2 border-gray-400 p-4 h-48 w-48 place-items-center">
    <Image src={S1} alt="c"/>
    <h1 className="text-3xl text-black">10.5k </h1>
    <p className="text-black text-1xl">Sallers active our site</p>
  </div>
  <div className="bg-white border-2 border-gray-400 p-4 h-48 w-48 place-items-center">
  <Image src={S1} alt="c"/>
    <h1 className="text-3xl text-black">10.5k </h1>
    <p className="text-black text-1xl">Sallers active our site</p>

  </div>
  <div className="bg-white border-2 border-gray-400 p-4 h-48 w-48 place-items-center">
  <Image src={S1} alt="c"/>
    <h1 className="text-3xl text-black">10.5k </h1>
    <p className="text-black text-1xl">Sallers active our site</p>
 
  </div>
  <div className="bg-white border-2 border-gray-400 p-4 h-48 w-48 place-items-center">
  <Image src={S1} alt="c"/>
    <h1 className="text-3xl text-black">10.5k </h1>
    <p className="text-black text-1xl">Sallers active our site</p>

  </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pl-40 pr-40">
    <div className="bg-white p-4 place-items-start text-black">
        <Image src={P1} alt="c"/>
    <h2 className="font-bold">Will Smith</h2>
      <p>Product Designer</p>
      <div className="flex bg-red-500">
        <Image src={facebook} alt="c"/>
        <Image src={linkedin} alt="c"/>
      </div>
    </div>
    <div className="bg-white p-4 place-items-start text-black">
        <Image src={P1} alt="c"/>
    <h2 className="font-bold">Will Smith</h2>
      <p>Product Designer</p>
      <div className="flex bg-red-500">
        <Image src={facebook} alt="c"/>
        <Image src={linkedin} alt="c"/>
      </div>
    </div>
    <div className="bg-white p-4 place-items-start text-black">
        <Image src={P1} alt="c"/>
    <h2 className="font-bold">Will Smith</h2>
      <p>Product Designer</p>
      <div className="flex bg-red-500">
        <Image src={facebook} alt="c"/>
        <Image src={linkedin} alt="c"/>
      </div>
    </div>
   </div>
   <Features/>
</div>
}