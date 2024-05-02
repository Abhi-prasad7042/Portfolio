import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8dep29s', 'template_1pgdi4r', form.current, {
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
  };

  return (
    <section className="max-w-[1200px] 2xl:max-w-[1400px] mx-auto px-5 my-10 ">
      <h1 className="text-center text-xl 2xl:text-2xl tracking-[1px] text-[#0872BF] font-semibold 2xl:mr-[6vw]"><span className="text-white">Contact</span> Me</h1>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col items-center'>
        <div className=' my-5 md:w-[800px] w-[350px] flex justify-between'>
          <label className='text-white text-lg mx-5'>Name </label>
          <input type="text" name="from_name" className='px-2 py-1 bg-[#1f1e1e] border-2 border-[#0872BF] text-white mr-[26px] md:w-[670px] w-[61%]' placeholder='Enter your name...'/>
        </div>

        <div className='my-5 md:w-[800px] w-[350px] flex justify-between'>
          <label className='text-white text-lg mx-5'>Email </label>
          <input type="email" name="from_name" className='px-2 py-1 bg-[#1f1e1e] border-2 border-[#0872BF] text-white mr-[26px] md:w-[670px]  w-[61%]' placeholder='Enter email here...'/>
        </div>

        <div className='my-5 md:w-[800px] w-[350px] flex justify-between items-center'>
          <label className='text-white text-lg mx-5'>Message</label>
          <textarea name="message" className='px-2 py-1 focus:shadow-xl focus:border-[#0872BF] bg-[#1f1e1e] border-2 border-[#0872BF] text-white mr-[26px] md:w-full'  cols={33} rows={4} placeholder='Write your message here...'/>
        </div>
        <input type="submit" value="Send" className='bg-[#0872BF] text-white px-10 text-lg py-1 rounded-lg'/>
      </form>

    </section>
  );
};

export default Contact;