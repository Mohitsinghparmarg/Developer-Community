import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-4 px-6 flex flex-col md:flex-row items-center justify-between shadow-lg border-t border-gray-700 mt-auto">
            <div className="text-center md:text-left">
                <h2 className="text-lg font-semibold">Developer's Community</h2>
                <p className="text-sm text-gray-400">Let's Connect and Build Together</p>
            </div>
            <div className="flex space-x-6 mt-3 md:mt-0">
                <a href="https://github.com/Mohitsinghparmarg" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                    GitHub
                </a>
                <a href="https://www.linkedin.com/in/mohit-singh-parmar-1ba948274" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                    LinkedIn
                </a>
                <a href="https://x.com/MohitParma13378" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                    Twitter
                </a>
            </div>
        </footer>
    );
};

export default Footer;
