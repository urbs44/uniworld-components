import React from "react";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  image, 
  className = "",
  children 
}) => {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${className}`}>
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Card; 