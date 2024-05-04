import Marquee from "react-fast-marquee";

const Skill = ()=>{
    return(
        <section className="max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-5 mb-10 ">
            <h1 className="text-center mb-2 text-xl 2xl:text-2xl tracking-[1px] text-[#C73E86] font-semibold 2xl:mr-[6vw]">Skills</h1>
            <div className="h-[1px] my-2 w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
            <div className="py-5 md:px-9 text-white flex flex-col md:flex-row justify-around items-center md:gap-4 gap-2 mx-auto">
                <Marquee>
                    <div className="border-2 my-2 md:w-[130px] w-[100px] md:h-[120px] h-[100px] rounded-lg border-[#0872BF] shadow-purple-500 shadow-sm md:mx-12 mx-8">
                        <img src="image/python.svg" alt="" className="md:w-[50px] w-[30px] mx-auto py-2 mt-2" />
                        <p className="text-center text-white md:text-md text-sm py-3">Python</p>
                    </div>

                    <div className="border-2 md:w-[140px] w-[100px] md:h-[120px] h-[100px] rounded-lg border-[#0872BF] shadow-purple-500 shadow-sm md:mx-12 mx-8">
                        <img src="image/pandas1.png" alt="" className="md:w-[60px] md:h-[80px] h-[60px] w-[30px] mx-auto py-1 mt-1" />
                        <p className="text-center text-white md:text-md text-sm ">Pandas</p>
                    </div>

                    <div className="border-2 md:w-[140px] w-[100px] md:h-[120px] h-[100px] rounded-lg border-[#0872BF] shadow-purple-500 shadow-sm md:mx-12 mx-8">
                        <img src="image/numpy.svg" alt="" className="md:w-[46px] w-[35px] mx-auto py-2 mt-2" />
                        <p className="text-center text-white md:text-md text-sm md:py-3 py-1">Numpy</p>
                    </div>

                    <div className="border-2 md:w-[140px] w-[100px] md:h-[120px] h-[100px] rounded-lg border-[#0872BF] shadow-purple-500 shadow-sm md:mx-12 mx-8">
                        <img src="image/matplotlib.png" alt="" className="md:w-[60px] w-[40px] mx-auto py-2 mt-2" />
                        <p className="text-center text-white md:text-md text-sm md:py-1 ">Matplotlib</p>
                    </div>

                    <div className="border-2 md:w-[140px] w-[100px] md:h-[120px] h-[100px] rounded-lg border-[#0872BF] shadow-purple-500 shadow-sm md:mx-12 mx-8">
                        <img src="image/seaborn.svg" alt="" className="md:w-[60px] w-[40px] mx-auto py-2 mt-2" />
                        <p className="text-center text-white md:text-md text-sm md:py-1">Seaborn</p>
                    </div>

                    <div className="border-2 md:w-[140px] w-[100px] md:h-[120px] h-[100px] rounded-lg border-[#0872BF] shadow-purple-500 shadow-sm md:mx-12 mx-8">
                        <img src="image/sckt.png" alt="" className="md:w-[90px] h-[50px] w-[30px] mx-auto py-1 mt-3" />
                        <p className="text-center text-white md:text-md text-sm md:py-5 py-2">Scikit-Learn</p>
                    </div>

                    <div className="border-2 md:w-[140px] w-[100px] md:h-[120px] h-[100px] rounded-lg border-[#0872BF] shadow-purple-500 shadow-sm md:mx-12 mx-8">
                        <img src="image/opencv.svg" alt="" className="md:w-[50px] w-[30px] mx-auto py-2 mt-2" />
                        <p className="text-center text-white md:text-md text-sm py-3">OpenCV</p>
                    </div>

                    <div className="border-2 md:w-[140px] w-[100px] md:h-[120px] h-[100px] rounded-lg border-[#0872BF] shadow-purple-500 shadow-sm md:mx-12 mx-8">
                        <img src="image/pytorch.svg" alt="" className="md:w-[40px] w-[30px] mx-auto py-2 mt-2" />
                        <p className="text-center text-white md:text-md text-sm md:py-2 py-1">Pytorch</p>
                    </div>

                    <div className="border-2 md:w-[140px] w-[100px] md:h-[120px] h-[100px] rounded-lg border-[#0872BF] shadow-purple-500 shadow-sm md:mx-12 mx-8">
                        <img src="image/tensorflow.svg" alt="" className="md:w-[40px] w-[30px] mx-auto py-2 mt-2" />
                        <p className="text-center text-white md:text-md text-sm md:py-3 py-1">Tensorflow</p>
                    </div>

                    <div className="border-2 md:w-[140px] w-[100px] md:h-[120px] h-[100px] rounded-lg border-[#0872BF] shadow-purple-500 shadow-sm md:mx-12 mx-8">
                        <img src="image/django.svg" alt="" className="md:w-[50px] w-[30px] mx-auto py-2 mt-2" />
                        <p className="text-center text-white md:text-md text-sm py-2">Django</p>
                    </div>

                    <div className="border-2 md:w-[140px] w-[100px] md:h-[120px] h-[100px] rounded-lg border-[#0872BF] shadow-purple-500 shadow-sm md:mx-12 mx-8">
                        <img src="image/react.svg" alt="" className="md:w-[50px] w-[30px] mx-auto py-2 mt-2" />
                        <p className="text-center text-white md:text-md text-sm py-3">React</p>
                    </div>

                    <div className="border-2 md:w-[140px] w-[100px] md:h-[120px] h-[100px] rounded-lg border-[#0872BF] shadow-purple-500 shadow-sm md:mx-12 mx-8">
                        <img src="image/tailwind.svg" alt="" className="md:w-[70px] w-[50px] mx-auto py-2 mt-2" />
                        <p className="text-center text-white md:text-md text-sm py-3 md:my-2 my-0">Tailwind</p>
                    </div>

                    <div className="border-2 md:w-[140px] w-[100px] md:h-[120px] h-[100px] rounded-lg border-[#0872BF] shadow-purple-500 shadow-sm md:mx-12 mx-8">
                        <img src="image/javascript.svg" alt="" className="md:w-[50px] w-[30px] mx-auto py-2 mt-2" />
                        <p className="text-center text-white md:text-md text-sm py-3">Javascript</p>
                    </div>

                    <div className="border-2 md:w-[140px] w-[100px] md:h-[120px] h-[100px] rounded-lg border-[#0872BF] shadow-purple-500 shadow-sm md:mx-12 mx-8">
                        <img src="image/html.svg" alt="" className="md:w-[50px] w-[30px] mx-auto py-2 mt-2" />
                        <p className="text-center text-white md:text-md text-sm py-2">HTML</p>
                    </div>

                    <div className="border-2 md:w-[140px] w-[100px] md:h-[120px] h-[100px] rounded-lg border-[#0872BF] shadow-purple-500 shadow-sm md:mx-12 mx-8">
                        <img src="image/css.svg" alt="" className="md:w-[50px] w-[30px] mx-auto py-2 mt-2" />
                        <p className="text-center text-white md:text-md text-sm py-2">CSS</p>
                    </div>
                    
                </Marquee>

            </div>

        </section>
    )
}

