import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
function Header({ title }) {
    return (
        <header className="bg-gradient-to-r from-purple-700 to-blue-700 text-white py-6 px-6 w-full max-w-lg mx-auto ">
            <div className="flex items-center space-x-3">
                <div className="text-3xl">
                    <FontAwesomeIcon icon={faFilm} className="" />
                </div>
                <h1 className="text-3xl font-bold">{title}</h1>
            </div>
        </header>
    );
}

export default Header;