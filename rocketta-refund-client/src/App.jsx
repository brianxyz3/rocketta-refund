import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
const HomePage = React.lazy(() => import("./pages/HomePage"));
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const SignUpPage = React.lazy(() => import("./pages/SignUpPage"));
const Faq = React.lazy(() => import("./pages/Faq"));
const CasesPage = React.lazy(() => import("./pages/CasesPage"));
const CaseDetailsPage = React.lazy(() => import("./pages/CaseDetailsPage"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));
import MainLayout from "./layout/MainLayout";
import AuthPageLayout from "./layout/AuthPageLayout";
import AdminPage from "./pages/AdminPage";
import AuthProvider from "./authContext";
import Spinner from "./components/Spinner";

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
              <Route index element={<Suspense fallback={<div className="flex items-center justify-center "><Spinner size={150} loading={true}/></div>}><HomePage /></Suspense>} />
              <Route path="/about" element={<Suspense fallback={<div className="flex items-center justify-center "><Spinner size={150} loading={true} /></div>}><AboutPage /></Suspense>} />
              <Route path="/faq" element={<Suspense fallback={<div className="flex items-center justify-center "><Spinner size={150} loading={true} /></div>}><Faq /></Suspense>} />
              <Route path="/cases" element={<Suspense fallback={<div className="flex items-center justify-center "><Spinner size={150} loading={true} /></div>}><CasesPage /></Suspense>} />
              <Route path="/cases/:id" element={<Suspense fallback={<div className="flex items-center justify-center "><Spinner size={150} loading={true} /></div>}><CaseDetailsPage /></Suspense>} />
          </Route>
          <Route element={<AuthPageLayout />}>
              <Route path="/signup" element={<Suspense fallback={<div className="flex items-center justify-center "><Spinner size={150} loading={true} /></div>}><SignUpPage /></Suspense>} />
              <Route path="/login" element={<Suspense fallback={<div className="flex items-center justify-center "><Spinner size={150} loading={true} /></div>}><LoginPage /></Suspense>} />
              <Route path="/updateAdmin" element={<Suspense fallback={<div className="flex items-center justify-center "><Spinner size={150} loading={true} /></div>}><AdminPage /></Suspense>} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
