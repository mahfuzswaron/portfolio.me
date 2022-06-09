import React from 'react';
import { Link } from 'react-router-dom';
const home = <Link to={'/home'} >HOME</Link>
const projects = <Link to={'/home/#projects'} >PROJECTS</Link>
const contact = <Link to={'/home/#contact'} >CONTACT</Link>
const about = <Link to={'/home/#about'} >ABOUT</Link>
const resume = <Link to={'/home/resume'} >RESUME</Link>
const Header = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>{home}</li>
            <li>{projects}</li>
            <li>{about}</li>
            <li>{contact}</li>
            <li>{resume}</li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>{home}</li>
          <li>{projects}</li>
          <li>{about}</li>
          <li>{contact}</li>
        </ul>
      </div>
      <div class="navbar-end">
        <p className='btn btn-outline btn-primary'>{resume}</p>
      </div>
    </div>
  );
};

export default Header;