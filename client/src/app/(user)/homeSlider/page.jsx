// 'use client';
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';

// const HomeSlider = () => {
//   const [images, setImages] = useState([]);
//   const [current, setCurrent] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchImages() {
//       try {
//         const res = await fetch('http://localhost:5000/api/image/all');
//         const data = await res.json();
//         setImages(data); // or setImages(data.images) based on API
//         setLoading(false);
//       } catch (error) {
//         console.error('Failed to fetch images:', error);
//         setLoading(false);
//       }
//     }

//     fetchImages();
//   }, []);

//   useEffect(() => {
//     if (images.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//     }, 5000); // Change image every 4 seconds

//     return () => clearInterval(interval);
//   }, [images]);

//   if (loading) return <p className="text-center py-5">Loading images...</p>;
//   if (images.length === 0) return <p className="text-center py-5">No images found</p>;

//   return (
//     <section
//       className="home-slider position-relative"
//       style={{ height: '100vh', width: '100vw' }}
//     >
//       {/* Text Overlay */}
//       <div
//         className="position-absolute text-white p-4 fade-in"
//         style={{
//           top: '50%',
//           left: '50px',
//           transform: 'translateY(-50%)',
//           maxWidth: '40%',
//           zIndex: 10,
//           borderRadius: '8px',
//         }}
//       >
//         <p className="text-uppercase small fw-bold mb-2">Welcome to Medcare</p>
//         <h1 className="display-4 fw-bold">
//           Taking care of your health is our top priority.
//         </h1>
//         <p className="mt-3 mb-4 fw-bold">
//           Being healthy is more than just not getting sick. It entails mental,
//           physical, and social well-being. It's not just about treatment, it's about healing.
//         </p>
//         <Link href="/Appointment">
//           <button className="btn btn-primary btn-lg">Book An Appointment</button>
//         </Link>
//       </div>

//       {/* Animated Background Image */}
//       <div
//         key={images[current]?.imageUrl} // Forces re-animation on image change
//         className="slider-image zoom-out"
//         style={{
//           height: '100vh',
//           width: '100vw',
//           backgroundImage: `url(${images[current]?.imageUrl})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           filter: 'brightness(0.7)',
//         }}
//       />

      
//     </section>
//   );
// };

// export default HomeSlider;
'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HomeSlider = () => {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch('http://localhost:5000/api/image/all');
        const data = await res.json();
        setImages(data); // or setImages(data.images) based on API
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch images:', error);
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images]);

  if (loading) return <p className="text-center py-5">Loading images...</p>;
  if (images.length === 0) return <p className="text-center py-5">No images found</p>;

  return (
    <section
      className="home-slider position-relative"
      style={{   width: '100%',
        height: '100vh',
        minHeight: '100svh',
        overflow: 'hidden', }}
    >
      {/* Text Overlay */}
      <div
        className="position-absolute text-white p-3 p-sm-4"
        style={{
          top: '50%',
          left: '5%',
          right: '5%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          borderRadius: '8px',
          maxWidth: '90%',
          // backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      >
        <p className="text-uppercase small fw-bold mb-2">Welcome to Medcare</p>
        <h1 className="fw-bold display-6 display-md-4">
          Taking care of your health <br /> is our top priority.
        </h1>
        <p className="mt-3 mb-4 fw-bold d-none d-sm-block">
          Being healthy is more than just not getting sick. It entails mental, 
          physical, <br /> and social well-being. It's not just about treatment, it's about healing.
        </p>
        <Link href="/Appointment">
          <button className="btn btn-primary btn-lg">Book An Appointment</button>
        </Link>
      </div>

      {/* Background Image */}
      <div
        key={images[current]?.imageUrl}
        className="slider-image zoom-out"
        style={{
          height: '100vh',
          width: '100vw',
          
          backgroundImage: `url(${images[current]?.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />
    </section>
  );
};

export default HomeSlider;
