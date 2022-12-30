import { networkdeviceCategory } from "../../../function";
import CategoryPage from "../../CategoryPage/CategoryPage";

const NetworkDevice = () => {
  return (
    <div className="networkdevice">
      <CategoryPage
        categoryFunction={networkdeviceCategory}
        textnormalCate="Thiết bị"
        textfillCate="Mạng"
      />
    </div>
  );
};

export default NetworkDevice;
