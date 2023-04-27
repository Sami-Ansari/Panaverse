import Wrapper from "../shared/Wrapper"

import { CoreTrackData } from "../../../data"
import Button from "../shared/Button"
import HQuaterBox from "../shared/HQuaterBox"
import Link from "next/link"


const CoreTracks = () => {
    const header = "Core Courses \n (Common in All Specializations):"
  return (
    <section className="mt-16 lg:mt-28">

        <Wrapper >

        {/* Content */}

        <div className="max-w-screen-md">
          <h4 className="text-primary font-semibold text-lg mt-4 ">Program of Studies</h4>
          <h2 className="text-3xl sm:text-5xl font-bold whitespace-pre-line text-yellow-300">{header}</h2>
          <p className="mt-3 text-xl text-slate-300 ">Every participant of the program will start by completing the following three core courses:</p>
          <div className="mt-4">
            <Link href={"https://www.piaic.org/"}>
            <Button text={"Learn More"} />
            </Link>
          </div>
        </div>


        {/* boxes */}
        <div className=" flex flex-col md:flex-row  my-20 gap-x-6 gap-y-6">
          {/* Map is a loop witch can return data */}
          {
            CoreTrackData.map((item,i) => (
              <HQuaterBox
                key={item.number}
                header={item.header}
                description={item.description}
                number={item.number}
                haveBorder={true}
              
              />

            ))
            }

            </div>
            <div>
        

            </div>


            
        </Wrapper>

    </section>

  )
}

export default CoreTracks