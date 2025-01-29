import { Outlet } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
    return (
        <div className="bg-gray-700">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;