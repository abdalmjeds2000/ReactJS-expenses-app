import React from 'react';

let FormItem = React.forwardRef((props, ref) => {
  return (
    <div className="mb-3 col-md-6">
      <label className="form-label">{props.title}</label>
      <input 
        type={props.type}
        className={`form-control ${props.inputClass}`} 
        aria-describedby="" 
        ref={ref}
      />
    </div>
  )
})

export default FormItem
