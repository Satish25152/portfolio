import { faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Education() {
  const education = [
    {
      title: 'Master of Computer Applications',
      institution: 'Mepco Schlenk Engineering College',
      duration: '2022 – 2024'
    },
    {
      title: 'Bachelor of Computer Science',
      institution: 'NMSS Vellaichamy Nadar College',
      duration: '2019 – 2022'
    }
  ]

  return (
    <div className='p-5 flex-1 md:ps-0'>
        <h2 className='text-3xl font-bold text-blue-500 mb-8 flex items-center gap-2'>
          <FontAwesomeIcon icon={faUserGraduate} className='h-8 w-8 text-blue-500' /> Education
        </h2>
        <div className='flex flex-col md:flex-row gap-5'>
          {education.map((exp, idx) => (
            <div key={idx} className='bg-white border-l-4 border-green-500 shadow-md rounded-lg p-5 flex-1'>
              <p className='text-xl font-semibold text-blue-500'>{exp.title}</p>
              <p className='text-gray-600 italic'>{exp.institution}</p>
              <p className='text-gray-700 mt-1'>{exp.duration}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Education