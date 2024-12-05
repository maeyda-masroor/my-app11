"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Rect from '../public/Rectangle 18.png';
import StarRating from "./StarRating";
// Props type for Countdown component
interface CountdownProps {
  targetDate: string;
}

// Countdown Component
const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = new Date(targetDate).getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center space-x-4 text-lg font-bold text-gray-800">
      {/* Days */}
      <div className="text-center">
        <div className="text-2xl text-black">{timeLeft.days}</div>
        <div className="text-sm text-black">Days</div>
      </div>
      <span className="text-xl">:</span>
      {/* Hours */}
      <div className="text-center">
        <div className="text-2xl text-black">{timeLeft.hours}</div>
        <div className="text-sm text-black">Hours</div>
      </div>
      <span className="text-xl">:</span>
      {/* Minutes */}
      <div className="text-center">
        <div className="text-2xl text-black">{timeLeft.minutes}</div>
        <div className="text-sm text-black">Minutes</div>
      </div>
      <span className="text-xl">:</span>
      {/* Seconds */}
      <div className="text-center">
        <div className="text-2xl text-black">{timeLeft.seconds}</div>
        <div className="text-sm text-black">Seconds</div>
      </div>
    </div>
  );
};

// Product type
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

// Main Layout Component
const FlashSaleLayout: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Product Data
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

  // Handle navigation
  const handleNext = () => {
    if (currentIndex < products.length - 4) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
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
          <Countdown targetDate="2024-12-31T23:59:59" />
        </div>

        {/* Arrows */}
        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-4 py-2 text-black bg-gray-100 rounded-full ${
              currentIndex === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-gray-600 hover:bg-gray-700"
            }`}
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === products.length - 4}
            className={`px-4 py-2 text-black rounded-full ${
              currentIndex === products.length - 4
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          >
             &gt;
          </button>
        </div>
      </div>

      {/* Third Row: Product Cards */}
      <div className="relative flex-grow p-4 bg-white shadow">
        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Map through the products and display only the ones within the current range */}
          {products.slice(currentIndex, currentIndex + 4).map((product) => (
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
  );
};

export default FlashSaleLayout;
