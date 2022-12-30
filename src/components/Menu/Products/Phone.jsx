import { phoneCategory } from "../../../function";
import CategoryPage from "../../CategoryPage/CategoryPage";

const Phone = () => {
  return (
    <div className="phone">
      <CategoryPage
        categoryFunction={phoneCategory}
        textnormalCate="Điện"
        textfillCate="Thoại"
      />
    </div>
  );
};

export default Phone;
