import React from "react";
import { Controller } from "react-hook-form";
import styles from "./index.module.css"; // Ensure this path matches your file structure

type SelectableQuestionProps = {
  question: string;
  option1: string;
  option2: string;
  index: number;
  control: any; // Consider using a more specific type from react-hook-form if possible
};

const SelectableQuestion: React.FC<SelectableQuestionProps> = ({
  question,
  option1,
  option2,
  index,
  control,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.optionsSection}>
        <Controller
          name={`answer${index}`}
          control={control}
          render={({ field }) => (
            <>
              <button
                type="button"
                onClick={() => field.onChange(option1)}
                className={field.value === option1 ? styles.selected : ""}
              >
                {option1}
              </button>
              <button
                type="button"
                onClick={() => field.onChange(option2)}
                className={field.value === option2 ? styles.selected : ""}
              >
                {option2}
              </button>
            </>
          )}
        />
      </div>
      <div className={styles.questionSection}>
        <span className={styles.questionSectionContainer}>{index + 1}. <div className={styles.question}>{question}</div></span>
      </div>
    </div>
  );
};

export default SelectableQuestion;
