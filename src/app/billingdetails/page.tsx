"use client"
import { useState } from "react";
import Image from "next/image";
import Bkash from '../../public/Bkash.png';
type CartItem = {
  id: number;
  name: string;
  price: number;
  image:string
};
const Billing_details: React.FC = () => {
  
  // Function to handle quantity change
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Item 1", price: 10 ,image: "https://via.placeholder.com/150"},
    { id: 2, name: "Item 2", price: 15  ,image: "https://via.placeholder.com/150" },
    { id: 3, name: "Item 3", price: 20  ,image: "https://via.placeholder.com/150"},
  ]);

  // Handle quantity change
  const calculateSubtotal = (): number => {
    return cartItems.reduce(
      (total, item) => total + item.price,
      0
    );
  };

    return <div><nav className="flex text-sm font-medium">
    <ol className="flex space-x-2">
        <li>
        <a href="#" className="text-blue-600 hover:text-blue-800">Account</a>
        </li>
        <li>
        <span className="text-gray-500">/</span>
        </li>
        <li>
        <a href="#" className="text-blue-600 hover:text-blue-800">My Account</a>
        </li>
        <li>
        <span className="text-gray-500">/</span>
        </li>
        <li>
        <a href="#" className="text-blue-600 hover:text-blue-800">Product</a>
        </li>
        <li>
        <span className="text-gray-500">/</span>
        </li>
        <li>
        <a href="#" className="text-blue-600 hover:text-blue-800">View Cart</a>
        </li>
        <li>
        <span className="text-gray-500">/</span>
        </li>
        <li>
        <a href="#" className="text-blue-600 hover:text-blue-800">Check out</a>
        </li>
    </ol>
    </nav>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 p-10">
    <div className="bg-white p-4 text-black">
    <div>
    <label htmlFor="input5" className="block">Label 5</label>
    <input id="input5" type="text" className="border p-2 w-full"/>
  </div>
  <div>
    <label htmlFor="input6" className="block">Label 6</label>
    <input id="input6" type="text" className="border p-2 w-full"/>
  </div>
  <div>
    <label htmlFor="input7" className="block">Label 7</label>
    <input id="input7" type="text" className="border p-2 w-full"/>
  </div>
  <div>
    <label htmlFor="input5" className="block">Label 5</label>
    <input id="input5" type="text" className="border p-2 w-full"/>
  </div>
  <div>
    <label htmlFor="input6" className="block">Label 6</label>
    <input id="input6" type="text" className="border p-2 w-full"/>
  </div>
  <div>
    <label htmlFor="input7" className="block">Label 7</label>
    <input id="input7" type="text" className="border p-2 w-full"/>
  </div>
    </div>
    <div className="p-4">
    <div className="p-6 max-w-4xl mx-auto text-black">
      
      {/* Responsive Table for Desktop */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="table-auto w-full border-collapse border">
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="px-4 py-2"><Image src={item.image} alt="x" width={50} height={50}/></td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">
                  ${item.price.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table-auto w-full border-collapse border">
          <tbody>
            <tr className="row-span-2">
              <td className="px-4 py-1 col-span-2">
                  Sub Total
              </td>
              <td className="px-4 py-1">
              ${calculateSubtotal().toFixed(2)}
              </td>
            </tr>
            <tr className="row-span-2">
              <td className="px-4 py-1 col-span-2">
                  Shipping
              </td>
              <td className="px-4 py-1">
                Free
              </td>
            </tr>
            <tr className="row-span-2">
              <td className="px-4 py-1 col-span-2">
                  Total
              </td>
              <td className="px-4 py-1">
              ${calculateSubtotal().toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex gap-11">
        <div className="p-4 border rounded-md">
  <div className="space-y-2">
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="plan"
        value="basic"
        className="w-4 h-4 text-blue-600  focus:ring-blue-500 focus:ring-2"
      />
      <span>Bank</span>
    </label>
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="plan"
        value="premium"
        className="w-4 h-4 text-blue-600 bg-gray-100  focus:ring-blue-500 focus:ring-2"
      />
      <span>Cash on Delivery</span>
    </label>
    </div>
    </div>
      <Image src={Bkash} alt="c" width={50} height={20}/>
      <Image src={Bkash} alt="c" width={50} height={20}/>
      <Image src={Bkash} alt="c" width={50} height={20}/>
      <Image src={Bkash} alt="c" width={50} height={20}/>
      <Image src={Bkash} alt="c" width={50} height={20}/>
    </div>
    <div className="flex mt-6 gap-2">
      <input type="text" className="w-32 h-10 border-collapse"/>
      <button className="w-32 h-10 bg-red-500">Apply Coupons</button>
    </div>
    <button className="w-32 h-10 bg-red-500 mt-6">Place Order</button>
    </div>
    {/* Responsive List for Mobile */}
      <div className="block sm:hidden space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-4 rounded-lg shadow"
          >
            <div>
              <Image src={item.image} alt="C" width={50} height={50}/>
              <p className="font-bold">{item.name}</p>
              <p className="text-sm text-gray-500">
                Price: ${item.price.toFixed(2)}
              </p>
            </div>
           </div>     
        ))}
        <div
            className="flex justify-between items-center border p-4 rounded-lg shadow"
          >
            <div>
              <p className="font-bold">Sub total</p>
              <p className="text-sm text-gray-500">
                ${calculateSubtotal().toFixed(2)}
              </p>
            </div>
            <div>
              <p className="font-bold">Shipping</p>
              <p className="text-sm text-gray-500">
                Freee
              </p>
            </div>
            <div>
              <p className="font-bold">Total</p>
              <p className="text-sm text-gray-500">
                ${calculateSubtotal().toFixed(2)}
              </p>
            </div>
           </div>  
      </div>


</div>
</div>
</div>
</div>
}
export default Billing_details;