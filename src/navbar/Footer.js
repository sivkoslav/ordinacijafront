import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/*column 1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Kontakt</h4>
                            <ul className="list-unstyled">
                                <li>Sekspirova 26</li>
                                <li>21000 Novi Sad</li>
                                <li>021 999 999</li>
                                <li>061 999 999</li>
                            </ul>
                        </div>

                        {/*column 2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">lorem ipsum</a></li>
                                <li><a href="/">lorem ipsum</a></li>
                                <li><a href="/">lorem ipsum</a></li>
                                <li><a href="/">lorem ipsum</a></li>
                            </ul>
                        </div>

                        {/*column 3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                            <li><a href="/">lorem ipsum</a></li>
                            <li><a href="/">lorem ipsum</a></li>
                            <li><a href="/">lorem ipsum</a></li>
                            <li><a href="/">lorem ipsum</a></li>
                            </ul>
                        </div>

                        {/*column 4 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Lorem ipsum</h4>
                            <ul className="list-unstyled">
                            <li><a href="/">lorem ipsum</a></li>
                            <li><a href="/">lorem ipsum</a></li>
                            <li><a href="/">lorem ipsum</a></li>
                            <li><a href="/">lorem ipsum</a></li>
                            </ul>
                        </div>

                    </div>
                    {/*Footer Bottom*/}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} Ordinacija - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
}

.footer-bottom {
    pading-top: 3rem;
    padding-bottom: 2rem;
}

ul li a {
    color: var(--mainGrey);
}

ul li a:hover {
    color: var(--mainLightGrey);
}

`;
