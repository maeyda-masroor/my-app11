

function Countdown() {
  return (
    <div className="flex space-x-4 text-lg font-bold text-gray-800">
      {/* Days */}
      <div className="text-center">
        <div className="text-2xl text-blue-600">12</div>
        <div className="text-sm text-gray-500">Days</div>
      </div>
      <span className="text-xl">:</span>
      {/* Hours */}
      <div className="text-center">
        <div className="text-2xl text-blue-600">20</div>
        <div className="text-sm text-gray-500">Hours</div>
      </div>
      <span className="text-xl">:</span>
      {/* Minutes */}
      <div className="text-center">
        <div className="text-2xl text-blue-600">43</div>
        <div className="text-sm text-gray-500">Minutes</div>
      </div>
      <span className="text-xl">:</span>
      {/* Seconds */}
      <div className="text-center">
        <div className="text-2xl text-blue-600">60</div>
        <div className="text-sm text-gray-500">Seconds</div>
      </div>
    </div>
  );
}
export default function ThreeRowLayout() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* First Row */}
      <div className="flex">
      <div className="flex items-center p-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to Our Store!</h1>
      </div>

      {/* Second Row */}
      <div className="flex flex-col p-6 bg-gray-200 shadow-md">
        <h2 className="mb-4 text-xl font-semibold text-gray-700">Limited Time Offer</h2>
        <Countdown/>
      </div>
      <div className="relative flex-wrap p-4 bg-white shadow">
      <button className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-gray-300 rounded-full p-2 hover:bg-gray-400">
          <span>&lt;</span>
        </button>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-300 rounded-full p-2 hover:bg-gray-400">
          <span>&gt;</span>
    </button>
     </div>
      {/* Third Row: Product Cards with Navigation */}
        {/* Navigation Arrows */}
        
    </div>
        {/* Product Cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {/* Product Card 1 */}
          <div className="p-4 bg-gray-100 rounded shadow">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 1"
              className="w-full h-32 object-cover rounded"
            />
            <h3 className="mt-2 text-lg font-semibold text-gray-700">Product 1</h3>
            <p className="text-gray-500">$25.00</p>
          </div>
          {/* Product Card 2 */}
          <div className="p-4 bg-gray-100 rounded shadow">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 2"
              className="w-full h-32 object-cover rounded"
            />
            <h3 className="mt-2 text-lg font-semibold text-gray-700">Product 2</h3>
            <p className="text-gray-500">$30.00</p>
          </div>
          {/* Repeat product cards */}
          <div className="p-4 bg-gray-100 rounded shadow">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 3"
              className="w-full h-32 object-cover rounded"
            />
            <h3 className="mt-2 text-lg font-semibold text-gray-700">Product 3</h3>
            <p className="text-gray-500">$20.00</p>
          </div>
          <div className="p-4 bg-gray-100 rounded shadow">
            <img
              src="https://via.placeholder.com/150"
              alt="Product 4"
              className="w-full h-32 object-cover rounded"
            />
            <h3 className="mt-2 text-lg font-semibold text-gray-700">Product 4</h3>
            <p className="text-gray-500">$15.00</p>
          </div>
        </div>
      </div>
  );
}
