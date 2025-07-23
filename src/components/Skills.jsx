import { faGears } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactImg from '../assets/React.png'
import FlutterImg  from '../assets/Flutter.png'
import PhpImg from '../assets/PHP.png'
import PostgreSQLImg from '../assets/Postgresql.png'

function Skills() {
  const skills = [
    {
      title: 'React Js',
      image: ReactImg
    },
    {
      title: 'Flutter',
      image: FlutterImg
    },
    {
      title: 'PHP',
      image: PhpImg
    },
    {
      title: 'PostgreSQL',
      image: PostgreSQLImg
    }
  ]

  return (
    <div className='p-5 flex-1'>
        <h2 className='text-3xl font-bold text-blue-500 mb-8 flex items-center gap-2'>
          <FontAwesomeIcon icon={faGears} className='h-8 w-8 text-blue-500' /> Skills
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
          {skills.map((skill, idx) => (
            <div key={idx} className='transition delay-100 duration-300 ease-in-out hover:scale-105 border-1 border-gray-200 shadow-md rounded-lg p-5 flex flex-col justify-center items-center text-center'>
              <img className='h-[8rem] w-[8rem]' src={skill.image} alt='Logo' />
              <p className='text-gray-600 italic font-bold'>{skill.title}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Skills