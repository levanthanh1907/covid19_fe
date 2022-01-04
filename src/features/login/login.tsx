import { Button, TextField, Checkbox } from "@mui/material";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import bgr from "../../asset/img/loginbgr.jpg";
import logo from "../../asset/img/Logo.png";
import { IFormLoginRequest } from "../../interfaces/auth/authType";
import { getAuthenticate } from "../../redux/actions/auth";
import { RootState } from "../../redux/store";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { resetProgress } from "../../redux/reducer/authReducer";

const LoginTimesheet = styled.div`
  font-family: "Roboto", sans-serif;
  background-image: url(${bgr});
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  padding: 5px 0;
`;

const MyTimesheet = styled.div`
  width: 25%;
`;

const TitleError = styled.div`
  color: red;
`;

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 50px;
  gap: 20px;
  border-radius: 0 0 10px 10px;
`;

const StyleCheckBox = styled.div`
  display: flex;
  margin-top: 5px;
`;

const MyLogo = styled.div`
  display: flex;
  background: #03a9f4;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px 10px 0 0;
  padding: 0 10px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
`;

const ButtonLogin = styled(Button)`
  width: 50%;
  left: 25%;
`;

const Footer = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  color: #000;
`;

interface State {
  password: string;
  showPassword: boolean;
}

const Login: React.FC = () => {
  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const history = useHistory();
  const dispatch = useDispatch();
  const accessToken = useSelector(
    (state: RootState) => state.auth.user.accessToken
  );
  const progress = useSelector((state: RootState) => state.auth.progress);
  useEffect(() => {
    if (progress === "done" && accessToken) {
      dispatch(resetProgress());
      history.push("/app/home")
    }
  }, [accessToken, history,progress]);

  const onLogin = async (props: IFormLoginRequest) => {
    dispatch(
      getAuthenticate({
        userNameOrEmailAddress: props.userNameOrEmailAddress,
        password: props.password,
        rememberClient: false,
      })
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLoginRequest>();

  return (
    <LoginTimesheet>
      <MyTimesheet>
        <MyLogo>
          {/* <Image src={logo} /> */}
          <Title>Hệ Thống Quản Lý</Title>
        </MyLogo>
        <FormLogin onSubmit={handleSubmit(onLogin)}>
          <TextField
            id="standard-basic"
            label="Username"
            {...register("userNameOrEmailAddress", { required: true })}
            placeholder="Enter your username"
            variant="standard"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />
          {errors.userNameOrEmailAddress && (
            <TitleError>This field is required</TitleError>
          )}
          <TextField
            variant="standard"
            {...register("password", { required: true })}
            id="outlined-adornment-password"
            placeholder="Enter password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            label="Password"
          />
          {errors.password && <TitleError>This field is required</TitleError>}
          <StyleCheckBox>
            <Checkbox
              style={{ textAlign: "left", padding: "0 10px 0 0" }}
              {...register("rememberClient")}
              color="secondary"
              defaultChecked
            />
            <p>Remember me</p>
          </StyleCheckBox>
          <ButtonLogin
            type="submit"
            variant="contained"
            style={{ background: "#03a9f4", borderRadius: "20px" }}
          >
            Login
          </ButtonLogin>
        </FormLogin>
        <Footer>@2021 Đây là bản quyền của Thành</Footer>
      </MyTimesheet>
    </LoginTimesheet>
  );
};

export default Login;
