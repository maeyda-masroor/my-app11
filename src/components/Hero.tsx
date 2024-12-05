import Image from 'next/image';
import Hero from '../public/hero.png';
import Apple from '../public/apple.png';
export default function Header() {
    return (
      <header className="">
        <div className="container mx-auto grid grid-cols-6 items-center p-4 hidden md:grid">
          {/* Left Section: 1/6 */}
          <div className="col-span-1 text-black">
          <ul className="list-none pb-6">
                <li>Woman’s Fashion</li>
                <li>Men’s Fashion</li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby’s & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
            </ul>
          </div>
          {/* Right Section: 5/6 */}
          <div className="col-span-5 flex bg-black text-white p-4">
          <div className=''>
            <div className='flex h-20 w-56 gap-10'>
                <Image src={Apple} alt='c' width={20} height={20}/>
                <h3 className='pt-3'>iPhone 14 Series</h3>
            </div>
            <div className=''>            
            <h1 className='text-6xl'>Up to 10% off Voucher</h1>
            <p className='text-white'>Shop Now</p>
            </div>
            </div>
            <Image src={Hero} alt='c'/>
            
          </div>
        </div>
  
        {/* Expanded List for Mobile */}
        <div className="md:hidden block p-4 text-black items-center">
        <ul className="list-none pb-6">
                <li>Woman’s Fashion</li>
                <li>Men’s Fashion</li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby’s & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
            </ul>
        </div>
      </header>
    );
  }
  