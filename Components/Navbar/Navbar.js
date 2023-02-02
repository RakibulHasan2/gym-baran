
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start lg:mx-52">
            <h1 className="text-xl font-bold"><span style={{ background: '#6765F0' }} className="p-2 text-white rounded-lg">Gym</span> <span style={{ color: ' #6765F0' }}>baran</span></h1>

            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Program</a></li>
                    <li><a>Blog</a></li>
                    <li><a>About Us</a></li>
                    <button className="btn" style={{ background: '#264373' }}>Login</button>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Program</a></li>
                        <li><a>Blog</a></li>
                        <li><a>About Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;