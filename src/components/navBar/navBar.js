import './navBar.css'
// import hammy from '../../assets/hammy.png'
import hammyTitle from '../../assets/hammyTitle.png'
import { CartWidget } from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'



export const NavBar = () => {

    const { cartQuantity } = useCartContext();

   

    return (
        <nav className="navBar">
            <NavLink to='/' className="left-navBar">
                <img src={hammyTitle} className='hammyTitle' alt='hammyimage' href='/' />
            </NavLink>
            <ul className="listItems" >
                <li><NavLink exact to='/categories/category1' activeClassName='link-active' className='link'>Category1</NavLink></li>
                <li><NavLink to='/categories/category2' activeClassName='link-active' className='link'>Category2</NavLink></li>
                <li><NavLink to='/categories/category3' activeClassName='link-active' className='link'>Category3</NavLink></li>
            </ul>
           <NavLink to='/cart'> {cartQuantity>0 ?(<CartWidget></CartWidget>):(<></>)}</NavLink>
        </nav>)

}