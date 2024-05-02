
const Projects = ()=>{
    return (
        <section className="max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-5 mb-10">
            <h1 className="text-center text-xl 2xl:text-2xl tracking-[1px] text-[#0872BF] font-semibold 2xl:mr-[6vw]"><span className="text-white">Recent</span> Projects</h1>

            <div className="flex md:flex-row flex-col justify-between mt-10 items-center">
                <div className="md:w-[250px] 2xl:w-[300px] w-[300px] px-5 py-4 my-3 rounded-lg border border-[#0872BF] shadow-[#5dadec3b] cursor-pointer shadow-xl hover:scale-[1.02] transition-all duration-300">
                    <img src="vasdImg.png" alt="" className="w-[192px] mb-8 mx-auto rounded-lg"/>
                    <h5 className="text-[#0872BF] font-bold text-center my-5 text-xl">VASD</h5>
                    <p className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, numquam ab  omnis provident sequi ex voluptate vitae! Dolor, laborum?</p>
                </div>

                <div className="md:w-[250px] 2xl:w-[300px] w-[300px] px-5 py-4 my-3 rounded-lg border border-[#0872BF] shadow-[#5dadec3b] cursor-pointer shadow-xl hover:scale-[1.02] transition-all duration-300">
                    <img src="swigIMG.png" alt="" className="w-[192px] h-[128px] mb-8 mx-auto rounded-lg"/>
                    <h5 className="text-[#0872BF] font-bold text-center my-5 text-xl">Food Ordering App</h5>
                    <p className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, numquam ab  omnis provident sequi ex voluptate vitae! Dolor, laborum?</p>
                </div>

                <div className="md:w-[250px] 2xl:w-[300px] w-[300px] px-5 py-4 my-3 rounded-lg border border-[#0872BF] shadow-[#5dadec3b] cursor-pointer shadow-xl hover:scale-[1.02] transition-all duration-300">
                    <img src="anpr.png" alt="" className="w-[192px] h-[122px] mb-8 mx-auto rounded-lg"/>
                    <h5 className="text-[#0872BF] font-bold text-center my-7 text-xl">ANPR</h5>
                    <p className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, numquam ab  omnis provident sequi ex voluptate vitae! Dolor, laborum?</p>
                </div>

                <div className="md:w-[250px] 2xl:w-[300px] w-[300px] px-5 py-4 my-3 rounded-lg border border-[#0872BF] shadow-[#5dadec3b] cursor-pointer shadow-xl hover:scale-[1.02] transition-all duration-300">
                    <img src="cabImg.png" alt="" className="w-[192px] h-[128px] mb-8 mx-auto rounded-lg"/>
                    <h5 className="text-[#0872BF] font-bold text-center my-5 text-xl">Cab Price Detection</h5>
                    <p className="text-justify text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, numquam ab  omnis provident sequi ex voluptate vitae! Dolor, laborum?</p>
                </div>
            </div>
        </section>
    )
}

export default Projects