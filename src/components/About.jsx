import ME from '../assets/me.webp'
import GITHUB from '../assets/github-svgrepo-com.svg'
import CV from '../assets/JuanAlvarezEN.pdf'
import LINKEDIN from '../assets/linkedin-svgrepo-com.svg'

export function About () {
  return (
    <section className='px-5 pt-10 h-screen max-w-4xl flex flex-col items-center md:justify-center'>
      <div className='flex flex-col items-center md:flex-row'>
        <img src={ME} alt='alvarez juan ignacio' className='rounded-full h-80 md:h-[500px]' />
        <div className='flex flex-col items-center max-w-[620px] mt-3 md:mx-4'>
          <h1 className='font-bold text-7xl cursor-default text-center mb-6 dark:text-white'>Juan Ignacio Alvarez</h1>
          <p className=' cursor-default text-lg mb-10 animate-fade-in-y dark:text-white md:p-3'>Developer Front End Junior, electronics technician and student of computer science. Looking forward to grow professionally, learn and develop my skills and have my first work experience.</p>
          <div className='flex gap-3'>
            <a href='https://github.com/alvarezjuanign'><img className='h-10' alt='github logo' src={GITHUB} /></a>
            <a href='https://www.linkedin.com/in/juanigz/'><img className='h-10' alt='linkedin logo' src={LINKEDIN} /></a>
            <button className='border border-black bg-[#3463fd] text-white font-semibold p-2 rounded-md hover:bg-white hover:text-black transition-all ease-in-out duration-500 flex gap-2'>
              <a target='_blank' href={CV} download='JuanAlvarez.pdf' rel='noreferrer'>Resume</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
