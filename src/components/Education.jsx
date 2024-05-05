import AnimationLottie from "../../utils/animation-lottie";
import GlowCard from "../../utils/glow-card";
import lottieFile from '../../utils/study.json';
import { educations } from "../../utils/education";

const Education = ()=>{
    return(
        <section className="max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-5 mb-10 ">
            <h1 className="text-center mb-2 text-xl 2xl:text-2xl tracking-[1px] text-[#C73E86] font-semibold 2xl:mr-[6vw]">Education</h1>
            <div className="h-[0.1rem] my-2 w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>

            <div className="flex justify-around items-center md:flex-row flex-col">
                <div className="flex justify-center items-start">
                    <div className="md:w-[400px] md:ml-0 ml-4 h-full">
                        <AnimationLottie animationPath={lottieFile} />
                    </div>
                </div>

                <div>
            <div className="flex flex-col gap-6">
              {
                educations.map(education => (
                  <GlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="p-3 relative text-white border-gray-700 border-2 rounded-lg h-36">
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="h-[0.1rem] my-2 w-full bg-gradient-to-r from-transparent via-[#C73E86] to-transparent"></div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                            <i className="fa-solid fa-graduation-cap text-2xl"></i>
                        </div>
                        <div>
                          <p className="text-base sm:text-xl md:mb-2 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base">{education.institution}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
            </div>

        </section>
    )
}

export default Education;