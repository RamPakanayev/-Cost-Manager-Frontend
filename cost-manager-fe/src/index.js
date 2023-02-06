//Ram Pakanayev 313561433
//Carmel Isaac 320827512
//Michelle Chorny 207435918

/*This file is used for client-side rendering of the React application using ReactDOM.
It imports the necessary libraries and components, and renders them to the 'root' element in the HTML file.*/
import React from "react"; 
import ReactDOM from "react-dom/client"; 
import App from "./components/App"; 

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render( 
<React.StrictMode>
<App />
</React.StrictMode>
);

