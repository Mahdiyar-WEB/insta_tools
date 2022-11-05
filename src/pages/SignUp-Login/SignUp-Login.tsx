import styles from "./signUp-Login.module.css";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { useState } from "react";
import Login from "../../components/Login/Login";
import Signup from "../../components/Signup/Signup";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SignUp_Login = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main className={styles.container}>
      <div
        className={`container bg-white row p-2 overflow-hidden ${styles.content}`}
      >
        <div className="d-none d-lg-block rounded rounded-4 col-5 bg-primary"></div>
        <div className="col-12 col-lg-7 pt-4">
          <Box sx={{ width: "100%" }}>
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                className={`${styles.tabs}`}
              >
                <Tab className="fw-bold fs-6" label="Login" {...a11yProps(0)} />
                <Tab
                  className="fw-bold fs-6"
                  label="Sign-up"
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Login />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Signup />
            </TabPanel>
          </Box>
        </div>
      </div>
    </main>
  );
};

export default SignUp_Login;
