import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          { <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-milestone-achievements-flaticons-lineal-color-flat-icons.png"/> }
        </NavLink>
        <Bars />
        <NavMenu>
        <NavLink to='/' activeStyle>
          Home
        </NavLink>
        <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/createPost' activeStyle>
            Create Posts
        </NavLink>
        <NavLink to='/viewPosts' activeStyle>
          View Posts
        </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/register'>Sign Up</NavBtnLink>
          <NavBtnLink to='/login'>Sign In</NavBtnLink>
        </NavBtn>

      </Nav>
    </>
  );
};

export default Navbar;