export default Skill


// const Skill = ()=> {

//     return(
//         <section className="max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-5 mb-10">
//             <h1 className="text-center text-2xl 2xl:text-2xl tracking-[1px] text-[#C73E86] font-semibold 2xl:mr-[6vw]">Skills</h1>
//             <div className="py-5 text-white flex flex-col md:flex-row justify-around items-center md:gap-4 gap-2 mx-auto">

//                 <div className="md:w-1/2 w-full ">
//                     <ul className="text-lg leading-10 sm:ml-5 md:ml-8 xl:ml-10 2xl:ml-0 ">
//                         <li className="flex items-center justify-between">
//                             <p className="text-[18px]">Python</p>
//                             <div className="bg-black w-[50%] h-1.5 rounded-full 2xl:mr-32 ">
//                                 <div className="bg-purple-500 rounded-full h-1.5 w-[72%] "></div>
//                             </div>
//                         </li>

//                         <li className="flex items-center justify-between">
//                             <p className="text-[18px]">Machine Learning</p>
//                             <div className="bg-black w-[50%] h-1.5 rounded-full 2xl:mr-32">
//                                 <div className="bg-[#0872BF] rounded-full h-1.5 w-[85%]"></div>
//                             </div>
//                         </li>

//                         <li className="flex items-center justify-between">
//                             <p className="text-[18px]">Deep Learning</p>
//                             <div className="bg-black w-[50%] h-1.5 rounded-full 2xl:mr-32">
//                                 <div className="bg-[#0872BF] rounded-full h-1.5 w-[73%]"></div>
//                             </div>
//                         </li>
                        
//                         <li className=" flex items-center justify-between">
//                             <p className="text-[18px]">Data Analysis</p>
//                             <div className="bg-black w-[50%] h-1.5 rounded-full 2xl:mr-32">
//                                 <div className="bg-[#0872BF] rounded-full h-1.5 w-[80%]"></div>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>

//                 <div className="md:w-1/2 w-full md:ml-14 ">
//                 <ul className="text-lg leading-10 sm:ml-5 md:ml-8 xl:ml-10 2xl:ml-0 ">
//                         <li className="flex items-center justify-between">
//                             <p className="text-[18px]">Django</p>
//                             <div className="bg-black w-[50%] h-1.5 rounded-full 2xl:mr-48 md:mr-20">
//                                 <div className="bg-[#0872BF] rounded-full h-1.5 w-[64%]"></div>
//                             </div>
//                         </li>

//                         <li className="flex items-center justify-between">
//                             <p className="text-[18px]">React</p>
//                             <div className="bg-black w-[50%] h-1.5 rounded-full 2xl:mr-48 md:mr-20">
//                                 <div className="bg-[#0872BF] rounded-full h-1.5 w-[68%]"></div>
//                             </div>
//                         </li>

//                         <li className="flex items-center justify-between">
//                             <p className="text-[18px]">HTML</p>
//                             <div className="bg-black w-[50%] h-1.5 rounded-full 2xl:mr-48 md:mr-20">
//                                 <div className="bg-[#0872BF] rounded-full h-1.5 w-[85%]"></div>
//                             </div>
//                         </li>
                        
//                         <li className=" flex items-center justify-between">
//                             <p className="text-[18px]">CSS</p>
//                             <div className="bg-black w-[50%] h-1.5 rounded-full 2xl:mr-48 md:mr-20">
//                                 <div className="bg-[#0872BF] rounded-full h-1.5 w-[81%]"></div>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>

//             </div>
//         </section>
//     )
// }

// export default Skill