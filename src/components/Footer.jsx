/*
Name: Shawn Schafer
Date: 06/20/2026
File: Footer.js
Description: create a common page footer
*/

const Footer = () => {
    const year = new Date().getFullYear();  //determine the current year with JavaScript
    return (
        <footer>
            <div className="container">
                <span>&copy;Restaurant API. 2017-{year}</span>
            </div>
        </footer>
    );
};

export default Footer;