import React, { useEffect, useState } from 'react'
import TableDataUnExpenses from './TableDataUnExpenses';

function UnconfirmedExpenses( { searchTerm = "T" } ) {
    const [dataDrinks, setData] = useState( [] );
    const [search, setSearch] = useState( "" );
    useEffect( () => {
        fetch( `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchTerm}` )
            .then( res => {
                if ( !res.ok ) {
                    console.log( "Fetch unsuccessful" );
                }
                return res
            } )
            .then( res => res.json() )
            .then( data => setData( data.drinks )
)
            .catch( error => console.log( error ) )
    }, [searchTerm] );
    function handleSearchChange( e ) {
        e.preventDefault();
        setSearch( e.target.value );
    }
    const drinks = dataDrinks.length > 0 ? <TableDataUnExpenses data={dataDrinks} search={search} />:null
    
  return (
      <>
          <input type={"text"} placeholder="Search" value={search} onChange={handleSearchChange} /><br></br>
          <table>
              <caption>Drinks starting With {searchTerm.toUpperCase()}</caption>
              <thead>
                  <tr>
                  <th>Serial Number</th>
                  <th>Drink Name</th>
                  <th>Drink Category</th>
                  <th>Drink Type</th>
                  </tr>
              </thead>
              <tbody>
                  {drinks}
              </tbody>
          </table>
      </>
  )
}

export default UnconfirmedExpenses