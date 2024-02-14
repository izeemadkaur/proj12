"use client";
import Banner from "@/components/Banner";
import Container from "@/components/Container";
import SelectableCard from "@/components/UI/SelectableCard";
import { Controller, FormProvider, useForm, useWatch } from "react-hook-form";
import Styles from "./index.module.css";
import { Button } from "@/components/UI/Button";

export default function Page() {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const selectedCard = useWatch({ control : methods.control, name: "selectedCard" });  

  return (
    <Container
      comps={
        <>
          <Banner
            comp={
              <>
                <strong>
                  <span className="underlined">Predicted</span> Underwriting
                  Class: Preferred
                </strong>
              </>
            }
          />
          <section id={Styles.CoverageSection}>
            <div>
              <h2>Coverage Options</h2>
              <p className={Styles.CoverageSectionDesc}>
                Please Note: Underwriting class and coverage options may change
                after the Risk Assessment on the following screen.
              </p>
            </div>
          </section>
          <section>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className={Styles.SelectableCardsContainer}>
                  <Controller
                    name="selectedCard"
                    control={methods.control}
                    render={({ field }) => (
                      <>
                        <SelectableCard
                          id="1"
                          header="$XX,XXX"
                          description="$XX per Month"
                          selectedValue={field.value}
                          {...field}
                        />
                        <SelectableCard
                          id="2"
                          header="$XX,XXX"
                          description="$XX per Month"
                          selectedValue={field.value}
                          {...field}
                        />
                        <SelectableCard
                          id="3"
                          header="$XX,XXX"
                          description="$XX per Month"
                          selectedValue={field.value}
                          {...field}
                        />
                        <SelectableCard
                          id="4"
                          header="$XX,XXX"
                          description="$XX per Month"
                          selectedValue={field.value}
                          {...field}
                        />
                        <SelectableCard
                          id="5"
                          header="$XX,XXX"
                          description="$XX per Month"
                          selectedValue={field.value}
                          {...field}
                        />
                        <SelectableCard
                          id="6"
                          header="$XX,XXX"
                          description="$XX per Month"
                          selectedValue={field.value}
                          isCustom={true}
                          {...field}
                        />
                      </>
                    )}
                  />
                </div>

                <div className={Styles.WhyUsSection}>
                  <h2>Why life insurance with GTL?</h2>
                  <ul className="mt-md indent">
                    <li className="mt-sm">
                      <strong>Family-Run Business</strong>
                      <br />
                      <p>
                        3rd Generation family-run insurance company since it's
                        foundation int 1936.
                      </p>
                    </li>
                    <li className="mt-sm">
                      <strong>Customer Service</strong>
                      <br />
                      <p>
                        Personal customer service from our friendly home office
                        staff in Glenview, ILlinois.
                      </p>
                    </li>
                    <li className="mt-sm">
                      <strong>Claims Process</strong>
                      <br />
                      <p>
                        Strong history of paying claims fast to our
                        policyholders.
                      </p>
                    </li>
                  </ul>
                  <ul className="mt-sm highlightedListItem">
                    <div className="highlighter">
                      <li>
                        <strong>
                          Funeral Concierge Services Provided by Sequoia
                        </strong>
                        <br />
                        <p>
                          Policyholders have access to industry-leading funeral
                          concierge services offering emotional, logistical, and
                          financial support in the event of death.
                        </p>
                      </li>
                    </div>
                  </ul>
                </div>

                <div className={Styles.ButtonContainer}>
                <Button
                text="Continue"
                onClick={undefined}
                arguments={undefined}
                buttonType={"primary"}
                navigateTo={undefined}
                disabled={!selectedCard}
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
            </FormProvider>
          </section>
        </>
      }
      hasNav={true}
    />
  );
}
