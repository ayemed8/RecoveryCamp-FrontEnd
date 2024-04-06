import React from 'react';

function Topbar() {
    return (
        <div className='topBar'>
            <div className='container topBarrow'>
                <div className='row '>
                    <div className='col-md-6'>
                        <div className='topBar__left'>
                            <img src='/images/aero.png' />

                        </div>
                    </div>
                    <div className='col-md-6' style={{ textAlign: 'end' }}>
                        <img src='/images/find.png' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
