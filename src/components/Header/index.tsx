import Image from "next/image";
import Styles from "./index.module.css";
import Logo from "@/assets/GTL/white-logo.png";

const Header = () => {
  return (
    <div className={Styles.Header}>
      <Image alt="" src={Logo} height={100} />
      <div>
        <h2 className={Styles.heading}>DigitalBGA Application</h2>
        <p>Your Agent Code: {`XXXXXXXX`}</p>
      </div>
    </div>
  );
};

export default Header;
