"use client"; // Declaración para asegurarse de que este archivo se ejecute en el lado del cliente
import React from "react";

// Definir la interfaz para los props
interface BookCardProps {
  title: string; // Título del libro, tipo string
  description: string; // Descripción del libro, tipo string
  coverImage: string; // URL de la imagen de la portada, tipo string
  onClick?: () => void; // Función opcional para manejar el evento de click
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  description,
  coverImage,
  onClick,
}) => {
  return (
    <div style={cardStyle} onClick={onClick} className="border bg-white hover:bg-gray-200"> 
      <img src={coverImage} alt={title} style={imageStyle} />
      <div className=" mt-4">
        <h2 className="text-xl tracking-wide text-black">{title}</h2>
        <p className="text-xs text-black mt-2">{description}</p>
      </div>
    </div>
  );
};

const cardStyle = {
  width: "200px",
  padding: "1rem",
  borderRadius: "5px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  transition: "transform 0.3s ease",
  marginBottom: "1.5rem",
  marginRight: "1.6rem",
  
};

const imageStyle = {
  width: "100%",
  aspectRatio: 1,
  borderRadius: "5px",
};







export default BookCard; // Asegúrate de que sea exportación por defecto
