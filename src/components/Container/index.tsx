import InfoBox from "../InfoBox";
import Styles from "./index.module.css";
import { useSelector } from "react-redux";

interface ContainerProps {
  comps: any;
  hasNav?: boolean | true;
}

const Container = (props: ContainerProps) => {
  const { comps, hasNav } = props;
  const { agentInfo } = useSelector((state: any) => state.agent);
  console.log(agentInfo);
  

  return (
    <div className={Styles.Container}>
      <div className={Styles.ContainerTwo}>
        {hasNav && agentInfo?.name && <InfoBox />}
        {comps}
      </div>
    </div>
  );
};

export default Container;
