import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg"
                style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.color
                }}
            >

                <a className="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#products">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                    </ul>
                    <button
                        onClick={toggle}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color
                        }}
                    >
                        Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                    </button>
                </div>

            </nav>
        </div>
    )
}