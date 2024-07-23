import React, { useState } from 'react';
import { message } from 'antd';
import './CustomInputField.css';
import { useConnection, useWallet } from '@solana/wallet-adapter-react'

const TokenSaleComponent = () => {
    const [tokenAmount, setTokenAmount] = useState(0)
    const [solAmount, setSolAmount] = useState(0)
    const tokenPrice = 0.0001; // Example: 0.01 SOL per token
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const buyToken = () => {
        if (!publicKey) {
            message.error('Please connect your wallet!')
            return;
        }
        if(tokenAmount == 0) {
            message.error('You must input AAI amount.');
            return;
        } else if(!Number.isInteger(tokenAmount)) {
            message.error('You can buy only integer amount of AAI.');
            return;
        }


        message.success(solAmount);
    }

    return (
        <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
            <div className="banner_text_s2 text_md_center animation" data-animation="fadeInUp" data-animation-delay="1.1s">

                <h2 className="animation text-white" data-animation="fadeInUp" data-animation-delay="1.1s"><strong>Arian Ai Anti Cheat</strong><br/><br/>The Next Generation Blockchain Solution For Fair Play In Gaming</h2><br />
                <h5 className="animation presale_txt text-white" data-animation="fadeInUp" data-animation-delay="1.3s">Token Presale is <mark className="gradient_box">Live</mark></h5>
                <br />
                <span className="custom-label">AAi you receive</span>
                <input type="number" required="required" placeholder="Enter token amount to buy *" id="first-name" className="form-control custom-input" name="name" style={{width: '300px'}}
                    onChange={(e) => {
                    const value = e.target.value;
                    setTokenAmount(Number(value));
                    setSolAmount((Number(value) * tokenPrice).toFixed(4));
                }} />
                <span className="custom-label">SOL you pay: {solAmount}</span>
                <br />
                <br />
                <div className="btn_group pt-2 pb-3 animation" data-animation="fadeInUp" data-animation-delay="1.4s">
                    <a onClick={buyToken} className="btn btn-border btn-radius">Buy Token</a>
                    <a href="#whitepaper" className="btn btn-default btn-radius nav-link content-popup">Whitepaper <i className="ion-ios-arrow-thin-right"></i></a>
                </div>
                <span className="text-white icon_title animation" data-animation="fadeInUp" data-animation-delay="1.4s">We accept : Sol, USDC</span>
                <div id="whitepaper" className="team_pop mfp-hide">
                    <div className="row m-0">
                        <div className="col-md-7">
                            <div className="pt-3 pb-3">
                                <div className="title_dark title_border">
                                    <h4>Download Whitepaper</h4>
                                    <p>A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution.Digital signatures provide part of the solution, but the main benefits are lost if a trusted third party is still required to prevent double-spending.</p>
                                    <p>The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work.</p>
                                    <a href="#" className="btn btn-default btn-radius">Download Now <i className="ion-ios-arrow-thin-right"></i></a>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img className="pt-3 pb-3" src="assets/images/whitepaper.png" alt="whitepaper" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenSaleComponent;
