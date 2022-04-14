import React from 'react';

// React-Router-DOM-Link-Click-Prevent-HTTP-Request-To-Server
// Loads pages without sending HTTP request to server
// Fake navigation method which prevents server to be overloaded
import { Link } from 'react-router-dom';

const MainHeader = () => {
    return (
        <header>
            <ul>
                <li>
                    {/* React-Router-DOM-Link-Click-Prevent-HTTP-Request-To-Server */}
                    <Link to="/welcome">Welcome</Link>
                </li>

                <li>
                    {/* React-Router-DOM-Link-Click-Prevent-HTTP-Request-To-Server */}
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </header>
    );
};

export default MainHeader;