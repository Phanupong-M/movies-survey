import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";

function ResultPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const formData = location.state

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Header title="Movie Survey" />
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
                <div className="bg-green-50 border-1 border-green-200 p-5 rounded-lg">
                    <div className="">
                        <h1 className="text-xl font-bold text-green-500 mb-2">
                            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" /> ส่งแบบสำรวจสำเร็จ!
                        </h1>
                    </div>
                    <div className="mt-6 ">
                        <div className="mb-4">
                            <p className="text-gray-600">
                                ชื่อ:{" "}
                                <span className="text-gray-800 font-semibold">
                                    {formData.name}
                                </span>
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-600 ">
                                อีเมล:{" "}
                                <span className="text-gray-800 font-semibold">
                                    {formData.email}
                                </span>
                            </p>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-600">
                                หนังที่เลือก:{" "}
                                <span className="text-purple-500">
                                    {formData.movie}
                                </span>
                            </p>
                        </div>

                        {formData.comment && <div className="my-2">
                            <hr className="border border-gray-300"/>
                            <p className="text-gray-600 my-2"> ความคิดเห็น: </p>
                            <p className="text-gray-800 font-semibold py-2 px-2 bg-gray-100 rounded-lg">
                                    {formData.comment}
                            </p>
                        </div>}
                    </div>
                </div>

                <div className="mt-6 text-center">
                        <button
                            onClick={() => navigate("/")}
                            className="bg-black text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 cursor-pointer w-full"
                        >
                            <FontAwesomeIcon icon={faRotateRight} className="mr-2" />  ทำแบบสำรวจใหม่
                        </button>
                </div>

            </div>
        </div>
    );
}

export default ResultPage;