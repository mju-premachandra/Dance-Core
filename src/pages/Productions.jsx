// src/pages/Productions.jsx
import React, { forwardRef } from 'react';
import { bg } from '../utils/config';
import NavBar from '../components/NavBar';
// Corrected paths: video files are in '../assets/videos/' relative to src/pages/
import productionsBannerVideoMp4 from '../assets/videos/manoloka.mp4'; // Reverted path
import productionsBannerVideoWebm from '../assets/videos/Manoloka.webm'; // Reverted path

// Import your local images
import TheDancerEYNK from '../assets/images/TheDancer EYNK.webp';
import TherDancer from '../assets/images/IMG_2658.JPG.webp';
import FirstAnniversaryWorkshop2 from '../assets/images/IMG_2276.JPG.webp';
import FirstAnniversaryWorkshop from '../assets/images/IMG_2036.JPG.webp';
import manoloka from '../assets/images/manoloka_theBeginning.webp';
import thePodcast from '../assets/images/thepodcast.webp';
import BREAKDOWN from '../assets/images/BREAKDOWN-thumbnail.webp';
import soon3 from '../assets/images/SOON.webp';
import soon4 from '../assets/images/SOON.webp';
import soon5 from '../assets/images/SOON.webp';
import { wannam } from '../utils/config';


// Reusable component for a video card
const VideoCard = ({ imageUrl, title, videoUrl }) => (
  <a
    href={videoUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="relative w-full aspect-video overflow-hidden group flex items-end p-2 sm:p-3
               hover:shadow-xl transition-shadow duration-300 rounded-xl"
    aria-label={`View ${title || 'video'}`}
  >
    <img
      src={imageUrl}
      alt={title || 'Coming Soon'}
      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
      <h3 className="text-white text-xs sm:text-sm md:text-base font-semibold line-clamp-2 px-2 pb-1 sm:px-3 sm:pb-2">
        {title || 'Coming Soon'}
      </h3>
    </div>
  </a>
);

const Productions = forwardRef((props, ref) => {
  const videos = [
    { id: 'TheDancer EYNK', imageUrl: TheDancerEYNK, title: 'THE DANCER | Everything you need to know', videoUrl: 'https://youtu.be/NgEuDuK1wYU' },
    { id: 'TheDancer', imageUrl: TherDancer, title: 'THE DANCER - MANOLOKA EPISODE II', videoUrl: 'https://youtu.be/lyK3p7t1ihw?si=M7B-LdjQa8ciA1cI' },
    { id: '1AnniversaryWorkshop2', imageUrl: FirstAnniversaryWorkshop2, title: 'First Anniversary Workshop Series | Kalutara', videoUrl: 'https://youtu.be/uRCVYBSZ3Eg' },
    { id: '1AnniversaryWorkshop', imageUrl: FirstAnniversaryWorkshop, title: 'First Anniversary Workshop Series | Maharagama', videoUrl: 'https://youtu.be/vJu2w3xNS5s' },
    { id: '18wannam', imageUrl: wannam, title: '18 wannam ( 18 වන්නම් ) | Cinematic Dance Cover | Studio Dance Core | Yuki Beats x Ravi Jay', videoUrl: 'https://youtu.be/4tCVRGLMFgc?si=C17ZfbKtSOaf33iH' },
    { id: 'BREAKDOWN', imageUrl: BREAKDOWN, title: 'A cinematic dance performance by TEAM HAVOC | Breakdown', videoUrl: 'https://youtu.be/9YKn7p7Eq_w?si=OPgJH-ObfAkDD3vy' },
    { id: 'thePodcast', imageUrl: thePodcast, title: 'The Podcast - Episode 01', videoUrl: 'https://youtu.be/mzWVjaS893U?si=8EkuvQxfj0Up5qHZ' },
    { id: 'manoloka-01', imageUrl: manoloka, title: 'Manoloka Episode 01 - THE BEGINNING', videoUrl: 'https://youtu.be/4B_bPZ_9v2o' },
    { id: 'soon-03', imageUrl: soon3, title: 'Coming Soon: Production 3' },
    { id: 'soon-04', imageUrl: soon4, title: 'Coming Soon: Production 4' },
    { id: 'soon-05', imageUrl: soon5, title: 'Coming Soon: Production 5' },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-black w-full">
      <div className="sticky top-0 z-50 w-full">
        <NavBar setActivePage='classes' />
      </div>
      <main
        className="min-h-screen w-full text-gray-400 p-4 sm:p-6 md:p-8 flex flex-col items-center relative" 
        style={{
          backgroundImage: `url(${bg})`, // Corrected syntax here
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Keeps background fixed while content scrolls
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // This creates the direct overlay on the main background
          backgroundBlendMode: 'multiply' // Optional: blends the background image with the color
        }}
      >
        <section ref={ref} className="p-4 sm:p-6 md:p-8 w-full text-white min-h-[600px] md:h-[913px] flex flex-col">
          <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          background: transparent;
        }
          
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
        background-color: transparent;
        border-radius: 20px;
        border: 2px solid transparent;
        }
 
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.3);
        border-color: rgba(255, 255, 255, 0.1);
        }
      `}</style>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 text-center uppercase" style={{ fontFamily: "'MetroPhotograph - Demo Version Regular'", letterSpacing: '0.1em', color: '#EFD09E' }}>
            Productions
          </h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-grow overflow-x-hidden">
            <div className="w-full md:w-1/2 flex-shrink-0 aspect-[4/3] md:h-full">
              <a href="/manoloka" className="block h-full">
                <div className="bg-orange-200 rounded-xl overflow-hidden h-full flex items-center justify-center">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    title="Manoloka"
                  >
                    <source src={productionsBannerVideoWebm} type="video/webm" />
                    <source src={productionsBannerVideoMp4} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </a>
            </div>

            <div className="w-full md:w-1/2 flex-grow overflow-y-auto pr-2 sm:pr-4 h-[400px] md:h-full custom-scrollbar rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                {videos.map((video) => (
                  <VideoCard
                    key={video.id}
                    imageUrl={video.imageUrl}
                    title={video.title}
                    videoUrl={video.videoUrl}
                  />
                ))}
              </div>
            </div>
          </div>
          <style>{`
        @media (max-width: 639px) {
          .aspect-video {
            aspect-ratio: 16/6 !important;
          }
        }
      `}</style>
        </section>
      </main>
    </div >
  );
});

export default Productions;