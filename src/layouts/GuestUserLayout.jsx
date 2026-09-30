import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GuestLayout() {
    const { token, notification } = useStateContext();

    if (token) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1 overflow-auto flex flex-col">
                    <div className="flex-1 pt-24">
                        <Outlet />
                    </div>
                    <Footer />
                </main>
            </div>
            {notification && (
                <div
                    className="fixed top-6 right-6 px-4 py-3 rounded-lg shadow-lg text-sm font-medium text-white bg-red z-50"
                    role="status"
                    aria-live="polite"
                >
                    {notification}
                </div>
            )}
        </>
    );
}