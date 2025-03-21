import { useState } from "react";
import { movies } from "../data/movies";
import { useNavigate } from "react-router-dom";

function FormPage () {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [selectedMovie, setSelectedMovie] = useState("");
    const [comment, setComment] = useState("")

    const [errors, setErrors] = useState({})

    const navigate = useNavigate();

    // const goToResult = () => {
    //     navigate("/result", { state: FormData }); // เปลี่ยนเส้นทางไปที่ "/result"
    //   };

    // const handleChange = (event) => {
    //     setSelectedMovie(event.target.value);
    //   };

    function handleSubmit (event) {
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
      
          setName("")
          setEmail("")
          setSelectedMovie("")
          setComment("")
          setErrors({}) 

          navigate("/result", { state: FormData })
    }


    function validateForm() {
        let newErrors = {};

        if (!name.trim()) {
            newErrors.name = "โปรดใส่ชื่อของคุณ";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newErrors.email = "โปรดใส่อีเมลของคุณ"
        } else if (!emailRegex.test(email)) {
            newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง"
        }

        if (!selectedMovie.trim()) {
            newErrors.movie = "กรุณาเลือกหนังที่คุณชอบ";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length

    }

    function resetForm() {
        setName("")
        setEmail("")
        setSelectedMovie("")
        setComment("")
        setErrors({}) 
    }

    return (
    <div className="flex flex-col items-center gap-5">
        <h1 className="">Movie Survey</h1>
        <form className="border-2 flex flex-col p-10 gap-2" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-2">
                <strong>ชื่อ *</strong>
                <input className="border-2"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="กรุณากรอกชื่อของคุณ"
                    value = {name}
                    onChange={(event) => {setName(event.target.value)
                    }}
                />
            </label>
            {errors.name && <p>{errors.name}</p>}

            <label className="flex flex-col gap-2">
                <strong>อีเมล *</strong>
                <input className="border-2"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="example@email.com"
                    value = {email}
                    onChange={(event) => {setEmail(event.target.value)
                    }}
                />
            </label>
            {errors.email && <p>{errors.email}</p>}

            <h2>หนังที่คุณชอบ:</h2>

            {movies.map((movie,index) => (
                <label className="" key = {index}>
                <input
                    type="radio"
                    name="option"
                    value={movie.title}
                    checked={selectedMovie === movie.title}
                    onChange={(event) => {setSelectedMovie(event.target.value)
                    }}
                />
                {` ${movie.title} (${movie.year}) Director: ${movie.director}`}
                </label>
            ))}

            {errors.movie && <p>{errors.movie}</p>}

            <div className="flex flex-col">
                <label>ความคิดเห็นเกี่ยวกับหนัง</label>
                <textarea className="border-2"
                    id="description"
                    name="description"
                    type="text"
                    placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
                    value = {comment}
                    onChange={(event) => {setComment(event.target.value)
                    }}
                    rows={4}
                    cols={30}
                />
            </div>

            <div className="flex justify-between">
                <button onClick={resetForm} className="bg-amber-200 rounded-lg p-2 cursor-pointer" type="button">รีเซ็ต</button>
                <button className="bg-green-300 rounded-lg p-2 cursor-pointer" type="submit">ส่งแบบสำรวจ</button>
            </div>
        </form>


    </div>
        
)}

export default FormPage