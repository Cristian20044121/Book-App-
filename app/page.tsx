"use client";
import BookCard from "@/components/BookCard";
import Header from "@/components/Header";
import SideBar from "../components/Sidebar";
import { books } from "@/constants/mockData";
import { motion } from "framer-motion";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="mt-10">
        <Header />

        <div className="mt-10">
          <div className={styles.containerStyle}>
            <section className={styles.content}>
              <SideBar />
            </section>

            <div className={styles.grouper}>
              <h1 className={styles.title}>ALL BOOKS</h1>
              <ul className={styles.ulGroupStyle}>
                {books.map((book) => (
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", damping: 50, mass: 0.75 }}
                    initial={{ opacity: 0, x: 200 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={book.id} // Cambié el key a book.id
                  >
                    <a
                      href={`/book/${book.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <BookCard
                        title={book.title}
                        coverImage={book.image} // Asegúrate de que esto sea correcto
                        description={book.description}
                        onClick={() => console.log(`Clicked on ${book.title}`)} // Puedes agregar un onClick si es necesario
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
