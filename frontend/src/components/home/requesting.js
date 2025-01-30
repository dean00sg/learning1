import React from "react";
import { useNavigate } from "react-router-dom";
import { Newspaper, UserRoundCog, Bell, Headset } from "lucide-react";

const Requesting = () => {
  const navigate = useNavigate();

  const onAddNewsClick = () => navigate("/add-news");
  const onAddAdminClick = () => navigate("/employee-management");
  const onAddNotificationClick = () => navigate("/add-notifications");
  const onAddCallCenterClick = () => navigate("/center-services");

  return (
    <div className="flex flex-col items-center ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto ">
        <div
          className="flex flex-col items-center justify-center p-6 bg-blue-500 text-white rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
          onClick={onAddNewsClick}
        >
          <Newspaper size={50} className="mb-4" />
          <p className="text-center font-semibold">Add News On HomePage</p>
        </div>

        <div
          className="flex flex-col items-center justify-center p-6 bg-purple-500 text-white rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
          onClick={onAddAdminClick}
        >
          <UserRoundCog size={50} className="mb-4" />
          <p className="text-center font-semibold">Emp Management</p>
        </div>

        <div
          className="flex flex-col items-center justify-center p-6 bg-teal-500 text-white rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
          onClick={onAddNotificationClick}
        >
          <Bell size={50} className="mb-4" />
          <p className="text-center font-semibold">Add Notifications</p>
        </div>

        <div
          className="flex flex-col items-center justify-center p-6 bg-gray-500 text-white rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
          onClick={onAddCallCenterClick}
        >
          <Headset size={50} className="mb-4" />
          <p className="text-center font-semibold">Center Services</p>
        </div>
      </div>
    </div>
  );
};

export default Requesting;
