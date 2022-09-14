import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {


  return (
      <nav className="NavBar" >
        <div>
            <img src='./images/logo.png' width="150px"/>
        </div>
        <div className="Categories">
          <Link to='/'>
          <a href="#" className='super'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Viajes
                </a>
          </Link>
          
              <NavLink to='/category/Viaje Nacional' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><a href="#" className='super'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Nacionales
                </a></NavLink>
              <NavLink to='/category/Viaje Internacional' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><a href="#" className='super'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Internacionales
                </a></NavLink>
            
          </div>
          
          <CartWidget />
      </nav>
  )
}

export default NavBar