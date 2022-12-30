import { keyboardCategory } from "../../../function";
import CategoryPage from "../../CategoryPage/CategoryPage";

const KeyBoard = () => {
  return (
    <div className="beyboard">
      <CategoryPage
        categoryFunction={keyboardCategory}
        textnormalCate="Bàn"
        textfillCate="Phím"
      />
    </div>
  );
};

export default KeyBoard;
