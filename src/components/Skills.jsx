import HTML from '../assets/html-5-svgrepo-com.svg'
import CSS from '../assets/css-3-svgrepo-com.svg'
import TAILWIND from '../assets/tailwind-svgrepo-com.svg'
import JS from '../assets/js-svgrepo-com.svg'
import REACT from '../assets/react-svgrepo-com.svg'
import NPM from '../assets/npm-svgrepo-com.svg'
import GIT from '../assets/git-svgrepo-com.svg'
import GITHUB from '../assets/github-svgrepo-com.svg'
import ASTRO from '../assets/astro.svg'

export function Skills () {
  return (
    <section className='my-11'>
      <h3 className='text-center text-2xl font-bold underline dark:text-white'>
        Skills
      </h3>
      <div className='flex flex-wrap gap-7 justify-center pt-9 px-9'>
        <img src={HTML} alt='html logo' className='h-10 hover:scale-125' />
        <img src={CSS} alt='css logo' className='h-10 hover:scale-125' />
        <img src={JS} alt='javascript logo' className='h-10 hover:scale-125' />
        <img
          src={TAILWIND}
          alt='tailwind logo'
          className='h-10 hover:scale-125'
        />
        <img src={REACT} alt='react logo' className='h-10 hover:scale-125' />
        <img src={NPM} alt='npm logo' className='h-10 hover:scale-125' />
        <img src={GIT} alt='git logo' className='h-10 hover:scale-125' />
        <img src={GITHUB} alt='github logo' className='h-10 hover:scale-125' />
        <img src={ASTRO} alt='astro logo' className='h-10 hover:scale-125' />
      </div>
    </section>
  )
}
