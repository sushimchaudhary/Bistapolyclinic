"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import { Button } from "@/components/ui/button";

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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Toaster position="top-center" />


      <main className="max-w-6xl mx-auto px-4 py-12 flex-grow">
        <h1 className="text-4xl font-bold mb-12 text-center text-indigo-700">
          📰 {editingId ? "Edit News" : "Add News"}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-10 space-y-6 mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="p-4 border border-gray-300 rounded-lg bg-white"
              required={!editingId}
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-4 border border-gray-300 rounded-lg col-span-1 md:col-span-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              {editingId ? "Update News" : "Submit News"}
            </Button>
            {editingId && (
              <Button
                type="button"
                onClick={resetForm}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
              >
                Cancel
              </Button>
            )}
          </div>
        </form>

        <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center pb-3">
          📢 Latest News
        </h2>
        <div className="row g-4">
          {newsList.map((item) => (
            <div className="col-12 col-sm-6 col-lg-4" key={item._id}>
              <div className="card h-100 w-[100%] shadow-lg border-0 overflow-hidden hover-shadow transition">
                <div className="overflow-hidden">
                  <img
                    src={`http://localhost:5000${item.image}`}
                    className="card-img-top p-2 rounded"
                    alt={item.title}
                    style={{ height: "240px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-subtitle text-muted mb-1">By {item.author}</p>
                  <p className="card-text text-truncate" style={{ maxHeight: "60px" }}>
                    {item.description}
                  </p>
                  <div className="d-flex justify-content-between mt-3">
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => handleEdit(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(item._id)}
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

export default AddNewsPage;
