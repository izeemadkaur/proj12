import React, { useState, useEffect } from "react";
import "./index.css";
import styled from "styled-components";

// TODO: will probably need the forwardRef logic on the remaining input types.
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const [dateValue, setDateValue] = useState<string>(
      props.defaultValue || ""
    );

    useEffect(() => {
      if (props.defaultValue) {
        setDateValue(convertDateToTextFormat(props.defaultValue));
      }
    }, [props.defaultValue]);

    const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, type } = e.target;

      if (value && value?.length > 10) return;

      let formattedValue = value;

      if (type === "date") {
        formattedValue = convertDateToTextFormat(value);
      } else {
        formattedValue = formatInput(value);
        if (isCorrectDateFormat(formattedValue)) {
          e.target.value = convertTextToDateInputFormat(formattedValue);
        }
      }

      setDateValue(formattedValue);

      if (props.onChange) {
        props.onChange(formattedValue);
      }
    };

    const convertDateToTextFormat = (dateStr: string): string => {
      const parts = dateStr.split("-");
      if (parts.length === 3) {
        return `${parts[1]}/${parts[2]}/${parts[0]}`;
      }
      return dateStr;
    };

    const convertTextToDateInputFormat = (dateStr: string): string => {
      const parts = dateStr.split("/");
      if (parts.length === 3) {
        return `${parts[2]}-${parts[0]}-${parts[1]}`;
      }
      return dateStr;
    };

    const formatInput = (value: string): string => {
      const numbers = value.replace(/[^0-9]/g, "");
      let month = "";
      let day = "";
      let year = "";

      const currentYear = new Date().getFullYear();
      const minYear = currentYear - 150;
      const maxYear = currentYear + 150;

      if (numbers.length >= 1) {
        month = numbers.slice(0, 2);
        if (
          numbers.length > 1 &&
          (parseInt(month, 10) > 12 || parseInt(month, 10) < 1)
        ) {
          month = numbers.slice(0, 1);
          if (parseInt(month, 10) > 1 || month === "0") {
            month = "";
          }
        }
      }

      if (numbers.length > 2) {
        day = numbers.slice(2, 4);
        if (
          numbers.length > 3 &&
          (parseInt(day, 10) > 31 || parseInt(day, 10) < 1)
        ) {
          day = numbers.slice(2, 3);
          if (parseInt(day, 10) > 3 || day === "0") {
            day = "";
          }
        }
      }

      if (numbers.length > 4) {
        let tempYear = numbers.slice(4);
        let validYear = "";
        for (let i = 1; i <= tempYear.length; i++) {
          let testYear = tempYear.slice(0, i);
          let yearInt: any = parseInt(testYear, 10);
          if (
            yearInt >= minYear.toString().slice(0, i) &&
            yearInt <= maxYear.toString().slice(0, i)
          ) {
            validYear = testYear;
          } else {
            break;
          }
        }
        year = validYear;
      }

      let formattedValue = month;
      if (month && day) {
        formattedValue += `/${day}`;
      }
      if (month && day && year) {
        formattedValue += `/${year}`;
      }

      return formattedValue;
    };

    const isCorrectDateFormat = (dateStr: string): boolean => {
      const parts = dateStr.split("/");
      if (parts.length === 3) {
        const year = parseInt(parts[2], 10);
        const month = parseInt(parts[0], 10) - 1;
        const day = parseInt(parts[1], 10);
        const date = new Date(year, month, day);
        return (
          date.getFullYear() === year &&
          date.getMonth() === month &&
          date.getDate() === day
        );
      }
      return false;
    };

    return props?.inputType === "date" ? (
      <div className="dob_container">
        <input
          ref={ref}
          onChange={handleDateInputChange}
          placeholder={"mm/dd/yyyy"}
          className="gu-input"
          type="text"
          value={dateValue}
        />
        <div className="datepicker-wrapper">
          <input
            ref={ref}
            onChange={handleDateInputChange}
            placeholder={props.placeholder}
            className="datepicker-input"
            type="date"
            value={
              isCorrectDateFormat(dateValue)
                ? convertTextToDateInputFormat(dateValue)
                : ""
            }
          />
          {/* <span className="calendar-icon">
            <img src={CalenderIcon.src} alt="" />
          </span> */}
        </div>
      </div>
    ) : (
      <input
        ref={ref}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className="gu-input"
        type={props.inputType}
        defaultValue={props?.defaultValue || null}
      />
    );
  }
);

Input.displayName = 'Input';

const StyledRadio = styled.input`
  &:checked + label {
    background-color: ${(props) => props.theme.primaryColor};
  }
`;

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (props, ref) => {
    return (
      <div className="radios">
        <div
          onChange={(e) => props.onChange((e.target as HTMLInputElement).value)}
          className={"gender_radio_fields_container"}
        >
          {props.radioLabels.map((label): any => {
            return (
              <div key={label}>
                <StyledRadio
                  id={label}
                  className="radio-input"
                  type="radio"
                  value={label}
                  name={props.radioName}
                />
                <label className="radio-label" htmlFor={label}>
                  {label}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

Radio.displayName = 'Radio';


const StyledButton = styled.button<{ $type: string }>`
  background-color: ${(props) =>
    props.$type === "primary"
      ? props.theme.primaryColor
      : props.theme.accentColor};
  color: ${(props) =>
    props.$type === "primary"
      ? props.theme.accentColor
      : props.theme.primaryColor};
  border: 2px solid
    ${(props) => (props.$type === "primary" ? "" : props.theme.primaryColor)};
  border-style: "none";
`;

const onClickHandler = (
  onClick: any,
  onClickArguments: any,
) => {
  onClick !== undefined &&
    onClick(onClickArguments !== undefined && onClickArguments);
};

export function Button({
  buttonType,
  isSubmit = true,
  onClick,
  arguments: onClickArguments,
  text,
}: ButtonProps): JSX.Element {
  return (
    <StyledButton
      $type={buttonType}
      type={isSubmit ? "submit" : "button"}
      className={`${buttonType}_button`}
      onClick={() => onClickHandler(onClick, onClickArguments)}
    >
      {text}
    </StyledButton>
  );
}

export type ButtonProps = {
  text: string;
  onClick: Function | undefined;
  // it's possible that we'll need arguments on the onClick button events in the future.
  // if you don't have any arguments, pass undefined.
  arguments: any | undefined;
  buttonType: "primary" | "secondary";
  isSubmit?: boolean | true;
  navigateTo: string | undefined;
};

export type InputProps = {
  inputType: string;
  placeholder: string;
  elementRef: any;
  onChange: any;
  name?: string;
  type?: string;
  defaultValue?: any;
};

export type RadioProps = {
  radioName: string;
  radioLabels: string[];
  onChange: Function;
};
