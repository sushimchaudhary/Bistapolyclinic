// 'use client';

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';
// import { HomeIcon } from 'lucide-react';
// // import Cookies from "js-cookie";

// const AdminRegisterPage: React.FC = () => {
//   const router = useRouter();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('admin'); // default role
//   const [loading, setLoading] = useState(false);

//   const isStrongPassword = (password: string) => {
//     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);


//     // Validate email format
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     toast.error('Please enter a valid email address');
//     setLoading(false);
//     return;
//   }

//     if (!isStrongPassword(password)) {
//       toast.error('Password must be 8+ chars with uppercase, lowercase, number, and symbol');
//       setLoading(false);
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/api/auth/register', {
//         username,
//         email,
//         password,
//         role,
//       });

//       toast.success('Registration successful! Please login.');
//       setTimeout(() => router.push('/auth/adminLogin'), 1500);
//     } catch (error: any) {
//       toast.error(error.response?.data?.message || 'Registration failed!');
//     } finally {
//       setLoading(false);
//     }
//   };
 




// // useEffect(() => {
// //   const fetchUser = async () => {
// //     try {
// //       const res = await axios.get('http://localhost:5000/api/auth/me', {
// //         withCredentials: true, // if using cookie-based auth
// //       });

// //       if (res.data.role !== 'admin') {
// //         router.replace('/not-authorized');
// //       }
// //     } catch (error) {
// //       router.replace('/not-authorized');
// //     }
// //   };

// //   fetchUser();
// // }, []);




//   // useEffect(() => {
//   //   const verifyAdmin = async () => {
//   //     const token = Cookies.get("adminToken");
//   //     if (!token) {
//   //       router.push("/not-authorized");
//   //       return;
//   //     }

//   //     try {
//   //       const decoded = jwtDecode<TokenPayload>(token);

//   //       if (decoded.role !== "admin") {
//   //         router.push("/not-authorized");
//   //       }
//   //     } catch (err) {
//   //       router.push("/not-authorized");
//   //     }
//   //   };

//   //   verifyAdmin();
//   // }, [router]);








//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
//       <Toaster position="top-right" />
//       <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
//         <div className="flex flex-col items-center mb-6">
//           <Image src="/logo.png" alt="Hospital Logo" width={64} height={64} className="mb-3" />
//           <h1 className="text-3xl font-bold text-blue-700">Admin Registration</h1>
//           <p className="text-sm text-gray-500 mt-1 text-center">
//             Create your account to manage the system
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
//             <input
//               type="text"
//               placeholder="admin123"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//             <input
//               type="email"
//               placeholder="admin@example.com"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input
//               type="password"
//               placeholder="********"
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             >
//               <option value="admin">Admin</option>
             
//               <option value="user">User</option>
//             </select>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 rounded-lg"
//           >
//             {loading ? 'Registering...' : 'Register'}
//           </button>
//         </form>

//         <p className="mt-5 text-center text-sm text-gray-600">
//           Already have an account?{' '}
//           <Link href="/auth/adminLogin" className="text-blue-600 font-medium hover:underline">
//             Login here
//           </Link>
//         </p>
//         <p className="mt-2 text-center text-sm text-gray-600 flex justify-center items-center gap-1">
//           Or go to{' '}
//           <Link href="/dashboard" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
//             <HomeIcon className="h-5 w-5" />
//             Dashboard
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AdminRegisterPage;




// lock in serch url  start

// 'use client';

// import React, { useState } from 'react';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';
// import { HomeIcon } from 'lucide-react';
// import Head from 'next/head';

// const AdminRegisterPage: React.FC = () => {
//   const router = useRouter();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const role = 'admin'; // fixed role

//   const isStrongPassword = (password: string) => {
//     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!isStrongPassword(password)) {
//       toast.error('Password must be 8+ chars with uppercase, lowercase, number, and symbol');
//       setLoading(false);
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/api/auth/register', {
//         username,
//         email,
//         password,
//         role,
//       });

