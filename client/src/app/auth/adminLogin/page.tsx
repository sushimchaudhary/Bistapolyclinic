// "use client";

// import React, { useState } from "react";
// import axios from "axios";
// import toast, { Toaster } from "react-hot-toast";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import Cookies from "js-cookie";

// const AdminLoginPage: React.FC = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const { data } = await axios.post("http://localhost:5000/api/auth/login", {
//         email,
//         password,
//       });

//       // ✅ Optionally check for admin role
//       // if (data.admin.role !== "admin") {
//       //   toast.error("Access denied: Admins only!");
//       //   setLoading(false);
//       //   return;
//       // }

//       Cookies.set("adminToken", data.token);
//       localStorage.setItem("adminToken", data.token);
//       // localStorage.setItem("admin", JSON.stringify(data.admin));
//       localStorage.setItem('user',JSON.stringify({
//          username: data.username, 
//          role: data.role })
//       );

//       toast.success("Login successful! Redirecting...");
//       setTimeout(() => router.push("/dashboard"), 1500);
//     } catch (error: any) {
//       toast.error(error.response?.data?.message || "Login failed!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
//       <Toaster position="top-right" />
//       <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-bold text-blue-700">Hospital Admin Panel</h1>
//           <p className="text-sm text-gray-500 mt-1">Please login to continue</p>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="admin@example.com"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               autoComplete="email"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               placeholder="********"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               autoComplete="current-password"
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 rounded-lg"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         <p className="mt-2 text-center text-sm text-gray-600">
//           <Link href="/" className="text-blue-500 font-medium hover:underline">
//             ← Back to Home
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AdminLoginPage;



"use client";
import { HiArrowLeft } from "react-icons/hi";

import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import { Eye, EyeOff } from "lucide-react"; // Ensure lucide-react is installed

const AdminLoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      Cookies.set("adminToken", data.token);
      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("user", JSON.stringify({ username: data.username, role: data.role }));

      toast.success("Login successful! Redirecting...");
      setTimeout(() => router.push("/dashboard"), 1500);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ background: "linear-gradient(to bottom right, #eff6ff, #dbeafe)" }}
    >
      <Toaster position="top-right" />
      <div className="container px-3">
        <div className="row justify-content-center py-3">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow border-0 rounded-4 p-4">
              <div className="text-center mb-4">
                <h1 className="h3 fw-bold text-primary">Hospital Admin Panel</h1>
                <p className="text-muted small">Please login to continue</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label small fw-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control rounded-3 p-3"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="mb-4 position-relative">
                  <label htmlFor="password" className="form-label small fw-medium">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="form-control rounded-3 p-3 pe-5"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                  />
                  <div className="position-absolute top-15 end-0 translate-middle-y me-3 text-muted">
                    <span
                      role="button"
                      className=""
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary btn-lg w-30 shadow-sm position-relative"
                    style={{ minWidth: "150px", transition: "background-color 0.3s ease" }}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Logging in...
                      </>
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>

              </form>

              <p className="text-center mt-3 small">
                <Link href="/" className="text-primary text-decoration-none d-inline-flex align-items-center link-hover-underline">
                  <HiArrowLeft className="me-2" /> Back to Home
                </Link>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;