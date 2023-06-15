import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

var date = new Date();
var year = date.getFullYear();

function Footer () {
    return (<div>
        <div className="footer">
        <div className="socials">
            <h3>Connect With Us</h3>
            <a className="social-links" href="http://www.instagram.com/qurekamuj">
            <FacebookIcon className="social-links" /> <span className="social-links">Facebook</span>
            </a>
            <a className="social-links" href="http://www.facebook.com/qurekamuj">
            <InstagramIcon className="social-links" /> <spam className="social-links">Instagram</spam>
            </a>
            <a className="social-links" href="http://www.linkedin.com/company/qurekamuj">
                <LinkedInIcon className="social-links" /> <span className="social-links">LinkedIn</span>
            </a>
        </div>

        <div className="socials">
            <h3>Quick Menu</h3>
            <a className="social-links" href="/">
            <span className="social-links">Home</span>
            </a>
            <a className="social-links" href="/">
            <span className="social-links">About</span>
            </a>
            <a className="social-links" href="/">
            <span className="social-links">Quizzes</span>
            </a>
            <a className="social-links" href="/">
            <spam className="social-links">Legacy</spam>
            </a>
            <a className="social-links" href="/">
            <span className="social-links">Achievements</span>
            </a>
            <a className="social-links" href="/">
            <span className="social-links">Contact Us</span>
            </a>
        </div>

        <div className="socials">
            <h3>From the blog</h3>
            <ul>
                <li>
                <span className="social-links">Lorem ipsum dolor sit,ncidunt quaerat qui voluptates, natus provident nisi eius.</span>
                </li>
                <li>
                <span className="social-links">Lorem ipsum dolor sit,nciduvfhiekejient quaerat qui voluptates, natus provident nisi eius.</span>
                </li>
                <li>
                <span className="social-links">Lorem ipsum doqui voluptates, natus provident nisi eius.</span>
                </li>
            </ul>
            <a className="social-links" href="/">
            <span className="social-links">Read more...</span>
            </a>
        </div>

</div>
        {/* COPYRIGHT */}
    <p className="copyright">©{year} Manipal University Jaipur, Jaipur-Ajmer Expressway, Rajasthan 303007</p>

    </div>);
    
}

export default Footer;