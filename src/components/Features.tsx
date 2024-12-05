import Image from "next/image";
import S1 from '../public/s1.png';
import S2 from '../public/s2.png';
import S3 from '../public/s3.png';
export default function Features(){
    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pl-40 pr-40">
    
    <div className="bg-white p-4 place-items-center text-black">
        <Image src={S1} alt="c"/>
    <h2 className="font-bold">FREE AND FAST DELIVERY</h2>
      <p>Free delivery for all orders over $140</p>
    </div>
    <div className="bg-white place-items-center p-4 text-black">
        <Image src={S2} alt="C"/>
      <h2 className="font-bold">24/7 CUSTOMER SERVICE</h2>
      <p>Friendly 24/7 customer support</p>
    </div>
    <div className="bg-white place-items-center p-4 text-black">
        <Image src={S3} alt="C"/>
      <h2 className="font-bold">MONEY BACK GUARANTEE</h2>
      <p>We reurn money within 30 days.</p>
    </div>
  </div>
  
}