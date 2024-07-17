import React, { useContext } from "react";
import { AuthContext } from "../auth/authContext";
import { CiLogout } from "react-icons/ci";

function DashBoard() {
  const { user, logout } = useContext(AuthContext);
  const handleLogOut = () => {
    logout();
  };
  return (
    <div className="flex flex-col w-full justify-center items-center h-[100vh]">
      <div className="flex gap-4 justify-center items-center w-full max-w-sm">
        <h1 className="font-bold">Welcome, {user.email}</h1>
        <button
          onClick={handleLogOut}
          className="bg-black p-2 rounded-md font-bold">
          <CiLogout className="text-white" />
        </button>
      </div>
      <p>This is your dashboard page.</p>
    </div>
  );
}

export default DashBoard;
