import { Skills } from './components/Skills'
import { Project } from './components/Projects'

export function App () {
  return (
    <main className='flex flex-col items-center'>
      <Skills />
      <Project
        projectName='CABAÑAS LA ARBOLEDA'
        descriptionProject='Landing page de unas cabañas ubicadas en San luis. Tp final de un curso dado por la UTN.'
      />
      <footer className='bg-[#3463fd] text-white w-full'>
        <p className='text-center'>©️ Todos los derechos reservados.</p>
      </footer>
    </main>
  )
}
