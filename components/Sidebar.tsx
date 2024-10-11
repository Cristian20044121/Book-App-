"use client";
import { motion } from "framer-motion";

export default function SideBar() {
  const MenuList = [
    {
      title: "Home",
      icon: <i className="fa fa-home "></i>,
    },
    {
      title: "Contact",
      icon: <i className="fa fa-envelope "></i>,
    },
    {
      title: "AboutUs",
      icon: <i className="fa fa-info-circle "></i>,
    },
    {
      title: "Home",
      icon: <i className="fa fa-cog  col-span-4 "></i>,
    },
    {
      title: "Contact",
      icon: <i className="fa fa-home col-span-4 w-full"></i>,
    },
    {
      title: "RateUs",
      icon: <i className="fa fa-star "></i>,
    },
    {
      title: "Change Password",
      icon: <i className="fa fa-eye col-span-4 w-full "></i>,
    },
    {
      title: "Settings",
      icon: <i className="fa fa-cog "></i>,
    },
  ];
  return (
    <>
      {MenuList.map((list, i) => (
        <motion.div
          key={i}
          transition={{ type: "spring", damping: 22, mass: 0.99 }}
          initial={{ opacity: 0, x: -2000 * (i + 1) }}
          animate={{ opacity: 1, x: 0 }}
        >
          <ul className="col-span-4 w-full bg-indigo-500 px-4 py-3.5 font bold text-white hover:bg-indigo-600 mt-5 cursor-pointer">
            {
              <motion.li whileHover={{ scale: 1.1 }} className="text-center">
                <motion.span
                  className="text-white decoration-none font-semibold text-lg"
                  transition={{ type: "spring", damping: 30, mass: 0.99 }}
                  initial={{ opacity: 0, x: -10000 * (i + 1) }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  {list.icon}
                  {list.title}
                </motion.span>
              </motion.li>
            }
          </ul>
        </motion.div>
      ))}
    </>
  );
}
