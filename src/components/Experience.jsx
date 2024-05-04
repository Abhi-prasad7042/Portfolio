
import experience from '../../utils/code.json';
import AnimationLottie from "../../utils/animation-lottie";
import GlowCard from "../../utils/glow-card";

const Experience = () =>{
    return(
        <section id="about" className="max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-5 my-8">
            <h1 className="text-center text-xl 2xl:text-2xl tracking-[1px] text-[#C73E86] font-semibold 2xl:mr-[6vw]">Experience</h1>
            <div className="h-[0.1rem] my-2 w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
            
            <div className="flex md:flex-row flex-col gap-4 justify-center items-center ">
                <div className="md:w-[400px] md:ml-0 ml-4 h-full">
                    <AnimationLottie animationPath={experience} />
                </div>

                {<GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className='p-3 relative md:w-96 rounded-lg border-[#C73E86] border-2 '>
                      <div className="flex items-center gap-x-8 px-3 py-2">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                            <img src="exp.png" alt="" className='w-[70px]'/>
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase text-purple-500">
                            Software Engineer
                          </p>
                          <p className="text-sm sm:text-base text-purple-500">
                            Photonplay Systems
                          </p>
                        </div>
                      </div>
                      <div className="h-[0.1rem] my-2 w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          (September 2023 - Present)
                        </p>
                      </div>
                    </div>
                </GlowCard>}

                </div>
          {/* </div> */}

        </section>
    )
}

export default Experience