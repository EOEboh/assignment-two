import React from 'react';
import { Link } from "react-router-dom";
import '../App.css'

export default function ErrorPage() {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <ul> 
           <li>  <Link to='/'>Home</Link></li>
           <li>  <Link to='./Profile'>Profile</Link></li>
           <li>  <Link to='/Account'>Account</Link></li>
            </ul>
        </div>
    )
}