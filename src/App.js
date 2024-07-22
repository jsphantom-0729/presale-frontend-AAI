// src/App.js
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import TokenSaleComponent from './tokenSaleComponent.js';

function App() {

    return (
        <>
            <div className="App">
                <div className="v_dark" data-spy="scroll" data-offset="110">
                    <div id="loader-wrapper">
                        <div id="loading-center-absolute">
                            <div className="object" id="object_four"></div>
                            <div className="object" id="object_three"></div>
                            <div className="object" id="object_two"></div>
                            <div className="object" id="object_one"></div>
                        </div>
                        <div className="loader-section section-left"></div>
                        <div className="loader-section section-right"></div>

                    </div>

                    <header className="header_wrap fixed-top">
                        <div className="container-fluid">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand page-scroll animation" href="#home_section" data-animation="fadeInDown" data-animation-delay="1s">
                                    <img className="logo_light" src="assets/images/logo.png" alt="logo" />
                                    <img className="logo_dark" src="assets/images/logo_dark.png" alt="logo" />
                                </a>
                                <button className="navbar-toggler animation" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-animation="fadeInDown" data-animation-delay="1.1s">
                                    <span className="ion-android-menu"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav m-auto">
                                        <li className="animation" data-animation="fadeInDown" data-animation-delay="1.1s"><a className="nav-link page-scroll nav_item" href="#home_section">Buy</a></li>
                                        <li className="animation" data-animation="fadeInDown" data-animation-delay="1.2s"><a className="nav-link page-scroll nav_item" href="#service">Roadmap</a></li>
                                        <li className="animation" data-animation="fadeInDown" data-animation-delay="1.3s"><a className="nav-link page-scroll nav_item" href="#about">About</a></li>
                                        <li className="animation" data-animation="fadeInDown" data-animation-delay="1.4s"><a className="nav-link page-scroll nav_item" href="#token">Token</a></li>
                                        <li className="animation" data-animation="fadeInDown" data-animation-delay="1.6s"><a className="nav-link page-scroll nav_item" href="#team">Team</a></li>
                                        <li className="animation" data-animation="fadeInDown" data-animation-delay="1.7s"><a className="nav-link page-scroll nav_item" href="#faq">FAQ</a></li>
                                        <li className="animation" data-animation="fadeInDown" data-animation-delay="1.8s"><a className="nav-link page-scroll nav_item" href="#contact">Contact</a></li>
                                    </ul>
                                    <ul className="navbar-nav nav_btn align-items-center">
                                        <li className="animation" data-animation="fadeInDown" data-animation-delay="1.9s">
                                            <div className="lng_dropdown">
                                                <select name="countries" id="lng_select">
                                                    <option value='en' data-image="assets/images/eng.png" data-title="English">EN</option>
                                                    <option value='fn' data-image="assets/images/fn.png" data-title="France">FN</option>
                                                    <option value='us' data-image="assets/images/us.png" data-title="United States">US</option>
                                                </select>
                                            </div>
                                        </li>
                                        <li className="animation" data-animation="fadeInDown" data-animation-delay="2s"><WalletMultiButton /></li>
                                        
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </header>

                    <section id="home_section" className="section_banner bg_black_dark" data-z-index="1" data-parallax="scroll" data-image-src="assets/images/banner_bg2.png">
                        <canvas id="banner_canvas" className="transparent_effect fixed"></canvas>
                        <div className="container">
                            <div className="row align-items-center">
                                <TokenSaleComponent />
                                <div className="col-lg-6 col-md-12 col-sm-12 order-first">
                                    <div className="banner_image_right res_md_mb_50 res_xs_mb_30 animation" data-animation-delay="1.5s" data-animation="fadeInRight">
                                        <img alt="banner_vector2" src="assets/images/banner_img2.jpeg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="service" className="small_pb small_pt">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
                                    <div className="title_default_light title_border text-center">
                                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">ROAD MAP</h4>
                                        <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Arian Ai Anti Cheat: The Next Generation Blockchain Solution For Fair Play In Gaming.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-12">
                                    <div className="box_wrap text-center animation road-map-component" data-animation="fadeInUp" data-animation-delay="0.6s">
                                        <img src="assets/images/service_icon1.png" alt="service_icon1" />
                                        <h4>PHASE 1</h4>
                                        <p> •Build Project Team <br />
                                            •Team Member Role Assessment <br />
                                            •Arian Ai Socials Setup </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 road-map-component">
                                    <div className="box_wrap text-center animation  road-map-component" data-animation="fadeInUp" data-animation-delay="0.8s">
                                        <img src="assets/images/service_icon2.png" alt="service_icon2" />
                                        <h4>PHASE 2</h4>
                                        <p>•Develop The Arian Ai Token Smart Contract<br />
                                            •Launch The Official Website And Social Media Channels<br />
                                            •Staking Launch<br />
                                            •Marketing Campaign 1<br />
                                            •Presale Step 1-2 <br />
                                            •Marketing Campaign 2<br />
                                            •Presale Step 3<br />
                                            •Marketing Campaign 3<br />
                                            •Presale Step 4</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 road-map-component">
                                    <div className="box_wrap text-center animation road-map-component" data-animation="fadeInUp" data-animation-delay="1s">
                                        <img src="assets/images/service_icon3.png" alt="service_icon3" />
                                        <h4>PHASE 3</h4>
                                        <p>•Claim Token<br />
                                            •Dex Listing<br />
                                            •CMC/CG Listings<br />
                                            •KOL Marketing<br />
                                            •Partnership Release<br /> 
                                            •Relese Anti Cheat Bot Ai (Gaming)<br />
                                            •Top 10 Cex Listing</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-12 road-map-component">
                                    <div className="box_wrap text-center animation road-map-component" data-animation="fadeInUp" data-animation-delay="1s">
                                        <img src="assets/images/service_icon4.png" alt="service_icon4" />
                                        <h4>PHASE 4</h4>
                                        <p>•Top 5 Cex Listing<br />
                                            •Relase Anti Cheat Ai Poker (iGaming)<br />
                                            •Marketing Articles Published On Major Platforms <br />
                                            •Partnership With Marketing Agency <br />
                                            •More To Be Announced</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="about" className="small_pt">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="text_md_center">
                                        <img className="animation" data-animation="zoomIn" data-animation-delay="0.2s" src="assets/images/about_img2.png" alt="aboutimg2" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 res_md_mt_30 res_sm_mt_20">
                                    <div className="title_default_light title_border">
                                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">WHAT IS ARIAN AI?</h4>
                                        <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Arian Ai is a cutting edge trust token based AI solution specifically developed to enhance the gaming experience. Our platform utilizes advanced AI and blockchain technology to counteract cheating and manipulation by detecting and flagging any discrepancies or attempts to execute third-party programs. </p>
                                        <p className="animation" data-animation="fadeInUp" data-animation-delay="0.8s">With its trust token based system, it guarantees the integrity of the gaming environment and enhance the trust between players, making the gaming experience more enjoyable and safe for everyone. </p>
                                    </div>
                                    <a href="#home_section" className="btn btn-default btn-radius video animation" data-animation="fadeInUp" data-animation-delay="1s">Buy Now <i className="ion-ios-arrow-thin-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="token" className="section_token token_sale bg_light_dark" data-z-index="1" data-parallax="scroll" data-image-src="assets/images/token_bg.png">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
                                    <div className="title_default_light title_border text-center">
                                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">AAI Token Sale</h4>
                                        <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Join the industry leaders to discuss where the markets are heading. We accept token payments. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-sm-12 res_md_mb_40">
                                    <div className="title_default_light title_border text-center">
                                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Token Sale Proceeds</h4>
                                    </div>
                                    <div className="lg_pt_20 res_sm_pt_0 text-center animation" data-animation="fadeInRight" data-animation-delay="0.2s">
                                        <img src="assets/images/sale-proceeds3.png" alt="sale-proceeds3" />
                                    </div>
                                    <div className="divider small_divider"></div>
                                    <ul className="list_none list_chart text-center">
                                        <li>
                                            <span className="chart_bx color1"></span>
                                            <span>Addvisers</span>
                                        </li>
                                        <li>
                                            <span className="chart_bx color2"></span>
                                            <span>Marketing</span>
                                        </li>
                                        <li>
                                            <span className="chart_bx color3"></span>
                                            <span>Public Sale</span>
                                        </li>
                                        <li>
                                            <span className="chart_bx color4"></span>
                                            <span>Pre Sale</span>
                                        </li>
                                        <li>
                                            <span className="chart_bx color5"></span>
                                            <span>Projects</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="title_default_light title_border text-center">
                                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Token Distribution</h4>
                                    </div>
                                    <div className="lg_pt_20 res_sm_pt_0 text-center animation" data-animation="fadeInLeft" data-animation-delay="0.2s">
                                        <img src="assets/images/distribution3.png" alt="distribution3" />
                                    </div>
                                    <div className="divider small_divider"></div>
                                    <ul className="list_none list_chart text-center">
                                        <li>
                                            <span className="chart_bx color1"></span>
                                            <span>ICO Sale</span>
                                        </li>
                                        <li>
                                            <span className="chart_bx color4"></span>
                                            <span>Build Out</span>
                                        </li>
                                        <li>
                                            <span className="chart_bx color2"></span>
                                            <span>Team & Advisers</span>
                                        </li>
                                        <li>
                                            <span className="chart_bx color5"></span>
                                            <span>Private Investors</span>
                                        </li>
                                        <li>
                                            <span className="chart_bx color3"></span>
                                            <span>Bounty</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="mobileapp" className="bg_light_dark" data-z-index="1" data-parallax="scroll" data-image-src="assets/images/app_bg.png">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12 col-sm-12">
                                    <div className="title_default_light title_border text_md_center">
                                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">WHAT IS ARIAN AI?</h4>
                                        <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Arian Ai is a cutting edge trust token based AI solution specifically developed to enhance the gaming experience. Our platform utilizes advanced AI and blockchain technology to counteract cheating and manipulation by detecting and flagging any discrepancies or attempts to execute third-party programs.</p>
                                        <p className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">With its trust token based system, it guarantees the integrity of the gaming environment and enhance the trust between players, making the gaming experience more enjoyable and safe for everyone. </p>
                                    </div>
                                    <div className="title_default_light title_border text_md_center">
                                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">WHAT MAKES ARIAN AI DIFFERENT FROM OTHER ANTI-CHEAT SOLUTIONS?</h4>
                                        <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Our team of developers has a unique combination of prior experience in cheat development, blockchain development, and cheat prevention systems. We understand the common issues and exploits that plague the gaming industry and have developed a solution that effectively prevents these using the blockchain. </p>
                                    </div>
                                    <div className="title_default_light title_border text_md_center">
                                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">WHY IS INVESTING IN ARIAN AI A SMART MOVE FOR THE GAMING INDUSTRY?</h4>
                                        <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">The gaming is industry is growing rapidly and is projected to reach a market value of 580 billion dollars by 2030. A common issue that many gaming companies face is that their customers get frustrated over newly developed third-party cheats that current anti-cheat programs struggle to detect. Arian Ai provides a reliable and cost effective solution to this problem, making it an excellent investment opportunity in the gaming industry. </p>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 col-sm-12">
                                    <div className="res_md_mt_50 res_sm_mt_30 text-center animation" data-animation="fadeInRight" data-animation-delay="0.2s">
                                        <img src="assets/images/mobile_app3.png" alt="mobile_app3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="team" className="section_team small_pt">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 offset-lg-2">
                                    <div className="title_default_light title_border text-center">
                                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Leadership Team</h4>
                                        <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">we are proud of our great team. He is one of the most motivated and enthusiastic people we have, and is always ready and willing to help out where needed. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row small_space">
                                <div className="col-lg-3 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                                    <div className="bg_light_dark radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                        <div className="text-center">
                                            <img src="assets/images/placeholder9.png" alt="placeholder9" />
                                            <div className="team_social_s2 list_none">
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team_info text-center">
                                            <h4><a href="#team1" className="content-popup">Derek Castro</a></h4>
                                            <p>Head Of Marketing</p>
                                        </div>
                                        <div id="team1" className="team_pop mfp-hide">
                                            <div className="row m-0">
                                                <div className="col-md-4 text-center">
                                                    <div className="team_img_wrap">
                                                        <img className="w-100" src="assets/images/placeholder3.jpg" alt="user_img-lg" />
                                                        <div className="team_title">
                                                            <h4>Derek Castro</h4>
                                                            <span>Head Of Marketing</span>
                                                        </div>
                                                    </div>
                                                    <div className="social_single_team list_none mt-3">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="pt-3">
                                                        <h5>About</h5>
                                                        <hr />
                                                        <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                                        <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                                    <div className="bg_light_dark radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                        <div className="text-center">
                                            <img src="assets/images/placeholder9.png" alt="placeholder9" />
                                            <div className="team_social_s2 list_none">
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team_info text-center">
                                            <h4><a href="#team2" className="content-popup">Jessica Bell</a></h4>
                                            <p>Head Of Sale</p>
                                        </div>
                                        <div id="team2" className="team_pop mfp-hide">
                                            <div className="row m-0">
                                                <div className="col-md-4 text-center">
                                                    <div className="team_img_wrap">
                                                        <img className="w-100" src="assets/images/placeholder3.jpg" alt="user_img-lg" />
                                                        <div className="team_title">
                                                            <h4>Jessica Bell</h4>
                                                            <span>Head Of Sale</span>
                                                        </div>
                                                    </div>
                                                    <div className="social_single_team list_none mt-3">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="pt-3">
                                                        <h5>About</h5>
                                                        <hr />
                                                        <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                                        <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                                    <div className="bg_light_dark radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                        <div className="text-center">
                                            <img src="assets/images/placeholder9.png" alt="placeholder9" />
                                            <div className="team_social_s2 list_none">
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team_info text-center">
                                            <h4><a href="#team3" className="content-popup">Alvaro Martin</a></h4>
                                            <p>Blockchain App Developer</p>
                                        </div>
                                        <div id="team3" className="team_pop mfp-hide">
                                            <div className="row m-0">
                                                <div className="col-md-4 text-center">
                                                    <div className="team_img_wrap">
                                                        <img className="w-100" src="assets/images/placeholder3.jpg" alt="user_img-lg" />
                                                        <div className="team_title">
                                                            <h4>Alvaro Martin</h4>
                                                            <span>Blockchain App Developer</span>
                                                        </div>
                                                    </div>
                                                    <div className="social_single_team list_none mt-3">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="pt-3">
                                                        <h5>About</h5>
                                                        <hr />
                                                        <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                                        <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="bg_light_dark radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="1s">
                                        <div className="text-center">
                                            <img src="assets/images/placeholder9.png" alt="placeholder9" />
                                            <div className="team_social_s2 list_none">
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team_info text-center">
                                            <h4><a href="#team4" className="content-popup">Maria Willium</a></h4>
                                            <p>Community Manager</p>
                                        </div>
                                        <div id="team4" className="team_pop mfp-hide">
                                            <div className="row m-0">
                                                <div className="col-md-4 text-center">
                                                    <div className="team_img_wrap">
                                                        <img className="w-100" src="assets/images/placeholder3.jpg" alt="user_img-lg" />
                                                        <div className="team_title">
                                                            <h4>Maria Willium</h4>
                                                            <span>Community Manager</span>
                                                        </div>
                                                    </div>
                                                    <div className="social_single_team list_none mt-3">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="pt-3">
                                                        <h5>About</h5>
                                                        <hr />
                                                        <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                                        <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="divider large_divider"></div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="title_default_light title_border text-center">
                                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Invester Board</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row small_space justify-content-center">
                                <div className="col-lg-9 col-md-12">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                                            <div className="bg_light_dark radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                                                <div className="text-center">
                                                    <img src="assets/images/placeholder9.png" alt="placeholder9" />
                                                    <div className="team_social_s2 list_none">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="team_info text-center">
                                                    <h4><a href="#team5" className="content-popup">Tricia Diyana</a></h4>
                                                    <p>Invester</p>
                                                </div>
                                                <div id="team5" className="team_pop mfp-hide">
                                                    <div className="row m-0">
                                                        <div className="col-md-4 text-center">
                                                            <div className="team_img_wrap">
                                                                <img className="w-100" src="assets/images/placeholder3.jpg" alt="user_img-lg" />
                                                                <div className="team_title">
                                                                    <h4>Tricia Diyana</h4>
                                                                    <span>Invester</span>
                                                                </div>
                                                            </div>
                                                            <div className="social_single_team list_none mt-3">
                                                                <ul>
                                                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                                    <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="pt-3">
                                                                <h5>About</h5>
                                                                <hr />
                                                                <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                                                <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                                            <div className="bg_light_dark radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                                <div className="text-center">
                                                    <img src="assets/images/placeholder9.png" alt="placeholder9" />
                                                    <div className="team_social_s2 list_none">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="team_info text-center">
                                                    <h4><a href="#team6" className="content-popup">Kent Pierce</a></h4>
                                                    <p>Invester</p>
                                                </div>
                                                <div id="team6" className="team_pop mfp-hide">
                                                    <div className="row m-0">
                                                        <div className="col-md-4 text-center">
                                                            <div className="team_img_wrap">
                                                                <img className="w-100" src="assets/images/placeholder3.jpg" alt="user_img-lg" />
                                                                <div className="team_title">
                                                                    <h4>Kent Pierce</h4>
                                                                    <span>Invester</span>
                                                                </div>
                                                            </div>
                                                            <div className="social_single_team list_none mt-3">
                                                                <ul>
                                                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                                    <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="pt-3">
                                                                <h5>About</h5>
                                                                <hr />
                                                                <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                                                <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-3 col-sm-6 offset-sm-3">
                                            <div className="bg_light_dark radius_box team_box_s3 animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                                <div className="text-center">
                                                    <img src="assets/images/placeholder9.png" alt="placeholder9" />
                                                    <div className="team_social_s2 list_none">
                                                        <ul>
                                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="team_info text-center">
                                                    <h4><a href="#team7" className="content-popup">Rose Morgen</a></h4>
                                                    <p>Invester</p>
                                                </div>
                                                <div id="team7" className="team_pop mfp-hide">
                                                    <div className="row m-0">
                                                        <div className="col-md-4 text-center">
                                                            <div className="team_img_wrap">
                                                                <img className="w-100" src="assets/images/placeholder3.jpg" alt="user_img-lg" />
                                                                <div className="team_title">
                                                                    <h4>Rose Morgen</h4>
                                                                    <span>Invester</span>
                                                                </div>
                                                            </div>
                                                            <div className="social_single_team list_none mt-3">
                                                                <ul>
                                                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                                    <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="pt-3">
                                                                <h5>About</h5>
                                                                <hr />
                                                                <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                                                <p>Founder of Venus Media Ltd and Owner of leading website for affiliates in the entertainment industry TakeBucks, he is a videographer, photographer and producer with a big number of successful entrepreneurships under his name over the last 18 years.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="faq" className="bg_light_dark">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 offset-lg-2">
                                    <div className="title_default_light title_border text-center">
                                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Have Any Questions?</h4>
                                        <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Frequently asked questions (FAQ) or Questions and Answers (Q&A), are listed questions and answers, all supposed to be commonly asked in some context</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row small_space">
                                <div className="col-lg-12 col-md-12">
                                    <div className="tab_content">
                                        <ul className="nav nav-pills tab_nav_s2 tab_color_white justify-content-center" id="pills-tab" role="tablist">
                                            <li className="nav-item animation" data-animation="fadeInUp" data-animation-delay="0.5s">
                                                <a className="active" data-toggle="tab" href="#tab1">General</a>
                                            </li>
                                            <li className="nav-item animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                                <a data-toggle="tab" href="#tab2">Pre-ICO & ICC </a>
                                            </li>
                                            <li className="nav-item animation" data-animation="fadeInUp" data-animation-delay="0.7s">
                                                <a data-toggle="tab" href="#tab3">ICO Tokens</a>
                                            </li>
                                            <li className="nav-item animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                                <a data-toggle="tab" href="#tab4">Legal</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content half_tab">
                                            <div className="tab-pane fade show active" id="tab1" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div id="accordion1" className="faq_content">
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                                                <div className="card-header" id="headingOne">
                                                                    <h6 className="mb-0"> <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What is cryptocurrency?</a> </h6>
                                                                </div>
                                                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion1">
                                                                    <div className="card-body"> The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped.</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                                                <div className="card-header" id="headingTwo">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Which cryptocurrency is best to buy today?</a> </h6>
                                                                </div>
                                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion1">
                                                                    <div className="card-body"> The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped.</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                                                <div className="card-header" id="headingThree">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">How about day trading crypto?</a> </h6>
                                                                </div>
                                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion1">
                                                                    <div className="card-body"> While profits are possible trading cryptocurrencies, so are losses. My first year involved me spending hundreds of hours trading Bitcoin with a result of losing over $5,000 with nothing to show for it. Simply trading digital currencies is very similar to gambling because no one really knows what is going to happen next although anyone can guess! While I was lucky to do nothing expect lose money when I started, the worst thing that can happen is to get lucky right away and get a big ego about what an amazing cryptocurrency trader we are. </div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="1s">
                                                                <div className="card-header" id="headingFour">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">When to sell a cryptocurrency?</a> </h6>
                                                                </div>
                                                                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion1">
                                                                    <div className="card-body"> Before Steem I was all in an another altcoin and really excited about it. When I first bought the price was low and made payments to me every week just for holding it. As I tried to participate in the community over the next several months, I was consistently met with a mix of excitement and hostility. When I began talking openly about this, the negative emotions won over in the community and in me. Originally I had invested and been happy to hold no matter what the price which quickly went up after I bought it. </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div id="accordion2" className="faq_content">
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                                                <div className="card-header" id="headingFive">
                                                                    <h6 className="mb-0"> <a data-toggle="collapse" href="#collapseFive" aria-expanded="true" aria-controls="collapseFive">How does one acquire bitcoins?</a> </h6>
                                                                </div>
                                                                <div id="collapseFive" className="collapse show" aria-labelledby="headingFive" data-parent="#accordion2">
                                                                    <div className="card-body"> The best cryptocurrency to buy is one we are willing to hold onto even if it goes down. For example, I believe in Steem enough that I am willing to hold it even if it goes down 99% and would start buying more of it if the price dropped.</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                                                <div className="card-header" id="headingSix">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Can I make money with Bitcoin?</a> </h6>
                                                                </div>
                                                                <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordion2">
                                                                    <div className="card-body"> You should never expect to get rich with Bitcoin or any emerging technology. It is always important to be wary of any thing that sounds too good to be true or disobeys basic </div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                                                <div className="card-header" id="headingSeven">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">What happens when bitcoins are lost?</a> </h6>
                                                                </div>
                                                                <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordion2">
                                                                    <div className="card-body"> While profits are possible trading cryptocurrencies, so are losses. My first year involved me spending hundreds of hours trading Bitcoin with a result of losing over $5,000 with nothing to show for it. Simply trading digital currencies is very similar to gambling because no one really knows what is going to happen next although anyone can guess! While I was lucky to do nothing expect lose money when I started, the worst thing that can happen is to get lucky right away and get a big ego about what an amazing cryptocurrency trader we are. </div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="1s">
                                                                <div className="card-header" id="headingEight">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseEight" aria-expanded="false" aria-controls="collapseEight">Where is the invest my bitcoin?</a> </h6>
                                                                </div>
                                                                <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordion2">
                                                                    <div className="card-body"> Before Steem I was all in an another altcoin and really excited about it. When I first bought the price was low and made payments to me every week just for holding it. As I tried to participate in the community over the next several months, I was consistently met with a mix of excitement and hostility. When I began talking openly about this, the negative emotions won over in the community and in me. Originally I had invested and been happy to hold no matter what the price which quickly went up after I bought it. </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tab2" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div id="accordion3" className="faq_content">
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                                                <div className="card-header" id="headingNine">
                                                                    <h6 className="mb-0"> <a data-toggle="collapse" href="#collapseNine" aria-expanded="true" aria-controls="collapseNine">How does one acquire bitcoins?</a> </h6>
                                                                </div>
                                                                <div id="collapseNine" className="collapse show" aria-labelledby="headingNine" data-parent="#accordion3">
                                                                    <div className="card-body"> While it may be possible to find individuals who wish to sell bitcoins in exchange for a credit card or PayPal payment, most exchanges do not allow funding via these payment methods. This is due to cases where someone buys bitcoins with PayPal, and then reverses their half of the transaction. This is commonly referred to as a chargeback.</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                                                <div className="card-header" id="headingTen">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseTen" aria-expanded="false" aria-controls="collapseTen">Can I make money with Bitcoin?</a> </h6>
                                                                </div>
                                                                <div id="collapseTen" className="collapse" aria-labelledby="headingTen" data-parent="#accordion3">
                                                                    <div className="card-body"> You should never expect to get rich with Bitcoin or any emerging technology. It is always important to be wary of anything that sounds too good to be true or disobeys basic economic rules.</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                                                <div className="card-header" id="headingEleven">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">What happens when bitcoins are lost?</a> </h6>
                                                                </div>
                                                                <div id="collapseEleven" className="collapse" aria-labelledby="headingEleven" data-parent="#accordion3">
                                                                    <div className="card-body">When a user loses his wallet, it has the effect of removing money out of circulation. Lost bitcoins still remain in the block chain just like any other bitcoins. However, lost bitcoins remain dormant forever because there is no way for anybody to find the private key(s) that would allow them to be spent again. Because of the law of supply and demand, when fewer bitcoins are available, the ones that are left will be in higher demand and increase in value to compensate.</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="1s">
                                                                <div className="card-header" id="headingTwelve">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">Who controls the Bitcoin network?</a> </h6>
                                                                </div>
                                                                <div id="collapseTwelve" className="collapse" aria-labelledby="headingTwelve" data-parent="#accordion3">
                                                                    <div className="card-body">Nobody owns the Bitcoin network much like no one owns the technology behind email. Bitcoin is controlled by all Bitcoin users around the world. While developers are improving the software, they can't force a change in the Bitcoin protocol because all users are free to choose what software and version they use.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div id="accordion4" className="faq_content">
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                                                <div className="card-header" id="headingThirteen">
                                                                    <h6 className="mb-0"> <a data-toggle="collapse" href="#collapseThirteen" aria-expanded="true" aria-controls="collapseThirteen">How does one acquire bitcoins?</a> </h6>
                                                                </div>
                                                                <div id="collapseThirteen" className="collapse show" aria-labelledby="headingThirteen" data-parent="#accordion4">
                                                                    <div className="card-body"> While it may be possible to find individuals who wish to sell bitcoins in exchange for a credit card or PayPal payment, most exchanges do not allow funding via these payment methods. This is due to cases where someone buys bitcoins with PayPal, and then reverses their half of the transaction. This is commonly referred to as a chargeback.</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                                                <div className="card-header" id="headingFourteen">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">Can I make money with Bitcoin?</a> </h6>
                                                                </div>
                                                                <div id="collapseFourteen" className="collapse" aria-labelledby="headingFourteen" data-parent="#accordion4">
                                                                    <div className="card-body"> You should never expect to get rich with Bitcoin or any emerging technology. It is always important to be wary of anything that sounds too good to be true or disobeys basic economic rules.</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                                                <div className="card-header" id="headingFifteen">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">What happens when bitcoins are lost?</a> </h6>
                                                                </div>
                                                                <div id="collapseFifteen" className="collapse" aria-labelledby="headingFifteen" data-parent="#accordion4">
                                                                    <div className="card-body">When a user loses his wallet, it has the effect of removing money out of circulation. Lost bitcoins still remain in the block chain just like any other bitcoins. However, lost bitcoins remain dormant forever because there is no way for anybody to find the private key(s) that would allow them to be spent again. Because of the law of supply and demand, when fewer bitcoins are available, the ones that are left will be in higher demand and increase in value to compensate.</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="1s">
                                                                <div className="card-header" id="headingSixteen">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">Who controls the Bitcoin network?</a> </h6>
                                                                </div>
                                                                <div id="collapseSixteen" className="collapse" aria-labelledby="headingSixteen" data-parent="#accordion4">
                                                                    <div className="card-body">Nobody owns the Bitcoin network much like no one owns the technology behind email. Bitcoin is controlled by all Bitcoin users around the world. While developers are improving the software, they can't force a change in the Bitcoin protocol because all users are free to choose what software and version they use.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tab3" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div id="accordion5" className="faq_content">
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                                                <div className="card-header" id="headingSeventeen">
                                                                    <h6 className="mb-0"> <a data-toggle="collapse" href="#collapseSeventeen" aria-expanded="true" aria-controls="collapseSeventeen">How are bitcoins created?</a> </h6>
                                                                </div>
                                                                <div id="collapseSeventeen" className="collapse show" aria-labelledby="headingSeventeen" data-parent="#accordion5">
                                                                    <div className="card-body"> New bitcoins are generated by a competitive and decentralized process called "mining". This process involves that individuals are rewarded by the network for their services. Bitcoin miners are processing transactions and securing the network using specialized hardware and are collecting new bitcoins in exchange.</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                                                <div className="card-header" id="headingEighteen">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseEighteen" aria-expanded="false" aria-controls="collapseEighteen">Why do bitcoins have value?</a> </h6>
                                                                </div>
                                                                <div id="collapseEighteen" className="collapse" aria-labelledby="headingEighteen" data-parent="#accordion5">
                                                                    <div className="card-body">Bitcoins have value because they are useful as a form of money. Bitcoin has the characteristics of money (durability, portability, fungibility, scarcity, divisibility, and recognizability) based on the properties of mathematics rather than relying on physical properties (like gold and silver) or trust in central authorities (like fiat currencies). In short, Bitcoin is backed by mathematics. </div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                                                <div className="card-header" id="headingNineteen">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseNineteen" aria-expanded="false" aria-controls="collapseNineteen">What determines bitcoin's price?</a> </h6>
                                                                </div>
                                                                <div id="collapseNineteen" className="collapse" aria-labelledby="headingNineteen" data-parent="#accordion5">
                                                                    <div className="card-body"> The price of a bitcoin is determined by supply and demand. When demand for bitcoins increases, the price increases, and when demand falls, the price falls. There is only a limited number of bitcoins in circulation and new bitcoins are created at a predictable and decreasing rate</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="1s">
                                                                <div className="card-header" id="headingTwenty">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseTwenty" aria-expanded="false" aria-controls="collapseTwenty">Can bitcoins become worthless?</a> </h6>
                                                                </div>
                                                                <div id="collapseTwenty" className="collapse" aria-labelledby="headingTwenty" data-parent="#accordion5">
                                                                    <div className="card-body"> Yes. History is littered with currencies that failed and are no longer used, such as the German Mark during the Weimar Republic and, more recently, the Zimbabwean dollar.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div id="accordion6" className="faq_content">
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                                                <div className="card-header" id="headingNine">
                                                                    <h6 className="mb-0"> <a data-toggle="collapse" href="#collapse21" aria-expanded="true" aria-controls="collapse21">How are bitcoins created?</a> </h6>
                                                                </div>
                                                                <div id="collapse21" className="collapse show" aria-labelledby="heading21" data-parent="#accordion6">
                                                                    <div className="card-body"> New bitcoins are generated by a competitive and decentralized process called "mining". This process involves that individuals are rewarded by the network for their services. Bitcoin miners are processing transactions and securing the network using specialized hardware and are collecting new bitcoins in exchange.</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                                                <div className="card-header" id="heading22">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapse22" aria-expanded="false" aria-controls="collapse22">Why do bitcoins have value?</a> </h6>
                                                                </div>
                                                                <div id="collapse22" className="collapse" aria-labelledby="heading22" data-parent="#accordion6">
                                                                    <div className="card-body">Bitcoins have value because they are useful as a form of money. Bitcoin has the characteristics of money (durability, portability, fungibility, scarcity, divisibility, and recognizability) based on the properties of mathematics rather than relying on physical properties (like gold and silver) or trust in central authorities (like fiat currencies). In short, Bitcoin is backed by mathematics. </div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                                                <div className="card-header" id="heading23">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapse23" aria-expanded="false" aria-controls="collapse23">What determines bitcoin's price?</a> </h6>
                                                                </div>
                                                                <div id="collapse23" className="collapse" aria-labelledby="heading23" data-parent="#accordion6">
                                                                    <div className="card-body"> The price of a bitcoin is determined by supply and demand. When demand for bitcoins increases, the price increases, and when demand falls, the price falls. There is only a limited number of bitcoins in circulation and new bitcoins are created at a predictable and decreasing rate</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="1s">
                                                                <div className="card-header" id="heading24">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapse24" aria-expanded="false" aria-controls="collapse24">Can bitcoins become worthless?</a> </h6>
                                                                </div>
                                                                <div id="collapse24" className="collapse" aria-labelledby="heading24" data-parent="#accordion6">
                                                                    <div className="card-body"> Yes. History is littered with currencies that failed and are no longer used, such as the German Mark during the Weimar Republic and, more recently, the Zimbabwean dollar.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tab4" role="tabpanel">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div id="accordion7" className="faq_content">
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                                                <div className="card-header" id="heading25">
                                                                    <h6 className="mb-0"> <a data-toggle="collapse" href="#collapse25" aria-expanded="true" aria-controls="collapse25">Is Bitcoin legal?</a> </h6>
                                                                </div>
                                                                <div id="collapse25" className="collapse show" aria-labelledby="heading25" data-parent="#accordion7">
                                                                    <div className="card-body">To the best of our knowledge, Bitcoin has not been made illegal by legislation in most jurisdictions. However, some jurisdictions (such as Argentina and Russia) severely restrict or ban foreign currencies. Other jurisdictions (such as Thailand) may limit the licensing of certain entities such as Bitcoin exchanges.</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                                                <div className="card-header" id="heading26">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapse26" aria-expanded="false" aria-controls="collapse26">Is Bitcoin useful for illegal activities?</a> </h6>
                                                                </div>
                                                                <div id="collapse26" className="collapse" aria-labelledby="heading26" data-parent="#accordion7">
                                                                    <div className="card-body">Bitcoin is money, and money has always been used both for legal and illegal purposes. Cash, credit cards and current banking systems widely surpass Bitcoin in terms of their use to finance crime. Bitcoin can bring significant innovation in payment systems and the benefits of such innovation are often considered to be far beyond their potential drawbacks.</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                                                <div className="card-header" id="heading27">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapse27" aria-expanded="false" aria-controls="collapse27">Can Bitcoin be regulated?</a> </h6>
                                                                </div>
                                                                <div id="collapse27" className="collapse" aria-labelledby="heading27" data-parent="#accordion7">
                                                                    <div className="card-body"> The Bitcoin protocol itself cannot be modified without the cooperation of nearly all its users, who choose what software they use. Attempting to assign special rights to a local authority in the rules of the global Bitcoin network is not a practical possibility.</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="1s">
                                                                <div className="card-header" id="heading28">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapse28" aria-expanded="false" aria-controls="collapse28">What about Bitcoin and taxes?</a> </h6>
                                                                </div>
                                                                <div id="collapse28" className="collapse" aria-labelledby="heading28" data-parent="#accordion7">
                                                                    <div className="card-body"> Bitcoin is not a fiat currency with legal tender status in any jurisdiction, but often tax liability accrues regardless of the medium used. There is a wide variety of legislation in many different jurisdictions which could cause income, sales, payroll, capital gains, or some other form of tax liability to arise with Bitcoin.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div id="accordion8" className="faq_content">
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                                                <div className="card-header" id="heading29">
                                                                    <h6 className="mb-0"> <a data-toggle="collapse" href="#collapse29" aria-expanded="true" aria-controls="collapse29">Is Bitcoin legal?</a> </h6>
                                                                </div>
                                                                <div id="collapse29" className="collapse show" aria-labelledby="heading29" data-parent="#accordion8">
                                                                    <div className="card-body">To the best of our knowledge, Bitcoin has not been made illegal by legislation in most jurisdictions. However, some jurisdictions (such as Argentina and Russia) severely restrict or ban foreign currencies. Other jurisdictions (such as Thailand) may limit the licensing of certain entities such as Bitcoin exchanges.</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                                                <div className="card-header" id="heading30">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapse30" aria-expanded="false" aria-controls="collapse30">Is Bitcoin useful for illegal activities?</a> </h6>
                                                                </div>
                                                                <div id="collapse30" className="collapse" aria-labelledby="heading30" data-parent="#accordion8">
                                                                    <div className="card-body">Bitcoin is money, and money has always been used both for legal and illegal purposes. Cash, credit cards and current banking systems widely surpass Bitcoin in terms of their use to finance crime. Bitcoin can bring significant innovation in payment systems and the benefits of such innovation are often considered to be far beyond their potential drawbacks.</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                                                <div className="card-header" id="heading31">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapse31" aria-expanded="false" aria-controls="collapse31">Can Bitcoin be regulated?</a> </h6>
                                                                </div>
                                                                <div id="collapse31" className="collapse" aria-labelledby="heading31" data-parent="#accordion8">
                                                                    <div className="card-body"> The Bitcoin protocol itself cannot be modified without the cooperation of nearly all its users, who choose what software they use. Attempting to assign special rights to a local authority in the rules of the global Bitcoin network is not a practical possibility.</div>
                                                                </div>
                                                            </div>
                                                            <div className="card animation" data-animation="fadeInUp" data-animation-delay="1s">
                                                                <div className="card-header" id="heading32">
                                                                    <h6 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapse32" aria-expanded="false" aria-controls="collapse32">What about Bitcoin and taxes?</a> </h6>
                                                                </div>
                                                                <div id="collapse32" className="collapse" aria-labelledby="heading32" data-parent="#accordion8">
                                                                    <div className="card-body"> Bitcoin is not a fiat currency with legal tender status in any jurisdiction, but often tax liability accrues regardless of the medium used. There is a wide variety of legislation in many different jurisdictions which could cause income, sales, payroll, capital gains, or some other form of tax liability to arise with Bitcoin.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="contact" className="contact_section small_pt">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 offset-lg-2">
                                    <div className="title_default_light title_border text-center">
                                        <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Get In Touch!</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center small_space">
                                <div className="col-lg-4 col-md-6 offset-lg-2">
                                    <div className="bg_light_dark  contact_box_s2 animation" data-animation="fadeInLeft" data-animation-delay="0.1s">
                                        <div className="contact_title">
                                            <h5 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">Contact With Us</h5>
                                            <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">Our office is located in a beautiful building and garden</p>
                                        </div>
                                        <ul className="list_none contact_info mt-margin">
                                            <li className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                                <i className="ion-ios-location"></i>
                                                <div className="contact_detail"> <span>Address</span>
                                                    <p>22 International Division Via G.B. Pirelli</p>
                                                </div>
                                            </li>
                                            <li className="animation" data-animation="fadeInUp" data-animation-delay="0.5s">
                                                <i className="ion-android-call"></i>
                                                <div className="contact_detail"> <span>Phone</span>
                                                    <p>+23 0123 4567</p>
                                                </div>
                                            </li>
                                            <li className="animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                                <i className="ion-ios-email"></i>
                                                <div className="contact_detail"> <span>Email-id</span>
                                                    <p>Yourmail@gmail.com</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="contct_follow pt-2 pt-md-4">
                                            <span className="text-uppercase animation" data-animation="fadeInUp" data-animation-delay="0.2s">Follow Us</span>
                                            <ul className="list_none social_icon">
                                                <li className="animation" data-animation="fadeInUp" data-animation-delay="0.4s"><a href="#"><i className=" fa fa-facebook"></i></a></li>
                                                <li className="animation" data-animation="fadeInUp" data-animation-delay="0.5s"><a href="#"><i className=" fa fa-twitter"></i></a></li>
                                                <li className="animation" data-animation="fadeInUp" data-animation-delay="0.6s"><a href="#"><i className=" fa fa-google-plus"></i></a></li>
                                                <li className="animation" data-animation="fadeInUp" data-animation-delay="0.7s"><a href="#"><i className=" fa fa-pinterest"></i></a></li>
                                                <li className="animation" data-animation="fadeInUp" data-animation-delay="0.8s"><a href="#"><i className=" fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="pt-4 pt-md-0 animation" data-animation="fadeInRight" data-animation-delay="0.1s">
                                        <form method="post" name="enq" className="field_form">
                                            <div className="row">
                                                <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                                                    <input type="text" required="required" placeholder="Enter Name *" id="first-name" className="form-control" name="name" />
                                                </div>
                                                <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.6s">
                                                    <input type="email" required="required" placeholder="Enter Email *" id="email" className="form-control" name="email" />
                                                </div>
                                                <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="0.8s">
                                                    <input type="text" required="required" placeholder="Enter Subject" id="subject" className="form-control" name="subject" />
                                                </div>
                                                <div className="form-group col-md-12 animation" data-animation="fadeInUp" data-animation-delay="1s">
                                                    <textarea required="required" placeholder="Message *" id="description" className="form-control" name="message" rows="2"></textarea>
                                                </div>
                                                <div className="col-md-12 text-center animation" data-animation="fadeInUp" data-animation-delay="1.2s">
                                                    <button type="submit" title="Submit Your Message!" className="btn btn-default btn-radius btn-block" id="submitButton" name="submit" value="Submit">Submit <i className="ion-ios-arrow-thin-right"></i></button>
                                                </div>
                                                <div className="col-md-12">
                                                    <div id="alert-msg" className="alert-msg text-center"></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <footer>
                        <div className="bottom_footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <p className="copyright">Copyright &copy; 2018 All Rights Reserved.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="list_none footer_menu">
                                            <li><a href="#">Privacy Policy</a></li>
                                            <li><a href="#">Terms & Conditions</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div >
            </div>
        </>
    );
}

export default App;