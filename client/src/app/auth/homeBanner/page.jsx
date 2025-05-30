'use client';

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const HomeBanner = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [mediaUrl, setMediaUrl] = useState('');
  const [banners, setBanners] = useState([]);
  const [previews, setPreviews] = useState([]);

  const fetchBanners = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/image/all');
      const data = Array.isArray(res.data) ? res.data : res.data.images || [];
      setBanners(data);
    } catch (error) {
      console.error('Error fetching banners:', error);
      toast.error('Failed to fetch banners');
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const handleImageUpload = async () => {
    if (!file) {
      toast.error('Please select a file (image or video)');
      return;
    }

    const formData = new FormData();
    formData.append('media', file);

    try {
      const res = await axios.post('http://localhost:5000/api/image/upload', formData);
      toast.success('File uploaded successfully!');
      setMediaUrl(res.data.imageUrl || '');
      setFile(null);
      setPreviews([]); // Clear preview
      if (fileInputRef.current) fileInputRef.current.value = null;
      fetchBanners();
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload file.');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/image/${id}`);
      toast.success('File deleted');
      fetchBanners();
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Failed to delete file');
    }
  };

  const isVideo = (url) => /\.(mp4|webm|ogg)$/i.test(url);

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);

      // Show preview
      const url = URL.createObjectURL(selectedFile);
      setPreviews([url]);
    }
  };

  return (
    <div className="mt-8 bg-white p-4 rounded">
      <Toaster position="top-right" />

      {/* Upload Box */}
      <div className="max-w-sm mx-auto bg-white p-7 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Upload Home Banner</h2>

        <input
          type="file"
          ref={fileInputRef}
          accept="image/*,video/*"
          onChange={handleFileChange}
          className="block w-full text-gray-700 mb-4
          file:py-2 file:px-4 file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-100 file:text-blue-700
          hover:file:bg-blue-200 cursor-pointer rounded-md"
        />

        <button
          onClick={handleImageUpload}
          className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition"
        >
          Upload
        </button>

        {/* Preview */}
        {previews.length > 0 && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Preview:</p>
            <div className="flex gap-3 justify-center">
              {previews.map((url, idx) =>
                isVideo(url) ? (
                  <video
                    key={idx}
                    src={url}
                    controls
                    className="w-32 h-20 rounded-md object-cover border"
                  />
                ) : (
                  <img
                    key={idx}
                    src={url}
                    alt={`Preview ${idx + 1}`}
                    className="w-32 h-20 rounded-md object-cover border"
                  />
                )
              )}
            </div>
          </div>
        )}
      </div>

      {/* Gallery */}
      {banners.length > 0 && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {banners.map((banner) => (
            <div
              key={banner._id}
              className="flex flex-col justify-between h-[300px] border rounded-lg shadow-md overflow-hidden bg-white"
            >
              {isVideo(banner.imageUrl) ? (
                <video
                  src={banner.imageUrl}
                  controls
                  className="h-2/3 w-full object-cover p-2 rounded-2xl"
                />
              ) : (
                <img
                  src={banner.imageUrl}
                  alt="banner"
                  className="h-2/3 w-full object-cover p-2 rounded-2xl"
                  loading="lazy"
                />
              )}

              <div className="p-3 text-center">
                <button
                  onClick={() => handleDelete(banner._id)}
                  className="bg-blue-600 rounded text-white text-sm font-medium py-2 px-4 hover:bg-blue-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeBanner;
