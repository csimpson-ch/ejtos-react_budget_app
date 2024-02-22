import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

    // get relevant states from store
    // const {budget} = useContext(AppContext);

    // set additional state variables for use here
    const [name, setName] = useState('');

    return(
        <div className="currency-select" style={{ marginLeft: '0rem', color: 'green'}}>
            <span style={{color: 'white'}}>Currency</span> <br />
            <select className="currency-select" id="currencySelect" onChange={(event) => setName(event.target.value)}>
                <option value="dollar" name="dollar">$ Dollar</option>
                <option value="pound" name="pound" selected>£ Pound</option>
                <option value="euro" name="euro">€ Euro</option>
                <option value="rupee" name="rupee">₹ Rupee</option>
            </select>
        </div>
    );
};

export default Currency;