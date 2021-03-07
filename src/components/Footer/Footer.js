import React from 'react';

import './Footer.css';

class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <div className="footerWrapper">
                    <img src="/vector.png" alt="logo" className="cs-logo"></img>
                    <div className="footerTextBox">
                        <p className="footerText">426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</p>
                        <p className="footerText"><a className="tel" href="tel:+73412938861">+7 (3412) 93-88-61,</a> <a className="tel" href="tel:+73412432929">43-29-29</a></p>
                        <a className="hrefMainSite" href="https://htc-cs.ru/">htc-cs.ru</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;