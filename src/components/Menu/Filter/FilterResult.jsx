import React, { useContext } from 'react';
import { getFilterProduct } from "../../../function";
import { FilterContext } from './FilterContext';

const FilterResult = () => {
    const { filterValue } = useContext(FilterContext)
    console.log(filterValue)
  return (
    <div>
        
    </div>
  )
}

export default FilterResult