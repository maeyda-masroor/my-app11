"use client"
import Image from "next/image";
import P1 from '../../public/p1.png';
import StarRating from "@/components/StarRating";
import wish from '../../public/Wishlist.png';
import De from '../../public/icon-delivery.png';
import Return from '../../public/Icon-return.png';
import Rect from '../../public/Rectangle 18.png';
interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    rating : number;
    discount:string;
    reviewNo:number;
    afterprice:number;
  }
const FlashSaleLayout: React.FC = () => {
    const products: Product[] = [
        { id: 1, name: "Product 1", price: "$25.00", image: "https://via.placeholder.com/150" , rating:4 ,discount:'20%', reviewNo:88,afterprice:12},
        { id: 2, name: "Product 2", price: "$30.00", image: "https://via.placeholder.com/150" ,rating:3 ,discount:'40%',reviewNo:12,afterprice:23},
        { id: 3, name: "Product 3", price: "$20.00", image: "https://via.placeholder.com/150" ,rating:1, discount:'50%',reviewNo:19,afterprice:34},
        { id: 4, name: "Product 4", price: "$15.00", image: "https://via.placeholder.com/150" ,rating:2 ,discount:'20%',reviewNo:20,afterprice:56},
        { id: 5, name: "Product 5", price: "$18.00", image: "https://via.placeholder.com/150" ,rating:1, discount:'10%',reviewNo:12,afterprice:12},
        { id: 6, name: "Product 6", price: "$22.00", image: "https://via.placeholder.com/150" ,rating:3,discount:'10%',reviewNo:12,afterprice:2},
        { id: 7, name: "Product 7", price: "$28.00", image: "https://via.placeholder.com/150" ,rating:5,discount:'10%',reviewNo:12,afterprice:56},
        { id: 8, name: "Product 8", price: "$35.00", image: "https://via.placeholder.com/150" ,rating:3,discount:'10%',reviewNo:12,afterprice:12}
      ];    
    return <div className="p-10">
        <nav className="flex text-sm font-medium">
        <ol className="flex space-x-2">
            <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">Account</a>
            </li>
            <li>
            <span className="text-gray-500">/</span>
            </li>
            <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">Gaming</a>
            </li>
            <li>
            <span className="text-gray-500">/</span>
            </li>
            <li>
            <a href="#" className="text-blue-600 hover:text-blue-800">Havic HV G-92 Gamepad</a>
            </li>
        </ol>
        </nav>
        <div className="grid grid-cols-10 gap-4 text-black p-4 mt-11">
        <div className="col-span-10 lg:col-span-1 lg:block hidden">
            <div className="h-32 w-32 bg-gray-400 m-3">
                <Image src={P1} alt="c"/>
            </div>
            <div className="h-32 w-32 bg-gray-400 m-3">
                <Image src={P1} alt="c"/>
            </div>
            <div className="h-32 w-32 bg-gray-400 m-3">
                <Image src={P1} alt="c"/>
            </div>
            <div className="h-32 w-32 bg-gray-400 m-3">
                <Image src={P1} alt="c"/>
            </div>
        </div>
        <div className="col-span-10 lg:col-span-4 w-96 bg-gray-400 m-3">
            <Image src={P1} alt="C" width={500}/>
        </div>

        <div className="col-span-10 lg:col-span-5">
            <h1 className="text-4xl">Havic HV G-92 Gamepad</h1>
            <div className="flex"><StarRating rating={4}/>
                <p>(150) Reviews<span className="text-green-500">|Instock</span></p>
            </div>
            <h3 className="text-3xl">
            $192.00
            </h3>
            <h4 className="text-2xl">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
            </h4>
            <hr/>
            <div className="flex">
                <h1 className="text-2xl">Colours</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 p-2">
                <div className="w-5 h-5 rounded-full bg-red-500"></div>
                <div className="w-5 h-5 rounded-full bg-blue-500"></div>
            </div>
            </div>
            <div className="flex">
                <h1 className="text-2xl">Size</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-2">
                <div className="w-5 h-5 rounded-md bg-red-500"></div>
                <div className="w-5 h-5 rounded-md bg-blue-500"></div>
                <div className="w-5 h-5 rounded-md bg-red-500"></div>
                <div className="w-5 h-5 rounded-md bg-blue-500"></div>
                <div className="w-5 h-5 rounded-md bg-blue-500"></div>
            </div>

            </div>
            <div className="flex gap-3">
            <div className="grid grid-cols-3  w-64 h-5 mt-6">
            <div className="flex items-center justify-center border border-gray-400  p-2 bg-white">
                <span className="text-2xl font-bold text-red-500">-</span>
            </div>
            
            <div className="flex items-center justify-center border border-gray-400  p-2 bg-white">
                <span className="text-2xl font-bold text-red-500">0</span>
            </div>
            <div className="flex items-center justify-center border border-gray-400 p-2 bg-red-500">
                <span className="text-2xl font-bold text-white">+</span>
            </div>
            </div>
            <div className="w-64 bg-red-500 mt-6 p-4 h-12 text-2xl">
                Buy Now
            </div>
            <div className="w-12 h-12 mt-6 p-1 border-2 border-gray-400">
                <Image src={wish} alt="c" width={50} height={50}/>
            </div>
            </div>
            <div className="w-96 mt-6">
                <div className="border-2 border-gray-400 flex">
                    <Image src={De} alt="c" />
                    <div className="text-black">
                        <h1>Free Delivery</h1>
                        <p>Enter your postal code for Delivery Availability</p>
                    </div>
                </div>
                <div className="border-2 border-gray-400 flex">
                    <Image src={Return} alt="c" />
                    <div className="text-black">
                        <h1>Return Delivery</h1>
                        <p>Free 30 Days Delivery Returns. Details</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="flex flex-col bg-white p-12">
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

        {/* Arrows */}
        </div>
      </div>

      {/* Third Row: Product Cards */}
      <div className="relative flex-grow p-4 bg-white shadow">
        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Map through the products and display only the ones within the current range */}
          {products.map((product) => (
            <div key={product.id} className="p-4 bg-gray-100 rounded shadow w-[270px] h-[350px]">
              <div className="bg-red-600 w-10 h-5 m-2">{product.discount}</div>  
              <img
                src={product.image}
                alt={product.name}
                className="w-[200px] h-[200px] object-cover rounded p-2"
              />
              <h3 className="mt-2 text-md font-semibold text-gray-700">{product.name}</h3>
              <p className="text-gray-500">{product.price}<del className="text-gray-500 ">{product.afterprice}</del></p>
              <div className="flex"><StarRating rating={product.rating}/><p className="text-black">({product.reviewNo})</p></div>
            </div>
          ))}
        </div>
      </div>
      <center><button className="bg-red-600 w-40 mt-4">View All Products</button></center>
    </div>
}
export default FlashSaleLayout;