const Pagination = ({ contentPerPage, totalContent, paginate }) => {
    console.log(Math.ceil(totalContent / contentPerPage))
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalContent / contentPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <ul className='pagination'>
                {
                    pageNumbers.map((el) => <li className='page' key={el}>
                        <button onClick={() => paginate(el)}>
                            {el}
                        </button>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default Pagination;