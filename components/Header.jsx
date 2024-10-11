"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{ padding: "1rem 1re 1rem 0" }}
      className="flex justify-between items-center bg-gray-50 md:p-8 sm:p-3"
    >
      <motion.div
        className="flex items-center"
        transition={{ type: "spring", damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: -1000 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h1 className="md:text-6xl font-bold text-indigo-600  sm:text-3xl ml-10">
          Book App
        </h1>
        <div className="md:ml-10">
          <motion.input
            type="text"
            placeholder="Tell me what you like to read and we will get that ...."
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:p-2 md:w-4/5 rounded-md border-none bg-gray-400 pl-4 text-sm outline-none placeholder:text-gray-900 hover:bg-gray-300 focus:outline-none cursor-pointer transition-all "
          />
        </div>
      </motion.div>

      <motion.div
        className="flex items-center"
        transition={{ type: "spring", damping: 18, mass: 0.75 }}
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Link href="/profile">
          <motion.img
            src="https://www.boomslag.com/_next/image?url=%2Fassets%2Fimg%2Flogos%2Ficecream.png&w=64&q=75"
            alt="avatar"
            className="w-16 h-16 rounded-full object-cover border border-gray-800 hover:border-gray-300 transiton-all"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
          />
        </Link>
      </motion.div>
    </header>
  );
}
