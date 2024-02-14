"use client";
import Banner from "@/components/Banner";
import Container from "@/components/Container";
import SelectableCard from "@/components/UI/SelectableCard";
import { Controller, FormProvider, useForm, useWatch } from "react-hook-form";
import Styles from "./index.module.css";
import { Button } from "@/components/UI/Button";
import Login from "@/components/Login";

export default function Home() {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const selectedCard = useWatch({ control : methods.control, name: "selectedCard" });

  console.log(selectedCard);
  

  return (
    <Container
      comps={
        <Login />
      }
    />
  );
}
