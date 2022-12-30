import { laptopCategory } from "../../../function";
import CategoryPage from "../../CategoryPage/CategoryPage";

const Laptop = () => {
  return (
    <div className="laptop">
      <CategoryPage
        categoryFunction={laptopCategory}
        textnormalCate="Laptop"
      />
    </div>
  );
};

export default Laptop;