//       toast.success('Registration successful! Please login.');
//       setTimeout(() => router.push('/auth/adminLogin'), 1500);
//     } catch (error: any) {
//       toast.error(error.response?.data?.message || 'Registration failed!');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* 🚫 Hide from search engines */}
//       <Head>
//         <meta name="robots" content="noindex,nofollow" />
//       </Head>

//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
//         <Toaster position="top-right" />
//         <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
//           <div className="flex flex-col items-center mb-6">
//             <Image src="/logo.png" alt="Hospital Logo" width={64} height={64} className="mb-3" />
//             <h1 className="text-3xl font-bold text-blue-700">Admin Registration</h1>
//             <p className="text-sm text-gray-500 mt-1 text-center">
//               Create your account to manage the system
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
//               <input
//                 type="text"
//                 placeholder="admin123"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//               <input
//                 type="email"
//                 placeholder="admin@example.com"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//               <input
//                 type="password"
//                 placeholder="********"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             {/* Hidden input to keep role as admin only */}
//             <input type="hidden" value="admin" name="role" />

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 rounded-lg"
//             >
//               {loading ? 'Registering...' : 'Register'}
//             </button>
//           </form>

//           <p className="mt-5 text-center text-sm text-gray-600">
//             Already have an account?{' '}
//             <Link href="/auth/adminLogin" className="text-blue-600 font-medium hover:underline">
//               Login here
//             </Link>
//           </p>
//           <p className="mt-2 text-center text-sm text-gray-600 flex justify-center items-center gap-1">
//             Or go to{' '}
//             <Link href="/dashboard" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
//               <HomeIcon className="h-5 w-5" />
//               Dashboard
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminRegisterPage;

// lock in serch url  end


'use client';

import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { HomeIcon } from 'lucide-react';

const AdminRegisterPage: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin'); // default role
  const [loading, setLoading] = useState(false);

  const isStrongPassword = (password: string) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!isStrongPassword(password)) {
      toast.error('Password must be 8+ chars with uppercase, lowercase, number, and symbol');
      setLoading(false);
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password,
        role,
      });

      toast.success('Registration successful! Please login.');
      setTimeout(() => router.push('/auth/adminLogin'), 1500);
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Registration failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
    //   <Toaster position="top-right" />
    //   <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
    //     <div className="flex flex-col items-center mb-6">
    //       <Image src="/logo.png" alt="Hospital Logo" width={64} height={64} className="mb-3" />
    //       <h1 className="text-3xl font-bold text-blue-700">Admin Registration</h1>
    //       <p className="text-sm text-gray-500 mt-1 text-center">
    //         Create your account to manage the system
    //       </p>
    //     </div>

    //     <form onSubmit={handleSubmit} className="space-y-5">
    //       <div>
    //         <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
    //         <input
    //           type="text"
    //           placeholder="admin123"
    //           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    //           value={username}
    //           onChange={(e) => setUsername(e.target.value)}
    //           required
    //         />
    //       </div>

    //       <div>
    //         <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
    //         <input
    //           type="email"
    //           placeholder="admin@example.com"
    //           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           required
    //         />
    //       </div>

    //       <div>
    //         <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
    //         <input
    //           type="password"
    //           placeholder="********"
    //           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           required
    //         />
    //       </div>

    //       <div>
    //         <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
    //         <select
    //           value={role}
    //           onChange={(e) => setRole(e.target.value)}
    //           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    //           required
    //         >
    //           <option value="admin">Admin</option>

    //           <option value="user">User</option>
    //         </select>
    //       </div>

    //       <button
    //         type="submit"
    //         disabled={loading}
    //         className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 rounded-lg"
    //       >
    //         {loading ? 'Registering...' : 'Register'}
    //       </button>
    //     </form>

    //     <p className="mt-5 text-center text-sm text-gray-600">
    //       Already have an account?{' '}
    //       <Link href="/auth/adminLogin" className="text-blue-600 font-medium hover:underline">
    //         Login here
    //       </Link>
    //     </p>
    //     <p className="mt-2 text-center text-sm text-gray-600 flex justify-center items-center gap-1">
    //       Or go to{' '}
    //       <Link href="/dashboard" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
    //         <HomeIcon className="h-5 w-5" />
    //         Dashboard
    //       </Link>
    //     </p>
    //   </div>
    // </div>

    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-gradient px-3 py-5">
      {/* Toaster (positioned top right) */}
      <div className="toast-container position-fixed top-0 end-0 p-3">
        <Toaster position="top-right" />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow border-0 rounded-4 p-4">
              <div className="text-center mb-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jqPkR7OFnc9sKKTPnzTPmJKIbGl1rn722Q&s"
                  alt="Hospital Logo"
                  width={85}
                  height={85}
                  className="mb-3 rounded-circle mx-auto d-block border-4 border-primary p-1"
                />
                <h2 className="fw-bold text-primary">Admin Registration</h2>
                <p className="text-muted small">Create your account to manage the system</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="admin123"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Role</label>
                  <select
                    className="form-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                </div>
                <div className='text-center'>
                  <button
                    type="submit"
                    className="btn btn-primary w-35 rounded"
                    disabled={loading}
                  >
                    {loading ? 'Registering...' : 'Register'}
                  </button>
                </div>
              </form>

              <div className="text-center mt-4">
                <p className="text-muted small mb-1">
                  Already have an account?{' '}
                  <Link href="/auth/adminLogin" className="text-decoration-none fw-semibold text-primary">
                    Login here
                  </Link>
                </p>
                <p className="text-muted small d-flex justify-content-center align-items-center gap-1">
                  Or go to{' '}
                  <Link href="/dashboard" className="text-decoration-none fw-semibold text-primary d-flex align-items-center gap-1">
                    <i className="bi bi-house-door-fill" /> Dashboard
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AdminRegisterPage;



