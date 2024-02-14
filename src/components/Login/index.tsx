import { Container, Row, Col } from "react-bootstrap";
import { CapacitorHttp } from "@capacitor/core";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useState } from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { useAgentInfo } from "@/contexts/AgentInfoContext";

interface IFormInput {
  username: string;
  password: string;
  dispatch?: Function;
}

function Login(props: LoginProps): JSX.Element {
  const { setAgentInfo } = useAgentInfo();


  const [error, setError] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberUsername, setRememberUsername] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { defaultValues, errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      dispatch: props.dispatch,
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberUsernameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRememberUsername(event.target.checked);

    if (!event.target.checked) {
      localStorage.removeItem("rememberedUsername");
    }
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data: any) => {
    console.log(data);

    if (rememberUsername)
      localStorage.setItem("rememberedUsername", data.username);
    else localStorage.removeItem("rememberedUsername");

    let url = "/api/getAgentInfo";

    const options = {
      url: encodeURI(url),
      method: "POST",
      data: JSON.stringify({
        username: data.username,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json; charset=utf-8", // Corrected charset value
      },
    };

    try {
      const response = await CapacitorHttp.request(options);

      if (response.status == 200) {
        const userInfo = response?.data?.user || "";

        if (userInfo) {
          setAgentInfo(userInfo);
          return window.location.assign("/application-coverage");
        }

        console.log(84, { errMessage: "errMessage" });
        return setError("An error has occurred.");
      } else {
        const errMessage = response?.data?.message || "";
        console.log(88, { errMessage });

        return setError(errMessage);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  // useEffect(() => {
  //   if (savedUsername) {
  //     setValue("username", savedUsername);
  //     setRememberUsername(true);
  //   }
  // }, [setValue, savedUsername]);

  return (
    <div>
      <h1 id="login-header">Agent Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form-container">
        <Container className="login-fields-container">
          {/* USERNAME */}
          <Row className="login-field-row">
            <Col xs={12}>
              <Controller
                name="username"
                control={control}
                rules={{ required: "Username is required" }}
                render={({ field }) => (
                  <Input
                    elementRef={field.ref}
                    inputType={"text"}
                    placeholder="Username"
                    {...field}
                    defaultValue={defaultValues?.username || null}
                  />
                )}
              />
              {errors.username && (
                <p style={{ color: "red", textAlign: "left" }}>
                  Username is required.
                </p>
              )}
            </Col>
          </Row>

          {/* REMEMBER USERNAME / FORGOT USERNAME */}
          <Row className="login-links-row">
            <Col xs={6} className="text-left">
              <span style={{ fontSize: ".75rem", whiteSpace: "nowrap" }}>
                <input
                  type="checkbox"
                  checked={rememberUsername}
                  onChange={handleRememberUsernameChange}
                />
                REMEMBER USERNAME?
              </span>
            </Col>
            {/* <Col xs={6} className="text-right">
                <StyledLink style={{ fontSize: "small", whiteSpace: "nowrap" }}>
                  <Link to="/forgotusername" content="Forgot Username" />
                </StyledLink>
              </Col> */}
          </Row>

          {/* PASSWORD */}
          <Row className="login-field-row">
            <Col xs={12}>
              <Controller
                name="password"
                control={control}
                rules={{ required: "password is required" }}
                render={({ field }) => (
                  <Input
                    elementRef={field.ref}
                    inputType={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...field}
                  />
                )}
              />
              {errors.password && (
                <p style={{ color: "red", textAlign: "left" }}>
                  Password is required.
                </p>
              )}
            </Col>
          </Row>

          {/* SHOW PASSWORD / FORGOT MY PASSWORD */}
          <Row className="login-links-row">
            <Col xs={6} className="text-left">
              <span style={{ fontSize: ".75rem", whiteSpace: "nowrap" }}>
                <input type="checkbox" onChange={togglePasswordVisibility} />
                SHOW PASSWORD?
              </span>
            </Col>
            {/* <Col xs={6} className="text-right">
                <StyledLink style={{ fontSize: "small", whiteSpace: "nowrap" }}>
                  <Link to="/forgotpassword" content="Forgot My Password" />
                </StyledLink>
              </Col> */}
          </Row>

          <Row style={{ width: "100%", textAlign: "left" }}>
            <Col xs={12} style={{ maxWidth: "80%" }}>
              {error && (
                <span style={{ color: "red", fontWeight: 800 }}>{error}</span>
              )}
            </Col>
          </Row>

          <Row className="login-button">
            <Button
              text="Login"
              onClick={undefined}
              arguments={undefined}
              buttonType={"primary"}
              navigateTo={undefined}
            />
          </Row>
          <Row className="login-button">
            <Button
              text="New user? Register now."
              onClick={undefined}
              arguments={"/register"}
              buttonType={"secondary"}
              navigateTo={undefined}
            />
          </Row>

          {/* <Row className="login-agentcode-row">
              <Col xs={6}>
                <StyledLink style={{ fontSize: "small", whiteSpace: "nowrap" }}>
                  <Link to="/forgotagentcode" content="Forgot My Agent Code" />
                </StyledLink>
              </Col>
            </Row> */}
        </Container>
      </form>
    </div>
  );
}

export default Login;

type LoginProps = {
  dispatch?: Function;
};
