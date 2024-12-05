import Image from "next/image";
import Side from '../../public/side.png';
import Google from '../../public/gogole.png';
export default function SignUp(){
    return <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    <div className=" text-white p-4">
        <Image src={Side} alt="c"/>
    </div>
    <div className="text-white p-10">
        <h1 className="text-5xl text-black ">
        Log in to Exclusive
        </h1>
        <h4 className="text-3xl text-black ">
        Enter your details below
        </h4>
        <div className="h-auto bg-white rounded-lg p-10">
            <form className="text-black ">
            <label className="font-extrabold text-black">Email or Phonenumber</label>
            <br/>
            <input 
            type="text" 
            className="border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500 w-full" 
            placeholder="Email or Phonenumber"
            />
            <br/>
            <label className="font-extrabold text-black">Password</label>
            <br/>
            <input 
            type="text" 
            className="border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500 w-full" 
            placeholder="Password"
            />
            <div className="flex">
            <button className="border-2 border-white h-10 bg-red-500 w-32 mt-4">Login</button>
            <p className="text-red-500 mt-4">Forget Password?</p>
            
            </div>
        </form>
    
        
        </div>
    </div>
    </div>
}