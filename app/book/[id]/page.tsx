"use client";
import { books } from "../../../constants/mockData";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { Editor, useDomValue } from "reactjs-editor";
import "react-toastify/dist/ReactToastify.css";
import styles from "./books.module.css";

export default function BookPage() {
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
    >
      <motion.section
        transition={{ type: "spring", damping: 44, mass: 0.75 }}
        initial={{ opacity: 0, y: -1000 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.appBar}
      >
        <div className={styles.leftIcons}>
          <i
            style={{ fontSize: "20px", cursor: "pointer" }}
            className="fas fa-chevron-left"
          ></i>
        </div>
        <div className={styles.title}>
          <h2 className={styles.titleStyles}> {selectedBook.title}</h2>
        </div>
        <div className={styles.icons}>
          <button className={styles.saveButton} onClick={handleSave}>
            Save
          </button>
          <i style={iconStyle} className="fas fa-cog"></i>
          <i style={iconStyle} className="fas fa-share"></i>
          <i style={iconStyle} className="fas fa-search"></i>
        </div>
      </motion.section>

      <Editor
        htmlContent={`
        <main className="bookContainer">
          <aside>
            <h1 className="center">${selectedBook.title} </h1>
            <span className="center small"> By ${selectedBook.author} </span>
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
