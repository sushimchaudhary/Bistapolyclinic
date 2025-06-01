
// "use client";

// import { useState, useEffect } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import Link from "next/link";

// interface News {
//   _id: string;
//   title: string;
//   description: string;
//   author: string;
//   image: string;
// }

// const NewsListPage = () => {
//   const [newsList, setNewsList] = useState<News[]>([]);

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   const fetchNews = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/news");
//       setNewsList(res.data);
//     } catch (err) {
//       console.error("Fetch news error", err);
//       toast.error("Could not load news");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Toaster position="top-center" />
//       <section className="text-center py-10">
//         <h2 className="text-4xl font-bold text-gray-800">📢 Health Tips & News</h2>
//         <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
//           Stay informed with the latest health news, medical breakthroughs, and wellness tips from our experts.
//         </p>
//       </section>

//       <main className="max-w-7xl mx-auto px-4 pb-20">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {newsList.map((item) => (
//             <div
//               key={item._id}
//               className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 flex flex-col overflow-hidden"
//             >
//               <img
//                 src={`http://localhost:5000${item.image}`}
//                 alt={item.title}
//                 className="w-full h-60 object-cover"
//               />
//               <div className="p-4 flex flex-col flex-grow">
//                 <small className="text-gray-500 mb-2">By {item.author}</small>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
//                 <p className="text-gray-700 mb-4 flex-grow line-clamp-3">{item.description}</p>
//                 <div className="mt-auto">
//                   <Link
//                     href={`/News/${item._id}`}
//                     className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md font-semibold transition"
//                   >
//                     Read More
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default NewsListPage;





"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
// ✅ JavaScript-compatible (optional type hint via comments)
interface News {
  _id: string;
  title: string;
  description: string;
  author: string;
  image: string;
}

const Page = () => {
  const [newsList, setNewsList] = useState<News[]>([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/news");
      setNewsList(res.data);
    } catch (err) {
      console.error("Fetch news error", err);
      toast.error("Could not load news");
    }
  };

  return (
    // Health Tips & News
    <div className="min-h-screen ">
      <Toaster position="top-center" />

      {/* Header Section */}
      <section className="text-center py-10">
        <h2 className="text-4xl font-bold text-gray-800">📢 Health Tips & News</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Stay informed with the latest health news, medical breakthroughs, and wellness tips from our experts.
        </p>
      </section>

      {/* News Cards */}
      <main className="container pb-5">
        <div className="row g-4">
          {newsList.map((item) => (
            <div className="col-12 col-sm-6 col-lg-3" key={item._id}>
              <div className="card h-100 border-1 shadow-sm hover-shadow-lg transition-all overflow-hidden rounded-2xl">
                {/* Image Section */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ height: "250px" }}
                >
                  <img
                    src={`http://localhost:5000${item.image}`}
                    alt={item.title}
                    className="img-fluid p-2 rounded-2xl w-100 h-100 object-cover"
                  />
                </div>
                {/* Body */}
                <div className="card-body d-flex flex-column">
                  <small className="text-muted mb-2">By {item.author}</small>
                  <h5 className="card-title text-dark fw-semibold mb-2">
                    {item.title}
                  </h5>
                  <p className="card-text text-muted mb-3" style={{ flexGrow: 1 }}>
                    {item.description.length > 120
                      ? item.description.slice(0, 120) + "..."
                      : item.description}
                  </p>
                  <div className="mt-auto text-center">
                    <Link href={`/News/${item._id}`} className="btn btn-sm btn-primary">
                      Read More
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

    </div>
  );
};

export default Page;