import { logo_no_bg } from '../../assets'

const Logo = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <p className='py-5 text-7xl text-secondary font-bold text-center'> Weather Web App</p>
      </div>
      <div className="py-20 w-full flex justify-center items-center">
        <div className="h-4 rounded-lg w-[20%] bg-primary" />
        <img src={logo_no_bg} className='w-[40%] p-8' />
        <div className="h-4 rounded-lg w-[20%] bg-primary" />
      </div>
      <button className="px-3 py-2 m-2 bg-transparent border-2 border-secondary rounded-md text-2xl text-offWhite hover:border-slate-700 transition-all hover:translate-x-0.5 hover:-translate-y-0.5 delay-100 ease-in-out">Button</button>
    </div>
  )
}
export default Logo