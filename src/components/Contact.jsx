import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { personalData } from '../../utils/contactData';
// import { useSnackbar } from 'react-simple-snackbar'

export const Contact = () => {
  const [isMessage, setIsMessage] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsMessage(true)
    emailjs
      .sendForm( 'template_1pgdi4r', form.current, {
        publicKey: 'qU1cGh_P5FGm5_tYd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    setTimeout(() => {
      document.querySelector('#contact-form').reset();
    }, 2000);
    setInterval(()=> 
      setIsMessage(false),3000)
  };

  return (
    <section id="about" className="max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-5 my-10 ">
      <h1 className="text-center text-xl 2xl:text-2xl tracking-[1px] text-[#C73E86] font-semibold 2xl:mr-[6vw]"><span className="text-white">Contact</span> Me</h1>
      <div className="h-[1px] my-2 w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <form id='contact-form' ref={form} onSubmit={sendEmail} className="">
        
        <div className="max-w-3xl text-white rounded-lg my-2  p-3 lg:p-5">
          <p className="text-sm text-[#d3d8e8]">
            {"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}
          </p>
          <div className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-base">Your Name: </label>
              <input
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                type="text"
                maxLength="100"
                required={true}
                name="from_name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base">Your Email: </label>
              <input
                name="from_name"
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                type="email"
                maxLength="100"
                required={true}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base">Your Message: </label>
              <textarea
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                maxLength="500"
                name="message"
                required={true}
              />
            </div>
            <div className="flex flex-col items-center gap-2">
            {isMessage && (
    <div className='bg-green-700 md:w-[300px] w-[280px] md:text-md text-sm h-10 my-2 rounded-lg'>
      <p className='py-2 text-white text-center'>Message has been sent to Abhishek🧑‍💻</p>
    </div>
  )}
              <button
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                role="button"
                ref={form} type="submit" value="Send"
              >
                <span>Send Message</span>
                
              </button>
            </div>
          </div>
        </div>
        </form>

        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9 text-white">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <i className="fa-solid fa-envelope bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"></i>
              <span>{personalData.email}</span>
            </p>

            <p className="text-sm md:text-xl flex items-center gap-3">
              <i className="fa-solid fa-phone bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"></i>
              <span>
                {personalData.phone}
              </span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
            <i className="fa-solid fa-location-dot bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"></i>
              <span>
                {personalData.address}
              </span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <a href='https://github.com/Abhi-prasad7042' target="_blank">
              <i size={48} className="fa-brands fa-github bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"></i>
            </a>
            <a target="_blank" href='https://www.linkedin.com/in/abhishek-kumar-a06048165/'>
              
              <i size={48} className="fa-brands fa-linkedin bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"></i>
            </a>
            
            <a target="_blank" href='https://www.instagram.com/abhikumar_sh/?igsh=MTUxcGJoZDJtc3dqeA%3D%3D'>
              <i size={48} className="fa-brands fa-instagram bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"></i>
            </a>

          </div>
        </div>
      </div>

      <div className="h-[1px] mt-6 w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
      <div className=' h-2'>
        <p className='text-white py-2 text-center'>Developed by Abhishek</p>
      </div>

      
    </section>
  );
};

export default Contact;


// e.preventDefault();

{/* <section id='contact' className="max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-5 my-10 ">
<h1 className="text-center text-xl 2xl:text-2xl tracking-[1px] text-[#0872BF] font-semibold 2xl:mr-[6vw]"><span className="text-white">Contact</span> Me</h1>
<form id='contact-form' ref={form} onSubmit={sendEmail} className='flex flex-col items-center'>
  <div className=' my-5 md:w-[800px] w-[350px] flex justify-between'>
    <label className='text-white text-lg mx-5'>Name </label>
    <input required type="text" name="from_name" className='px-2 py-1 bg-[#1f1e1e] border-2 border-[#0872BF] text-white mr-[26px] md:w-[665px] w-[61%]' placeholder='Enter your name...'/>
  </div>

  <div className='my-5 md:w-[800px] w-[350px] flex justify-between'>
    <label className='text-white text-lg mx-5'>Email </label>
    <input required type="email" name="from_name" className='px-2 py-1 bg-[#1f1e1e] border-2 border-[#0872BF] text-white mr-[26px] md:w-[665px]  w-[61%]' placeholder='Enter email here...'/>
  </div>

  <div className='my-5 md:w-[800px] w-[350px] flex justify-between items-center'>
    <label className='text-white text-lg mx-5'>Message</label>
    <textarea required name="message" className='px-2 py-1 focus:shadow-xl focus:border-[#0872BF] bg-[#1f1e1e] border-2 border-[#0872BF] text-white mr-[26px] md:w-full'  cols={33} rows={4} placeholder='Write your message here...'/>
  </div>
  {isMessage && (
    <div className='bg-green-700 md:w-[300px] w-[280px] md:text-md text-sm h-10 my-2 rounded-lg'>
      <p className='py-2 text-white text-center'>Message has been sent to Abhishek🧑‍💻</p>
    </div>
  )}

  <input ref={form} type="submit" value="Send" className='bg-[#0872BF] text-white px-10 text-lg py-1 rounded-lg'/>
</form>

</section> */}