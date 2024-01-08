import "@tomtom-international/web-sdk-maps/dist/maps.css";
import tt from "@tomtom-international/web-sdk-maps";
import { useRef, useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import currentSchool from "../atoms/currentSchool";
import { useRecoilState } from "recoil";
import { jwtDecode } from "jwt-decode";

const Map = () => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const latitude = decoded.address.latitude;
    const longitude = decoded.address.longitude;

    const mapElement = useRef();
    const inputRef = useRef();
    const [mapLongitude, setMapLongitude] = useState(latitude);
    const [mapLatitude, setMapLatitude] = useState(longitude);
    const [mapZoom, setMapZoom] = useState(12);
    const [map, setMap] = useState({});
    const [schoolInfo, setSchoolInfo] = useState([]);
    const MAX_ZOOM = 18;

    const [school, setSchool] = useRecoilState(currentSchool);

    useEffect(() => {
        const origin = [mapLongitude, mapLatitude];
        const map = tt.map({
            key: import.meta.env.VITE_APP_TOMTOM_API_KEY,
            container: mapElement.current,
            center: origin,
            zoom: mapZoom,
        });
        setMap(map);
        return () => map.remove();
    }, []);

    const increaseZoom = () => {
        if (mapZoom < MAX_ZOOM) {
            setMapZoom(mapZoom + 1);
            updateMap();
        }
    };

    const decreaseZoom = () => {
        if (mapZoom > 0) {
            setMapZoom(mapZoom - 1);
            updateMap();
        }
    };

    const updateMap = () => {
        map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
        map.setZoom(mapZoom);
    };

    const debounce = (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    const getSchoolInfo = async () => {
        const schoolName = inputRef.current.value;
        const response = await fetch(
            `http://localhost:8001/school/get?schoolName=${schoolName}`
        );
        const data = await response.json();
        return data;
    };

    const dropPin = (longitude, latitude) => {
        const marker = new tt.Marker()
            .setLngLat([longitude, latitude])
            .addTo(map);
        return marker;
    };

    function SchoolCard(school) {
        return (
            <div
                className="p-2 border-b cursor-pointer hover:bg-gray-100 hover:rounded-xl"
                onClick={() => {
                    const lat = school.school_address[0].latitude;
                    const lng = school.school_address[0].longitude;
                    setMapLatitude(lat);
                    setMapLongitude(lng);
                    dropPin(lng, lat);
                    setMapZoom(16);
                    updateMap();
                    setSchool(school);
                }}
            >
                <h1 className="font-bold text-sm">{school.school_name}</h1>
                <p className="text-xs text-gray-400">
                    {school.school_address[0].address}
                </p>
            </div>
        );
    }

    return (
        <main>
            <section className="flex">
                <div className="absolute top-4 right-32 z-10 w-[40vw]">
                    <div className=" bg-white h-10 p-2 pl-4 rounded-xl shadow-sm">
                        <input
                            onInput={debounce(async () => {
                                const schoolInfo = await getSchoolInfo();
                                setSchoolInfo(schoolInfo);
                            }, 500)}
                            ref={inputRef}
                            type="text"
                            placeholder="Look for drivers nearby or search by school"
                            className="outline-none w-full font-manrope text-sm opacity-70 font-semibold"
                        />
                        <FaSearch className="absolute top-3 right-4 text-gray-400" />
                    </div>
                    <div className="bg-white rounded-xl font-manrope mt-1">
                        {schoolInfo.length > 0
                            ? schoolInfo.map((school) => (
                                  <SchoolCard {...school} />
                              ))
                            : ""}
                    </div>
                </div>
                <div className="absolute top-0 right-0 p-4 z-10">
                    <button
                        onClick={increaseZoom}
                        className="bg-white hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l shadow-sm"
                    >
                        +
                    </button>
                    <button
                        onClick={decreaseZoom}
                        className="bg-white hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r shadow-sm"
                    >
                        -
                    </button>
                </div>
            </section>

            <div ref={mapElement} id="mapDiv" className="h-screen"></div>
        </main>
    );
};

export default Map;
