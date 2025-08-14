import Link from "next/link";
import { CiFacebook } from "react-icons/ci";

const SignUp = ()=>{
    const handleSignUp = async()=>{

    }
    return(
        <div className="py-20">
            <div className="max-w-6xl w-full mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="w-fulllg:w-[460px] ">
                        <img src="https://i.ibb.co.com/tps2qf29/Frame-3.png"
                         alt="img" className="w-full h-full"></img>
                    </div>
                    <div className="p-8 border-2 border-gray-100">
                        <h2 className="text-center font-bold text-3xl text-[#FF3811] mb-10">Sign up</h2>
                        <form className="flex flex-col gap-8" action="" onSubmit={handleSignUp}>
                            <div className="flex flex-col gap-2">
                                <labe htmlFor="name">Name</labe>
                                <input type="text" className="input border-2 border-gray-100 input-bordered w-full "
                                placeholder="Enter Your Name"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <labe htmlFor="email">Email</labe>
                                <input type="email" className="input border-2 border-gray-100 input-bordered w-full"
                                placeholder="Enter Your Email"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <labe htmlFor="password">Confirm Password</labe>
                                <input type="password" className="input border-2 border-gray-100 input-bordered w-full"
                                placeholder="Enter Your Name"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <input type="submit" className="input border-2  font-bold text-white rounded-2xl border-gray-100 bg-[#FF3811]
                                 input-bordered w-full"
                                placeholder="Enter Your Name"/>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <h4>Or Sign Up With</h4>
                                <div className="flex gap-2">
                                    <div className="p-2 bg-gray-800 rounded-full">
                                        <CiFacebook className="text-white text-lg"/>
                                    </div>
                                    <div className="p-2 bg-gray-800 rounded-full">
                                        <CiFacebook className="text-white text-lg"/>
                                    </div>
                                    <div className="p-2 bg-gray-800 rounded-full">
                                        <CiFacebook className="text-white text-lg"/>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <p className="text-center">Already have an account ? 
                                <Link href="" className="text-lg font-semibold text-[#FF3811]">Sign in</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp