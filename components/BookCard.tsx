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
    <div style={cardStyle} onClick={onClick}>
      <img src={coverImage} alt={title} style={imageStyle} />
      <div style={contentStyle}>
        <h3 style={titleStyle}>{title}</h3>
        <p style={descriptionStyle}>{description}</p>
      </div>
    </div>
  );
};

const cardStyle = {
  width: "200px",
  padding: "1rem",
  borderRadius: "5px",
  backgroundColor: "#f8eadd",
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

const contentStyle = {
  marginTop: "1rem",
};

const titleStyle = {
  fontSize: "1.2rem",
  marginBottom: "0.5rem",
  color: "#000",
};

const descriptionStyle = {
  fontSize: "0.8rem",
  color: "#888",
};

export default BookCard; // Asegúrate de que sea exportación por defecto
