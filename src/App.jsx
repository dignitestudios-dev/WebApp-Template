import { Route, Routes } from "react-router";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
// import DummyHome from "./pages/app/DummyHome";
// import DummyLogin from "./pages/authentication/DummyLogin";
// import AuthLayout from "./layouts/AuthLayout";
import TermsCondition from "./pages/app/TermsCondtion";
import PrivactPolicy from "./pages/app/PrivacyPolicy";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="flex items-center justify-center h-screen">
            <div className="text-center">
              <h1 className="text-5xl font-semibold mb-4">
                Our Landing Page is Coming Soon
              </h1>
              <p className="text-xl text-gray-600">
                We're working hard to bring you something amazing. Stay tuned!
              </p>
            </div>
          </div>
        }
      />

      <Route path="terms-condition" element={<TermsCondition />} />
      <Route path="privacy-policy" element={<PrivactPolicy />} />
      <Route path="app" element={<DashboardLayout />}></Route>
      {/* 
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<DummyLogin />} />
      </Route> */}

      <Route
        path="*"
        element={<div className="text-7xl">Page Not Found</div>}
      />
    </Routes>
  );
}

export default App;
