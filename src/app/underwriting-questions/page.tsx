"use client";
import Container from "@/components/Container";
import { useForm } from "react-hook-form";
import Styles from "./index.module.css";
import { Button } from "@/components/UI/Button";
import SelectableQuestion from "@/components/UI/SelectableQuestion";
import Questions from "@/data/questions.json";

export default function Page() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container
      comps={
        <>
          <section id={Styles.UnderwritingSection}>
            <div>
              <h2>Underwriting Questions</h2>
            </div>
          </section>
          <section>
            <form onSubmit={handleSubmit(onSubmit)} className={Styles.form}>
              {Questions.map((q, index) => (
                <SelectableQuestion
                  key={index}
                  question={q.question}
                  option1={q.option1}
                  option2={q.option2}
                  index={index}
                  control={control}
                />
              ))}
              <div className={Styles.ButtonContainer}>
                <Button
                  text="Continue"
                  onClick={undefined}
                  arguments={undefined}
                  buttonType={"primary"}
                  navigateTo={undefined}
                  // disabled={!selectedCard}
                />
                <Button
                  text="Back"
                  onClick={undefined}
                  arguments={undefined}
                  buttonType={"secondary"}
                  navigateTo={undefined}
                />
              </div>
            </form>
          </section>
        </>
      }
      hasNav={true}
    />
  );
}
