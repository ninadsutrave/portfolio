import React, { useState, useRef, FC, ReactElement } from 'react';
import emailjs from 'emailjs-com';

interface modeData {
  modeType: string;
  bulbIcon: string;
  downloadIcon: string;
  doubleDownIcon: string;
  githubIcon: string;
  linkedinIcon: string;
  instagramIcon: string;   
  hamburgerIcon: string; 
  crossIcon: string;
}

const Contact: FC<modeData> = (mode): ReactElement => {

  interface FormDetails {
    name: string;
    email: string;
    message: string;
  }

  const form = useRef<HTMLFormElement>(null)!;
  const [formDetails, setFormDetails] = useState <FormDetails> ({
    name: "",
    email: "",
    message: ""
  })

  const ServiceID: string = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
  const TemplateID: string = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
  const UserID: string = process.env.REACT_APP_EMAILJS_USER_ID!;  

  const updateDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  }

  const updateMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(ServiceID, TemplateID, form.current!, UserID)
      .then((result) => {
          //console.log('Success');
          alert("Thank you for visiting!");
      }, (error) => {
          //console.log(error);
      });

    setFormDetails({
      name: "",
      email: "",
      message: ""
    })

  };

  return (
    <div className="flex flex-col justify-center ml-2 sm:ml-8 gap-5 mb-8 lg:w-8/12 z-30">
      <h1 className="text-xl sm:text-2xl font-black mt-4 dark:text-slate-50">
        Wanna make something awesome? <br /> Let's Chat!
      </h1>
      <form className="flex flex-col gap-6" ref={form} onSubmit={sendEmail}>
            <p>
              <input 
                className="bg-transparent placeholder:text-black focus:outline-none focus:placeholder:text-transparent border-b-2 border-black dark:border-slate-50 dark:placeholder:text-zinc-400 dark:focus:placeholder:text-transparent pl-2 sm:pl-5 pb-2 w-11/12 sm:w-128"
                type="text" 
                name="name" 
                value={formDetails.name}
                autoComplete="false"
                placeholder="Name"
                onChange={updateDetails}
                required
              />
            </p>
            <p>
              <input 
                className="bg-transparent placeholder:text-black focus:outline-none focus:placeholder:text-transparent border-b-2 border-black dark:border-slate-50 dark:placeholder:text-zinc-400 dark:focus:placeholder:text-transparent pl-2 sm:pl-5 pb-2 w-11/12 sm:w-128"
                type="email" 
                name="email" 
                value={formDetails.email}
                placeholder="Email ID"
                onChange={updateDetails}
                required
              />
            </p>
            <p>
              <textarea 
                className="bg-transparent placeholder:text-black focus:outline-none focus:placeholder:text-transparent border-b-2 border-black dark:border-slate-50 dark:placeholder:text-zinc-400 dark:focus:placeholder:text-transparent pl-2 sm:pl-5 pb-2 w-11/12 sm:w-128 resize-none"
                name="message" 
                value={formDetails.message}
                placeholder="Message"
                onChange={updateMessage}
                rows={5}
              />
            </p>
            <div className="flex w-11/12 justify-around xs:justify-start lg:w-full gap-2 xs:gap-8 lg:gap-14 ml-1 lg:ml-4">
              <p>
                <input 
                  className="px-4 py-2 sm:px-8 rounded-lg font-black bg-neutral-400 dark:bg-zinc-400 cursor-pointer" 
                  type="submit"
                  value="SEND"
                />
              </p>
              <p className="flex justify-center items-center font-black text-xl dark:text-gray-400">
                OR
              </p>
              <p className="flex gap-1 sm:gap-3 justify-center items-center">
                <a 
                  className="cursor-pointer"
                  href="https://github.com/NinadSutrave"
                  target="_blank" rel="noreferrer"
                >
                <img 
                  className="w-8 sm:w-10"
                  src={mode.githubIcon}
                  alt="Github Icon"
                />
                </a>
                <a 
                  className="cursor-pointer"
                  href="https://www.linkedin.com/in/ninadsutrave/"
                  target="_blank" rel="noreferrer"
                >
                  <img 
                    className="w-9 sm:w-11"
                    src={mode.linkedinIcon}
                    alt="Github Icon"
                  />
                </a>
                <a 
                  className="cursor-pointer"
                  href="https://instagram.com/ninadsutrave"
                  target="_blank" rel="noreferrer"
                >
                  <img 
                    className="w-7 sm:w-9"
                    src={mode.instagramIcon}
                    alt="Github Icon"
                  />
                </a>
              </p>

            </div>
        </form>
    </div>
  )
}

export default Contact;