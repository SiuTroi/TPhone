import { favorite } from "../../function";
import CategoryPage from "../CategoryPage/CategoryPage";

const FavoritePage = () => {
  return (
    <div className="favorite">
      <CategoryPage
        categoryFunction={favorite}
        textnormalCate="Cửa hàng"
        textfillCate="Yêu thích"
      />
    </div>
  );
};

export default FavoritePage;
