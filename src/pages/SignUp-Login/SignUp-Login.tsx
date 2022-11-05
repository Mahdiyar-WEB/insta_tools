import styles from "./signUp-Login.module.css";
import { Box, Tabs, Tab, Typography,Card,CardHeader,Avatar,CardContent } from "@mui/material";
import { useState } from "react";
import Login from "../../components/Login/Login";
import logo from '../../assets/images/logo.jpg';
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
    <div className="container pb-5">
      <div className={`row d-flex ${styles.contentContainer}`}>
        <div
          className={`col-md-9 col-10 d-flex bg-white mx-auto p-2 rounded rounded-4 ${styles.content}`}
        >
          <div
            className="col-lg-5 text-white px-4 py-3 d-none d-lg-flex flex-column  rounded rounded-4"
            style={{ background: "#3C37FE" }}
          >
            <div>INS Tools</div>
            <div className="h2 mt-5">Start your journey with us.</div>
            <Card
              className="mt-auto text-white"
              sx={{ backgroundColor: "#2520E3", borderRadius: 4 }}
            >
              <CardContent
                className="pb-0"
                sx={{ color: "#ccc", fontSize: ".9rem" }}
              >
                Simply unbelievable! i'm really satisfied with my projects and
                business. this is absolutely wonderful!
              </CardContent>
              <CardHeader
                avatar={<Avatar alt="logo" src={logo} />}
                title="INS Tools"
                subheader={
                  <Typography sx={{ color: "#ccc", fontSize: "0.8rem" }}>
                    admin
                  </Typography>
                }
              />
            </Card>
          </div>
          <div className="col-12 p-0 col-lg-7 pt-4">
            <Tabs
              centered
              value={value}
              className="d-flex align-items-center"
              onChange={handleChange}
            >
              <Tab sx={{ fontSize: 17, fontWeight: "bold" }} label="Login" />
              <Tab
                sx={{ fontSize: 17, fontWeight: "bold" }}
                label="Sign up"
              />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Login />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Signup />
            </TabPanel>
          </div>
        </div>
      </div>
    </div>
  </main>
  );
};

export default SignUp_Login;
