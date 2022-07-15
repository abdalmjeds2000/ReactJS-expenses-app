import React from 'react'
import Swal from 'sweetalert2';

function TableRow(props) {
  
  let onDeleteHandler = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        props.deleteHandler(props.id);
      }
    })
  } 

  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.date}</td>
      <td>{props.price}$</td>
      <td colSpan="2">{props.description}</td>
      <td className="text-right">
        <a href="#" className="delete" onClick={onDeleteHandler}>
          <i className="fa fa-trash-o" aria-hidden="true" />
        </a>
      </td>
    </tr>
  )
}

export default TableRow