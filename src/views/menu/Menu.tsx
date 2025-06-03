import { Outlet } from "react-router";
import { Aside } from "../../components/aside/aside";
import { Nav } from "../../components/nav/Nav";
import './Menu.css'


export const Menu = () => {
    return (
        <div className="background">
            <Nav />
            <div className="content">
                <Aside />
                <div className="content-info">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}