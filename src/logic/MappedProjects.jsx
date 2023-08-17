import logoGithub from '../assets/github-svgrepo-com.svg'
import logoDeploy from '../assets/web-svgrepo-com.svg'

export function MappedProjects ({ projects }) {
  return (
    <section className='max-w-4xl my-9 px-5'>
      <h3 className='text-center mb-3 font-bold text-2xl underline dark:text-white'>
        Projects
      </h3>
      <article className='flex flex-row flex-wrap justify-center gap-4 w-full'>
        {projects.map((project) => (
          <div key={project.id} className='relative max-w-[400px]'>
            <img src={project.image} className='rounded-lg' />
            <div
              className='absolute top-0 bg-black/90 rounded-lg text-white h-full w-full p-3 opacity-0 hover:opacity-100 flex flex-col justify-center gap-4 transition-opacity duration-500 cursor-pointer'
            >
              <h3 className='text-lg font-bold'>{project.title}</h3>
              <p>{project.description}</p>
              <section
                className='flex w-full justify-around p-3'
              >
                <div className='flex gap-2'>
                  <a href={project.linkGithub}>
                    <img src={logoGithub} className='h-8' />
                  </a>
                  <a href={project.linkDeploy}>
                    <img src={logoDeploy} className='h-8 scale-95 bg-white rounded-full' />
                  </a>
                </div>
                <div className='flex'>
                  {project.techs.map((tech) => (
                    <img key={tech} src={tech} className='h-7' />
                  ))}
                </div>
              </section>
            </div>
          </div>
        ))}
      </article>
    </section>
  )
}
