import Link from "next/link"
import Logo from "/public/logo.png"
import Image from "next/image"
import Wrapper from "../shared/Wrapper"
// import Wrapper from "../shared/Wrapper"

const Header = () => {
  return (

    <header className=" sticky top-0 z-10  max-w-screen-2xl mx-auto bg ">

      {/* <Wrapper> */}
        <div className="flex justify-between   py-4 px-3  items-center  ">
          {/* logo */}
          <div className="">
            {/* <h2 className="text-xl font-bold">Panaverse Dao</h2> */}
            <Image src={Logo} alt="Panaverse logo" />
          </div>
          {/* Navigation bar */}
          <ul className="flex space-x-8 font-medium text-yellow-300">
            <li>
              <Link href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link href={"https://www.piaic.org/"}>
                Courses
              </Link>
            </li>
          </ul>
        </div>
      {/* </Wrapper> */}

    </header>
  )
}

export default Header