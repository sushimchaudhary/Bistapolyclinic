



"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


interface News {
  _id: string;
  title: string;
  description: string;
  author: string;
  image: string;
}

const AddNewsPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [newsList, setNewsList] = useState<News[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setAuthor("");
    setImage(null);
    setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image && !editingId) return toast.error("Image is required!");

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("author", author);
      if (image) formData.append("image", image);

      if (editingId) {
        const res = await axios.put(
          `http://localhost:5000/api/news/${editingId}`,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setNewsList((prev) =>
          prev.map((item) => (item._id === editingId ? res.data : item))
        );
        toast.success("News updated!");
      } else {
        const res = await axios.post("http://localhost:5000/api/news", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setNewsList((prev) => [...prev, res.data]);
        toast.success("News added!");
      }

      resetForm();
    } catch (err) {
      console.error("Submit error", err);
      toast.error("Submit failed");
    }
  };

  const handleEdit = (item: News) => {
    setTitle(item.title);
    setDescription(item.description);
    setAuthor(item.author);
    setEditingId(item._id);
    setImage(null);
     window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/news/${id}`);
      setNewsList(newsList.filter((item) => item._id !== id));
      toast.success("News deleted!");
    } catch (err) {
      console.error("Delete error", err);
      toast.error("Delete failed");
    }
  };

  return (
    <section className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Toaster position="top-center" />


      <main className="container py-5">
        <h1 className="text-center text-primary fw-bold mb-5 fs-1">
          📰 {editingId ? "Edit News" : "Add News"}
        </h1>

        <form onSubmit={handleSubmit} className="bg-white p-4 p-md-5 rounded-4 shadow mb-5">
          <div className="row g-4">
            {/* News Title */}
            <div className="col-md-6">
              <label className="form-label fw-medium text-secondary">News Title</label>
              <input
                type="text"
                className="form-control p-3 rounded-3"
                placeholder="Enter news title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Author */}
            <div className="col-md-6">
              <label className="form-label fw-medium text-secondary">Author Name</label>
              <input
                type="text"
                className="form-control p-3 rounded-3"
                placeholder="Enter author name"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </div>

            {/* Image */}
            <div className="col-md-6">
              <label className="form-label fw-medium text-secondary">Upload Image</label>
              <input
                type="file"
                className="form-control p-3 rounded-3"
                accept="image/*"
                onChange={handleImageChange}
                required={!editingId}
              />
            </div>

            {/* Description */}
            <div className="col-md-12">
              <label className="form-label fw-medium text-secondary">Description</label>
              <textarea
                className="form-control p-3 rounded-3"
                rows="4"
                placeholder="Write a brief description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
            <button type="submit" className="btn btn-primary px-4 py-2 fw-semibold">
              {editingId ? "Update News" : "Submit News"}
            </button>
            {editingId && (
              <button type="button" onClick={resetForm} className="btn btn-secondary px-4 py-2 fw-semibold">
                Cancel
              </button>
            )}
          </div>
        </form>

        <h2 className="text-center text-dark fw-semibold fs-3 mb-4">📢 Latest News</h2>

        <div className="row g-4">
          {newsList.map((item) => (
            <div className="col-sm-6 col-lg-4" key={item._id}>
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <img
                  src={`http://localhost:5000${item.image}`}
                  className="card-img-top object-fit-cover"
                  style={{ height: "200px" }}
                  alt={item.title}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="text-muted small mb-1">By {item.author}</p>
                  <p className="card-text text-truncate">{item.description}</p>
                  <div className="mt-auto d-flex justify-content-between">
                    <button onClick={() => handleEdit(item)} className="btn btn-sm btn-outline-primary">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(item._id)} className="btn btn-sm btn-outline-danger">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>


    </section>
  );
};

export default AddNewsPage;
