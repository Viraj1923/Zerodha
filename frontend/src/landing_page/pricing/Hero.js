import React from 'react';

function Hero() {
    return ( 
        <div className='border-bottom'>
            <div className='text-center mt-5 p-5'>
                <h1>Pricing</h1>
                <p className='text-muted fs-5 mt-3'><b>Free equity investments and flat ₹20 traday and F&O trades</b></p>
            </div>

            <div className='container border-top text-center ' style={{fontSize:"17px",width:"80%"}}>
                <div className='row p-5' >
                    <div className='col-4'>
                        <img src='media/images/pricingEquity.svg'/>
                        <h2>Free equity delivery</h2>
                        <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                    </div>

                    <div className='col-4'>
                        <img src='media/images/intradayTrades.svg'/>
                        <h2>Intraday and F&O trades</h2>
                        <p className='text-muted'>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.</p>
                    </div>

                    <div className='col-4'>
                        <img src='media/images/pricingEquity.svg'/>
                        <h2>Free direct MF</h2>
                        <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                    </div>
                </div>
            </div>

            <div className='text-center mt-5 mb-5'>
                <h1>Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className=" p-2 btn btn-primary fs-5 mb-5" style={{ width: "20%", margin: "0 auto" }}>
                    Signup Now
                </button>
            </div>
            
        </div>
     );
}

export default Hero;