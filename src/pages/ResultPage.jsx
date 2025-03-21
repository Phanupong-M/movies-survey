import { useLocation } from "react-router-dom";

function ResultPage () {
    const location = useLocation();
    const formData = location.state; // ดึงข้อมูลที่ส่งมาจาก FormPage
    return(
        <div>
            <h1>🎥 Movie Survey</h1>
            <p><strong>ชื่อ:</strong> {formData.name}</p>
            <p><strong>อีเมล:</strong> {formData.email}</p>
            <p><strong>หนังที่ชอบ:</strong> {formData.movie}</p>
            <p><strong>ความคิดเห็น:</strong> {formData.comment}</p>
        </div>
)}

export default ResultPage