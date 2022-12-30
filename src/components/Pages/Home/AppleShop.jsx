import { apple } from "../../../function";
import HomeItem from "./HomeItem";

const AppleShop = () => {
  return (
    <div className="apple">
      <HomeItem
        homeItemFunction={apple}
        textnormalCate="Cửa hàng"
        textfillCate="Apple"
      />
    </div>
  );
};

export default AppleShop;
