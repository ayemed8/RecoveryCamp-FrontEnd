import React from 'react';

function FooterBottom() {
    return (
        <div className='footerBottom'>
            <div className='container topBarrow'>
                <div className='row '>
                    <div className='col-md-6' style={{ padding: '20px' , paddingTop:'40px' }}>
                        <div className='topBar__left'>
                            <p>© 2022 Recovery Camp. All rights reserved.</p>
                        </div>
                    </div>
                    <div className='col-md-6' style={{ textAlign: 'end', padding: '20px', paddingTop:'40px' }}>
                        <p>Built By Getmilk.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterBottom;
