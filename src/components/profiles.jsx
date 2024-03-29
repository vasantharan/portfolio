import React from "react";
const Profile = () => {
    return (
        <section id="hireme" className="py-10 px-3 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    Professional <span className="text-sky-600">Profiles</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Leetcode and Github Profile Stats</p>
            </div>
            <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[20rem] mt-6 flex gap-6 lg:flex-col flex-col-reverse items-center justify-center">
                <div className="flex lg:flex-row flex-col-reverse gap-5">
                    <div>
                        <img src="https://leetcard.jacoblin.cool/vasantharan?theme=nord" alt=""/>
                    </div>
                    <div>
                        <img src="https://github-readme-stats.vercel.app/api?username=vasantharan&show_icons=true&theme=tokyonight" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;