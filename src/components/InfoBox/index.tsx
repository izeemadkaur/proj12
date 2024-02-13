import { Button } from "../UI/Button";
import Styles from "./index.module.css";

const InfoBox = () => {
  return (
    <div className={Styles.Container}>
        <div className={Styles.headerbox}>
          <div className={Styles.ApplicantNameLabel}>Applicant Name</div>
          <div className={Styles.ApplicantNameContainer}>
            <div className={Styles.ApplicantName}>John Smith</div>
            <div>
              <Button
                text="Edit Information"
                onClick={undefined}
                arguments={undefined}
                buttonType={"primary"}
                navigateTo={undefined}
              />
            </div>
          </div>
          <div className={Styles.horizontalDivider} />
          <div className={Styles.ApplicantInfoContainer}>
            <div className={Styles.col}>
              <div>Sex</div>
              <div>Male</div>
            </div>

            <div className={Styles.verticalDivider} />
            <div className={Styles.col}>
              <div>Age</div>
              <div>46</div>
            </div>

            <div className={Styles.verticalDivider} />
            <div className={Styles.col}>
              <div>Birthdate</div>
              <div>1/2/1980</div>
            </div>

            <div className={Styles.verticalDivider} />
            <div className={Styles.col}>
              <div>Height</div>
              <div>5'11"</div>
            </div>

            <div className={Styles.verticalDivider} />
            <div className={Styles.col}>
              <div>Weight</div>
              <div>175lbs</div>
            </div>

            <div className={Styles.verticalDivider} />
            <div className={Styles.col}>
              <div>Address</div>
              <div>123 Main Street, City, State 99999</div>
            </div>

            <div className={Styles.verticalDivider} />
            <div className={Styles.col}>
              <div>Tabacco Status</div>
              <div>Non-Smoker</div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default InfoBox;
