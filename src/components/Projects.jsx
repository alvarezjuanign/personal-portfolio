import PROJECT1 from '../assets/proyecto-cabañas.jpeg'
import GITHUB from '../assets/github-svgrepo-com.svg'
import DEPLOY from '../assets/web-svgrepo-com.svg'

export function Project () {
  return (
    <section className='p-5'>
      <h3 className='text-center font-bold text-xl mt-3 mb-4 cursor-default'><u>PROJECTS</u></h3>
      <div className='rounded-md h-[400px] w-full p-2 flex flex-col items-center justify-evenly border border-black shadow-xl'>
        <h4 className='font-bold cursor-default'>CABAÑAS LA ARBOLEDA</h4>
        <img src={PROJECT1} className='p-2' />
        <div className='flex gap-2'>
          <a href='https://github.com/alvarezjuanign/Proyecto-UTN'>
            <img src={GITHUB} className='h-8' />
          </a>
          <a href='https://proyecto-utn-two.vercel.app'>
            <img src={DEPLOY} className='h-8 scale-95' />
          </a>
        </div>
        <p className='text-center cursor-default'>
          Landing page de unas cabañas ubicadas en San luis.<br /> Tp final de un curso dado por la UTN.
        </p>
        <div className='flex gap-4 m-3'>
          <p className='border border-orange-500 rounded-xl px-2 cursor-default'>HTML</p>
          <p className='border border-blue-700 rounded-xl px-2 cursor-default'>CSS</p>
          <p className='border border-yellow-500 rounded-xl px-2 cursor-default'>JS</p>
        </div>
      </div>
    </section>
  )
}
