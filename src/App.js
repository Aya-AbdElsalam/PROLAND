import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignInPage";
import LandingPage from "./pages/landingPage";
import NavBar from "./component/navBar/NavBar";
import Users from "./pages/Users";
import Orders from "./pages/Orders";
import Footer from "./component/Footer/Footer";
const DashBoardLazy = React.lazy(() => import("./pages/DashBoard"));
const OurTeamLazy = React.lazy(() => import("./pages/OurTeam"));
const EditLazy = React.lazy(() => import("./pages/Edit"));
const AddLazy = React.lazy(() => import("./pages/Add"));
const EditProductsLazy = React.lazy(() => import("./pages/EditProduct"));
const AddProductsLazy = React.lazy(() => import("./pages/AddProducts"));
const ProductsPageLazy = React.lazy(() => import("./pages/Products"));
const DashBoardHomeLazy = React.lazy(() => import("./pages/dashBoardHome"));

function App() {
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
        <Route
          path="dashboard"
          element={
            localStorage.getItem("user") ? (
              <DashBoardLazy />
            ) : (
              <>
                <NavBar />
                <SignIn />
              </>
            )
          }
        >
          <Route index element={<DashBoardHomeLazy />}></Route>

          <Route path="team" element={<OurTeamLazy />}></Route>
          <Route path="team/edit/:id" element={<EditLazy />}></Route>
          <Route path="team/addMember" element={<AddLazy />}></Route>
          {/*  */}
          <Route path="products" element={<ProductsPageLazy />}></Route>
          <Route
            path="products/edit/:id"
            element={<EditProductsLazy />}
          ></Route>
          <Route
            path="products/addProduct"
            element={<AddProductsLazy />}
          ></Route>
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
