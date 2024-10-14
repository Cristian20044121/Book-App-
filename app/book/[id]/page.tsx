"use client";
import { books } from "../../../constants/mockData";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaHome, FaEnvelope, FaInfoCircle, FaCog, FaBars } from "react-icons/fa";
import Link from "next/link";
import { Editor, useDomValue } from "reactjs-editor";
import "react-toastify/dist/ReactToastify.css";
import styles from "./books.module.css";

export default function BookPage() {
  const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar la visibilidad del menú
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
  const { id } = useParams();
  const { dom, setDom } = useDomValue();

  const selectedBook = books.find((book) => id === String(book.id));

  const notify = () => toast("Your changes have been saved!");

  const handleSave = () => {
    if (!selectedBook) return;

    const updatedDomValue = {
      key: dom?.key,
      props: dom?.props,
      ref: dom?.ref,
      type: dom?.type,
    };

    localStorage.setItem(
      `dom${selectedBook.id}`,
      JSON.stringify(updatedDomValue)
    );
    notify();
  };

  useEffect(() => {
    if (typeof window !== "undefined" && selectedBook) {
      const savedDom = localStorage.getItem(`dom${selectedBook.id}`);
      if (savedDom) {
        setDom(JSON.parse(savedDom));
      }
    }
  }, [selectedBook, setDom]);

  if (!selectedBook) return <p>Book not found</p>;

  return (
    <motion.div
      transition={{ type: "spring", damping: 40, mass: 0.75 }}
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gray-200 xs:p-1"
    >
      <motion.section
        transition={{ type: "spring", damping: 44, mass: 0.75 }}
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ padding: "1rem 1rem 1rem 0" }}
        className="bg-gray-50 md:p-8 sm:p-3 border flex justify-between"
      >
        {menuVisible && ( 


          <div>
            {MenuList.map((list, i) => (
              <motion.div
                key={i}
                transition={{ type: "spring", damping: 22, mass: 0.99 }}
                initial={{ opacity: 0, x: -2000 * (i + 1) }}
                animate={{ opacity: 1, x: 0 }}
                className="p-2"
              >
                <ul className="w-full bg-indigo-500 px-4 py-3.5 font-bold text-white hover:bg-indigo-600 mt-5 cursor-pointer xs:p-0">
                  <motion.li whileHover={{ scale: 1.1 }} className="">
                    <Link href={list.href} className="flex items-center gap-3 p-2">
                      {list.icon}
                      <span>{list.title}</span>
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            ))}
          </div>
        )}
        <div className="flex-col justify-center items-center text-center gap-5 p-2">
          <div className={styles.leftIcons}>
            <i style={{ fontSize: "20px", cursor: "pointer" }} className="fas fa-chevron-left"></i>
          </div>
          <div>
            <h2 className="text-blue-700 md:text-2xl font-bold">Book: "{selectedBook.title}"</h2> <br/>
          </div>
          <div className='flex gap-5 justify-center'>
            
<button onClick={() => setMenuVisible(!menuVisible)} className="text-blue-700 md:text-2xl font-bold"><FaBars/></button> {/* Botón para alternar el menú */}
<button className={styles.saveButton} onClick={handleSave}>
              Save
            </button>
           
          </div>
        </div>
      </motion.section>

      <Editor
        htmlContent={`
          <main className="bookContainer text-black mt-12">
            <aside>
              <h1 className="center">${selectedBook.title}</h1>
              <span className="center small">By ${selectedBook.author}</span>
              ${selectedBook.content}
            </aside>
          </main>
        `}
      />
      <ToastContainer />
    </motion.div>
  );
}

const iconStyle = { marginRight: "20px", fontSize: "20px" };
