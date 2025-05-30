
'use client';

import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';

const HomeBanner = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [banners, setBanners] = useState([]);

  // Fetch existing banners from backend
  const fetchBanners = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/image/all');
      // Adjust based on your backend response structure
      // For example, if your API returns { images: [...] }, use res.data.images
      const data = Array.isArray(res.data) ? res.data : res.data.images || [];
      setBanners(data);
    } catch (error) {
      console.error('Error fetching banners:', error);
      toast.error('Failed to fetch banners');
    }
  };

  // On component mount, fetch banners once
  useEffect(() => {
    fetchBanners();
  }, []);

  // Upload selected image
  const handleImageUpload = async () => {
    if (!file) {
      toast.error('Please select an image first');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await axios.post('http://localhost:5000/api/image/upload', formData);

      // Assuming the backend returns the uploaded image URL in res.data.imageUrl
      setImageUrl(res.data.imageUrl || '');

      toast.success('Banner Image uploaded successfully!');

      // Reset file input and file state so user can upload again
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = null;

      // Refresh the banners list to include new image
      fetchBanners();
    } catch (error) {
      console.error('Banner Image Upload Error:', error);
      toast.error('Failed to upload image.');
    }
  };

  // Delete image by ID
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/image/${id}`);
      toast.success('Image deleted');
      fetchBanners();
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Failed to delete image');
    }
  };

  return (
    // <div className="mt-8 bg-white p-4 rounded">
    //   <Toaster position="top-right" />
    //   <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
    //     <h2 className="text-2xl font-semibold mb-4 text-gray-800">Upload Home Banner Image</h2>

    //     <input
    //       type="file"
    //       ref={fileInputRef}
    //       accept="image/*"
    //       onChange={(e) => {
    //         const files = e.target.files;
    //         if (files && files.length > 0) {
    //           setFile(files[0]);
    //         }
    //       }}
    //       className="block w-full text-gray-700 mb-4
    //         file:py-2 file:px-4 file:border-0
    //         file:text-sm file:font-semibold
    //         file:bg-blue-100 file:text-blue-700
    //         hover:file:bg-blue-200 cursor-pointer"
    //     />
    //     <div className="text-center">
    //       <button
    //         onClick={handleImageUpload}
    //         className="w-36 bg-blue-600 text-white font-medium py-2 rounded transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:scale-105"
    //       >
    //         Upload
    //       </button>
    //     </div>

    //   </div>

    //   {/* Show preview of uploaded image */}
    //   {imageUrl && (
    //     <div className="mt-4 text-center">
    //       <p className="text-sm text-gray-600 mb-2">Preview:</p>
    //       <img src={imageUrl} alt="Uploaded" className="w-72 rounded border mx-auto" />
    //     </div>
    //   )}

    //   {/* Display all banners */}
    //   {banners.length > 0 && (
    //     <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
    //       {banners.map((banner) => (
    //         <div
    //           key={banner._id}
    //           className="flex flex-col justify-between h-[300px] border rounded-lg shadow-md overflow-hidden bg-white"
    //         >
    //           <img
    //             src={banner.imageUrl}
    //             alt="banner"
    //             className="h-2/3 w-full object-cover p-2 rounded-2xl"
    //             loading="lazy"
    //           />

    //           <div className="p-3 text-center">
    //             <button
    //               onClick={() => handleDelete(banner._id)}
    //               className="bg-blue-600 rounded text-white text-sm font-medium py-2 px-4  hover:bg-dark-700 transition duration-200"
    //             >
    //               Delete
    //             </button>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   )}

    // </div>
    <div className="mt-8 bg-white p-4 rounded">
      <Toaster position="top-right" />
      <div className="max-w-sm mx-auto bg-white p-7 rounded-lg shadow-md text-center">
        <h2 className="fs-4 font-semibold mb-4 text-primary">Upload Home Banner Image</h2>

        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={(e) => {
            const files = e.target.files;
            if (files && files.length > 0) {
              setFile(files[0]);
            }
          }}
          className="block w-full text-gray-700 mb-4
        file:py-2 file:px-4 file:border-3
        file:text-sm file:font-semibold
        file:bg-blue-100 file:text-blue-700
        hover:file:bg-blue-200 cursor-pointer"
        />

        <div className="text-center">
          <button
            onClick={handleImageUpload}
            className="w-36 bg-blue-600 text-white font-medium py-2 rounded transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
          >
            Upload
          </button>
        </div>
      </div>

      {/* Show preview of uploaded image */}
      {imageUrl && (
        <div className="mt-4 text-center px-4">
          <p className="text-sm text-gray-600 mb-2">Preview:</p>
          <img src={imageUrl} alt="Uploaded" className="w-full max-w-xs rounded border mx-auto" />
        </div>
      )}

      {/* Display all banners */}
      {banners.length > 0 && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {banners.map((banner) => (
            <div
              key={banner._id}
              className="flex flex-col justify-between h-[300px] border rounded-lg shadow-md overflow-hidden bg-white"
            >
              <img
                src={banner.imageUrl}
                alt="banner"
                className="h-2/3 w-full object-cover p-2 rounded-2xl"
                loading="lazy"
              />

              <div className="p-3 text-center">
                <button
                  onClick={() => handleDelete(banner._id)}
                  className="bg-blue-600 rounded text-white text-sm font-medium py-2 px-4"
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





