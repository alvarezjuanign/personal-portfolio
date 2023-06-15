import { Skills } from './components/Skills'
import { Project } from './components/Projects'

export function App () {
  return (
    <main className='flex flex-col items-center'>
      <Skills />

      <Project />

      <footer className='bg-black text-white w-full'>
        <p className='text-center'>©️ Todos los derechos reservados.</p>
      </footer>
    </main>
  )
}
