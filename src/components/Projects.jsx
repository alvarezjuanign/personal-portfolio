import GITHUB from '../assets/github-svgrepo-com.svg'
import DEPLOY from '../assets/web-svgrepo-com.svg'

export function Project ({ projects, techs }) {
  return (
    <section>
      <h3 className='text-center font-bold text-2xl underline dark:text-white'>Projects</h3>
      <div className='flex flex-wrap justify-center'>
        {
        projects.map(project => (
          <article className='p-5 flex flex-wrap justify-center gap-8' key={project.id}>
            <div className='rounded-md max-h-[500px] max-w-[400px] p-2 flex flex-col items-center justify-evenly border border-black shadow-xl dark:border-white dark:bg-gray-200'>
              <h4 className='font-bold cursor-default'>{project.title}</h4>
              <img className='p-2' src={project.image} />
              <div className='flex gap-2'>
                <a href={project.linkGithub}>
                  <img src={GITHUB} className='h-8' />
                </a>
                <a href={project.linkDeploy}>
                  <img src={DEPLOY} className='h-8 scale-95' />
                </a>
              </div>
              <p className='text-center cursor-default font-medium'>{project.description}</p>
              <div className='flex gap-4 m-3'>
                <img src={techs} alt='Technologies used in the project' />
              </div>
            </div>
          </article>
        )
        )
      }
      </div>
    </section>
  )
}
