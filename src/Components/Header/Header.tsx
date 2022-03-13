import "./Header.css";
import React from "react";

interface HeaderProps {
	
}

function Header(props: HeaderProps): JSX.Element {
    return (
        <div className="Header">
			<h1>Welcome </h1>
        </div>
    );
}

export default Header;
