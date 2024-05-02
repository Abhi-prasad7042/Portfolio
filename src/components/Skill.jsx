
const Skill = ()=> {

    return(
        <section className="max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-5 mb-10">
            <h1 className="text-center text-2xl 2xl:text-2xl tracking-[1px] text-[#0872BF] font-semibold 2xl:mr-[6vw]">Skills</h1>
            <div className="py-5 text-white flex flex-col md:flex-row justify-around items-center md:gap-4 gap-2 mx-auto">

                <div className="md:w-1/2 w-full ">
                    <ul className="text-lg leading-10 sm:ml-5 md:ml-8 xl:ml-10 2xl:ml-0 ">
                        <li className="flex items-center justify-between">
                            <p className="text-[18px]">Python</p>
                            <div className="bg-black w-[50%] h-1.5 rounded-full 2xl:mr-32 ">
                                <div className="bg-[#0872BF] rounded-full h-1.5 w-[72%] "></div>
                            </div>
                        </li>

                        <li className="flex items-center justify-between">
                            <p className="text-[18px]">Machine Learning</p>
                            <div className="bg-black w-[50%] h-1.5 rounded-full 2xl:mr-32">
                                <div className="bg-[#0872BF] rounded-full h-1.5 w-[85%]"></div>
                            </div>
                        </li>

                        <li className="flex items-center justify-between">
                            <p className="text-[18px]">Deep Learning</p>
                            <div className="bg-black w-[50%] h-1.5 rounded-full 2xl:mr-32">
                                <div className="bg-[#0872BF] rounded-full h-1.5 w-[73%]"></div>
                            </div>
                        </li>
                        
                        <li className=" flex items-center justify-between">
                            <p className="text-[18px]">Data Analysis</p>
                            <div className="bg-black w-[50%] h-1.5 rounded-full 2xl:mr-32">
                                <div className="bg-[#0872BF] rounded-full h-1.5 w-[80%]"></div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="md:w-1/2 w-full md:ml-14 ">
                <ul className="text-lg leading-10 sm:ml-5 md:ml-8 xl:ml-10 2xl:ml-0 ">
                        <li className="flex items-center justify-between">
                            <p className="text-[18px]">Django</p>
                            <div className="bg-black w-[50%] h-1.5 rounded-full 2xl:mr-48 md:mr-20">
                                <div className="bg-[#0872BF] rounded-full h-1.5 w-[64%]"></div>
                            </div>
                        </li>

                        <li className="flex items-center justify-between">
                            <p className="text-[18px]">React</p>
                            <div className="bg-black w-[50%] h-1.5 rounded-full 2xl:mr-48 md:mr-20">
                                <div className="bg-[#0872BF] rounded-full h-1.5 w-[68%]"></div>
                            </div>
                        </li>

                        <li className="flex items-center justify-between">
                            <p className="text-[18px]">HTML</p>
                            <div className="bg-black w-[50%] h-1.5 rounded-full 2xl:mr-48 md:mr-20">
                                <div className="bg-[#0872BF] rounded-full h-1.5 w-[85%]"></div>
                            </div>
                        </li>
                        
                        <li className=" flex items-center justify-between">
                            <p className="text-[18px]">CSS</p>
                            <div className="bg-black w-[50%] h-1.5 rounded-full 2xl:mr-48 md:mr-20">
                                <div className="bg-[#0872BF] rounded-full h-1.5 w-[81%]"></div>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default Skill