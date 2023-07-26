import HTML from '../assets/html-5-svgrepo-com.svg'
import CSS from '../assets/css-3-svgrepo-com.svg'
import TAILWIND from '../assets/tailwind-svgrepo-com.svg'
import JS from '../assets/js-svgrepo-com.svg'
import REACT from '../assets/react-svgrepo-com.svg'
import NPM from '../assets/npm-svgrepo-com.svg'
import GIT from '../assets/git-svgrepo-com.svg'
import GITHUB from '../assets/github-svgrepo-com.svg'

export function Skills () {
  return (
    <section className='my-11'>
      <h3 className='text-center text-2xl font-bold underline dark:text-white'>Skills</h3>
      <div className='flex flex-wrap gap-7 justify-center pt-9 px-9'>
        <img src={HTML} className='h-10 hover:scale-125' />
        <img src={CSS} className='h-10 hover:scale-125' />
        <img src={JS} className='h-10 hover:scale-125' />
        <img src={TAILWIND} className='h-10 hover:scale-125' />
        <img src={REACT} className='h-10 hover:scale-125' />
        <img src={NPM} className='h-10 hover:scale-125' />
        <img src={GIT} className='h-10 hover:scale-125' />
        <img src={GITHUB} className='h-10 hover:scale-125' />
      </div>
    </section>
  )
}
