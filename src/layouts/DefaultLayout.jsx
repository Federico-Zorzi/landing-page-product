import { Outlet } from "react-router-dom";

import Header from "../components/layout/Header";

export default function DefaultLayout() {
  return (
    <>
      <div className="wrapper">
        <Header></Header>
        <Outlet></Outlet>
        {/* <Footer></Footer> */}
      </div>
    </>
  );
}
