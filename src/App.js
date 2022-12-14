import ForgetPassword from "./Components/ForgetPassword";
import LoginPage from "./Components/LoginPage";
import OtpVerification from "./Components/OtpVerification";
import ResetPassword from "./Components/ResetPassword";
import Updateconfirmpassword from "./Components/UpdatePassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OtpVerifys from "./Components/OptVerifys";
import Dashboard from "./Components/Dashboard";
import DashBoards from "./Components/DashBoards";

function App() {
  return (
    <div className="App">
      {/* <LoginPage />
      <ForgetPassword />
      <Updateconfirmpassword />
      <ResetPassword />
      <OtpVerification /> */}
      {/* <OtpVerifys /> */}
      {/* <OtpVerification /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/OtpVerification" element={<OtpVerification />} />
          <Route
            path="/Updateconfirmpassword"
            element={<Updateconfirmpassword />}
          />
          <Route path="/OtpVerifys" element={<OtpVerifys />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Dashboard /> */}
      <DashBoards/>
    </div>
  );
}

export default App;
