import { useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";
import { CgLogOut } from "react-icons/cg";
import { useState } from "react";


const Profile = ({user}) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const location = useLocation();
    console.log(location);
    
    console.log(user,"profile");
    const {displayName, photoURL,email} = user;
    const {logOut} = UseAuth();
    return (
    <div onClick={() => setShowDropdown(!showDropdown)} className="dropdown dropdown-end flex items-center text-black tooltip tooltip-left" data-tip={displayName || email}>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-12 h-12 rounded-full border-2 ">
          <img alt="profile" src={photoURL ? photoURL : "https://i.ibb.co/QmBHkvV/user.png"} />
        </div>
      </div>
      <div tabIndex={0} className={`${showDropdown ? 'block' : "hidden"} mt-80 shadow menu menu-sm dropdown-content bg-sky-700 rounded-box w-60 space-y-2 p-4 text-center border-2 border-sky-400 z-50`}>
        <div className="">
            <img className="w-16 mx-auto rounded-full border-2 border-sky-500" src={photoURL ? photoURL : "https://i.ibb.co/QmBHkvV/user.png"} alt="" />
        </div>
        <p className="font-bold text-lg text-white">{displayName}</p>
        <div className="flex justify-center items-center gap-4 text-white pt-4">
            <button onClick={logOut} className="btn bg-gradient-to-r from-sky-600 to-teal-600 py-3 px-5 rounded-lg font-bold flex items-center gap-2 border-none text-white">
                Logout
                <CgLogOut className="text-xl" />
            </button>
        </div>
      </div>
    </div>
    );
};

export default Profile;