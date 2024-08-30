import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import getUser from "../../firebase/users/getUser";

const auth = getAuth();

const StudentProfile = () => {
  const [user, setUser] = useState(null);

  // Fetch current user's data
  const fetchUserData = async () => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      try {
        const userData = await getUser(currentUser.uid); // Fetch user data from Firestore
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    } else {
      console.log("No user is signed in.");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>; // Show loading state until user data is fetched
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-white to-gray-200">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">
          User Profile
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="flex flex-col items-center">
            <img
              src={user.profilePicture}
              alt="Student"
              className="rounded-full w-32 h-32 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {user.fullName}
            </h3>
            <p className="text-gray-600">Username: {user.fullName}</p>
            <p className="text-gray-600">Email: {user.email}</p>
            <p className="text-gray-600">Phone: {user.phone}</p>
          </div>

          {/* General Information Section */}
          <div className="col-span-2">
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                General Information
              </h4>
              <table className="table-auto w-full">
                <tbody>
                  <tr>
                    <td className="p-2 text-gray-600">Address</td>
                    <td className="p-2">:</td>
                    <td className="p-2 text-gray-800">{user.address}</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-gray-600">City</td>
                    <td className="p-2">:</td>
                    <td className="p-2 text-gray-800">{user.city}</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-gray-600">Country</td>
                    <td className="p-2">:</td>
                    <td className="p-2 text-gray-800">{user.country}</td>
                  </tr>
                  <tr>
                    <td className="p-2 text-gray-600">Postal Code</td>
                    <td className="p-2">:</td>
                    <td className="p-2 text-gray-800">{user.zip}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-inner">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                User Biography
              </h4>
              <p className="text-gray-600">{user.bio}</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg shadow-inner mt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Delivery Information
              </h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500 text-white p-2 rounded-md w-1/2 text-center">
                    <p>Previous Delivery</p>
                    <p>{user.previous_delivery}</p>
                  </div>
                  <div className="bg-green-500 text-white p-2 rounded-md w-1/2 text-center">
                    <p>Next Delivery</p>
                    <p>{user.next_delivery}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
