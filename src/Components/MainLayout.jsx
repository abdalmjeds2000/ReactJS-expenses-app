import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/custom.css';
import Illustration from './img/m1.png';

import Header from './Header.jsx';
import Form from './Form';
import Table from './Table';
import Swal from 'sweetalert2';
import ExpenseModel from '../Models/ExpenseModel';

function MainLayout() {

  const [expenses, setExpenses] = useState([]);


  useEffect(() => {
    fetchExpensesFromFirebase();
  }, [])


  let onNewExpenseHandler = (newExpense) => {
    saveExpensenOnFirebase(newExpense);
  }
  let onDeleteExpenseHandler = (id) => {
    deleteExpenseFromFirebase(id);
  }
  let deleteExpenseFromFirebase = (id) => {
    fetch(
      `https://vp-react-expenses-app-default-rtdb.firebaseio.com/expenses/${id}.json`,
      {
        method: 'DELETE'
      }
    )
    .then((response) => response.json())
    .then((result) => {
      let filterExpenses = expenses.filter((element) => element.id !== id);
      setExpenses(filterExpenses);
      Swal.fire({
        icon: 'success',
        title: 'Deleted',
        text: 'Expenses Deleted Successfully!',
        showConfirmButton: false,
        timer: 1000,
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }
  let saveExpensenOnFirebase = (newExpense) => {
    fetch(
      'https://vp-react-expenses-app-default-rtdb.firebaseio.com/expenses.json',
      {
        method: 'POST',
        body: JSON.stringify(newExpense),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result?.name);
      newExpense.id = result?.name;
      setExpenses((prev) => [newExpense, ...prev])
    })
    .catch((err) => {
      console.log(err)
    })
  }
  let fetchExpensesFromFirebase = () => {
    fetch(
      'https://vp-react-expenses-app-default-rtdb.firebaseio.com/expenses.json',
      {
        method: 'GET'
      }
    )
    .then((response) => response.json())
    .then((result) => {
      
      let allExpenses = [];
      for (let key in result) {
        let expense = new ExpenseModel(
          result[key].title,
          result[key].date,
          result[key].price,
          result[key].description
        )
        expense.id = key;
        allExpenses.unshift(expense);
      }
      setExpenses(allExpenses);
    })
  }


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6">
          <img src={Illustration} className="img-fluid" alt="" />
        </div>
        <div className="col-sm-6 mt-5">
          <Header />
          <Form onNewExpense={onNewExpenseHandler} />
        </div>
      </div>
    
      <div className="row mt-5 mb-5">
        <div className="custom-card ">
          <Table 
            expenses={expenses} 
            deleteExpenseHandler={onDeleteExpenseHandler}
          />
        </div>
      </div>
    </div>  
  )
}

export default MainLayout