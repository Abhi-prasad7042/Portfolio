
const Banner = () =>{
    return (
        <section className="max-w-[1200px] 2xl:max-w-[1500px] mx-auto px-5 mt-12">
            <div className="py-5 text-white flex flex-col md:flex-row justify-around items-center gap-4 mx-auto ">

                <div className="md:w-1/2">
                    <p className="text-xl mb-2 2xl:text-2xl">Hello, <span className="text-[#0872BF]">I'm</span></p>
                    <h1 className="text-3xl 2xl:text-5xl font-bold tracking-[3.22px] text-[#0872BF] mb-3">Abhishek</h1>
                    <p className="text-2xl 2xl:text-3xl mb-3 tracking-[1px]">Software Engineer & Data Scientist</p>
                    <p className="text-md 2xl:text-lg mb-10 md:w-3/4  leading-2">I excel at finding innovative solutions through constant exploration. My goal is to deliver real value for my clients/colleagues/team.</p>
                    
                    <a href="https://wa.me/7011652617" target="_blank" rel="noopener noreferrer" className="font-semibold md:font-bold 2xl:text-sm md:text-sm text-md">
                        <button className="py-2 px-5 rounded-md bg-[#0872BF] hover:bg-sky-700">Let's Talk<i className="fa-brands fa-whatsapp mx-2 2xl:text-lg md:text-sm text-md"></i></button>
                    </a>

                    <div className="mt-6 mb-8 flex gap-4 items-center">
                        <div className="2xl:gap-2 flex">
                            <a href="#"><i className="fa-brands fa-instagram text-2xl 2xl:text-3xl text-[#0872BF] w-8 h-8"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin text-2xl 2xl:text-3xl text-[#0872BF] w-8 h-8"></i></a>
                            <a href="#"><i className="fa-brands fa-github text-2xl 2xl:text-3xl text-[#0872BF] w-8 h-8"></i></a>
                        </div>
                    </div>
                </div>
                <div className="profile-img2 md:w-1/3 bg-[#2196F3] mb-10 order-first md:order-none ">
                    <img src="profile1.png" alt="" className="profile-img object-cover max-h-72 mx-auto"/>
                </div>
            </div>
        </section>
    )
}

export default Banner;