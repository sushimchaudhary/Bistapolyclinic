
// 'use client'
// import React, { useEffect, useState, useRef } from 'react';
// import Link from 'next/link';

// // You can replace these icons with any icon library you prefer (e.g., react-icons, fontawesome, etc.)
// const SoundIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="currentColor"
//     viewBox="0 0 24 24"
//     width="24"
//     height="24"
//   >
//     <path d="M5 9v6h4l5 5V4L9 9H5z" />
//   </svg>
// );

// const MuteIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="currentColor"
//     viewBox="0 0 24 24"
//     width="24"
//     height="24"
//   >
//     <path d="M16.5 12l4.5 4.5-1.5 1.5L15 13.5l-4.5 4.5H5v-6H3v-3h2V7.5h4.5l6-6v7.5l2.5-2.5 1.5 1.5L16.5 12z" />
//   </svg>
// );

// const HomeSlider = () => {
//   const [media, setMedia] = useState([]);
//   const [current, setCurrent] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [muted, setMuted] = useState(true); // start muted for autoplay rules

//   const videoRef = React.useRef(null);

//   useEffect(() => {
//     async function fetchMedia() {
//       try {
//         const res = await fetch('http://localhost:5000/api/image/all');
//         const data = await res.json();
//         setMedia(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Failed to fetch media:', error);
//         setLoading(false);
//       }
//     }
//     fetchMedia();
//   }, []);

//   useEffect(() => {
//     if (media.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev === media.length - 1 ? 0 : prev + 1));
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [media]);

//   const isVideo = (url) => /\.(mp4|webm|ogg)$/i.test(url);

//   useEffect(() => {
//     if (media.length === 0) return;
//     const currentMedia = media[current];
//     if (isVideo(currentMedia.imageUrl)) {
//       if (videoRef.current) {
//         videoRef.current.muted = muted;
//         if (!muted) videoRef.current.play().catch(() => {});
//       }
//     }
//   }, [current, muted, media]);

//   if (loading) return <p className="text-center py-10">Loading media...</p>;
//   if (media.length === 0) return <p className="text-center py-10">No media found</p>;

//   return (
//     <section
//       className="home-slider position-relative"
//       style={{ height: '100vh', width: '100vw' }}
//     >
//       {/* Mute/Unmute Toggle Button at right-Left */}
//    <button
//   onClick={() => setMuted(!muted)}
//   className="btn btn-light position-absolute d-flex align-items-center justify-content-center"
//   style={{
//     top: '20px',
//     right: '20px',
//     zIndex: 30,
//     width: '44px',
//     height: '44px',
//     borderRadius: '50%',
//     opacity: 0.8,
//     padding: 0,
//     cursor: 'pointer',
//   }}
//   aria-label={muted ? 'Unmute video' : 'Mute video'}
//   title={muted ? 'Unmute video' : 'Mute video'}
// >
//   {muted ? (
//     <MuteIcon color="red" />
//   ) : (
//     <SoundIcon color="blue" />
//   )}
// </button>


//       {/* Text Overlay */}
//       <div
//         className="position-absolute text-white p-4"
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

//       {/* Media Background */}
//       <div
//         className="slider-image position-absolute top-0 start-0 w-100 h-100"
//         style={{ zIndex: 1, overflow: 'hidden' }}
//       >
//         {isVideo(media[current]?.imageUrl) ? (
//           <video
//             ref={videoRef}
//             src={media[current].imageUrl}
//             autoPlay
//             muted={muted}
//             loop
//             className="w-100 h-100 object-cover"
//             style={{ filter: 'brightness(0.7)', objectFit: 'cover' }}
//             playsInline
//             controls={false}
//           />
//         ) : (
//           <div
//             style={{
//               backgroundImage: `url(${media[current].imageUrl})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               height: '100%',
//               width: '100%',
//               filter: 'brightness(0.7)',
//               transition: 'background-image 0.8s ease-in-out',
//             }}
//           />
//         )}
//       </div>

