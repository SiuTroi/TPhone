import HomeItem from "./HomeItem";
import { favorite } from "../../../function/index";

const Favorite = () => {
  return (
    <div className="favorite">
      <HomeItem
        homeItemFunction={favorite}
        textnormalCate="Cửa hàng"
        textfillCate="Yêu thích"
        route="/favorite"
      />
    </div>
  );
};

export default Favorite;
