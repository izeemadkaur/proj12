import { useAgentInfo } from "@/contexts/AgentInfoContext";
import InfoBox from "../InfoBox";
import Styles from "./index.module.css";

interface ContainerProps {
  comps: any;
}

const Container = (props: ContainerProps) => {
  const { agentInfo } = useAgentInfo();
  const { comps } = props;

  console.log(agentInfo);
  

  return (
    <div className={Styles.Container}>
      <div className={Styles.ContainerTwo}>
        {<InfoBox />}
        {comps}
      </div>
    </div>
  );
};

export default Container;
