import { useState, useEffect } from "react";

const HomeHook = (listOfPerson, SkillsList) => {
  const [filtered, setFiltered] = useState([]);
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSkills, setSelectSkills] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const itemPerPage = 9;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedAge, selectedCity, selectedSkills, selectedExperience, search]);

  useEffect(() => {
    let data = [...listOfPerson];

    if (selectedCity) data = data.filter((d) => d.city === selectedCity);
    if (selectedSkills)
      data = data.filter((d) => d.skills.includes(selectedSkills));
    if (selectedAge) data = data.filter((d) => d.age === Number(selectedAge));
    if (selectedExperience)
      data = data.filter((d) => d.experience === Number(selectedExperience));
    if (search)
      data = data.filter((d) =>
        d.firstName.toLowerCase().includes(search.toLowerCase())
      );

    const total = data.length;
    const totalPagesCalc = Math.ceil(total / itemPerPage);
    setTotalPages(totalPagesCalc);

    const nextPage = currentPage * itemPerPage;
    const previousPage = nextPage - itemPerPage;
    const paginated = data.slice(previousPage, nextPage);

    setFiltered(paginated);
  }, [
    selectedAge,
    selectedCity,
    selectedSkills,
    selectedExperience,
    search,
    currentPage,
  ]);

  return {
    filtered,
    selectedAge,
    setSelectedAge,
    selectedCity,
    setSelectedCity,
    search,
    setSearch,
    selectedExperience,
    setSelectedExperience,
    SkillsList,
    selectedSkills,
    setSelectSkills,
    currentPage,
    setCurrentPage,
    totalPages,
  };
};

export default HomeHook;
