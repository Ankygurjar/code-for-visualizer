import React, { Component } from "react";

import { Link } from 'react-router-dom';

export default class Index extends Component{
    render(){
        return (
            <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="Index.html">Sorting Visualizer</a>
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/visualizer">Visualizer</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/algorithm">Algorithms</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </nav>
      
              <div className="container">
                <h1 className="mt-5">Welcome to Sorting Visualizer</h1>
                <p>This application helps you understand sorting algorithms through visualization.</p>
              </div>
      
              <footer className="bg-light text-center text-lg-start">
                <div className="text-center p-3">
                  © 2024 Sorting Visualizer | 
                  <a href="https://www.linkedin.com/in/karandeep-kamboj-32308a231/">Karandeep Kamboj</a>
                </div>
              </footer>
            </div>
          );
    }
}