import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project_person from "../assets/img-bg-rem.png";
import "swiper/css";
import pro from "../assets/project.png"
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
    return (
        <section id="projects" className="py-10 text-white">
        <div className="text-center">
            <h3 className="text-4xl font-semibold">
            <span className="text-sky-600">Projects</span> Done
            </h3>
            <p className="text-gray-400 mt-3 text-lg">Github Links for Projects</p>
        </div>
        <br />
        <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
            <div className="lg:w-2/3 w-full">
            <Swiper
                slidesPerview={1.2}
                spaceBetween={20}
                breakpoints={{
                768: {
                    slidesPerView: 2,
                },
                }}
                loop={true}
                autoplay={{
                delay: 3000,
                }}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination, Autoplay]}
            >
                <SwiperSlide key={1}>
                    <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                    <img src={pro} alt="" width={"90%"} className="rounded-lg ml-auto mr-auto" />
                    <h3 className="text-xl my-4">Detecting Signs of Depression using Social Media Text</h3>
                    <div className="flex gap-3">
                        <a href="https://github.com/vasantharan/detecting_signs_of_depression" target="_blank" className="text-sky-600 bg-gray-800 px-2 py-1 inline-block">
                        Github
                        </a>
                        <a href="https://aclanthology.org/2023.ltedi-1.46/" target="_blank" className="text-sky-600 bg-gray-800 px-2 py-1 inline-block">
                        Paper Published
                        </a>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={2}>
                    <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                    <img src={pro} alt="" width={"90%"} className="rounded-lg ml-auto mr-auto" />
                    <h3 className="text-xl my-4">Python Nested Folder Dicom File Retriever</h3>
                    <div className="flex gap-3">
                        <a href="https://github.com/vasantharan/Python_Nested_Folder_File_Retriever" target="_blank" className="text-sky-600 bg-gray-800 px-2 py-1 inline-block">
                        Github
                        </a>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={3}>
                    <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                    <img src={pro} alt="" width={"90%"} className="rounded-lg ml-auto mr-auto" />
                    <h3 className="text-xl my-4">Python Script to Convert Dicom To JPEG Converter</h3>
                    <div className="flex gap-3">
                        <a href="https://github.com/vasantharan/dcm_to_jpg_converter" target="_blank" className="text-sky-600 bg-gray-800 px-2 py-1 inline-block">
                        Github
                        </a>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={4}>
                    <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                    <img src={pro} alt="" width={"90%"} className="rounded-lg ml-auto mr-auto" />
                    <h3 className="text-xl my-4">Event Detection From News Using ML Models</h3>
                    <div className="flex gap-3">
                        <a href="https://github.com/vasantharan/EVENT_DETECTION_USING_ML_MODELS" target="_blank" className="text-sky-600 bg-gray-800 px-2 py-1 inline-block">
                        Github
                        </a>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={5}>
                    <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                    <img src={pro} alt="" width={"90%"} className="rounded-lg ml-auto mr-auto" />
                    <h3 className="text-xl my-4">Colorization Of Black and White Image Using Deep Learning</h3>
                    <div className="flex gap-3">
                        <a href="https://github.com/vasantharan/Colorization_Of_Black_and_White_Image_Using_Deep_Learning" target="_blank" className="text-sky-600 bg-gray-800 px-2 py-1 inline-block">
                        Github
                        </a>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={6}>
                    <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                    <img src={pro} alt="" width={"90%"} className="rounded-lg ml-auto mr-auto" />
                    <h3 className="text-xl my-4">Air Quality Index Analysis Dashboard Using PowerBi</h3>
                    <div className="flex gap-3">
                        <a href="https://github.com/vasantharan/AIR-QUALITY-INDEX-DASHBOARD-USING-POWERBI" target="_blank" className="text-sky-600 bg-gray-800 px-2 py-1 inline-block">
                        Github
                        </a>
                    </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
                <img src={project_person} className="w-full object-cover bg-sky-600 rounded-xl" alt="" />
            </div>
        </div>
        </section>
    );
};

export default Project;