import React from 'react';
//import React, { useState, useEffect } from "react";
//import { Router, Link } from "wouter";

/**
* This code defines the react app
*
* Imports the router functionality to provide page navigation
* Defines the Home function outlining the content on each page
* Content specific to each page (Home and About) is defined in their components in /pages
* Each page content is presented inside the overall structure defined here
* The router attaches the page components to their paths
*/

// Import and apply CSS stylesheet
import "./styles/app.css";

// Where all of our pages come from
//import PageRouter from "./components/router.jsx";

// The component that adds our Meta tags to the page

// Home function that is reflected across the site


import List from './components/List.jsx'






export default function Home() {
  return (
    <List/>
  );
}
