import { useState } from "react";
import { movies } from "../data/movies";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import InputField from "../components/InputField"


function FormPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedMovie, setSelectedMovie] = useState("");
    const [comment, setComment] = useState("");

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        if (validateForm() !== 0) {
            return;
        }

        let FormData = {
            name: name,
            email: email,
            movie: selectedMovie,
            comment: comment,
        };

        setName("");
        setEmail("");
        setSelectedMovie("");
        setComment("");
        setErrors({});

        navigate("/result", { state: FormData });
    }

    function validateForm() {
        let newErrors = {};

        if (!name.trim()) {
            newErrors.name = "โปรดใส่ชื่อของคุณ";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newErrors.email = "โปรดใส่อีเมลของคุณ";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
        }

        if (!selectedMovie.trim()) {
            newErrors.movie = "กรุณาเลือกหนังที่คุณชอบ";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length;
    }

    function resetForm() {
        setName("");
        setEmail("");
        setSelectedMovie("");
        setComment("");
        setErrors({});
    }

    return (
        
        <div className="min-h-screen flex flex-col items-center justify-center py-10">
            <Header title="Movie Survey" />
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <InputField 
                            label ="ชื่อ"
                            type ="input"
                            value = {name}
                            onChange = {(event) => setName(event.target.value)}
                            placeholder = "กรุณากรอกชื่อของคุณ"
                            error = {errors.name}
                            required =  {true}
                        />
                    </div>

                    <div>
                        <InputField 
                                label ="อีเมล"
                                type ="input"
                                value = {email}
                                onChange = {(event) => setEmail(event.target.value)}
                                placeholder = "example@email.com"
                                error = {errors.email}
                                required =  {true}
                            />
                    </div>

                    <div>
                        <h2 className="text-gray-700 font-bold mb-2">
                            เลือกหนังที่คุณชอบ <span className="text-red-500">*</span></h2>
                        <div className={`space-y-4 ${errors.movie ? "border border-red-500 rounded-lg" : ""}`}>
                            {movies.map((movie, index) => (
                                <label
                                    key={index}
                                    className="flex items-start space-x-3 cursor-pointer hover:bg-gray-100 rounded-md p-2"
                                >
                                    <input
                                        type="radio"
                                        name="option"
                                        value={movie.title}
                                        checked={selectedMovie === movie.title}
                                        onChange={(event) => setSelectedMovie(event.target.value)}
                                        className="mt-1 text-purple-500 focus:ring-purple-500"
                                    />
                                    <div>
                                        <p className="text-gray-800 font-semibold">
                                            {movie.title} ({movie.year})
                                        </p>
                                        <p className="text-gray-600 text-sm">
                                            Director: {movie.director}
                                        </p>
                                    </div>
                                </label>
                            ))}
                        </div>
                        {errors.movie && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.movie}
                            </p>
                        )}
                    </div>

                    <div>
                        <InputField 
                                label ="ความคิดเห็นเกี่ยวกับหนัง"
                                type ="textarea"
                                value = {comment}
                                onChange = {(event) => setComment(event.target.value)}
                                placeholder = "พิมพ์ความคิดเห็นของคุณที่นี่..."
                                error = {errors.comment}
                                required =  {false}
                        />
                    </div>
                        
                    <hr className="border border-gray-300"/>

                    <div className="flex justify-between">
                        <button
                            onClick={resetForm}
                            className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 cursor-pointer"
                            type="button"
                        >
                            <FontAwesomeIcon icon={faRotateRight} className="mr-2" /> รีเซ็ต
                        </button>
                        <button
                            className="bg-gradient-to-r from-purple-700 to-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 cursor-pointer"
                            type="submit"
                        >
                            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> ส่งแบบสำรวจ
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormPage;
