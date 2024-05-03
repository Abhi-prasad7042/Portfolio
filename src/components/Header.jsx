import { useState } from "react";

const Header = ()=>{

    const [toggle, setToggle] = useState(false)

    const clickHandler = ()=>{
        toggle? setToggle(false): setToggle(true)
    }

    return(
        <header className="bg-black text-white md:sticky md:top-0">
            <nav className="flex justify-between items-center w-[92%] mx-auto h-16 ">
                <div>
                    <h1 className=" w-16 md:text-2xl lg:text-s3xl text-xl font-bold text-[#047fd9]">Portfolio</h1>
                </div>
                <div className={`md:static absolute bg-black md:min-h-fit min-h-[40vh] left-0 ${toggle ? "top-[8%]" : "top-[-100%]"} md:w-auto w-full flex items-center px-5`}>
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 mx-auto mb-5 md:mb-0">
                        <li>
                            <a className="hover:text-[#0872BF]" href="#home">Home</a>
                        </li>
                        <li>
                            <a className="hover:text-[#0872BF]" href="#about">About</a>
                        </li>
                        <li>
                            <a className="hover:text-[#0872BF]" href="">Projects</a>
                        </li>
                        <li>
                            <a className="hover:text-[#0872BF]" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    {/* <button className="bg-[#0872BF] text-white font-medium md:px-5 md:py-2 px-3 py-1 text-sm rounded-full hover:bg-[#047fd9]">Download CV</button> */}
                    <a href="https://drive.google.com/file/d/1J3hRvnWoltAmq2s6mhWQ4txGXv31vA2k/view?usp=sharing" download="your-cv.pdf">
                        <button className="bg-[#0872BF] text-white font-medium md:px-5 md:py-2 px-3 py-1 text-sm rounded-full hover:bg-[#047fd9]">Download CV</button>
                    </a>

                    {
                        toggle?<i className="fa-solid fa-xmark text-3xl md:hidden" onClick={clickHandler}></i>:<i className="fa-solid fa-bars text-2xl md:hidden" onClick={clickHandler}></i>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header;