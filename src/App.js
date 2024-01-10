import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SignIn from "./pages/SignInPage";
import LandingPage from "./pages/landingPage";
import NavBar from "./component/navBar/NavBar";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Footer from "./component/Footer/Footer";
import DashBoard from "./pages/DashBoard";
import OurTeam from "./pages/OurTeam";
import Edit from "./pages/Edit";
import Add from "./pages/Add";
import EditProducts from "./pages/EditProduct";
import AddProducts from "./pages/AddProducts";
import ProductsPage from "./pages/Products";
import DashBoardHome from "./pages/dashBoardHome";

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div
      className="App"
      style={{
        position: "relative",
        paddingBottom: "50px",
        minHeight: "95vh",
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <LandingPage />
            </>
          }
        ></Route>
        <Route
          path="signIn"
          element={
            <>
              <NavBar />
              <SignIn />
            </>
          }
        ></Route>
        <Route path="dashboard" />
        <Route
          path="dashboard"
          element={
            localStorage.getItem("user") ? (
              <DashBoard></DashBoard>
            ) : (
              <>
                <NavBar></NavBar>
                <SignIn></SignIn>
              </>
            )
          }
        >
          <Route index element={<DashBoardHome />}></Route>

          <Route path="team" element={<OurTeam />}></Route>
          <Route path="team/edit/:id" element={<Edit />}></Route>
          <Route path="team/addMember" element={<Add />}></Route>
          {/*  */}
          <Route path="products" element={<ProductsPage />}></Route>
          <Route path="products/edit/:id" element={<EditProducts />}></Route>
          <Route path="products/addProduct" element={<AddProducts />}></Route>
          {/*  */}
          <Route path="users" element={<Users />}></Route>
          <Route path="orders" element={<Orders />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
