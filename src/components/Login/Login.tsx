import styles from "./login.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, FormControlLabel, TextField, Checkbox } from "@mui/material";
import { useState } from "react";
import ForgetPassword from "../ForgetPassword/ForgetPassword";

const initialValues = {
  username: "",
  password: "",
};
const validationSchema = Yup.object({
  username: Yup.string()
    .required("username is required")
    .min(5, "username is to short"),
  password: Yup.string()
    .required("password is required")
    .min(3, "password is to short"),
});

const Login = () => {
  const onSubmit = (values: any) => {};
  const [rememberMe, setRememberMe] = useState(false);
  const [showForgetPassword, setShowForgetPassword] = useState(false);

  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    onSubmit,
    validationSchema,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`d-flex flex-column mt-auto ${styles.container}`}
    >
      <TextField
        variant="outlined"
        fullWidth
        label="username"
        {...formik.getFieldProps("username")}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <TextField
        variant="outlined"
        fullWidth
        className="mt-4"
        label="password"
        {...formik.getFieldProps("password")}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <FormControlLabel
        className="ps-1 pt-3"
        control={
          <Checkbox
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
        }
        label="Remember me"
      />
      <button
        type="button"
        className={`mt-3 text-start border border-0 bg-transparent text-primary ${styles.forget}`}
        onClick={() => setShowForgetPassword(!showForgetPassword)}
      >
        Forget your password?
      </button>

      <Button
        className="col-md-4 col-12  mt-4"
        variant="contained"
      >
        Login
      </Button>
      {showForgetPassword && <ForgetPassword />}
    </form>
  );
};

export default Login;
