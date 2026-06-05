import React, { useRef, useState } from 'react';
import heroVideoMp4 from '../assets/videos/home.mp4';
import heroVideoWebm from '../assets/videos/Home.webm';
import {
  logo, classesandevents, merch, headlogo, bg,
  servicesCover, productions, moto, bggradiant, TheDancer
} from '../utils/config';
import NavBar from '../components/NavBar';

import { useNavigate, useLocation } from 'react-router-dom';
// Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const HomePage = ({ setActivePage }) => {
  // Refs for scrolling to sections
  const productionsRef = useRef(null);
  const merchRef = useRef(null);
  const aboutUsRef = useRef(null);
  const latestNewsRef = useRef(null); // New ref for the latest news section

  const navigate = useNavigate();
  const location = useLocation();
  const [notFoundMessage, setNotFoundMessage] = useState(null);

  // Navigate to the About Us page
  const navigateToAboutUsPage = () => {
    navigate('/about-us');
  };

  // Navigate to the Classes page
  const navigateToClassesPage = () => {
    navigate('/classes');
  };

  // Navigate to the Merch page
  const navigateToMerchPage = () => {
    navigate('/merchs');
  };

  // Navigate to the Productions page
  const navigateToProductionsPage = () => {
    navigate('/productions');
  };

  // Navigate to the Lession page
  const navigateToServices = () => {
    navigate('/services2');
  };

  // Function to scroll to the Latest News section
  const scrollToLatestNews = () => {
    latestNewsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-transparent w-screen">
      {/* Sticky NavBar and Not Found Message */}
      <div className="sticky top-0 z-50 w-full">
        <NavBar setActivePage={setActivePage} />
        {notFoundMessage && (
          <div className="w-full bg-red-800 text-white p-4 text-center text-lg md:text-xl font-semibold">
            {notFoundMessage}
          </div>
        )}
      </div>
      <main
        className="min-h-screen w-full text-gray-400 flex flex-col items-center relative"
        style={{
          backgroundImage: `url(${bggradiant})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backgroundBlendMode: 'multiply',
        }}
      >
        {/* Hero Video Section */}
        <section className="relative w-screen h-[50vh] md:h-screen flex justify-center mt-0 pt-0">
          <video
            className="absolute w-full h-full object-cover opacity-100"
            autoPlay
            loop
            muted
            playsInline
            title="Studio Dance Core"
            poster={logo}
          >
            <source src={heroVideoWebm} type="video/webm" />
            <source src={heroVideoMp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Scroll Down Button */}
          <div className="absolute bottom-30 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center">
            <button
              onClick={scrollToLatestNews}
              className="animate-bounce p-4 rounded-full bg-transparent border-2 border-white backdrop-blur-sm hover:bg-white hover:bg-opacity-20 transition-all duration-300"
              aria-label="Scroll down to latest news"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 13l-7 7-7-7"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>
        </section>

        {/* Latest News */}
        <div ref={latestNewsRef} className="p-10 w-full bg-white flex flex-col items-center">
          <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
            {/* Text Section */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Video</h2>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">THE DANCER - MANOLOKA EPISODE II</h3>
              <p className="text-gray-700 leading-relaxed">
                The shadows have faded, and the mirrors have shattered. I am no one’s reflection. I am no one else..... but me.<br/>
                I am the architect of this motion. These steps, this breath, these scars; they are the only borders of my kingdom.<br/>
                My reality isn't found; it is forged. I am the dancer, the dance, and the god of my own making.
                
              </p>
              <a href="https://youtu.be/lyK3p7t1ihw?si=M7B-LdjQa8ciA1cI" target="_blank" className="mt-4 text-blue-600 font-semibold hover:underline">Watch now →</a>
            </div>
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center md:justify-end items-center">
              <img
                src={TheDancer}
                alt="manoloka episode 2"
                className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Productions & Classes Section - Flex container for side-by-side layout */}
        <div className="flex flex-col md:flex-row gap-4 w-screen mx-auto py-4">
          {/* Productions Section */}
          <section
            id="productions-section"
            className="w-full md:w-1/2 bg-transparent flex flex-col items-center"
          >
            <div
              onClick={navigateToProductionsPage}
              className="relative w-full cursor-pointer overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={productions}
                alt="An image representing dance classes"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 hover:bg-opacity-0 transition-opacity duration-300"></div>
            </div>
          </section>

          {/* Classes Section */}
          <section
            id="classes-section"
            className="w-full md:w-1/2 bg-transparent flex flex-col items-center"
          >
            <div
              onClick={navigateToClassesPage}
              className="relative w-full cursor-pointer overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={classesandevents}
                alt="An image representing dance classes"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 hover:bg-opacity-0 transition-opacity duration-300"></div>
            </div>
          </section>
        </div>

        {/* Moto */}
        <section className="relative w-screen h-[calc(100vw*3/4)] md:h-[80vh] lg:h-[90vh] flex justify-center mt-0 pt-0">
          <video
            className="absolute w-full h-full object-cover opacity-100"
            autoPlay
            loop
            muted
            playsInline
            title="We brings are to next level"
            poster={logo}
          >
            <source src={moto} type="video/webm" />
            <source src={heroVideoMp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        {/* Merch & Lessons Section - Flex container for side-by-side layout */}
        <div className="flex flex-col md:flex-row gap-4 w-screen mx-auto py-4">
          {/* Merch Section */}
          <section
            id="merch-section"
            className="w-full md:w-1/2 bg-transparent flex flex-col items-center"
          >
            <div
              onClick={navigateToMerchPage}
              className="relative w-full cursor-pointer overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={merch}
                alt="An image representing merchandise"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 hover:bg-opacity-0 transition-opacity duration-300"></div>
            </div>
          </section>

          {/* Services Section */}
          <section
            id="servicecs-section"
            className="w-full md:w-1/2 bg-transparent flex flex-col items-center"
          >
            <div
              onClick={navigateToServices}
              className="relative w-full cursor-pointer overflow-hidden rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={servicesCover}
                alt="An image representing sevices"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 hover:bg-opacity-0 transition-opacity duration-300"></div>
            </div>
          </section>
        </div>

        {/* About Us Section */}
        <section ref={aboutUsRef} className="p-8 w-full bg-gray-100 flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center">
            {/* Placeholder for the image */}
            <div className="w-full md:w-1/4 p-4 flex justify-center md:justify-start">
              <img
                src={headlogo}
                alt="An image representing Studio Dance Core"
                className="w-full h-auto max-w-xs"
              />
            </div>
            {/* The paragraph on the right side */}
            <div className="w-full md:w-3/4">
              <h2
                className="p-6 text-4xl md:text-4xl font-bold text-gray-800 text-center md:text-left"
                style={{
                  fontFamily: "'MetroPhotograph - Demo Version Regular'",
                  letterSpacing: '0.1em',
                  color: '#272727',
                }}
              >
                About Us
              </h2>
              <p className="font-sans text-base md:text-lg text-gray-600 text-justify p-6">
                Studio Dance Core is a vibrant hub for artistic expression located in the Sri Lanka.
                We are passionate about creating unique, high-quality video content that showcases our innovative ideas and talent.
                Our professional dance classes are specifically tailored for young Sri Lankan students and teenagers,
                providing a nurturing environment where they can develop their skills and creativity. Beyond the studio, we are dedicated
                to producing meaningful and enjoyable projects for our audience.
              </p>

              <div className="px-8 py-3 md:px-10 md:py-4">
                {/* Contact Information */}
                <p className="text-base md:text-lg text-gray-600 text-center flex-grow text-justify max-w-2xl">
                  <FontAwesomeIcon icon={faEnvelope} />{' '}
                  <a
                    href="mailto:studiodancecore@gmail.com"
                    className="text-blue-500 hover:underline"
                    aria-label="Send email to studiodancecore@gmail.com"
                  >
                    info@studiodancecore.lk
                  </a>
                </p>

                <p className="text-base md:text-lg text-gray-600 text-center flex-grow text-justify max-w-2xl">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-green-500" />{' '}
                  <a
                    href="https://wa.me/94713161550"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                    aria-label="Chat on WhatsApp with 0713161550"
                  >
                    0713161550
                  </a>
                </p>
                <br />
                <br />

                {/* See More Button */}
                <div className="flex justify-center md:justify-start">
                  <button
                    className="px-6 py-3 md:px-10 md:py-4 bg-[#272727] text-white text-base md:text-lg font-semibold rounded-full shadow-lg flex items-center justify-center
                                        hover:bg-[#EFD09E] transform hover:scale-105 transition-all duration-300 hover:text-[#272727]"
                    onClick={navigateToAboutUsPage}
                  >
                    See More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;