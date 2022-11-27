import Button from "../../components/ui/button"

function Register(){
    return (
        <div className="bg-hero h-screen items-center flex  relative     justify-center bg-no-repeat bg-cover ">

<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2] "/>
        <div className="bg-white max-w-full w-2/5  rounded-lg shadow-md shadow-gray-300 p-5 mx-auto z-10 relative  ">
            <h1 className="text-center font-bold text-3xl text-gray-600">Register  here</h1>
<div className="flex flex-col gap-5 ">
                                                    <div className="pt-3 mt-5 flex flex-col w-full relative">
                                                        <input className="w-full  bg-transparent h-4 mt-2 box-content border-b border-b-lightgray focus:outline-none peer focus:border-b-gray-600 focus:border-b-2 transition-all duration-300 text-black  text-smallx font-sans"  id="email"></input>
                                                        <label className="absolute left-0 top-1 cursor-text text-smallx font-sans text-lightgray peer-focus:text-xs  peer-focus:-top-4 transition-all peer-focus:text-gray-600 duration-300 " for='email'>Your Email</label>
                                                        </div>
                                                        <div className="pt-3 mt-5 flex flex-col w-full relative">
                                                        <input className="w-full  bg-transparent h-4 mt-2 box-content border-b border-b-lightgray focus:outline-none peer focus:border-b-gray-600 focus:border-b-2 transition-all duration-300  text-black  text-smallx font-sans"  id="fName"></input>
                                                        <label className="absolute left-0 top-1 cursor-text text-smallx font-sans text-lightgray peer-focus:text-xs  peer-focus:-top-4 transition-all peer-focus:text-gray-600 duration-300 " for='fname'>Your First Name</label>
                                                        </div>
                                                        <div className="pt-3 mt-5 flex flex-col w-full relative">
                                                        <input className="w-full  bg-transparent h-4 mt-2 box-content border-b border-b-lightgray focus:outline-none peer focus:border-b-gray-600 focus:border-b-2 transition-all duration-300  text-black  text-smallx font-sans"  id="lname"></input>
                                                        <label className="absolute left-0 top-1 cursor-text text-smallx font-sans text-lightgray peer-focus:text-xs  peer-focus:-top-4 transition-all peer-focus:text-gray-600 duration-300 " for='lname'>Your  Last Name</label>
                                                        </div> 
                                                        <div className="pt-3 mt-5 flex flex-col w-full relative">
                                                        <input className="w-full  bg-transparent h-4 mt-2 box-content border-b border-b-lightgray focus:outline-none peer focus:border-b-gray-600 focus:border-b-2 transition-all duration-300 text-black text-smallx font-sans"  id="ID"></input>
                                                        <label className="absolute left-0 top-1 cursor-text text-smallx font-sans text-lightgray peer-focus:text-xs  peer-focus:-top-4 transition-all peer-focus:text-gray-600  duration-300 " for='ID'>Your ID</label>

                                                    </div>
                                                    <Button name='Register' styles='hover:bg-black hover:text-white'/>
                                                    </div>


                                                    {/* <div className="my-5"> */}
                                                {/* </div> */}
                                        

        </div>


</div>

    )

    
}
export default Register