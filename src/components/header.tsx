import {NavLink} from "react-router-dom";

export const Header = () => {

    return <header className={'mb-4'}>
        <div className="container">
            <nav className="navbar bg-body-tertiary px-4">
                <ul className="navbar-nav d-flex flex-row gap-3 align-items-center justify-content-center me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink
                            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
                            to={'/'} end>Главная</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={({isActive}) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                            to="/characters">Персонажи</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={({isActive}) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                            to="/episodes">Эпизоды</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={({isActive}) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                            to="/locations">Локации</NavLink>
                    </li>

                </ul>
            </nav>
        </div>
    </header>
}