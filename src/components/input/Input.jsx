import s from "./Input.module.css";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useGetSearchedRecipesQuery } from "../../redux/api";
import { useNavigate, useSearchParams } from "react-router-dom";

export function Input() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "";

  const debouncedSearch = useDebounce(value);

  const { data } = useGetSearchedRecipesQuery(value, {
    skip: debouncedSearch.length < 1
  });

  function handleSearch() {
    setValue(debouncedSearch);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (value.trim() && name !== value.trim()) {
      navigate(`/search?name=${value}`);
    }
  }

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <input
        onChange={e => setValue(e.target.value)}
        className={s.input}
        type="search"
        placeholder="search recipe"
        value={value}
      />
      <button type="submit" onClick={handleSearch}>
        <CiSearch className={s.icon} />
      </button>
    </form>
  );
}
