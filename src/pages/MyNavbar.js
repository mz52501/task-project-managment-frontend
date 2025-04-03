import {useState} from "react";
import {Link} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";  // Import hamburger icon
import {SiTask} from "react-icons/si";
import {BiTask} from "react-icons/bi";

export function MyNavbar() {
    {/* const [isOpen, setIsOpen] = useState(false); */
    }

    return (
        <div className="flex relative">
            <div
                className="h-screen flex flex-col gap-6 w-fit px-5 bg-green-400 items-center rounded-sm shadow-md shadow-black">
                {/* Hamburger Menu Button */}
                {/*<button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-3xl mt-4 hover:scale-110 transition-transform duration-200 w-40 flex justify-center"
            >
                <GiHamburgerMenu/>
            </button> */}

                {/* Profile Section (Always Visible) */}
                <div className="flex flex-col items-center mt-4 z-10">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
                        <img className="object-cover w-full h-full" src="head.jpg" alt="Profile"/>
                    </div>
                    <p className="text-white font-semibold text-lg mt-2">Marko Žura</p>
                </div>

                {/* Links Section (Hidden Until Clicked) */}
                <div className="flex flex-col gap-5 w-full">
                    <Link
                        className="bg-white w-40 flex justify-center py-2 rounded-md text-blue-800 font-semibold shadow-lg transform transition-transform duration-200 hover:scale-110 hover:bg-gray-50">
                        <p>Projects</p>
                    </Link>
                    <Link
                        className="bg-white w-40 flex justify-center py-2 rounded-md text-blue-800 font-semibold shadow-lg transform transition-transform duration-200 hover:scale-110 hover:bg-gray-50">
                        <p>Tasks</p>
                    </Link>
                    <Link
                        className="bg-white w-40 flex justify-center py-2 rounded-md text-blue-800 font-semibold shadow-lg transform transition-transform duration-200 hover:scale-110 hover:bg-gray-50">
                        <p>Profile</p>
                    </Link>
                    <Link
                        className="bg-white w-40 flex justify-center py-2 rounded-md text-blue-800 font-semibold shadow-lg transform transition-transform duration-200 hover:scale-110 hover:bg-gray-50">
                        <p>Notifications</p>
                    </Link>
                </div>
            </div>
            <div className="absolute h-20 rounded-sm shadow-md w-full bg-blue-500 flex justify-end items-center">
                <div className="flex gap-1">
                    <p className="text-white font-bold text-2xl">ManageMe</p>
                    <SiTask className="text-white mr-8" size={36}/>
                </div>
            </div>
        </div>
    );
}
