import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    // get state values from appcontext
    const {expenses, budget, newBudget} = useContext(AppContext);

    // calculate total expenses by calculating new total based on cost
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    // have expenses exceeded budget?
    const alertType = totalExpenses > newBudget ? 'alert-danger' : 'alert-success';

    // whats rendered by this component
    return (
        <div className={`alert ${alertType}`}>
            {/* <span>Budget: £{budget}</span> */}
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
