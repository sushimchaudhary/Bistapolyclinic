"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LogoutButton from "@/component/LogoutButton";

import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import { Menu, X } from 'lucide-react'; // Icon set
// import { groupCollapsed } from "console";



interface TokenPayload {
  id: string;
  role: string;
  iat?: number;
  exp?: number;
}

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalDoctors: 0,
    totalAppointments: 0,
  });

  const [username, setUsername] = useState("Admin");
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const token = Cookies.get("adminToken");
        if (!token) {
          console.log("No token found");
          return;
        }

        const decoded = jwtDecode<TokenPayload>(token);
        const adminId = decoded.id;

        const res = await fetch(
          `http://localhost:5000/api/auth/get-admin/${adminId}`
        );
        const data = await res.json();

        if (data.username) {
          setUsername(data.username);
        }
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };

    const fetchStats = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/admin/stats");
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch stats", error);
      }
    };

    fetchAdminData();
    fetchStats();
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: '📊' },
    { href: '/auth/admin/addDoctors', label: 'Doctors', icon: '🩺' },
    { href: '/auth/admin/appointments', label: 'Appointments', icon: '📅' },
    { href: '/auth/admin/addNews', label: 'News', icon: '📰' },
    { href: '/auth/adminRegister', label: 'Register Admin', icon: '➕' },
  ];
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Mobile Toggle Button */}
        <div className="md:hidden flex justify-between items-center px-4 py-3 bg-white shadow-md">
          <h2 className="text-xl font-bold text-blue-800">Admin Panel</h2>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className="flex flex-1">
          {/* Sidebar */}
          <aside
            className={`${sidebarOpen ? 'block' : 'hidden'
              } md:flex flex-col w-64 bg-gradient-to-b from-blue-100 to-blue-50 shadow-lg transition-all duration-300 z-10 absolute md:relative`}
          >
            <div>
              {/* Panel Title */}
              <div className="px-6 py-4 border-b border-blue-200 hidden md:block">
                <h2 className="text-2xl font-bold text-blue-800">Admin Panel</h2>
              </div>

              {/* Navigation Links */}
              <nav className="mt-4 px-4 space-y-3 text-sm font-medium">
                {navLinks.map(({ href, label, icon }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-black hover:bg-blue-200 transition-all duration-200"
                  >
                    <span className="text-xl">{icon}</span>
                    <span>{label}</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Logout */}
            <div className="px-6 py-4 border-t border-blue-200 mt-auto">
              <LogoutButton />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6 md:ml-0">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold text-gray-800">
                Welcome, {username} 👋
              </h1>
              <p className="text-gray-500">Here’s what’s happening today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-blue-100">
                <CardContent className="p-6">
                  <h2 className="text-lg text-gray-700">Total Users</h2>
                  <p className="text-3xl font-bold">{stats.totalUsers}</p>
                </CardContent>
              </Card>
              <Card className="bg-green-100">
                <CardContent className="p-6">
                  <h2 className="text-lg text-gray-700">Total Doctors</h2>
                  <p className="text-3xl font-bold">{stats.totalDoctors}</p>
                </CardContent>
              </Card>
              <Card className="bg-yellow-100">
                <CardContent className="p-6">
                  <h2 className="text-lg text-gray-700">Appointments</h2>
                  <p className="text-3xl font-bold">{stats.totalAppointments}</p>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>



    </>

  );
}
