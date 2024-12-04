import React from "react";
import { FaTrash } from "react-icons/fa";

export default function Card({
  index,
  title,
  content,
  image,
  tags,
  category,
  isPublished,
  onDelete,
}) {
  let imageSrc = "defaultImage.jpg"; // Placeholder for image
  if (image && image instanceof Blob) {
    imageSrc = URL.createObjectURL(image);
  }

  return (
    <div className={`card h-100 ${isPublished ? "published" : "unpublished"}`}>
      <img
        src={imageSrc}
        className="card-img-top img-fluid"
        alt={title}
        style={{ maxHeight: "150px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate">{title}</h5>
        <p className="card-category">{category}</p>
        <ul className="card-tags list-unstyled d-flex flex-wrap">
          {tags.map((tag, index) => (
            <li key={index} className="badge bg-secondary me-1">
              {tag}
            </li>
          ))}
        </ul>
        <p className="card-text text-truncate">{content}</p>
        <div className="mt-auto">
          <a href="#" className="btn btn-primary me-2">
            Leggi di più
          </a>
          <button className="btn btn-danger" onClick={() => onDelete(index)}>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}
