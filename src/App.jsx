import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext, AuthProvider } from "./auth/authContext";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import DashBoard from "./pages/DashBoard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // get stored data with useEffect
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthProvider>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute component={DashBoard} />}
          />
          <Route path="*" element={<Navigate to="/signup" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
const PrivateRoute = ({ component: Component }) => {
  const { user } = useContext(AuthContext);
  return user ? <Component /> : <Navigate to="/login" />;
};

export default App;
