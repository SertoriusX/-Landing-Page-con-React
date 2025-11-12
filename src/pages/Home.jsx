import React from "react";
import Filter from "../components/Filter";
import DataList from "../components/DataList";
import listOfPerson from "../datas/ListOfData";
import Ages from "../datas/Ages";
import City from "../datas/City";
import ExperienceList from "../datas/ExperienceList";
import SkillsList from "../datas/SkillsList";
import HomeHook from "../hooks/HomeHook";

export default function Home() {
  const {
    filtered,
    selectedAge,
    setSelectedAge,
    selectedCity,
    setSelectedCity,
    search,
    setSearch,
    selectedExperience,
    setSelectedExperience,
    SkillsList: allSkills,
    selectedSkills,
    setSelectSkills,
    currentPage,
    setCurrentPage,
    totalPages,
  } = HomeHook(listOfPerson, SkillsList);

  const handleClearFilters = () => {
    setSelectedAge("");
    setSelectedCity("");
    setSelectSkills("");
    setSelectedExperience("");
    setSearch("");
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-5 fw-bold text-primary">🏠 Home</h1>

      <div className="row g-4">
        <div className="col-md-3 col-12">
          <div className="shadow-sm rounded bg-light p-3">
            <h5 className="mb-3 text-secondary">Filter Options</h5>

            <Filter
              Ages={Ages}
              City={City}
              selectedAge={selectedAge}
              setSelectedAge={setSelectedAge}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
              setSearch={setSearch}
              ExperienceList={ExperienceList}
              selectedExperience={selectedExperience}
              setSelectedExperience={setSelectedExperience}
              SkillsList={allSkills}
              selectedSkills={selectedSkills}
              setSelectSkills={setSelectSkills}
            />

            <button
              className="btn btn-outline-secondary w-100 mt-3"
              onClick={handleClearFilters}
            >
              Clear Filters
            </button>
          </div>
        </div>

        <div className="col-md-8 col-12">
          <div className="shadow-sm rounded bg-white p-3">
            <DataList
              data={filtered}
              search={search}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
              selectedSkills={selectedSkills}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
