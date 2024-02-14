"use client";
import Banner from "@/components/Banner";
import Container from "@/components/Container";
import SelectableCard from "@/components/UI/SelectableCard";
import { Controller, FormProvider, useForm, useWatch } from "react-hook-form";
import Styles from "./index.module.css";
import { Button } from "@/components/UI/Button";
import SelectableQuestion from "@/components/UI/SelectableQuestion";

const questions = [
  { question: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?`, option1: "Yes", option2: "No" },
  { question: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?`, option1: "Yes", option2: "No" },
  { question: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?`, option1: "Yes", option2: "No" },
  { question: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?`, option1: "Yes", option2: "No" },
  { question: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?`, option1: "Yes", option2: "No" },
  // Add more questions as needed
];

export default function Page() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      // Initialize all answers, assuming you have a dynamic way to set these keys
      answer0: '',
      answer1: '',
      // Continue for the number of questions you have
    }
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  // const selectedCard = useWatch({
  //   control: control,
  //   name: "selectedCard",
  // });


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
              {questions.map((q, index) => (
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
    />
  );
}
