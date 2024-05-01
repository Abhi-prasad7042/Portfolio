
const Banner = () =>{
    return (
        <section className="max-w-[1200px] mx-auto px-5 my-12">
            <div className=" py-5 text-white flex flex-col md:flex-row justify-around items-center gap-4 mx-auto">

                <div className="md:w-1/2">
                    <p className="text-xl mb-2">Hello, <span className="text-[#0872BF]">I'm</span></p>
                    <h1 className="text-3xl font-bold tracking-[3.22px] text-[#0872BF] mb-3">Abhishek</h1>
                    <p className="text-2xl mb-3 tracking-[1px]">Software Engineer & Data Scientist</p>
                    <p className="text-md mb-10 md:w-3/4  leading-2">I excel at finding innovative solutions through constant exploration. My goal is to deliver real value for my clients/colleagues/team.</p>
                    <button className="py-2 px-5 font-bold md:text-sm rounded-md bg-[#0872BF] hover:bg-sky-700">Let's Talk</button>

                    <div className="mt-6 mb-8 flex gap-4 items-center">
                        <p>Check out My:</p>
                        <div>
                            <a href="#"><i className="fa-brands fa-instagram text-2xl text-[#0872BF] w-8 h-8"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin text-2xl text-[#0872BF] w-8 h-8"></i></a>
                            <a href="#"><i className="fa-brands fa-github text-2xl text-[#0872BF] w-8 h-8"></i></a>
                        </div>
                    </div>
                </div>
                <div className="profile-img md:w-1/3 bg-[#0872BF] mb-10">
                    <img src="prof.jpg" alt="" className="object-contain max-h-80 mx-auto"/>
                </div>
            </div>
        </section>
    )
}

export default Banner;