import ME from '../assets/me.webp'
import HTML from '../assets/html-5-svgrepo-com.svg'
import CSS from '../assets/css-3-svgrepo-com.svg'
import TAILWIND from '../assets/tailwind-svgrepo-com.svg'
import JS from '../assets/js-svgrepo-com.svg'
import REACT from '../assets/react-svgrepo-com.svg'
import NPM from '../assets/npm-svgrepo-com.svg'
import GIT from '../assets/git-svgrepo-com.svg'
import GITHUB from '../assets/github-svgrepo-com.svg'
import CV from '../assets/JuanAlvarez.pdf'

export function Skills () {
  return (
    <section className='px-5 pt-10 h-screen flex flex-col items-center md:justify-center'>
      <div className='flex flex-col items-center md:flex-row'>
        <img src={ME} className='rounded-full h-80 md:h-[500px]' />
        <div className='flex flex-col items-center max-w-[620px] mt-3 md:mx-4'>
          <h1 className='font-bold text-7xl cursor-default text-center mb-6 dark:text-white'>Juan Ignacio Alvarez</h1>
          <p className='text-center cursor-default text-lg mb-10 animate-fade-in-y dark:text-white'>I'm Developer Front End Trainee, electronics technician and student of computer science degree. I desire to grow up professonally, learn, better oneself and have my first work experiences.</p>
          <button className='border border-black mt-2 bg-[#3463fd] text-white font-semibold p-2 rounded-md hover:bg-white hover:text-black transition-all ease-in-out duration-500 flex gap-2'>
            <a target='_blank' href={CV} download='Alvarez-Juan-CV' rel='noreferrer'>DOWNLOAD CV</a>
          </button>
        </div>
      </div>

      <div className='flex flex-wrap gap-7 justify-center pt-9 px-9'>
        <img src={HTML} className='h-10 animate-fade-in-y hover:scale-125 duration-500' />
        <img src={CSS} className='h-10 animate-fade-in-y hover:scale-125 duration-500' />
        <img src={JS} className='h-10 animate-fade-in-y hover:scale-125 duration-500' />
        <img src={TAILWIND} className='h-10 animate-fade-in-y hover:scale-125 duration-500' />
        <img src={REACT} className='h-10 animate-fade-in-y hover:scale-125 duration-500' />
        <img src={NPM} className='h-10 animate-fade-in-y hover:scale-125 duration-500' />
        <img src={GIT} className='h-10 animate-fade-in-y hover:scale-125 duration-500' />
        <img src={GITHUB} className='h-10 animate-fade-in-y hover:scale-125 duration-500' />
      </div>
    </section>
  )
}
