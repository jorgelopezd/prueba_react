import React from "react";
import '../App.css'

export default function Footer (){
    return(
        <footer className="main-footer">
            <div className="social-buttons">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-lg"><i className="fa-brands fa-github-alt"></i></button>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-lg"><i className="fa-brands fa-facebook"></i></button>
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                    <button className="btn btn-lg  "><i className="fa-brands fa-linkedin"></i></button>
                </a>
            </div>
        </footer>
    )
}