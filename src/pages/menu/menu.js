import React from 'react';
import './menu.css';
import Entradas from '../../images/entradas.jpeg';
import Platos from '../../images/platos.jpeg';
import Especialidades from '../../images/especialidades.jpeg';
import Menus from '../../images/menus.jpeg';

const Menu = () => (
    <div>
        <h1 className="title">  Menu </h1>
        <hr className="line"></hr>
        <h2 className="title"> Entradas </h2>
        <img src={Entradas} className="menu" alt="entradas.jpeg"/>
        <h2 className="title"> Verduras y Carnes </h2>
        <img src={Platos} className="menu" alt="platos.jpeg"/>
        <h2 className="title"> Especialidades </h2>
        <img src={Especialidades} className="menu" alt="especialidades.jpeg"/>
        <h2 className="title"> Menus </h2>
        <img src={Menus} className="menu" alt="menus.jpeg"/>
    </div>
)

export default Menu;