import { IoStar } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";
import { jwtDecode } from "jwt-decode";

const UserProfile = () => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);

    return (
        <article className="h-screen w-1/4 bg-white absolute left-0 z-10 shadow-md font-manrope flex flex-col items-center">
            <img
                src={decoded.avatar}
                alt="User Avatar"
                className="h-48 w-48 rounded-full mx-auto mt-10 border-2 border-gray-100"
            />
            <h1 className="text-3xl pt-10 font-bold text-center opacity-80">
                {decoded.full_name}
            </h1>
            <div className="mt-2 flex items-center gap-2">
                <IoStar className="inline-block text-yellow-500" />
                <strong className="opacity-50">4.2</strong>
            </div>
            <div className="px-10 flex-col text-center mt-4">
                <p className="opacity-50 text-sm">
                    {decoded.address.full_address}
                </p>
            </div>
            {/* //* Student List */}
            <div className="mt-10">
                <h2 className="text-center text-xl font-bold opacity-80">
                    Students
                </h2>
                <ul className="mt-8 flex flex-col gap-4">
                    <li className="flex gap-4 items-center">
                        <div className="relative">
                            <img
                                src={`https://api.dicebear.com/7.x/micah/svg?seed=${Math.random()}`}
                                alt="User Avatar"
                                className="h-20 w-20 rounded-full mx-auto border-2 border-gray-100"
                            />
                            <div className="h-7 w-7 rounded-full bg-green-500 top-0 right-0 absolute border-2 border-gray-100">
                                <FaSchool className="text-white text-lg mx-auto my-auto pt-1" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-bold">
                                Abhisekh Singh
                            </h3>
                            <p className="opacity-50 text-sm">Grade 9</p>
                            <p className="opacity-50 text-xs">
                                Studying at Kendriya Vidyalaya
                            </p>
                        </div>
                    </li>
                    <li className="flex gap-4 items-center">
                        <div className="relative">
                            <img
                                src={`https://api.dicebear.com/7.x/micah/svg?seed=${Math.random()}`}
                                alt="User Avatar"
                                className="h-20 w-20 rounded-full mx-auto border-2 border-gray-100"
                            />
                            <div className="h-7 w-7 rounded-full bg-orange-500 top-0 right-0 absolute border-2 border-gray-100">
                                <FaCarSide className="text-white text-lg mx-auto my-auto pt-1" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-bold">
                                Anuradha Singh
                            </h3>
                            <p className="opacity-50 text-sm">Grade 12</p>
                            <p className="opacity-50 text-xs">
                                On her way to home <br />
                                <span className="font-bold">ETA: 10 mins</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </article>
    );
};

export default UserProfile;
