import React from 'react'
import BasketCart from './basketCard'
import Search from './search'
import Categories from './categories'

const SideBar = () => {
    return (
        <div>
            <BasketCart/>
            <Search/>
            <Categories/>
        </div>
    )
}

export default SideBar
