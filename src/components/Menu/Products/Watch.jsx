import { watchCategory } from "../../../function";
import CategoryPage from "../../CategoryPage/CategoryPage";

const Watch = () => {
  return (
    <div className="watch">
      <CategoryPage
        categoryFunction={watchCategory}
        textnormalCate="Smart"
        textfillCate="Watch"
      />
    </div>
  );
};

export default Watch;
