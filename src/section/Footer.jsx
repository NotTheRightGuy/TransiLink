import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="font-manrope mt-32">
            <div className="flex justify-between px-28 bg-green-600 py-8">
                <p className="text-4xl font-semibold text-white">
                    Ready to get Started?{" "}
                </p>
                <button className="text-xl font-semibold bg-green-200 px-5 py-3 rounded-full">
                    Register Now
                </button>
            </div>

            <div className=" bg-green-100 py-10 justify-evenly flex gap-10">
                <div>
                    <h1 className="text-4xl font-semibold">
                        Transi<span className="text-green-600">Link</span>
                    </h1>
                    <div className="flex gap-6 mt-4">
                        <FaInstagram className="text-2xl opacity-60" />
                        <FaFacebook className="text-2xl opacity-60" />
                        <FaTwitter className="text-2xl opacity-60" />
                    </div>
                    <p className="opacity-50 mt-16">
                        Copyright© 2023 by TransiLink, Inc. All rights reserved
                    </p>
                </div>
                <div>
                    <h1 className="font-bold mb-4">Contact Us</h1>
                    <p className="w-3/4">
                        623 Harrison St., 2nd Floor, San Francisco, CA 94107
                    </p>
                    <p>415-201-637 0hello@transilink.com</p>
                </div>
                <div>
                    <h1 className="font-bold mb-4">Account</h1>
                    <p>Create</p>
                    <p>Sign in</p>
                    <p>iOS </p>
                    <p>Android </p>
                </div>
                <div>
                    <h1 className="font-bold mb-4">Company</h1>
                    <p>About TransiLink</p>
                    <p>For Business</p>
                    <p>Driving Partners</p>
                    <p>Careers</p>
                </div>
                <div>
                    <h1 className="font-bold mb-4">Resources</h1>
                    <p>Help Center</p>
                    <p>Privacy & Terms</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
