import { Outlet } from "react-router-dom";
import Header from "./pages/Cabecalho/cabecalho";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 p-6">
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
