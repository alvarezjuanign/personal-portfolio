import PROJECT1 from '../assets/proyecto-cabañas.jpeg'
import GITHUB from '../assets/github-svgrepo-com.svg'
import DEPLOY from '../assets/web-svgrepo-com.svg'

export function Project ({ projectName, descriptionProject }) {
  return (
    <section className='mb-9'>
      <article className='p-5 flex flex-wrap justify-center gap-8'>
        <div className='rounded-md max-h-[500px] max-w-[400px] p-2 flex flex-col items-center justify-evenly border border-black shadow-xl dark:border-white dark:bg-gray-200'>
          <h4 className='font-bold cursor-default'>{projectName}</h4>
          <img src={PROJECT1} className='p-2' />
          <div className='flex gap-2'>
            <a href='https://github.com/alvarezjuanign/Proyecto-UTN'>
              <img src={GITHUB} className='h-8' />
            </a>
            <a href='https://proyecto-utn-two.vercel.app'>
              <img src={DEPLOY} className='h-8 scale-95' />
            </a>
          </div>
          <p className='text-center cursor-default font-medium'>
            {descriptionProject}
          </p>
          <div className='flex gap-4 m-3'>
            <p className='border border-orange-500 rounded-xl px-2 cursor-default'>HTML</p>
            <p className='border border-blue-700 rounded-xl px-2 cursor-default'>CSS</p>
            <p className='border border-yellow-500 rounded-xl px-2 cursor-default'>JS</p>
          </div>
        </div>
      </article>
    </section>
  )
}
