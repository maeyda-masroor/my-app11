"use client"
import React, { useState } from "react";

// Define the TypeScript type for a cart item
type CartItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

const BillingPage: React.FC = () => {
  // Cart items state with type safety
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Item 1", quantity: 1, price: 10 },
    { id: 2, name: "Item 2", quantity: 2, price: 15 },
    { id: 3, name: "Item 3", quantity: 1, price: 20 },
  ]);

  // Handle quantity change
  const handleQuantityChange = (id: number, newQuantity: number): void => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Billing Details</h1>

      {/* Responsive Table for Desktop */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Item</th>
              <th className="border border-gray-300 px-4 py-2">Quantity</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
              <th className="border border-gray-300 px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="border border-gray-300 px-4 py-2">{item.name}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <input
                    type="number"
                    className="w-16 p-1 border border-gray-400"
                    value={item.quantity}
                    min={1}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${item.price.toFixed(2)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Responsive List for Mobile */}
      <div className="block sm:hidden space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-4 rounded-lg shadow"
          >
            <div>
              <p className="font-bold">{item.name}</p>
              <p className="text-sm text-gray-500">
                Price: ${item.price.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="bg-gray-200 px-2 py-1 rounded"
                onClick={() =>
                  handleQuantityChange(item.id, Math.max(1, item.quantity - 1))
                }
              >
                -
              </button>
              <input
                type="number"
                className="w-12 text-center border border-gray-400"
                value={item.quantity}
                min={1}
                onChange={(e) =>
                  handleQuantityChange(item.id, parseInt(e.target.value))
                }
              />
              <button
                className="bg-gray-200 px-2 py-1 rounded"
                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <p className="font-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
      <div className="flex">
        <button className="w-32">Return To Shop</button>
        <button className="w-32 place-items-end">Update Cart</button>
      </div>
      <div className="flex gap-10">
        <div>
        <input type="text" className="border-collapse"/>
        <button className="w-32 bg-red-600">Apply Coupon</button>
        </div>
        <div className="border-2 border-black w-auto h-auto">
            <h1>Cart Total</h1>
            <table className="table-auto w-full border-collapse border border-gray-300">
    <thead className="bg-gray-200">
      <tr>
        <th className="border border-gray-300 px-4 py-2">Column 1</th>
        <th className="border border-gray-300 px-4 py-2">Column 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Row 1, Cell 1</td>
        <td className="border border-gray-300 px-4 py-2">Row 1, Cell 2</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Row 2, Cell 1</td>
        <td className="border border-gray-300 px-4 py-2">Row 2, Cell 2</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2">Row 3, Cell 1</td>
        <td className="border border-gray-300 px-4 py-2">Row 3, Cell 2</td>
      </tr>
    </tbody>
  </table>
  <button className="w-32 bg-red-500">
    Proceed to Checkout
  </button>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
