import Header from './Header'
import Footer from './Footer'
import profileImg from '../assets/profile.png';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';
import Resume from '../assets/Resume.pdf'

function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
         <Header/>
         <div className='flex flex-col flex-1 overflow-auto'>
            <div className='flex flex-col-reverse md:flex-row p-5 gap-5'>
                <div className='flex flex-col flex-1 items-center justify-center text-center md:items-start md:text-start'>
                    <label className='text-[2rem] font-medium'>Hello, </label>
                    <label className='text-[2rem] font-medium'>I'm Satish V</label>
                    <label className='text-[2rem] text-blue-500 font-bold'>Full Stack Developer</label>
                    <label className='text-[1.2rem] mt-5 text-justify'>Who loves turning ideas into real, functional products. I enjoy working on both frontend and backend, ensuring everything I build is efficient, clean, and user-friendly. I’m always eager to learn new technologies and keep myself updated to build better solutions every day. Whether it’s designing an intuitive interface or developing robust APIs, I take pride in delivering high-quality work that makes an impact.</label>
                    <a download='Satish V Resume.pdf' href={Resume} className='text-center text-[1.2rem] bg-green-500 hover:bg-green-600 shadow-md hover:shadow-xl text-white rounded-lg mt-5 p-3 w-[10rem] cursor-pointer'>Resume</a>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='w-[15rem] h-[20rem] object-cover rounded-md' src={profileImg} alt='Profile Image' />
                </div>
            </div>         
            <div className='flex flex-col md:flex-row bg-gray-50 pb-5'>
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