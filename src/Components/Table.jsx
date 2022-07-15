import React from 'react'
import TableRow from './TableRow'

function Table(props) {

  let onDeleteHandler = (id) => {
    props.deleteExpenseHandler(id);
  }

  return (
    <table className="table ">
    <thead>
      <tr>
        <th>Title</th>
        <th>Date</th>
        <th>value</th>
        <th>Description</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        props.expenses.map((expense) => {
          return <TableRow
            key={expense.id}
            id={expense.id}
            title={expense.title}
            date={expense.date}
            price={expense.price}
            description={expense.description}
            deleteHandler={onDeleteHandler}
          />
        })
      }
    </tbody>
  </table>
  )
}

export default Table