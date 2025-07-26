import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Courses from '../components/Courses';
import VideoSection from '../components/VideoSection';
import Trainers from '../components/Trainers';
import Schedule from '../components/Schedule';
import Gallery from '../components/Gallery';
import ClientReviews from '../components/ClientReviews';
import OurBlog from '../components/OurBlog';
// import GoogleMap from '../components/GoogleMap';
import Contact from '../components/Contact';
import Membership from '../components/Membership';
import BMI from '../components/BMI';

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* Slanting divider between Hero and About */}
      <div style={{ position: 'relative', width: '100%', height: '60px', marginTop: '-1px', background: 'transparent', zIndex: 1 }}>
        <svg viewBox="0 0 100 10" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '100%' }}>
          <polygon fill="white" points="0,10 100,0 100,10 0,10" />
        </svg>
      </div>
      <About />
      <Courses />
      {/* Slanting divider between Courses and Trainers */}
      <div style={{ position: 'relative', width: '100%', height: '100px', marginTop: '-1px', background: 'transparent', zIndex: 1 }}>
        <svg viewBox="0 0 100 10" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '100%' }}>
          <polygon fill="white" points="0,10 100,-4 100,10 0,10" />
        </svg>
      </div>
      <Trainers />
      <VideoSection />
      <ClientReviews />
      <Membership />
      <Schedule />
      <BMI />
      <OurBlog />
      <Contact />
      <div className="my-12" />
      <Gallery />
      {/* <GoogleMap /> */}
    </div>
  );
}

export default Home;