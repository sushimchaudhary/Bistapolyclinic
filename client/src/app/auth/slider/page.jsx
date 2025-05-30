'use client';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const SliderManager = () => {
  const [slides, setSlides] = useState([]);
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchSlides();
  }, []);

  // Fetch slides from backend
  const fetchSlides = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/about-sliders');
      setSlides(res.data);
    } catch (error) {
      console.error('Failed to fetch slides:', error);
      toast.error('Failed to load slides');
    }
  };

  // When user selects files, create previews and store files
  const handleFilesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);

    const filePreviews = selectedFiles.map(file => URL.createObjectURL(file));
    setPreviews(filePreviews);
  };

  // Upload selected files to backend
  const handleUpload = async () => {
    if (files.length === 0) {
      toast.error('Please select image(s) to upload');
      return;
    }

    const formData = new FormData();
    files.forEach(file => formData.append('sliderImages', file));

    try {
      await axios.post('http://localhost:5000/api/about-sliders/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('Slider image(s) uploaded successfully!');
      setFiles([]);
      setPreviews([]);
      if (fileInputRef.current) fileInputRef.current.value = null;
      fetchSlides();
    } catch (error) {
      console.error(error);
      toast.error('Failed to upload image(s).');
    }
  };

  // Delete slide by id
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this slide?')) return;

    try {
      await axios.delete(`http://localhost:5000/api/about-sliders/${id}`);
      toast.success('Slide deleted successfully');
      setSlides(prev => prev.filter(slide => slide._id !== id));
    } catch (error) {
      console.error('Failed to delete slide:', error);
      toast.error('Failed to delete slide');
    }
  };

  return (
  
    <section>
      <div className="container py-5">
        <Toaster position="top-end" />

        {/* Upload Section */}
        <div className="mt-4 bg-white p-4 rounded shadow-sm mx-auto text-center" style={{ maxWidth: "500px" }}>
          <h2 className="h5 text-center mb-3 text-dark">
            Slider Image Upload (About Page)
          </h2>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFilesChange}
            multiple
            accept="image/*"
            className="form-control mb-3"
          />

          <button
            onClick={handleUpload}
            className="btn btn-primary w-40"
          >
            Upload Images
          </button>

          {previews.length > 0 && (
            <div className="mt-3">
              <p className="small text-muted mb-2">Image Preview:</p>
              <div className="d-flex flex-wrap gap-2">
                {previews.map((url, idx) => (
                  <img
                    key={idx}
                    src={url}
                    alt={`Preview ${idx + 1}`}
                    className="img-thumbnail"
                    style={{ width: "128px", height: "80px", objectFit: "cover" }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Manage Slider Images Section */}
        <div className="mt-5">
          <h3 className="text-center mb-4">Manage Slider Images</h3>

          {slides.length === 0 ? (
            <p className="text-muted text-center">No slider images uploaded.</p>
          ) : (
            <div className="row g-4">
              {slides.map((slide) => (
                <div key={slide._id} className="col-6 col-md-4 col-lg-3">
                  <div className="position-relative border rounded shadow-sm h-100">
                    <img
                      src={slide.imageUrl}
                      alt="slider"
                      className="w-100 p-2 rounded-xl"
                      style={{ height: "260px", objectFit: "cover"}}
                    />

                    <div className="p-2 text-truncate text-center small" title={slide.imageUrl}>
                      {slide.imageUrl}
                    </div>
                    <div className="text-center py-3 text-white">
                      <button
                        onClick={() => handleDelete(slide._id)}
                        className="p-2 text-center btn btn-primary"
                        title="Delete Slide"
                      >
                        ✖
                      </button>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </section>
  );
};

export default SliderManager;
