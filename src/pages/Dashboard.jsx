import { useEffect } from "react";
import Map from "../components/Map";
import UserProfile from "../components/UserProfile";
import SchoolInfo from "../components/SchoolInfo";
import currentSchool from "../atoms/currentSchool";
import { useRecoilState } from "recoil";

const Dashboard = () => {
    useEffect(() => {
        if (localStorage.getItem("token") === "") {
            window.location.href = "/login";
        }
    }, []);

    const [school, setSchool] = useRecoilState(currentSchool);

    return (
        <div>
            {school.school_name ? <SchoolInfo school={school} /> : <></>}
            <UserProfile />
            <Map />
        </div>
    );
};

export default Dashboard;
