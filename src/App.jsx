import { About } from './components/About'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

export function App () {
  return (
    <main className='flex flex-col items-center'>
      <About />
      <Projects />
      <Skills />
      <footer className='bg-[#3463fd] text-white w-full'>
        <p className='text-center'>©️ Todos los derechos reservados.</p>
      </footer>
    </main>
  )
}
