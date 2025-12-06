import React from 'react';

function Pricing() {
    return ( 
       <div className='container mb-5'>
         <div className='row'>

            {/* Left Section */}
            <div className='col-4'>
                <h1 className='mb-3'>Unbeatable Pricing</h1>
                <p>
                    We pioneered the concept of discount broking and price transparency 
                    in India. Flat fees and no hidden charges.
                </p>
                <a href='' style={{ textDecoration:"none" }}>
                    See Pricing  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </a>
            </div>

            {/* Middle Spacing Column */}
            <div className='col-2'></div>

            {/* Right Section */}
            <div className='col-6 mb-10'>
                <div className='row text-center'>
                    <div className='col p-3 border mb-5'>
                        <h1 className='mb-3'>₹0</h1>
                        <p>Free equity delivery and <br/>direct mutual funds</p>
                    </div>

                    <div className='col p-3 border mb-5'>
                        <h1 className='mb-3'>₹20</h1>
                        <p>Intrady and F&O</p>
                    </div>

                    <div className='col mb-10'></div>
                </div>
            </div>

         </div>
       </div> 
    );
}

export default Pricing;
