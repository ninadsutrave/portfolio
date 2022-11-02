import React, { useState, useRef, FC, ReactElement } from 'react';
import emailjs from 'emailjs-com';
import GithubLogo from '../../assets/images/github.svg';
import GithubDarkLogo from '../../assets/images/github-dark.svg';
import LinkedinLogo from '../../assets/images/linkedin.svg';
import LinkedinDarkLogo from '../../assets/images/linkedin-dark.svg';
import InstagramLogo from '../../assets/images/instagram.svg';
import InstagramDarkLogo from '../../assets/images/instagram-dark.svg';

const Contact: FC = (): ReactElement => {

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
  

  const updateDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  }

  const updateMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(ServiceID, TemplateID, form.current!, 'YOUR_USER_ID')
      .then((result) => {
          console.log('Success');
      }, (error) => {
          console.log('Error');
      });

    setFormDetails({
      name: "",
      email: "",
      message: ""
    })

  };

  return (
    <div className="flex flex-col justify-center ml-8 gap-5 mb-8 lg:w-8/12 z-30">
      <h1 className="text-xl font-black mt-4 dark:text-slate-50">
        Wanna make something awesome <br /> or just drop me a Hey?
      </h1>
      <form className="flex flex-col gap-6" ref={form} onSubmit={sendEmail}>
            <p>
              <input 
                className="bg-transparent placeholder:text-black focus:outline-none focus:placeholder:text-transparent border-b-2 border-black dark:border-slate-50 dark:placeholder:text-zinc-400 pl-5 pb-2 w-128"
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
                className="bg-transparent placeholder:text-black focus:outline-none focus:placeholder:text-transparent border-b-2 border-black dark:border-slate-50 dark:placeholder:text-zinc-400 pl-5 pb-2 w-128"
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
                className="bg-transparent placeholder:text-black focus:outline-none focus:placeholder:text-transparent border-b-2 border-black dark:border-slate-50 dark:placeholder:text-zinc-400 pl-5 pb-2 w-128 resize-none"
                name="message" 
                value={formDetails.message}
                placeholder="Message"
                onChange={updateMessage}
                rows={5}
              />
            </p>
            <div className="flex gap-14 ml-4">
              <p>
                <input 
                  className="py-2 px-8 rounded-lg font-black bg-neutral-400 dark:bg-zinc-400 cursor-pointer" 
                  type="submit"
                  value="SEND"
                />
              </p>
              <p className="flex justify-center items-center font-black text-xl dark:text-gray-400">
                OR
              </p>
              <p className="flex gap-3 justify-center items-center">
                <a 
                  className="cursor-pointer"
                  href="https://github.com/NinadSutrave"
                  target="_blank" rel="noreferrer"
                >
                  {localStorage.getItem("mode") === "dark"?
                    <img
                      className="w-10"
                      src={GithubLogo}
                      alt="Github Icon"
                    /> :
                    <img
                      className="w-10"
                      src={GithubDarkLogo}
                      alt="Github Icon"
                    /> 
                  }
                </a>
                <a 
                  className="cursor-pointer"
                  href="https://www.linkedin.com/in/ninadsutrave/"
                  target="_blank" rel="noreferrer"
                >
                  {localStorage.getItem("mode") === "dark"?
                    <img
                      className="w-11"
                      src={LinkedinLogo}
                      alt="Linkedin Icon"
                    /> :
                    <img
                      className="w-11"
                      src={LinkedinDarkLogo}
                      alt="Linkedin Icon"
                    /> 
                  }
                </a>
                <a 
                  className="cursor-pointer"
                  href="https://instagram.com/ninadsutrave"
                  target="_blank" rel="noreferrer"
                >
                  {localStorage.getItem("mode") === "dark"?
                    <img
                      className="w-9"
                      src={InstagramLogo}
                      alt="Instagram Icon"
                    /> :
                    <img
                      className="w-9"
                      src={InstagramDarkLogo}
                      alt="Instagram Icon"
                    /> 
                  }
                </a>
              </p>

            </div>
        </form>
    </div>
  )
}

export default Contact;