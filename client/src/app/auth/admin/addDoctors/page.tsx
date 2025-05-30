



"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


import { Button } from "@/components/ui/button";


interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  education: string[];
  experience: string;
  bio: string;
  image: string;
}

const specializations = [
  "Cardiologist",
  "Dermatologist",
  "Neurologist",
  "Pediatrician",
  "Orthopedic",
  "Psychiatrist",
  "Dentist",
  "ENT Specialist",
];

const DoctorPage = () => {
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [education, setEducation] = useState<string[]>([]);
  const [newEducation, setNewEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [editingDoctorId, setEditingDoctorId] = useState<string | null>(null);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/doctors");
      setDoctors(res.data);
    } catch (err) {
      console.error("Failed to fetch doctors", err);
      toast.error("Could not fetch doctor list");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const handleAddEducation = () => {
    if (newEducation.trim()) {
      setEducation([...education, newEducation.trim()]);
      setNewEducation("");
    }
  };

  const resetForm = () => {
    setName("");
    setSpecialization("");
    setExperience("");
    setBio("");
    setEducation([]);
    setNewEducation("");
    setImage(null);
    setEditingDoctorId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image && !editingDoctorId) return toast.error("Please upload an image.");

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("specialization", specialization);
      formData.append("experience", experience);
      formData.append("bio", bio);
      formData.append("education", education.join(","));
      if (image) formData.append("imageFile", image);

      if (editingDoctorId) {
        const res = await axios.put(
          `http://localhost:5000/api/doctors/${editingDoctorId}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setDoctors((prev) =>
          prev.map((doc) => (doc._id === editingDoctorId ? res.data : doc))
        );
        toast.success("Doctor updated successfully!");
      } else {
        const res = await axios.post("http://localhost:5000/api/doctors", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setDoctors((prev) => [...prev, res.data]);
        toast.success("Doctor added successfully!");
      }

      resetForm();
    } catch (err) {
      console.error("Error submitting form", err);
      toast.error("Failed to submit doctor");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/doctors/${id}`);
      setDoctors(doctors.filter((doc) => doc._id !== id));
      toast.success("Doctor deleted successfully!");
    } catch (err) {
      console.error("Failed to delete doctor", err);
      toast.error("Delete failed");
    }
  };

  const handleEdit = (doctor: Doctor) => {
    setEditingDoctorId(doctor._id);
    setName(doctor.name);
    setSpecialization(doctor.specialization);
    setEducation(doctor.education);
    setExperience(doctor.experience);
    setBio(doctor.bio);
    setImage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (

    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
        <Toaster position="top-center" />

        <main className="flex-grow py-10">
          <h1 className="text-4xl font-bold mb-10 text-center text-blue-800 py-3">
            👩‍⚕️ {editingDoctorId ? "Edit Doctor" : "Add New Doctor"}
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-6xl mx-auto"
          >
            {/* Doctor Name */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Doctor Name</label>
              <input
                type="text"
                placeholder="Enter full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Specialization */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Specialization</label>
              <select
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select specialization</option>
                {specializations.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Experience</label>
              <input
                type="text"
                placeholder="e.g., 5 years"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Image Upload */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Profile Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={!editingDoctorId}
              />
            </div>

            {/* Bio */}
            <div className="col-span-1 md:col-span-2 flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Short Bio</label>
              <textarea
                placeholder="Write a short bio..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg resize-none h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Education */}
            <div className="col-span-1 md:col-span-2">
              <label className="block font-semibold mb-2 text-gray-700">Education</label>
              <div className="flex flex-col sm:flex-row gap-2 items-center">
                <input
                  type="text"
                  placeholder="Enter education qualification"
                  value={newEducation}
                  onChange={(e) => setNewEducation(e.target.value)}
                  className="p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button
                  type="button"
                  onClick={handleAddEducation}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded transition"
                >
                  Add
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {education.map((edu, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {edu}
                  </span>
                ))}
              </div>
            </div>

            {/* Submit / Cancel Buttons */}
            <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded font-semibold transition w-full sm:w-auto"
              >
                {editingDoctorId ? "Update Doctor" : "Submit Doctor"}
              </Button>
              {editingDoctorId && (
                <Button
                  type="button"
                  onClick={resetForm}
                  className="bg-blue-500 hover:bg-gray-600 text-white py-3 px-6 rounded font-semibold transition w-full sm:w-auto"
                >
                  Cancel
                </Button>
              )}
            </div>
          </form>

          <h2 className="text-3xl text-center py-3 font-semibold mb-6 text-gray-800">
            📋 Doctors List
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.map((doc) => (
              <div
                key={doc._id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
              >
                <div className="p-2 pb-0">
                  <img
                    src={`http://localhost:5000${doc.image}`}
                    alt={doc.name}
                    className="w-full h-40 object-cover rounded mb-3"
                  />
                </div>

                <div className="p-4 pt-0 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900">{doc.name}</h3>
                  <span className="text-blue-600 text-sm font-medium">{doc.specialization}</span>
                  <span className="text-sm text-gray-500">{doc.experience}</span>
                  <p className="text-sm text-gray-700 mt-1 line-clamp-3">{doc.bio}</p>

                  <div className="mt-2 space-y-1">
                    {doc.education.map((edu, index) => (
                      <div key={`edu-${doc._id}-${index}`} className="text-red-500 text-xs">
                        {edu}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-4">
                    <button
                      onClick={() => handleEdit(doc)}
                      className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded transition duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(doc._id)}
                      className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded transition duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>

  );
};

export default DoctorPage;