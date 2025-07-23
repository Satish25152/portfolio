import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        // { name: faLinkedin, to: '' },
    ];

    const menuIconToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-blue-500 text-white px-5 py-3 sticky top-0 z-100">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold cursor-pointer">Portfolio</h1>

                <nav className="hidden md:flex gap-5">
                    {navLinks.map((link) => (
                        <Link key={link.to} to={link.to} className="hover:text-gray-200">
                            <FontAwesomeIcon className='text-[1.5rem]' icon={faLinkedin} />
                        </Link>
                    ))}
                </nav>
                { navLinks.length > 0 && (
                    <button className="md:hidden cursor-pointer" onClick={menuIconToggle}>
                        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="lg" />
                    </button>
                ) }
            </div>

            {menuOpen && (
                <nav className="flex flex-col gap-3 mt-3 md:hidden">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="hover:text-gray-200"
                            onClick={() => setMenuOpen(false)}
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}

export default Header;
