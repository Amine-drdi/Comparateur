import React, { useState } from "react";
import {guides} from "../../../assets/dentaire/data/guides"
import { useNavigate } from "react-router-dom";

const itemsPerPage = 6;

    export default function GuidesDentaires() {
      const navigate = useNavigate();

      const [currentPage, setCurrentPage] = useState(1);
    
      // Pagination logic
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = guides.slice(indexOfFirstItem, indexOfLastItem);
      const totalPages = Math.ceil(guides.length / itemsPerPage);
    
      return (
        <div className="max-w-7xl mx-auto p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">
              Les guides et actualités mutuelle Dentaire
            </h2>
            <p className="text-gray-700">
              Retrouvez nos guides enrichis ainsi que les dernières actualités sur la mutuelle dentaire
            </p>
          </div>
    
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {currentItems.map((guide) => (
              <a
                key={guide.id}
                href={guide.link}
                className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                <h3 
                  className="text-xl font-semibold text-gray-900 mb-3 cursor-pointer hover:text-blue-600"
                  onClick={() => navigate(`/guideDentaire/${guide.id}`)} // 🔹 Redirection
                >
                  {guide.title}
                </h3>
                  <span className="text-sm text-blue-600 hover:underline mt-2 inline-block">
                    Lire l'article
                  </span>
                </div>
              </a>
            ))}
          </div>
    
          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded border ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      );
    }

