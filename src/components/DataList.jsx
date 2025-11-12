import React from "react";
import DataListHook from "../hooks/DataListHook";
export default function DataList({
  data,
  search,
  currentPage,
  setCurrentPage,
  totalPages,
  selectedSkills,
}) {
  const { handlePageClick, handlePrev, handleNext, pages } = DataListHook(
    currentPage,
    setCurrentPage,
    totalPages
  );

  return (
    <div className="w-100">
      <div className="row g-3 justify-content-center">
        {data
          .filter((d) => {
            const matchesSearch =
              !search.trim() ||
              d.firstName.toLowerCase().includes(search.toLowerCase());

            const matchesSkill =
              selectedSkills === "" || d.skills.includes(selectedSkills);

            return matchesSearch && matchesSkill;
          })
          .map((d, i) => (
            <div
              key={i}
              className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
            >
              <div
                className="card shadow-sm text-center"
                style={{
                  width: "100%",
                  maxWidth: "280px",
                  height: "220px",
                  overflow: "hidden",
                }}
              >
                <div className="card-body">
                  <h5 className="card-title mb-2">
                    {d.firstName} {d.lastName}
                  </h5>

                  <p className="card-text">{d.description}</p>

                  {d.skills.length > 0 &&
                    d.skills.map((skill) => (
                      <span key={skill} className="badge bg-primary me-1 mb-2">
                        {skill}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Page navigation example"
          className="d-flex justify-content-center mt-4"
        >
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={handlePrev}>
                Previous
              </button>
            </li>

            {pages.map((page) => (
              <li
                key={page}
                className={`page-item ${currentPage === page ? "active" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageClick(page)}
                >
                  {page}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button className="page-link" onClick={handleNext}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
