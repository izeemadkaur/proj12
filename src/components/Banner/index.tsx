import Styles from "./index.module.css";

interface BannerProps {
  comp: any;
}

const Banner = ({ comp }: BannerProps) => {
  return <div className={Styles.Banner}>{comp}</div>;
};

export default Banner;
