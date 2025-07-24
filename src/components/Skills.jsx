import { faGears } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactImg from '../assets/React.png'
import FlutterImg from '../assets/Flutter.png'
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
    <div className='p-5'>
      <h2 className='text-3xl md:text-4xl font-bold text-teal-300 mb-10 flex items-center gap-3'>
        <FontAwesomeIcon icon={faGears} className='h-8 w-8 text-teal-300' />
        Skills
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className='bg-gray-800 group border border-teal-300 rounded-xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/50'
          >
            <img
              className='h-24 w-24 object-contain mb-4 transition-transform duration-300 group-hover:scale-110'
              src={skill.image}
              alt={`${skill.title} logo`}
            />
            <p className='font-semibold text-lg'>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
