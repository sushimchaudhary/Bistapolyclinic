"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface Service {
  _id: string;
  image: string;
  title: string;
  description: string;
}

const AddServicesPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [servicesList, setServicesList] = useState<Service[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/services/all");
      setServicesList(res.data);
    } catch (err) {
      console.error("Fetch services error", err);
      toast.error("Could not load services");
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setImage(null);
    setEditingId(null);
    if (formRef.current) formRef.current.reset();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image && !editingId) return toast.error("Image is required!");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      if (image) formData.append("image", image);

      if (editingId) {
        const res = await axios.put(
          `http://localhost:5000/api/services/${editingId}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setServicesList((prev) =>
          prev.map((item) => (item._id === editingId ? res.data : item))
        );
        toast.success("Service updated!");
      } else {
        const res = await axios.post(
          "http://localhost:5000/api/services",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setServicesList((prev) => [...prev, res.data]);
        toast.success("Service added!");
      }

      resetForm();
    } catch (err) {
      console.error("Submit error", err);
      toast.error("Submit failed");
    }
  };

  const handleEdit = (item: Service) => {
    setTitle(item.title);
    setDescription(item.description);
    setEditingId(item._id);
    setImage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/services/${id}`);
      setServicesList(servicesList.filter((item) => item._id !== id));
      toast.success("Service deleted!");
    } catch (err) {
      console.error("Delete error", err);
      toast.error("Delete failed");
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <Toaster position="top-center" />
      <main className="container py-5 flex-grow-1">
        <h1 className="text-center fw-bold text-success mb-5 fs-1">
          🏥 {editingId ? "Edit Service" : "Add Service"}
        </h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white rounded-4 shadow p-4 p-md-5 mb-5"
        >
          <div className="row g-4">
            {/* Title */}
            <div className="col-md-6">
              <input
                type="text"
                placeholder="Service Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control p-3 rounded-3"
                required
              />
            </div>

            {/* Image Upload */}
            <div className="col-md-6">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="form-control p-3 rounded-3"
                required={!editingId}
              />
            </div>

            {/* Description */}
            <div className="col-12">
              <textarea
                placeholder="Service Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control p-3 rounded-3"
                rows={4}
                required
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
            <button
              type="submit"
              className="btn btn-success px-4 py-2 fw-semibold"
            >
              {editingId ? "Update Service" : "Submit Service"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="btn btn-secondary px-4 py-2 fw-semibold"
              >
                Cancel
              </button>
            )}
          </div>
        </form>

        <h2 className="text-center text-dark fw-semibold fs-3 mb-4">
          💼 Services List
        </h2>

        <div className="row g-4">
          {servicesList.map((item) => (
            <div className="col-sm-6 col-lg-4" key={item._id}>
              <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                <img
                  src={`http://localhost:5000${item.image}`}
                  alt={item.title}
                  className="card-img-top object-fit-cover"
                  style={{ height: "200px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{item.title}</h5>
                  <p className="card-text text-truncate">{item.description}</p>
                  <div className="mt-auto d-flex justify-content-between">
                    <button
                      onClick={() => handleEdit(item)}
                      className="btn btn-sm btn-outline-success"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-sm btn-outline-danger"
                    >
                      Delete
                    </button>
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

export default AddServicesPage;
