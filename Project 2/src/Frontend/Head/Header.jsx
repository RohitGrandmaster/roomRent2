import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import BackgroundImage from "../Images/backGroundImage";
import pic2 from "../Images/pic2.jpg";
import pic4 from "../Images/pic4.jpg";
import pic3 from "../Images/pic3.jpg";
import pic5 from "../Images/pic5.jpg";

function Header() {
  const [imageUrl, setImageUrl] = useState("");

  // useEffect(() => {
  //   const handleUnload = () => {
  //     localStorage.removeItem("isLogin");
  //   };

  //   window.addEventListener("beforeunload", handleUnload);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("beforeunload", handleUnload);
  //   };
  // }, []);

  useEffect(() => {
    const images = [pic2, pic3, pic4, pic5];
    let index = 0;

    const interval = setInterval(() => {
      // Change the image URL here
      setImageUrl(images[index]);
      index = (index + 1) % images.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
  };

  return (
    <div>
      <BackgroundImage imageUrl={imageUrl} />
      <div className="flex justify-between items-center bg-lime-600 p-4">
        <div className="border border-black p-2 rounded-lg">
          <img
            src="/src/Frontend/Images/Rental.jpg"
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
        </div>
        <nav>
          <ul className="flex gap-4 text-white items-center">
            <li className="font-bold flex items-center">
              <NavLink
                to="/home"
                className="text-black absolute left-1/2 h-10 w-10"
              >
                <HomeIcon />
              </NavLink>
            </li>
            <li className="font-bold flex items-center">
              <NavLink
                to="/account"
                className="text-black absolute right-96 h-10 w-10"
              >
                <AccountCircleIcon />
              </NavLink>
            </li>
            <li className="font-bold flex items-center">
              <NavLink
                to="/logout"
                onClick={handleLogout}
                className="text-black absolute right-60 h-10 w-10"
              >
                <PowerSettingsNewIcon />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
