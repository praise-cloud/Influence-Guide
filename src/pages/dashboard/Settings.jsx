import { useState } from "react";
import { PencilIcon } from "@heroicons/react/24/outline";
import Sidebar from "../../components/dashboard/Sidebar";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    password: "********",
    profilePicture: "../assets/images/Working.jpeg",
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilePicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNotificationsChange = (e) => {
    const { name, checked } = e.target;
    setNotifications((prevNotifications) => ({
      ...prevNotifications,
      [name]: checked,
    }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Handle profile update logic here
  };

  const handleNotificationsSubmit = (e) => {
    e.preventDefault();
    // Handle notifications update logic here
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <Sidebar className="flex-shrink-0 w-64" />
        {/* Main Content */}
        <div className="flex-1 container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Settings</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 relative">
              <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>
              {isEditing ? (
                <form onSubmit={handleProfileSubmit} className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={profile.profilePicture}
                      alt="Profile"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProfilePictureChange}
                      className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={profile.name}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full h-14 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-5"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={profile.email}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full h-14 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-5"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={profile.password}
                      onChange={handleProfileChange}
                      className="mt-1 block w-full h-14 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-5"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Update Profile
                  </button>
                </form>
              ) : (
                <div>
                  <div className="flex items-center space-x-4">
                    <img
                      src={profile.profilePicture}
                      alt="Profile"
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-lg font-medium text-gray-900">
                        Name: {profile.name}
                      </p>
                      <p className="text-lg font-medium text-gray-900">
                        Email: {profile.email}
                      </p>
                      <p className="text-lg font-medium text-gray-900">
                        Password: {profile.password}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  >
                    <PencilIcon className="h-6 w-6" />
                  </button>
                </div>
              )}
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Notification Settings</h2>
              <form onSubmit={handleNotificationsSubmit} className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="emailNotifications"
                    name="emailNotifications"
                    checked={notifications.emailNotifications}
                    onChange={handleNotificationsChange}
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="emailNotifications"
                    className="ml-2 block text-sm font-medium text-gray-700"
                  >
                    Email Notifications
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="smsNotifications"
                    name="smsNotifications"
                    checked={notifications.smsNotifications}
                    onChange={handleNotificationsChange}
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label
                    htmlFor="smsNotifications"
                    className="ml-2 block text-sm font-medium text-gray-700"
                  >
                    SMS Notifications
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Update Notifications
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