// hide from  search engin for normal user 

// 'use client';

// import React, { useState } from 'react';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import Image from 'next/image';
// import { HomeIcon } from 'lucide-react';
// import Head from 'next/head';

// const AdminRegisterPage: React.FC = () => {
//   const router = useRouter();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const role = 'admin'; // fixed role

//   const isStrongPassword = (password: string) => {
//     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!isStrongPassword(password)) {
//       toast.error('Password must be 8+ chars with uppercase, lowercase, number, and symbol');
//       setLoading(false);
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5000/api/auth/register', {
//         username,
//         email,
//         password,
//         role,
//       });

//       toast.success('Registration successful! Please login.');
//       setTimeout(() => router.push('/auth/adminLogin'), 1500);
//     } catch (error: any) {
//       toast.error(error.response?.data?.message || 'Registration failed!');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       {/* 🚫 Hide from search engines */}
//       <Head>
//         <meta name="robots" content="noindex,nofollow" />
//       </Head>

//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
//         <Toaster position="top-right" />
//         <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
//           <div className="flex flex-col items-center mb-6">
//             <Image src="/logo.png" alt="Hospital Logo" width={64} height={64} className="mb-3" />
//             <h1 className="text-3xl font-bold text-blue-700">Admin Registration</h1>
//             <p className="text-sm text-gray-500 mt-1 text-center">
//               Create your account to manage the system
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
//               <input
//                 type="text"
//                 placeholder="admin123"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
//               <input
//                 type="email"
//                 placeholder="admin@example.com"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//               <input
//                 type="password"
//                 placeholder="********"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>

//             {/* Hidden input to keep role as admin only */}
//             <input type="hidden" value="admin" name="role" />

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 rounded-lg"
//             >
//               {loading ? 'Registering...' : 'Register'}
//             </button>
//           </form>

//           <p className="mt-5 text-center text-sm text-gray-600">
//             Already have an account?{' '}
//             <Link href="/auth/adminLogin" className="text-blue-600 font-medium hover:underline">
//               Login here
//             </Link>
//           </p>
//           <p className="mt-2 text-center text-sm text-gray-600 flex justify-center items-center gap-1">
//             Or go to{' '}
//             <Link href="/dashboard" className="text-blue-600 font-medium hover:underline flex items-center gap-1">
//               <HomeIcon className="h-5 w-5" />
//               Dashboard
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminRegisterPage;