import React from 'react';
import NavBar from '../components/NavBar';
import NewsCard from '../components/NewsCard.jsx';
import { bg } from '../utils/config';
// Import your news item images
import freeDanceWorkshopImage from '../assets/images/events/event-1.webp';
import freeDanceWorkshopImage2 from '../assets/images/events/event-2.jpeg';
import julyIntake from '../assets/images/events/julyIntake.webp';
import augestIntake from '../assets/images/events/audust-new-intake.webp';
import rathworkshop from '../assets/images/events/WORKSHOP-3.webp'
import sepIntake from '../assets/images/events/sep.webp';
import wannam from '../assets/images/events/thumb-nail.webp';
import rathnapuraJanuaryIntake from '../assets/images/events/rathnapura-january-intake.webp';
import maharagamaWorkshop from '../assets/images/events/maharagamaWorkshop.webp';
import marchIntake from '../assets/images/events/March intake.webp';
import aprilIntake from '../assets/images/events/april intake.webp';


// Import your background image
const NewsPage = () => {
  const newsItems = [
    {
      id: 'news-11',
      imageUrl: aprilIntake,
      title: 'April Intake',
      description: 'April Intake for New Students is now open!\n' +
      'Join us for an exciting journey in dance. Enroll now to secure your spot!\n\n'+
      'Every Friday - 03:00 PM to 05:00 PM\n\n'+
      'Locations: \n- Colorful life skill development center, Katukurunda, Kalutara\n'+
      '- Studio moonlight & gig maharagama, Maharagama\n'+
      '- Damith Athukorale Dispensing Opticals, moragahayata, rathnapura.\n\n'+
      'Admission Fee: Rs. 1500\n'+
      'Mothly Fee: Rs. 2000',
    },
    {
      id: 'news-10',
      imageUrl: marchIntake,
      title: 'March Intake',
      description: 'March Intake for New Students is now open!\n' +
      'Join us for an exciting journey in dance. Enroll now to secure your spot!\n\n'+
      'Every Friday - 03:00 PM to 05:00 PM\n\n'+
      'Locations: \n- Colorful life skill development center, Katukurunda, Kalutara\n'+
      '- Studio moonlight & gig maharagama, Maharagama\n'+
      '- Damith Athukorale Dispensing Opticals, moragahayata, rathnapura.\n\n'+
      'Admission Fee: Rs. 1500\n'+
      'Mothly Fee: Rs. 2000',
    },
    {
      id: 'news-9',
      imageUrl: maharagamaWorkshop,
      title: 'Maharagama Workshop',
      description: 'Presented by Studio Dance Core and Groove Rapho\n' +
      'January 15\n'+
      '10.00 AM - 01.00 PM\n'+
      'Location: Dini Dance Studio, Maharagama (Near the Keels)\n'+
      'Open for all ages\n'+
      'No need to have any basic knowladge\n'+
      'Completely Free!',
    },
    {
      id: 'news-8',
      imageUrl: rathnapuraJanuaryIntake,
      title: 'Rathnapura January Intake',
      description: 'January Intake for New Students is now open!\n' +
      'Join us for an exciting journey in dance. Enroll now to secure your spot!\n'+
      'Every Friday - 03:00 PM to 05:00 PM\n'+
      'Location: Damith Athukorale Dispensing Opticals, moragahayata, rathnapura\n'+
      'Admission Fee: Rs. 1500\n'+
      'Mothly Fee: Rs. 2000',
    },
    {
      id: 'news-7',
      imageUrl: wannam,
      title: '18 වන්නම් A CINEMATIC DANCE COVER OUT NOW!',
      description: 'traditional dancing styles ( udarata/pahatharata), Indian baratha natyam and western dancing styles.\n'+
      'Choreographer and Director - Jayaruwan Prabodya\n'+
      'Dop - Tasindu wikramasinghe / Hiviru Dilneth'
    },
    {
      id: 'news-6',
      imageUrl: sepIntake,
      title: 'September Intake',
      description: 'September Intake for New Students is now open!\n' +
      'Join us for an exciting journey in dance. Enroll now to secure your spot!\n'+
      'Every Saturday - 10:00 AM to 12:00 PM\n'+
      'Location: Studio Dance Core, Shelidian International School, wava Road, Malabe\n'+
      'Admission Fee: Rs. 1000\n'+
      'Mothly Fee: Rs. 2000',
    },
    {
      id: 'news-5',
      imageUrl: rathworkshop,
      title: 'K FLEX DANCE X STUDIO DANCE CORE WORKSHOP',
      description: 'Free Dance workshop Aleart!\n\n' +
      'K Flex Dance X Studio Dance Core colloberation workshop is going to be held in Rathnapura\n\n'+
      'Location: Rathnapura vatarauma Road, Bees Academy\n'+
      'Artists: Kehansa Hansale, Jayaruwan Prabodya, Timal Damian\n'+
      'The Event is completely FREE!',
    },
    {
      id: 'news-4',
      imageUrl: augestIntake,
      title: 'Augest Intake',
      description: 'Augest Intake for New Students is now open!\n' +
      'Join us for an exciting journey in dance. Enroll now to secure your spot!\n'+
      'Every Saturday - 10:00 AM to 12:00 PM\n'+
      'Location: Studio Dance Core, Shelidian International School, wava Road, Malabe\n'+
      'Admission Fee: Rs. 1000\n'+
      'Mothly Fee: Rs. 2000',
    },
    {
      id: 'news-3',
      imageUrl: julyIntake,
      title: 'July Intake',
      description: 'July Intake for New Students is now open!\n' +
      'Join us for an exciting journey in dance. Enroll now to secure your spot!\n'+
      'Every Saturday - 10:00 AM to 12:00 PM\n'+
      'Location: Studio Dance Core, Shelidian International School, wava Road, Malabe\n'+
      'Admission Fee: Rs. 1000\n'+
      'Mothly Fee: Rs. 2000',
    },
    {
      id: 'news-1',
      imageUrl: freeDanceWorkshopImage2,
      title: 'FREE DAY',
      description: 'Every Month Last Day - Free Day\n' +
      'Date: June 28, 2025\n' +
      'Time: 10:00 AM - 12:00 PM\n' +
      'Location: Studio Dance Core, Shelidian International School, wava Road, Malabe\n',
    },
    {
      id: 'news-2',
      imageUrl: freeDanceWorkshopImage,
      title: 'Free Dance Workshop!',
      description: 'Join us for a fantastic free dance workshop this Saturday, July 5, 2025, at our Kalutara studio!\n'+
      'Learn basic choreography and meet our instructors. All skill levels welcome.\n' +
      'date: May 16, 2025\n' +
      'time: 02:00 PM - 05:00 PM\n' +
      'Location: Studio Dance Core, Kalutara',
    }
  ];

  return (
    <>
      <div className="sticky top-0 z-50 w-full">
        <NavBar setActivePage='news' />
      </div>
      <main
        className="min-h-screen text-gray-400 p-4 sm:p-6 md:p-8 flex flex-col items-center relative" // Added relative for pseudo-element (if using) or if needed for child positioning
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Keeps background fixed while content scrolls
          backgroundColor: 'rgba(0, 0, 0, 0.7)', // This creates the direct overlay on the main background
          backgroundBlendMode: 'multiply' // Optional: blends the background image with the color
        }}
      >
        {/* All content goes directly inside main, no extra overlay div needed if using rgba background-color */}
        {/* If you remove the rgba background-color and want a separate overlay:
        <div className="absolute inset-0 bg-black opacity-70"></div>
        */}

        <div className="relative z-10 w-full flex flex-col items-center"> {/* z-10 ensures content is above the pseudo-element or rgba background */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-center text-white">Studio Dance Core News</h1>
          <div className="max-w-xl sm:max-w-2xl md:max-w-4xl text-center mb-6 sm:mb-8 px-2">
            <p className="text-base sm:text-lg mb-3">
              Welcome to our News page! This is where we share all the latest updates, events, and exciting announcements from Studio Dance Core.
            </p>
            <p className="text-sm sm:text-base">
              Stay tuned for upcoming performances, workshop schedules, student achievements, and more!
            </p>
          </div>

          <div className="w-full max-w-xl sm:max-w-2xl md:max-w-4xl space-y-8 sm:space-y-10">
            {newsItems.map(item => (
              <NewsCard
                key={item.id}
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                date={item.date}
                time={item.time}
                location={item.location}
              />
            ))}
            {newsItems.length === 0 && (
              <p className="text-xl text-gray-400 text-center mt-10">No news updates at the moment. Please check back later!</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default NewsPage;