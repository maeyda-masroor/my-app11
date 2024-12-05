export default function four(){
    return <div className="p-4"><nav className="flex text-sm font-medium">
    <ol className="flex space-x-2">
        <li>
        <a href="#" className="text-blue-600 hover:text-blue-800">Home</a>
        </li>
        <li>
        <span className="text-gray-500">/</span>
        </li>
        <li>
        <a href="#" className="text-blue-600 hover:text-blue-800">404</a>
        </li>
    </ol>
    </nav>
    <div className="grid grid-cols-1 lg:place-items-center">
    <h1 className="text-9xl text-black"> 404 Not Found</h1>
    <p className="text-4xl text-black">Your visited page not found. You may go home page.</p>  
    <button className="bg-red-500 w-32 h-12">Back to Home Page</button>
    </div>
    </div>
    
}