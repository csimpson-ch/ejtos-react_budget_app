import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {

    // get relevant states from store
    const {budget, expenses, currency} = useContext(AppContext);

    // calculate out total expenses from array of expenses
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    // initialise newBudget state variable to be current value of budget
    const [newBudget, setNewBudget] = useState(budget);

    // function that updates value of newBudget when user changes input field value
    const handleBudgetChange = (event) => {

        // update budget with event target value
        setNewBudget(event.target.value);

        // check that budget doesnt exceed 20,000
        if(newBudget > 20000) {
            alert("The budget can not exceed 20,000");
            setNewBudget("20000");
            return
        }

        // check that budget isn't below than the spending
        if(newBudget < totalExpenses) {
            alert("You cannot reduce the budget value lower than total spent so far" + newBudget + totalExpenses);
            setNewBudget("2000");
            return
        }

        // need to create an action that updates budget state in store
        // dispatch({
        //     type: 'CHANGE_BUDGET',
        //     payload: newBudget,
        // });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            </span>
        </div>
    );
};

export default Budget;
