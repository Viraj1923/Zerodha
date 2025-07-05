import React from 'react';

function Universe() {
    return (
        <div className='container mt-6'>
            <div className='row p-2 text-center'  >
                <h1>The Zerodha Universe</h1>
                <p className='text-muted'>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 p-3 mt-6' >
                    <img src='media/images/smallcaselogo.png' className="universe-img" />
                    <p className='text-small text-muted'>Thematic investment platform</p>
                </div>
                <div className='col-4 p-3 mt-6' >
                    <img src='media/images/StreakLogo.png' className="universe-img"/>
                    <p className='text-small text-muted'>Algo & strategy platform</p>
                </div>
                <div className='col-4 p-3 mt-6' >
                    <img src='media/images/sensibullLogo.svg' className="universe-img"/>
                    <p className='text-small text-muted'>Options trading platform</p>
                </div>

                <div className='col-4 p-3 mt-6' >
                    <img src='media/images/zerodhaFundhouse.png' className="universe-img"/>
                    <p className='text-small text-muted'>Asset management</p>
                </div>
                <div className='col-4 p-3 mt-6' >
                    <img src='media/images/goldenpiLogo.png' className="universe-img"/>
                    <p className='text-small text-muted'>Bonds trading platform</p>
                </div>
                <div className='col-4 p-3 mt-6' >
                    <img src='media/images/dittoLogo.png' className="universe-img"/>
                    <p className='text-small text-muted'>Insurance</p>
                </div>

                <button className="mt-5 p-2 btn btn-primary fs-5 mb-5" style={{ width: "20%", margin: "0 auto" }}>
                    Signup Now
                </button>
            </div>
        </div>
        
    );
}
export default Universe;