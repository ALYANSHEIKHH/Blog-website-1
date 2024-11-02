import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                {/* About Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">About Us</h2>
                    <p className="text-gray-400">
                        We’re passionate about sharing the latest trends, tutorials, and resources in the world of web development.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2">
                        <li><a href="#home" className="hover:text-white">Home</a></li>
                        <li><a href="#about" className="hover:text-white">About</a></li>
                        <li><a href="#projects" className="hover:text-white">Projects</a></li>
                        <li><a href="#contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Contact & Socials Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Connect with Us</h2>
                    <div className="flex space-x-4 mb-6">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaTwitter size={24} />
                        </a>
                    </div>
                    <p className="text-gray-400">© {new Date().getFullYear()} YourProject. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
