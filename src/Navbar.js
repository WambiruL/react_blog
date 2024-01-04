import {Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                 <Link to="/">Home</Link> {/*doesn't send request to the server, hence react handles all the requests */}
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius:'8px'
                }} >New Blog</Link>
            </div>
        </nav>

    );
}
 
export default Navbar;