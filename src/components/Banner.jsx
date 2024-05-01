
const Banner = () =>{
    return (
        <section className="max-w-7xl mx-auto px-5 my-12">
            <div className="border-2 border-white py-5 text-white flex flex-col md:flex-row justify-between items-center gap-4 mx-auto">

                <div className="md:w-1/2">
                    <p>Hello, <span>I'm</span></p>
                    <h1>Abhishek</h1>
                    <p>Software Engineer & Data Scientist</p>
                    <p>I excel at finding innovative solutions through constant exploration. My goal is to deliver real value for my clients/colleagues/team.</p>
                    <button>Let's Talk</button>

                    <div className="mt-12 mb-8 flex gap-4 items-center">
                        <p>Check out My:</p>
                        <div>
                            <a href="#"><i className="fa-brands fa-instagram text-2xl text-[#0872BF] w-8 h-8"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin text-2xl text-[#0872BF] w-8 h-8"></i></a>
                            <a href="#"><i className="fa-brands fa-github text-2xl text-[#0872BF] w-8 h-8"></i></a>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img src="img.jpg" alt="" className="w-40 md:ml-20"/>
                </div>
            </div>
        </section>
    )
}

export default Banner;