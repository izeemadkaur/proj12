import React, { forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import styles from "./index.module.css";

interface SelectableCardProps {
  id: string;
  header: string;
  description: string;
  selectedValue: string;
  isCustom?: boolean;
}

const SelectableCard = forwardRef(({
  id,
  header,
  description,
  selectedValue,
}: SelectableCardProps, ref) => {

  const { register, watch } = useFormContext(); 
  const isSelected = watch("selectedCard") === id;

  return (
    <div className={isSelected ? styles.selectedCard : styles.card}>
      <div>
        <h2 className={isSelected ? styles.selectedHeader : styles.header}>
          {header}
        </h2>
        <p className={styles.desc}>{description}</p>
      </div>

      <label className={isSelected ? styles.selectedButton : styles.button}>
        <input
          type="radio"
          value={id}
          {...register("selectedCard")}
          style={{ display: "none" }} // Hide the default radio button
        />
        {isSelected ? "✓" : "Select"}
      </label>
    </div>
  );
});

export default SelectableCard;
