import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { ProtectedRoutes, RedirectOnAuth } from "./guards";
import { AuthLayout, DashboardLayout } from "./components";
import * as Pages from "./pages";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<DashboardLayout />}>
              <Route path="dashboard" index element={<Pages.Dashboard />} />
              <Route path="profile" index element={<Pages.Profile />} />
              <Route
                path="create-gallery"
                index
                element={<Pages.CreateGallery />}
              />
              <Route path="" element={<Navigate to={"/dashboard"} />} />
            </Route>
          </Route>
          <Route element={<RedirectOnAuth />}>
            <Route path="auth" element={<AuthLayout />}>
              <Route path="login" index element={<Pages.Login />} />
              <Route path="signup" element={<Pages.Signup />} />
              <Route path="" element={<Navigate to={"/auth/login"} />} />
            </Route>
          </Route>

          <Route path="*" element={<Navigate to={"/dashboard"} />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
