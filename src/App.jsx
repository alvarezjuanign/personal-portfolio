import { About } from './components/About'
import { Project } from './components/Projects'
import { Skills } from './components/Skills'
import { projects } from './mocks/projects.json'

export function App () {
  return (
    <main className='flex flex-col items-center'>
      <About />
      <Project projects={projects} />
      <Skills />
      <footer className='bg-[#3463fd] text-white w-full'>
        <p className='text-center'>©️ Todos los derechos reservados.</p>
      </footer>
    </main>
  )
}
