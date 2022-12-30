import { tabletCategory } from "../../../function";
import CategoryPage from "../../CategoryPage/CategoryPage";

const Tablet = () => {
  return (
    <div className="tablet">
      <CategoryPage
        categoryFunction={tabletCategory}
        textnormalCate="Tablet"
      />
    </div>
  );
};

export default Tablet;