//       {/* Navigation Buttons
//       <button
//         onClick={() => setCurrent(current === 0 ? media.length - 1 : current - 1)}
//         className="position-absolute btn btn-light"
//         style={{ top: '50%', left: '20px', zIndex: 20, opacity: 0.7 }}
//         aria-label="Previous slide"
//       >
//         ‹
//       </button>
//       <button
//         onClick={() => setCurrent((current + 1) % media.length)}
//         className="position-absolute btn btn-light"
//         style={{ top: '50%', right: '20px', zIndex: 20, opacity: 0.7 }}
//         aria-label="Next slide"
//       >
//         ›
//       </button> */}
//     </section>
//   );
// };

// export default HomeSlider;




'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const SoundIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M5 9v6h4l5 5V4L9 9H5z" />
  </svg>
);

const MuteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M16.5 12l4.5 4.5-1.5 1.5L15 13.5l-4.5 4.5H5v-6H3v-3h2V7.5h4.5l6-6v7.5l2.5-2.5 1.5 1.5L16.5 12z" />
  </svg>
);

const HomeSlider = () => {
  const [media, setMedia] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    async function fetchMedia() {
      try {
        const res = await fetch('http://localhost:5000/api/image/all');
        const data = await res.json();
        setMedia(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch media:', error);
        setLoading(false);
      }
    }

    fetchMedia();
  }, []);

  useEffect(() => {
    if (media.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === media.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [media]);

  const isVideo = (url) => /\.(mp4|webm|ogg)$/i.test(url);

  useEffect(() => {
    const currentMedia = media[current];
    if (isVideo(currentMedia?.imageUrl) && videoRef.current) {
      videoRef.current.muted = muted;
      if (!muted) videoRef.current.play().catch(() => {});
    }
  }, [current, muted, media]);

  if (loading) return <p className="text-center py-10">Loading media...</p>;
  if (media.length === 0) return <p className="text-center py-10">No media found</p>;

  return (
    <section
      className="home-slider position-relative"
      style={{
        width: '100%',
        height: '100vh',
        minHeight: '100svh',
        overflow: 'hidden',
      }}
    >
      {/* Mute/Unmute Button */}
      <button
        onClick={() => setMuted(!muted)}
        className="btn btn-light position-absolute d-flex align-items-center justify-content-center"
        style={{
          top: '20px',
          right: '20px',
          zIndex: 30,
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          opacity: 0.8,
          padding: 0,
        }}
        aria-label={muted ? 'Unmute video' : 'Mute video'}
        title={muted ? 'Unmute video' : 'Mute video'}
      >
        {muted ? <MuteIcon /> : <SoundIcon />}
      </button>

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
        }}
      >
        <p className="text-uppercase small fw-bold mb-2">Welcome to Medcare</p>
        <h1 className="fw-bold display-6 display-md-4">
          Taking care of your health <br /> is our top priority.
        </h1>
        <p className="mt-3 mb-4 fw-bold d-none d-sm-block">
          Being healthy is more than just not getting sick. It entails mental, physical,
          <br /> and social well-being. It's not just about treatment, it's about healing.
        </p>
        <Link href="/Appointment">
          <button className="btn btn-primary btn-lg">Book An Appointment</button>
        </Link>
      </div>

      {/* Background Media */}
      <div
        key={media[current]?.imageUrl}
        className="slider-image zoom-out position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 1 }}
      >
        {isVideo(media[current]?.imageUrl) ? (
          <video
            ref={videoRef}
            src={media[current].imageUrl}
            autoPlay
            muted={muted}
            loop
            className="w-100 h-100"
            style={{
              objectFit: 'cover',
              filter: 'brightness(0.7)',
            }}
          />
        ) : (
          <div
            style={{
              backgroundImage: `url(${media[current].imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              width: '100%',
              filter: 'brightness(0.7)',
              transition: 'background-image 0.8s ease-in-out',
            }}
          />
        )}
      </div>
    </section>
  );
};

export default HomeSlider;
