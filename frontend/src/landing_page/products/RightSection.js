import React from 'react';

function RightSection({ imageURL, productName, productDesription, tryDemo, learnMore, googlePlay, appStore, kiteConnect }) {
    return (
        <div className='container '>
            <div className='row p-2 '  >
                <div className='col-5 p-5 mt-5 fs-6' style={{width:"35%"}} >
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>
                    <div>
                        <a href={kiteConnect}>Kite Connect <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col-1'></div>
                <div className='col-5   ' >
                    <img src={imageURL} />
                </div>
            </div>
        </div>
    );
}
export default RightSection;