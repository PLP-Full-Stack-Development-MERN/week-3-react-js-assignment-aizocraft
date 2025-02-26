import React, { useState } from "react";

function Profile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(18);

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-900 text-white p-6 rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-2xl font-semibold text-center mb-4">
        User Profile
      </h2>

      <div className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-gray-300 font-medium">Name:</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        {/* Age Input */}
        <div>
          <label className="block text-gray-300 font-medium">Age:</label>
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full mt-1 p-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>
      </div>

      {/* Display User Info */}
      <div className="mt-4 p-4 bg-gray-800 border border-gray-700 rounded-md">
        <h1 className="text-lg font-medium">👤 Name: {name || "Not provided"}</h1>
        <h1 className="text-lg font-medium">🎂 Age: {age}</h1>
      </div>
    </div>
  );
}

export default Profile;