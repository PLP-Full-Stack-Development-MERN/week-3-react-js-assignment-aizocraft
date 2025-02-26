import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <Header />
      <div className="mt-8 space-y-6">
        <Profile name="Isaac" email="kariukiisaac911@gmail.com" />
        <Counter />
      </div>
    </div>
  );
}

export default App;