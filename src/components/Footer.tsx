import Image from "next/image";
import Send from '../public/icon-send.png';
import Qr from '../public/Qrcode 1.png';
import Google from '../public/GooglePlay.png';
import App from '../public/download-appstore.png';
import facebook from '../public/Icon-Facebook.png';
import Linkedin from '../public/Icon-Linkedin.png';
import Twitter from '../public/Icon-Twitter.png';
import Instagram from '../public/icon-instagram.png';
export default function Footer(){
    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 bg-black">
    <div className=" text-white p-4 rounded">
        <div className="text-white">
        Exclusive
        </div>
        <div className="text-white">
        Subscribe 
        </div>
        <div className="text-white">
        Get 10% off your first order 
        </div>
        <div className="flex items-center border border-gray-300 rounded-md p-2">
    <span className="material-icons text-gray-400">
        <Image src={Send} alt='c'/>
    </span>
    <input 
        type="text" 
        placeholder="Search..." 
        className="flex-grow outline-none px-2 text-gray-700"
    />
    </div>
    </div>
    <div className=" text-white p-4 rounded">
        <div className="text-white">
        Support
        </div>
        <div className="text-white">
        111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
        </div>
        <div className="text-white">
        exclusive@gmail.com
        </div>
        <div className="text-white">
        +88015-88888-9999
        </div>
    </div>
    <div className=" text-white p-4 rounded">
        <div className="text-white">
        Account
        <ul className="list-none">
            <li>my Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wish list</li>
            <li>SHOP</li>
        </ul>
        </div>
    </div>
    <div className=" text-white p-4 rounded">
    <div className="text-white">
        Quick link
        <ul className="list-none">
            <li>Privacy Policy</li>
            <li>Term of use</li>
            <li>FAQ</li>
            <li>Contact</li>
        </ul>
        </div>
    </div>
    <div className=" text-white p-4 rounded">
        <div className="text-white">
        Download App
        <br/>
        Save $3 with App New User Only
        </div>
        <div className="flex">
            <div className="w-32 h-32">
                <Image src={Qr} alt="C"/>
            </div>
            <div className="w-60 mb-4">
                <Image src={Google} alt="c"/>
                <Image src={App} alt="c"/>
            </div>
        </div>
        <div className="flex">
            <Image src={facebook} alt="C"/>
            <Image src={Instagram} alt="C"/>
            <Image src={Linkedin} alt="C"/>
            <Image src={Twitter} alt="x"/>
        </div>
    </div>
  </div>
  
}