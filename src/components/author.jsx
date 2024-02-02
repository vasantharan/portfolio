import React from "react";
// import { SocialIcon } from 'react-social-icons';
import img1 from "../assets/img-bg-rem.png";
function Author(){
        const contact_info = [
        { logo: "mail", text: "vasantharank.ncc@gmail.com" },
        {
        logo: "location",
        text: "Erode, Tamil Nadu, India",
        },
    ];
    
    return (
        <section id="contact" className="py-10 px-3 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                Author <span className="text-sky-600">Info</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Short Information</p>

                <div
                className="mt-8 flex md:flex-row flex-col
                gap-5 max-w-2xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto   "
                >
                    <div className="flex flex-col flex-1">
                        <div className="flex flex-row flex-1 gap-5 justify-center">
                            <img class="w-full bg-sky-600 rounded" src={img1} alt="Rounded avatar"/>
                        </div>
                        <div className="flex flex-row flex-1 gap-5 justify-center mt-6">
                            
                            {/* <SocialIcon url="https://www.gitlab.com/vasantharan" target="_blank"/> */}
                        </div>
                    </div>
                    {/* <div className="flex flex-row flex-1 gap-5 justify-center">
                        <SocialIcon url="https://www.linkedin.com/in/vasantharank" target="_blank" /> 
                        <SocialIcon url="https://www.github.com/vasantharan" target="_blank" />
                        <SocialIcon url="https://www.twitter.com/vasantharank" target="_blank"/>
                        <SocialIcon url="https://www.gitlab.com/vasantharan" target="_blank"/>
                    </div> */}
                    {/* <br /> */}
                    <div className="flex flex-col  gap-7">
                    <div className="flex flex-row text-left gap-4 flex-wrap items-center">
                        <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                            <ion-icon name="person"></ion-icon>
                        </div>
                        <p className="md:text-base text-sm  break-words">
                            Vasantharan K                                
                        </p>
                    </div>
                        {contact_info.map((contact, i) => (
                        <div
                            key={i}
                            className="flex flex-row  
                            text-left gap-4 flex-wrap items-center"
                        >
                            <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                                <ion-icon name={contact.logo}></ion-icon>
                            </div>
                            <p className="md:text-base text-sm  break-words">
                                {contact.text}
                            </p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Author