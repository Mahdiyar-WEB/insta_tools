import styles from "./signup.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  FormControl,
  FormHelperText,
  InputLabel,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";

const initialValues = {
  username: "",
  password: "",
  email: "",
  page_id: "",
};

const validationSchema = Yup.object({
  username: Yup.string()
    .required("username is required")
    .min(5, "username is to short"),
  password: Yup.string()
    .required("password is required")
    .min(3, "password is to short"),
  email: Yup.string()
    .required("email is required")
    .email("invalid email address"),
  page_id: Yup.string().required("page id is required"),
});

const Signup = () => {
  const onSubmit = (values: any) => {};
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
        label="username"
        {...formik.getFieldProps("username")}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <TextField
        variant="outlined"
        className="mt-4"
        label="email"
        type="email"
        {...formik.getFieldProps("email")}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <FormControl className="mt-4" variant="outlined">
        <InputLabel
          error={formik.touched.password && Boolean(formik.errors.password)}
          htmlFor="outlined-adornment-password"
        >
          password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          error={formik.touched.password && Boolean(formik.errors.password)}
          type={showPassword ? "text" : "password"}
          {...formik.getFieldProps("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          label="password"
        />
        <FormHelperText
          error={formik.touched.password && Boolean(formik.errors.password)}
        >
          {formik.touched.password && formik.errors.password}
        </FormHelperText>
      </FormControl>
      <TextField
        className="mt-4"
        label="page id"
        {...formik.getFieldProps("page_id")}
        error={formik.touched.page_id && Boolean(formik.errors.page_id)}
        helperText={formik.touched.page_id && formik.errors.page_id}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BsPersonCircle
                className={`${
                  formik.touched.page_id &&
                  formik.errors.page_id &&
                  "text-danger"
                } 
                `}
                size={20}
              />
            </InputAdornment>
          ),
        }}
      />
      <Button className="col-md-4 col-12  mt-4" variant="contained">
        Sign up
      </Button>
    </form>
  );
};

export default Signup;
