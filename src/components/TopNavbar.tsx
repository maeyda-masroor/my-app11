export default function TopNavbar(){
    return <nav className="hidden md:grid md:grid-cols-3 md:items-center md:bg-black text-white p-2">
    <div className="flex justify-start items-center">
      <h1 className="text-lg font-bold"></h1>
    </div>
  
    <div className="flex justify-center">
      <p className="text-[15px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
      <p>SHOP NOW</p>
      </div>
  
    <div className="flex justify-end items-center">
      <select className="px-4 py-2 bg-black">
        <option value="english">English</option>
      </select>
    </div>
  </nav>
  
  
}