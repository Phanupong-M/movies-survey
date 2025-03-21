import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
function Header({ title }) {
    return (
        <header className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 px-6 w-full max-w-lg mx-auto ">
            <div className="flex items-center space-x-3">
                <div className="text-2xl">
                    <FontAwesomeIcon icon={faFilm} className="text-2xl" />
                </div>
                <h1 className="text-xl font-bold">{title}</h1>
            </div>
        </header>
    );
}

export default Header;