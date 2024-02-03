import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import databrick from "../assets/databrick.png";
import ssb from "../assets/ssb.jpg";
// import python from "../assets/python.png";
import "swiper/css";
// import pro from "../assets/project.png"
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
function BlogContent(){
    return(
        <section id="projects" className="py-10 text-white mt-16">
        <div className="text-center">
            <h3 className="text-4xl font-semibold">
            <span className="text-sky-600">TechKalvi </span>Talks
            </h3>
            <p className="text-gray-400 mt-3 text-lg">Blogs</p>
        </div>
        <br />
        <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center justify-center">
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
                    <img src={ssb} alt="" width={"90%"} className="rounded-lg ml-auto mr-auto h-48" />
                    <a href="/blog/1" className=" px-2 py-1 inline-block">
                        <h3 className="text-xl my-4">Mastering SSB Interviews: A Guide to Joining the Indian Defense Forces</h3>
                    </a>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide key={2}>
                    <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                    <img src={databrick} alt="" width={"90%"} className="rounded-lg ml-auto mr-auto h-48" />
                    <a href="/2" className=" px-2 py-1 inline-block">
                        <h3 className="text-xl my-4">Azure Databricks Cluster Creation Using Hashicorp Terraform</h3>
                    </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={3}>
                    <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                    <img src={python} alt="" width={"90%"} className="rounded-lg ml-auto mr-auto h-48" />
                    <a href="/3" className=" px-2 py-1 inline-block">
                        <h3 className="text-xl my-4">Converting DICOM files in a folder to JPEG files: A Python Script</h3>
                    </a>
                    </div>
                </SwiperSlide> */}
            </Swiper>
            </div>
        </div>
        </section>
    )
}
export default BlogContent