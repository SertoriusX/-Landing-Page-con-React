import React from "react";

export default function Filter({
  Ages,
  City,
  ExperienceList,
  selectedAge,
  setSelectedAge,
  selectedCity,
  setSelectedCity,
  selectedExperience,
  setSelectedExperience,
  setSearch,
  SkillsList,
  selectedSkills,
  setSelectSkills,
}) {
  return (
    <div className="py-3 d-flex flex-column align-items-center w-100">
      <input
        type="search"
        className="form-control form-control-dark mb-4 w-100 w-md-50"
        placeholder="Search..."
        aria-label="Search"
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3 className="text-center mb-4 fw-bold">Filter People</h3>

      <div className="row w-100 justify-content-center g-3">
        <div className="col-12 col-md-3">
          <label htmlFor="ageSelect" className="form-label fw-semibold">
            Select Age
          </label>
          <select
            id="ageSelect"
            className="form-select shadow-sm"
            value={selectedAge}
            onChange={(e) => setSelectedAge(e.target.value)}
          >
            <option value="">-- Choose Age --</option>
            {Ages.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12 col-md-3">
          <label htmlFor="citySelect" className="form-label fw-semibold">
            Select City
          </label>
          <select
            id="citySelect"
            className="form-select shadow-sm"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="">-- Choose City --</option>
            {City.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12 col-md-3">
          <label htmlFor="experienceSelect" className="form-label fw-semibold">
            Select Experience
          </label>
          <select
            id="experienceSelect"
            className="form-select shadow-sm"
            value={selectedExperience}
            onChange={(e) => setSelectedExperience(e.target.value)}
          >
            <option value="">Select Experience</option>
            {ExperienceList.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="col-12 col-md-3">
        <label htmlFor="citySelect" className="form-label fw-semibold">
          Select Skill
        </label>
        <select
          id="citySelect"
          className="form-select shadow-sm"
          value={selectedSkills}
          onChange={(e) => setSelectSkills(e.target.value)}
        >
          <option value="">-- Choose skill --</option>
          {SkillsList.map((skill, index) => (
            <option key={`${skill}-${index}`} className="me-1 mb-2">
              {skill}
            </option>
          ))}
        </select>
      </div>

      <div className="text-center mt-4">
        <h5>Selected:</h5>
        <p className="text-muted">
          {selectedAge ? `Age: ${selectedAge}` : "No age selected"} <br />
          {selectedCity ? `City: ${selectedCity}` : "No city selected"} <br />
          {selectedExperience
            ? `Experience: ${selectedExperience}`
            : "No experience selected"}{" "}
          <br />
          {selectedSkills
            ? `Skill: ${selectedSkills}`
            : "No skill selected"}{" "}
          <br />
        </p>
      </div>
    </div>
  );
}
