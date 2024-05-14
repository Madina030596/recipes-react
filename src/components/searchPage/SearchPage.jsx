import { useSearchParams } from "react-router-dom";
import { useGetSearchedRecipesQuery } from "../../redux/api";
import { Card } from "../card/Card";
import { Preloader } from "../preloader/Preloader";
import s from "./SearchPage.module.css";

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const searchName = searchParams.get("name");

  const { data, isLoading } = useGetSearchedRecipesQuery(searchName || "");

  if (isLoading) {
    return <Preloader />;
  }

  if (data.length < 1) {
    return <h3 className={s.noResults}>Nothing was found</h3>;
  } else {
    return (
      <div className={s.container}>
        <Card cards={data} />
      </div>
    );
  }
}
