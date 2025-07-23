import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Experience() {
  const experiences = [
    {
      section: 'Experience',
      title: 'Full Stack Developer',
      company: 'Aiimtech Software System',
      duration: 'Jun 2024 - Jun 2025'
    },
    {
      section: 'Internship',
      title: 'Junior Developer',
      company: 'Aiimtech Software System',
      duration: 'Dec 2023 - May 2024'
    }
  ]

  return (
    <div className='p-5 flex-1'>
        <h2 className='text-3xl font-bold text-blue-500 mb-8 flex items-center gap-2'>
          <FontAwesomeIcon icon={faBriefcase} className='h-8 w-8 text-blue-500' /> Experience
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {experiences.map((exp, idx) => (
            <div key={idx} className='bg-white border-l-4 border-green-500 shadow-md rounded-lg p-5'>
              <p className='text-xl font-semibold text-blue-500'>{exp.title}</p>
              <p className='text-gray-600 italic'>{exp.company}</p>
              <p className='text-gray-700 mt-1'>{exp.duration}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Experience
