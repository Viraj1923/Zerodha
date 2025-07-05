import React from 'react';

function Hero() {
    return ( 
        <div className='container mb-5  border-bottom '>
            <div className='row text-center mt-5 p-3 '>
                <h1>Zerodha Products</h1>
                <h3 className='text-muted mt-3 fs-4'>Sleek, modern and intuitive trading platforms</h3>
                <p className='mt-3'>Check out our <a href=''>investment offerings</a> <i class="fa fa-long-arrow-right" aria-hidden="true"></i></p>
            </div>
        </div>
     );
}

export default Hero;