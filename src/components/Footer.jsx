import React from "react";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className="bg-gray-800 text-sm p-4 text-center text-white">
            Copyright © {year} Vasantharan K. All Rights reserved.
        </div>
    );
};

export default Footer;