import React from 'react';

function Education() {
    return (
        <div className='container mt-5'>
            <div className='row'>

                {/* Left Section */}
                <div className='col-6'>
                    <img src='media/images/education.svg'
                        style={{ width: "70%" }} />
                </div>

                {/* Right Section */}
                <div className='col-6 '>
                    <br /><br />
                    <h2 className="mb-4 fs-2">Free and open market education</h2>
                    <p>
                        <strong>Varsity, the largest online stock market education book in the world</strong><br />
                        covering everything from the basics to advanced trading.
                    </p>

                    <a href="#" style={{ textDecoration: "none" }}>
                        Versity →
                    </a>

                    <br /><br />

                    <p className='mb-3'>
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>

                    <a href="#" style={{ textDecoration: "none" }}>
                        TradingQ&A →
                    </a>

                </div>

            </div>
        </div>
    );
}

export default Education;