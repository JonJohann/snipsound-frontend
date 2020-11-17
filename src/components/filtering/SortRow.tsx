import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortClicked } from '../../state/ParamsSlice';
import SortBy from './SortBy';

// The row for sorting between date or title
export default function SortRow() {

    const dispatch = useDispatch()
    const [titleAsc, setTitleAsc] = useState(false)
    const [dateAsc, setDateAsc] = useState(false)
    const [selectedSort, setSelectedSort] = useState("date")

    const sortChanged = (name: string) => {
        if (name === "title") {
            dispatch(sortClicked((titleAsc ? "-" : "") + "title"))
            setTitleAsc(!titleAsc)
            setSelectedSort("title")
        }
        if (name === "date") {
            dispatch(sortClicked((dateAsc ? "-" : "") + "date"))
            setDateAsc(!dateAsc)
            setSelectedSort("date")
        }
    }

    return (
        <>
            <SortBy selected={selectedSort === "title"} asc={titleAsc} type="title" sortChanged={sortChanged} />
            <SortBy selected={selectedSort === "date"} asc={dateAsc} type="date" sortChanged={sortChanged} />
        </>
    )
}

