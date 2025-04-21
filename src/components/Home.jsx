// import React from "react";
// import Sidebar from "./Sidebar.jsx";
// import Video from "./Video";
// import { useAuth } from "../context/AuthProvider.jsx";
// import ListItems from "./ListItems.jsx";
// function Home() {
//   const { data, loading } = useAuth();
//   console.log(data);
//   return (
//     <div className="flex mt-5">
//       <Sidebar />
//       <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
//         <ListItems />
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
//           {!loading &&
//             data.map((item) => {
//               if (item.type !== "video") return false;
//               return <Video key={item.id} video={item?.video} />;
//             })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar.jsx";
import Video from "./Video";
import { useAuth } from "../context/AuthProvider.jsx";
import ListItems from "./ListItems.jsx";

function Home() {
  const { data, loading } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex mt-5">
      <Sidebar />
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden flex-1">
        <div className="flex justify-end p-4">
          <button
            className="px-4 py-2 rounded-md bg-gray-800 text-white dark:bg-white dark:text-black"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </button>
        </div>

        <ListItems />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            data.map((item) => {
              if (item.type !== "video") return false;
              return <Video key={item.id} video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
