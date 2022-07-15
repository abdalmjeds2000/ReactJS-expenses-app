import React, { useRef } from 'react'
import ExpenseModel from '../Models/ExpenseModel';
import FormItem from './FormItem'

function Form(props) {

  let titleRef = useRef();
  let dateRef = useRef();
  let priceRef = useRef();
  let descriptionRef = useRef();

  let onSubmitHandler = (e) => {
    e.preventDefault();
    let newExpense = new ExpenseModel(
      titleRef.current.value,
      dateRef.current.value,
      priceRef.current.value,
      descriptionRef.current.value
    )
    props.onNewExpense(newExpense);
    clearValInputs();
  }
  const clearValInputs = () => {
    titleRef.current.value = '';
    dateRef.current.value = '';
    priceRef.current.value = '';
    descriptionRef.current.value = '';
  }

  return (
    <form className="row" onSubmit={onSubmitHandler}>
      <FormItem title="Title" type="text" className="addTitle" ref={titleRef} />
      <FormItem title="Date" type="date" className="addDate" ref={dateRef} />
      <FormItem title="Value" type="number" className="addValue" ref={priceRef} />
      <FormItem title="Description" type="text" className="addDescrption" ref={descriptionRef} />

      <div className="mb-3 col-md-12 text-right">
        <button type="submit" className="btn btn-primary addBtn">Add</button>
      </div>
    </form>
  )
}

export default Form