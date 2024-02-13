import InfoBox from "../InfoBox";
import Styles from "./index.module.css";

interface ContainerProps {
  comps: any;
}

const Container = (props: ContainerProps) => {
  const { comps } = props;

  return (
    <div className={Styles.Container}>
      <div className={Styles.ContainerTwo}>
        <InfoBox />
        {comps}
      </div>
    </div>
  );
};

export default Container;
