"use client"

import Wrapper from "../shared/Wrapper"
import HQuaterBox from "../shared/HQuaterBox"
import Image from "next/image"
// Images 

import { useState } from "react"

import { programsData } from "../../../data"
import Link from "next/link"



const Special = () => {

    const [selectedItem, setSelectedItem ] = useState("wmd")

    const selectedItemData = programsData.find((item) => item.slug === selectedItem)
   
    return (
        <section>
            <Wrapper>
                {/* header */}
                <div>
                    <h2 className="text-5xl font-bold whitespace-pre-line text-yellow-300 ">Specialized Tracks:</h2>
                    <p className="mt-3 text-xl text-slate-300 max-w-screen-sm">After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
                </div>
                <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8 ">
                    {/* content left */}
                    <div className="shadow-xl sticky top-28 self-start basis-8/12 rounded-xl border border-slate-200 py-8 px-8">
                        <h4 className="text-primary text-lg font-medium">Specialized Program</h4>

                        <h3 className="text-2xl font-bold max-w-md text-yellow-300">{selectedItemData?.header}</h3>
                        <p className="text-lg text-slate-300 mt-3 max-w-2xl">{selectedItemData?.description} </p>
                       <Link href={"https://www.piaic.org/"}>
                       
                        <button className="text-primary text-xl mt-4 underline flex gap-x-2 items-end"  >Learn More
                            <svg className="mb-1" width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2" />
                            </svg>

                        </button>
                       </Link>
                        <div className="flex flex-col md:flex-row gap-x-4 mt-8">
                            {
                                selectedItemData?.quarters.map((item) => (
                                    
                                      <HQuaterBox
                                        key={item.number}
                                        header={item.header}
                                        description={item.description}
                                        number={item.number}
                                        haveBorder={false}
                                    />
                                ))
                            }
                      

                        </div>
                    </div>
                    {/* Content right */}
                    <div className="  px-0 py-6 space-y-6 basis-4/12 items-center" >
                        {
                            programsData.map((item,i) => (

                                <div onClick={() => setSelectedItem(item.slug)} key={item.slug}className="flex gap-x-4 items-center cursor-pointer rounded-md hover:scale-105 duration-300">
                                    <div className="flex-shrink-0 h- w-28 " >
                                        {/* <div className="w-20 h-16 rounded bg-slate-400"></div> */}
                                        <Image src={item.image} alt={item.header} className={"h-32 w-48 object-cover "}/>
                                    </div>
                                    <div >
                                        <h4 className="text-primary font-medium ">Specialized Program</h4>
                                        <h3 className="text-lg sm:text-xl font-semibold w-40 sm:w-80 text-slate-300 ">{item.header}</h3>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>
                {/* for max margin */}
                        {/* <div className="h-screen"></div> */}
            </Wrapper>
        </section>
    )
}

export default Special