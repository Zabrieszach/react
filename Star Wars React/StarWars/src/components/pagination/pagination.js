import React from 'react'; //importando a biblioteca e criando um objeto react

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className ="paginas">
      <ul className="pagination text-dark">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick = { () => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination;