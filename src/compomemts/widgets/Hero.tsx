import Wrapper from "../shared/Wrapper"
import Image from "next/image"
import "../widgets/page.css"
import meta from "../images/meta1.png"
import meta2 from "../images/meta2.jpg"
import Button from "../shared/Button"
import Link from "next/link"
const Hero = () => {
    return (
        <section  >
            <Wrapper >

                {/* left side */}
                <h4 className="text-white font-semibold text-lg mt-4  ">Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                <h1 className="text-5xl sm:text-6xl font-bold text-yellow-300 mt-10  ">Certified Web 3.0 and Metaverse Developer</h1>

                <div className="flex items-center flex-col md:flex-row ">

                    <div className="flex-1">

                        <p className="mt-6 text-xl text-slate-300 md:w-9/12 ">
                            A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet
                        </p>
                        <p className="mt-6 text-xl text-slate-300 md:w-9/12 ">
                            Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies
                        </p>


                        <div className="mt-16  text-center md:w-9/12 ">

                            <Link href={"https://portal.piaic.org/signup"}>
                                <Button text={"Enroll Now"} />

                            </Link>

                        </div>
                    </div>
                    {/* right side */}
                    <div className="flex-1 mt-0 xl:mt-14  ">
                        <Image className="rounded-lg "  src={meta} alt="Metaverse " />
                    </div>

                </div>

                {/* right side */}
                <h2 className=" mt-12 text-3xl sm:text-6xl font-bold text-yellow-300 text-center">What is Metaverse ?</h2>
                <div className="mt-8 flex  items-center  flex-col-reverse md:flex-row ">
                    {/* left side */}
                    <div className="flex-1 mt-16 ">
                        <Image className="" src={meta2} alt="Metaverse" />
                    </div>
                    <div className="flex-1">

                        <h4 className="mt-6 text-2xl text-slate-300 w-9/12 mx-auto max-w-screen-sm text-center ">Metverse</h4>
                        <p className="mt-6 text-xl text-slate-300 w-9/12 mx-auto max-w-screen-sm  ">A communal environment or virtual world made possible by the fusion of physical and virtual reality is referred to as the metaverse. Users can engage in shared interactions with a wide range of virtual objects and environments in this imagined networked virtual world. Various technology businesses are aggressively pursuing the science fiction idea of a metaverse in an effort to give users a seamless and immersive experience.</p>

                    </div>

                </div>

            </Wrapper>

        </section>
    )
}

export default Hero