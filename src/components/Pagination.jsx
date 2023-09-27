import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    // Generate an array of page numbers based on the total number of pages
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className="flex justify-center mt-4">
            <ul className="flex space-x-2">
                {pageNumbers.map((page) => (
                    <li key={page}>
                        <button
                            className={`${currentPage === page
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-blue-200 hover:text-blue-500"
                                } px-4 py-2 rounded`}
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
