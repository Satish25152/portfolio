import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './Footer'
import profileImg from '../assets/profile.png';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';
import Resume from '../assets/Resume.pdf'

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: false, // animation only once on scroll
    });
  }, []);
  return (
    <div className='flex flex-col min-h-screen bg-gray-900 text-white'>
         <div className='flex flex-col flex-1 overflow-auto md:px-[5rem]'>
            <div className='flex flex-col-reverse md:flex-row p-5 gap-5 md:min-h-screen md:gap-[5rem]'>
                <div data-aos="fade-right" className='flex flex-col flex-1 items-center justify-center text-center md:items-start md:text-start'>
                    <label className='text-[2rem] font-medium'>Hello, </label>
                    <label className='text-[2rem] font-medium'>I'm Satish V</label>
                    <label className='text-[2rem] text-teal-300 font-bold'>Full Stack Developer</label>
                    <label className='text-[1.2rem] mt-5 text-justify'>Who loves turning ideas into real, functional products. I enjoy working on both frontend and backend, ensuring everything I build is efficient, clean, and user-friendly. I’m always eager to learn new technologies and keep myself updated to build better solutions every day. Whether it’s designing an intuitive interface or developing robust APIs, I take pride in delivering high-quality work that makes an impact.</label>
                    <a download='Satish V Resume.pdf' href={Resume} className='text-center text-[1.2rem] bg-teal-500 hover:bg-teal-400 hover:shadow-xl hover:shadow-teal-300/50 text-white rounded-lg mt-5 p-3 w-[10rem] cursor-pointer'>Resume</a>
                </div>
                <div data-aos="fade-left" className='flex justify-center items-center'>
                    <img className='w-[15rem] h-[20rem] object-cover rounded-md bg-white' src={profileImg} alt='Profile Image' />
                </div>
            </div>         
            <div className='flex flex-col pb-5 '>
                <Experience/>
                <Education/>
            </div>   
            <Skills/>
            <Contact/>
         </div>
         <Footer/>
    </div>
  )
}

export default Home