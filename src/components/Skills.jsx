import ME from '../assets/image.png'
import HTML from '../assets/html-5-svgrepo-com.svg'
import CSS from '../assets/css-3-svgrepo-com.svg'
import TAILWIND from '../assets/tailwind-svgrepo-com.svg'
import JS from '../assets/js-svgrepo-com.svg'
import REACT from '../assets/react-svgrepo-com.svg'
import NODEJS from '../assets/node-js-svgrepo-com.svg'
import NPM from '../assets/npm-svgrepo-com.svg'
import GIT from '../assets/git-svgrepo-com.svg'
import GITHUB from '../assets/github-svgrepo-com.svg'

export function Skills () {
  return (
    <section className='pt-5 px-5 flex flex-col items-center'>
      <h1 className='text-center font-bold text-2xl cursor-default'>Juan Ignacio Alvarez</h1>
      <img src={ME} className='m-auto mt-5 rounded-3xl h-80' />
      <button className='border border-black mt-2 bg-black text-white font-semibold p-2 rounded-md hover:bg-white hover:text-black transition-all flex gap-2'>
        DOWNLOAD CV
        {/* TODO: ADD FUNCIONALITY */}
      </button>
      <p className='text-center mt-4 cursor-default'>I'm Developer Front End Trainee, electronics technician and student of computer science degree. Passionate for web development. I desire to grow up professonally, learn, better oneself and have my first work experiences.</p>

      <div className='flex flex-wrap gap-6 justify-center pt-9 px-9'>
        <img src={HTML} className='h-10' />
        <img src={CSS} className='h-10' />
        <img src={JS} className='h-10' />
        <img src={TAILWIND} className='h-10' />
        <img src={REACT} className='h-10' />
        <img src={NODEJS} className='h-10' />
        <img src={NPM} className='h-10' />
        <img src={GIT} className='h-10' />
        <img src={GITHUB} className='h-10' />
      </div>
    </section>
  )
}
