import { FC } from "react"

interface IProps {
    header: string,
    description: string,
    number: number,
    haveBorder?: boolean,
    
} 


    const HQuaterBox:FC<IProps> = ({header, description, number, haveBorder  = true })=> {
  return (
    // if we use && operator then we dont need to use else such as else in ?
    <div className={` rounded-md flex-1 relative flex flex-col justify-center px-8 py-16 ${haveBorder ? "border" : " " } 
 }`}>
    <h4 className="font-bold text-lg text-yellow-300 hover:text-teal-300 hover:scale-95 transition-allss">{header}</h4>
    <p className="mt-2 text-slate-300">{description}</p>
    <span className="absolute text-gray-700 -top-10 right-10 text-[170px] font-bold -z-10">{number}</span>
  </div>
  )
}

export default HQuaterBox