import { useEffect } from "react";

const Dashboard = () => {
    useEffect(() => {
        if (localStorage.getItem("token") === "") {
            window.location.href = "/login";
        }
    }, []);
    return <div></div>;
};

export default Dashboard;
