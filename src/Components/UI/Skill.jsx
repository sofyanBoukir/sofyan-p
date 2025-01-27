export const Skill = ({image,description}) => {
  return (
    <div className='px-3 py-2 rounded-md flex gap-4 items-center hover:bg-gray-900 duration-300 cursor-pointer hover:scale-105'>
        <img src={image} alt="laravel" className="w-[60px] h-[60px]"/>
        <p className="text-sm font-normal">{description}</p>
    </div>
  )
}