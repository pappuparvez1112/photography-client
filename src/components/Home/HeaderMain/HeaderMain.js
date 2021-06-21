import React from 'react';
import chair from '../../../images/chair s.png'

const HeaderMain = () => {
    return (
        <main style={{height:"600px",fontFamily:"cursive"}} className="row align-items-center">
            <div className="col col-m4 offset-md-1 text-center">
                <h1 style={{color:"white"}}>Lets take some awesome picture </h1>
                    <p className="p text-secondary text-white">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, unde quos autem harum voluptates fugiat.
                    </p>
                    <button className="btn btn-primary text-white">
                        GET TO SHEDULE
                    </button>
            </div>
            

        </main>
    );
};

export default HeaderMain;