"use client";
import { motion } from "framer-motion";
import { FaHome, FaEnvelope, FaInfoCircle, FaCog, FaStar, FaEye } from "react-icons/fa";

import Link from "next/link";

export default function SideBar() {
  const MenuList = [
    {
      title: "Home",
      icon: <FaHome />,
      href: "/"
    },
    {
      title: "Contact",
      icon: <FaEnvelope />,
      href: "/contact"
    },
    {
      title: "About Us",
      icon: <FaInfoCircle />,
      href: "/about"
    },
    {
      title: "Settings",
      icon: <FaCog />,
      href: "/settings"
    }
   
  ];

  return (
    <>
      {MenuList.map((list, i) => (
        <motion.div
          key={i}
          transition={{ type: "spring", damping: 22, mass: 0.99 }}
          initial={{ opacity: 0, x: -2000 * (i + 1) }}
          animate={{ opacity: 1, x: 0 }}
          className="xs:mr-3"
        >
          <ul className=" w-full bg-indigo-500 px-4 py-3.5 font-bold text-white hover:bg-indigo-600 mt-5 cursor-pointer xs:border xs:p-0">
            <motion.li whileHover={{ scale: 1.1 }} className=" flex items-center justify-between ">
              {list.href ? (
                <Link href={list.href} className="flex items-center gap-3 p-2">
                    {list.icon}
                    <span className="xs:text-sm">{list.title}</span>
                </Link>
              ) : (
                <span className="text-white font-semibold text-lg xs:text-sm">
                  {list.icon}
                  <span className="ml-2">{list.title}</span>
                </span>
              )}
            </motion.li>
          </ul>
        </motion.div>
      ))}
    </>
  );
}
