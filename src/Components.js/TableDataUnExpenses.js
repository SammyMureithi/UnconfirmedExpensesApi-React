import React from 'react'
import DetailedData from './DetailedData';

function TableDataUnExpenses( { data, search } ) {
    const table = document.querySelector( "table" );
    const filteredData = data.filter( element => element.strDrink.toUpperCase().includes( search.toUpperCase() ) );
    function handleClick( id ) {
        const clicked = data.filter( element => element.idDrink === id );
        console.log( clicked );
    }
    const res = filteredData.map( data => (
        <tr key={data.idDrink} onClick={()=>handleClick(data.idDrink)}>
        <td>{data.idDrink}</td>
        <td>{data.strDrink}</td>
        <td>{data.strCategory}</td>
        <td>{data.strAlcoholic}</td>
</tr>
    ))
  return (
      <>
          {res}
      </>
  )
}

export default TableDataUnExpenses