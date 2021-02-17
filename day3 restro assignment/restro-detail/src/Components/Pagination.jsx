import React from 'react'

const Pagination = ({perPage,total,paginate}) => {
    const pageNumbers = []
console.log(perPage,total)
    for(let i=1; i<=Math.ceil(total / perPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            {
                pageNumbers.map((number) => (<button key={number} onClick={() =>paginate(number)}>{number} </button>))
            }
        </div>
    )
}

export {Pagination}
