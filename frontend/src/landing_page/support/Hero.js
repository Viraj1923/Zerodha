import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h3>Support Portal</h3>
                <h4><a href='' style={{color:"white"}}>Track Tickets</a></h4>
            </div>

            <div className='row p-5 '>
                <div className='col-6 p-5' id='anker-link'>
                    <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1><br/>
                    <input placeholder='Eg. how do I activate f&O, why is my order getting rejected...'/><br/><br/>
                    <a href=''>Track account opening</a>
                    <a href=''>Track segment activation</a>
                    <a href=''>Intraday margins </a>
                    <a href=''>Kite user manual</a>
                </div>

                <div className='col-6 p-5'>
                    <h1 className="fs-3">Featured</h1>
                    <ol style={{lineHeight:"2.5"}}>
                        <li><a href=''>1.Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld] </a></li>
                        <li><a href=''>2.Change in mutual fund settlement cycle due to settlement holiday on account of Annual Bank closing (April 01, 2025) </a></li>
                    </ol>
                   
                </div>
            </div>


        </section>
     );
}

export default Hero;