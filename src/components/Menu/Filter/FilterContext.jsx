import { createContext } from "react";
import { useState } from "react";

export const FilterContext = createContext({});

export const FilterProvider = ({ children }) => {
    const [filterValue, setFilterValue] = useState({
        from: "",
        to: ""
    })

    const handleChange = (e) => {
        const value = e.target.value;

        setFilterValue({
            ...filterValue,
            [e.target.name]: value
        })
    }
    return (<FilterContext.Provider value={{filterValue, handleChange}}>
        { children }
    </FilterContext.Provider>)
}