import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Faq from "./pages/Faq";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AuthPageLayout from "./layout/AuthPageLayout";
import AdminPage from "./pages/AdminPage";
import CasesPage from "./pages/CasesPage";
import CaseDetailsPage from "./pages/CaseDetailsPage";
import AuthProvider from "./authContext";

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/cases" element={<CasesPage />} />
            <Route path="/cases/:id" element={<CaseDetailsPage />} />
          </Route>
          <Route element={<AuthPageLayout />}>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/updateAdmin" element={<AdminPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
