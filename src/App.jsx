import ME from './assets/image.png'
import HTML from './assets/html-5-svgrepo-com.svg'
import CSS from './assets/css-3-svgrepo-com.svg'
import TAILWIND from './assets/tailwind-svgrepo-com.svg'
import JS from './assets/js-svgrepo-com.svg'
import REACT from './assets/react-svgrepo-com.svg'
import NODEJS from './assets/node-js-svgrepo-com.svg'
import NPM from './assets/npm-svgrepo-com.svg'
import GIT from './assets/git-svgrepo-com.svg'
import GITHUB from './assets/github-svgrepo-com.svg'
import PROJECT1 from './assets/proyecto-cabañas.jpeg'

export function App () {
  return (
    <main className='flex flex-col items-center'>
      <section>
        <h1 className='text-center font-bold text-2xl'>Juan Ignacio Alvarez</h1>
        <img src={ME} className='m-auto mt-5 rounded-3xl h-80' />
        <button className='border'>DOWNLOAD CV</button>
        <p className='text-center mt-4'>Soy desarrollador front end trainee, técnico electrónico y estudiante de Lic. en ciencias de la computación. Apasionado por el mundo del desarrollo web. Con ganas de crecer profesionalmente, aprender y tener mis primeras experiencias laborales.</p>

        <div className='flex flex-wrap gap-6 justify-center p-7'>
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

      <section>
        <h3 className='text-center font-bold text-xl mt-10 mb-4'><u>PROJECTS</u></h3>
        <div className='rounded-md h-60 w-72 flex flex-col items-center justify-evenly border shadow-md hover:scale-105 transition-all cursor-pointer'>
          <h4 className='font-bold'>CABAÑAS LA ARBOLEDA</h4>
          <img src={PROJECT1} className='p-2' />
        </div>
      </section>

      <footer className='bg-black text-white w-full mt-6'>
        <p className='text-center'>©️ Todos los derechos reservados.</p>
      </footer>
    </main>
  )
}
