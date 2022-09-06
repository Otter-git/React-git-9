import {Routes, Route} from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import AddContactPage from "../pages/AddContactPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import Layout from "./Layout";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route path={'/'} element={<HomePage />}/>
        <Route path={'/login'} element={<LoginPage />}/>
        <Route path={'/addcontact'} element={<ProtectedRoutes>
          <AddContactPage />
        </ProtectedRoutes>}/>
        <Route path={'/register'} element={<RegisterPage />}/>
        <Route path={'/about'} element={<AboutPage />}/>
        <Route path={'*'} element={<NotFoundPage />}/>
      </Route>
    </Routes>
  );
}

export default App;
