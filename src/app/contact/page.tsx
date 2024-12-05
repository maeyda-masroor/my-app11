import Image from "next/image";
import Email from '../../public/Vector.png';
import Phone from '../../public/Vector2.png';
export default function Contact(){
    return <div className="grid grid-cols-5 gap-4 w-full md:w-3/4 mx-auto mt-10">
    <div className="col-span-5 md:col-span-2 p-4">
      <div className="p-4">
        <div className="flex gap-3 text-black">
            <div className="rounded-full bg-red-500 p-4">
                <Image src={Email} alt="c"/>
            </div>
            <h1>Call to us</h1>
        </div>
        <div className="text-1xl text-black">
        We are available 24/7, 7 days a week.
        </div>
        <div className="text-1xl text-black">
        Phone: +8801611112222
        </div>
      </div>
      <hr/>
      <div className="p-4">
        <div className="flex gap-3 text-black">
            <div className="rounded-full bg-red-500 p-4">
                <Image src={Phone} alt="c"/>
            </div>
            <h1>Write To US</h1>
        </div>
        <div className="text-1xl text-black">
        Fill out our form and we will contact you within 24 hours.
        </div>
        <div className="text-1xl text-black">
        Emails: customer@exclusive.com
        <br/>
        Emails: customer@exclusive.com
        </div>
      </div>
     
    </div>
    <div className="col-span-5 md:col-span-3 p-4 rounded">
    <div className="grid gap-4 w-full max-w-lg mx-auto mt-10">
  <div className="grid grid-cols-3 gap-4">
    <input
      type="text"
      placeholder="Your Name*"
      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      placeholder="Your Email"
      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="text"
      placeholder="Your PhoneNumber"
      className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <textarea
    placeholder="Enter your message"
    className="col-span-3 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
  ></textarea>

  <div className="flex justify-end">
    <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300">
      Send Message
    </button>
  </div>
</div>
    </div>
  </div>
  
}