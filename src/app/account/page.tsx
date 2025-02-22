export default function account(){
    return <div className="p-10">
        <nav className="flex text-sm font-medium">
    <ol className="flex space-x-2">
        <li>
        <a href="#" className="text-blue-600 hover:text-blue-800">Home</a>
        </li>
        <li>
        <span className="text-gray-500">/</span>
        </li>
        <li>
        <a href="#" className="text-blue-600 hover:text-blue-800">My Account</a>
        </li>
    </ol>
    </nav>
    <div className="grid grid-rows-3 grid-cols-3">
        <div className="row-start-1 col-start-3 text-black">Welcome <span className="text-red-500">MD RED</span></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-4 text-black">
  <div className="p-4">
    <p>Manage My Account</p>
    <ul className="p-4">
        <li>My profile</li>
        <li>Address Book</li>
        <li>My Payment Options</li>
    </ul>
    <p>
        My Orders
    </p>
    <ul className="p-4">
        <li>My Returns</li>
        <li>My Cancellations</li>
    </ul>
    <p>My Wishlist</p>
  </div>
    <div className="p-14">
    <p className="text-red-500">Edit Your Profile</p>
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
  <div>
    <label htmlFor="input1" className="block">Label 1</label>
    <input id="input1" type="text" className="border p-2 w-full"/>
  </div>
  <div>
    <label htmlFor="input2" className="block">Label 2</label>
    <input id="input2" type="text" className="border p-2 w-full"/>
  </div>
  <div>
    <label htmlFor="input3" className="block">Label 3</label>
    <input id="input3" type="text" className="border p-2 w-full"/>
  </div>
  <div>
    <label htmlFor="input4" className="block">Label 4</label>
    <input id="input4" type="text" className="border p-2 w-full"/>
  </div>
</div>
<div className="grid grid-cols-1 grid-rows-3 gap-4">
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

  </div>
  <div className="flex justify-end">
    <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300">
      Send Message
    </button>
  </div>
</div>
  </div>
}