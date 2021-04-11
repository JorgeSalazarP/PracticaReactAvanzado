import React from 'react';
import './Footer.css';
export class Footer extends React.Component{

    constructor(){
        super();
    }
    render(){
        return(
          
            <footer>
                <div className="container">
                    <p>{new Date().getFullYear()} &copy; Jorge Salazar Web. Todos los derechos reservados</p>
                </div>
            </footer>



        );

    }
}

