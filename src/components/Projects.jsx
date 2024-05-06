
const Projects = ()=>{
    return (
        <section id="projects" className="max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-5 mb-10">
            <h1 className="text-center mb-2 text-xl 2xl:text-2xl tracking-[1px] text-[#C73E86] font-semibold 2xl:mr-[6vw]"><span className="text-white">Recent</span> Projects</h1>
            <div className="h-[0.1rem] my-2 w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <div className="flex  md:flex-row flex-col justify-between mt-10 items-center">
                <div className="md:w-[250px] 2xl:w-[300px] w-[300px] px-5 py-4 my-3 rounded-lg border border-[#0872BF] shadow-purple-500 cursor-pointer shadow-sm hover:scale-[1.02] transition-all duration-300">
                    <img src="https://cdn.dribbble.com/users/1746237/screenshots/11273605/gif-3.gif" alt="" className="w-[192px] h-[125px] mb-8 mx-auto rounded-lg"/>
                    <h5 className="text-[#C73E86] font-bold text-center my-5 text-xl">VASD</h5>
                    <p className="text-justify text-white">Jetson-based vehicle speed detection project utilizing YOLOv5, Deepstream, and radar for accurate speed monitoring and analysis.</p>
                </div>

                <div className="md:w-[250px] 2xl:w-[300px] w-[300px] px-5 py-4 my-3 rounded-lg border border-[#0872BF] shadow-purple-500 cursor-pointer shadow-sm hover:scale-[1.02] transition-all duration-300">
                    <img src="https://cdn.dribbble.com/users/1890021/screenshots/8576649/media/fffdfabcea9ffe954570a25aa9423b08.gif" alt="" className="w-[192px] h-[125px] mb-8 mx-auto rounded-lg"/>
                    <h5 className="text-[#C73E86] font-bold text-center my-5 text-xl">Food Ordering App</h5>
                    <p className="text-justify text-white">React-based Swiggy clone, facilitating food ordering with Swiggy API integration for seamless data retrieval and user experience.</p>
                </div>

                <div className="md:w-[250px] 2xl:w-[300px] w-[300px] px-5 py-4 my-3 rounded-lg border border-[#0872BF] shadow-purple-500 cursor-pointer shadow-sm hover:scale-[1.02] transition-all duration-300">
                    <img src="https://res.cloudinary.com/jerrick/image/upload/q_auto,w_720/607570415944dc001df58248.gif" alt="" className="w-[192px] h-[120px] mb-8 mx-auto rounded-lg"/>
                    <h5 className="text-[#C73E86] font-bold text-center my-7 text-xl">ANPR</h5>
                    <p className="text-justify text-white">Python-based ANPR system utilizing PaddleOCR and YOLOv5, integrated with Django for frontend, enabling automatic number plate recognition.</p>
                </div>

                <div className="md:w-[250px] 2xl:w-[300px] w-[300px] px-5 py-4 my-3 rounded-lg border border-[#0872BF] shadow-purple-500 cursor-pointer shadow-sm hover:scale-[1.02] transition-all duration-300">
                    <img src="https://www.appicial.com/assets/images/taxi-app/taxi-app.gif" alt="" className="w-[192px] h-[128px] mb-8 mx-auto rounded-lg"/>
                    <h5 className="text-[#C73E86] font-bold text-center my-5 text-xl">Cab Price Detection</h5>
                    <p className="text-justify text-white">Predict cab fares using machine learning. Analyze variables like distance, time, and location to estimate the cost accurately.</p>
                </div>
            </div>
        </section>
    )
}

export default Projects