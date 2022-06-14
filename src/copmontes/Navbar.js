import {Link} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>Abount</Link>
            <Link to='/products'>Poducts</Link>
        </nav>
    )

}
export default Navbar
