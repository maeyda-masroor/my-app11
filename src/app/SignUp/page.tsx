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
        Create an account
        </h1>
        <h4 className="text-3xl text-black ">
        Enter your details below
        </h4>
        <div className="h-auto bg-white rounded-lg p-10">
            <form className="text-black ">
            <label className="font-extrabold text-black mb-10">Name</label>
            <br/>
            <input 
            type="text" 
            className="border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500 w-full" 
            placeholder="Name"
            /> 
            <br/>
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
            <br/>
            <button className="border-2 border-white h-10 bg-red-500 w-full mt-4">Create Account</button>
            <br/>
            <br/>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded shadow-md hover:bg-gray-200 hover:shadow-lg transition duration-200 w-full">
                <Image
                src={Google}
                alt="Google Logo"
                className="w-5 h-5"
                />
                <span>Sign in with Google</span>
            </button>
        </form>
        <center><div className="text-black place-items-center">
        Already have account?<span>Log in</span>
        </div>
        </center>
        </div>
    </div>
    </div>
}