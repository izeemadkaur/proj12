import React, { useEffect, useState } from "react";
import { Button } from "../UI/Button";
import Styles from "./index.module.css";
import { useSelector } from "react-redux";

const InfoBox = () => {
  const [isEditing, setIsEditing] = useState(false);

  const {agentInfo} = useSelector((state:any) => state.agent);  

  const [applicantInfo, setApplicantInfo] = useState(agentInfo);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setApplicantInfo((prevState:any) => ({
      ...prevState,
      [name]: value,
    }));

    const input = e.target;
    input.style.width = input.value.length + 1 + "ch";
  };

  useEffect(() => {
    const verticalDividers: any = document.querySelectorAll("#verticalDivider");
    if (isEditing) {
      const inputs: any = document.querySelectorAll("#dynamicWidthInput");
      inputs.forEach((elm:any) => {
        elm.style.width =  `calc(${elm.value.length + 1}ch + 20px)`; 
      });
      verticalDividers.forEach((elm:any) => {
        elm.style.display =  `none`; 
      });

    } else {
      verticalDividers.forEach((elm:any) => {
        elm.style.display =  `block`; 
      });
    }
  }, [isEditing]);

  const renderField = (label: string, value: string, name: string) => {
    return isEditing ? (
      <input
        id="dynamicWidthInput"
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        className={Styles.inputField}
      />
    ) : (
      <div>{value}</div>
    );
  };

  return (
    <div className={Styles.Container}>
      <div className={Styles.headerbox}>
        <div className={Styles.ApplicantNameLabel}>Applicant Name</div>
        <div className={Styles.ApplicantNameContainer}>
          <div className={Styles.ApplicantName}>John Smith</div>
          <div>
            <Button
              text={isEditing ? "Save Changes" : "Edit Information"}
              onClick={() => setIsEditing(!isEditing)}
              arguments={undefined}
              buttonType={"primary"}
              navigateTo={undefined}
            />
          </div>
        </div>
        <div className={Styles.horizontalDivider} />
        <div className={Styles.ApplicantInfoContainer}>
          <div className={isEditing? Styles.editFormCol : Styles.col}>
            <div className={Styles.label}>Sex</div>
            {renderField("Sex", applicantInfo.sex, "sex")}
          </div>

          <div  id="verticalDivider" className={Styles.verticalDivider} />
          <div className={isEditing? Styles.editFormCol : Styles.col}>
            <div className={Styles.label}>Age</div>
            {renderField("Age", applicantInfo.age, "age")}
          </div>

          <div id="verticalDivider" className={Styles.verticalDivider} />
          <div className={isEditing? Styles.editFormCol : Styles.col}>
            <div className={Styles.label}>Birthdate</div>
            {renderField("Birthdate", applicantInfo.birthdate, "birthdate")}
          </div>

          <div id="verticalDivider" className={Styles.verticalDivider} />
          <div className={isEditing? Styles.editFormCol : Styles.col}>
            <div className={Styles.label}>Height</div>
            {renderField("Height", applicantInfo.height, "height")}
          </div>

          <div id="verticalDivider" className={Styles.verticalDivider} />
          <div className={isEditing? Styles.editFormCol : Styles.col}>
            <div className={Styles.label}>Weight</div>
            {renderField("Weight", applicantInfo.weight, "weight")}
          </div>

          <div id="verticalDivider" className={Styles.verticalDivider} />
          <div className={isEditing? Styles.editFormCol : Styles.col}>
            <div className={Styles.label}>Address</div>
            {renderField("Address", applicantInfo.address, "address")}
          </div>

          <div id="verticalDivider" className={Styles.verticalDivider} />
          <div className={isEditing? Styles.editFormCol : Styles.col}>
            <div className={Styles.label}>Tabacco Status</div>
            {renderField(
              "Tabacco Status",
              applicantInfo.tobaccoStatus,
              "tobaccoStatus"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
