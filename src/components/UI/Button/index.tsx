import "./index.css";
import styled from "styled-components";

const StyledButton = styled.button<{ $type: string }>`
  background-color: ${(props:any) =>
    props.$type === "primary"
      ? props.theme.primaryColor
      : props.theme.accentColor};
  color: ${(props:any) =>
    props.$type === "primary"
      ? props.theme.accentColor
      : props.theme.primaryColor};
  border: 2px solid
    ${(props:any) => (props.$type === "primary" ? "" : props.theme.primaryColor)};
  border-style: none;
`;

export function Button({
  buttonType,
  isSubmit = true,
  onClick,
  arguments: onClickArguments,
  text,
  disabled
}: ButtonProps): JSX.Element {
  return (
    <StyledButton
      $type={buttonType}
      type={isSubmit ? "submit" : "button"}
      className={`${buttonType}_button`}
      disabled={disabled}
      onClick={() =>
        onClick !== undefined &&
        onClick(onClickArguments !== undefined && onClickArguments)
      }
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
  disabled?: boolean | undefined
};

