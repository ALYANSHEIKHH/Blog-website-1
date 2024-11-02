"use client";

import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className=" py-16 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl font-bold "
                >
                    Get in Touch
                </motion.h2>
                <p className="mt-4 ">
                    Feel free to reach out to me through any of the platforms listed below, or send a message directly. I look forward to connecting!
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
            >
                <a
                    href="https://www.linkedin.com/in/alyan-sheikh-1a26262b4/"
                    target="_blank"
                    className="p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                    <h3 className="text-lg font-semibold">LinkedIn</h3>
                    <p className="text-gray-400">Connect with me on LinkedIn.</p>
                </a>
                <a
                    href="https://github.com/ALYANSHEIKHH"
                    target="_blank"
                    className="p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                    <h3 className="text-lg font-semibold ">GitHub</h3>
                    <p className="text-gray-400">Check out my code on GitHub.</p>
                </a>
                <a
                    href="https://wa.me/+923253508399"
                    target="_blank"
                    className="p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                    <h3 className="text-lg font-semibold ">WhatsApp</h3>
                    <p className="text-gray-400">Message me on WhatsApp.</p>
                </a>
                <a
                    href="https://www.instagram.com/aly_13388/"
                    target="_blank"
                    className="p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                    <h3 className="text-lg font-semibold ">Instagram</h3>
                    <p className="text-gray-400">Follow me on Instagram.</p>
                </a>
            </motion.div>

            <div className="mt-12 text-center">
                <motion.button
                
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-400 to-green-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    Send a Message
                </motion.button>
            </div>
        </div>
    );
};

export default Contact;
