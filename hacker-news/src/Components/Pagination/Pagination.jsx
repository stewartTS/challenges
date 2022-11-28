import "./Pagination.css";

export default function Pagination({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-bar">
      {pages.map((page, index) => {
        return (
          <button
            className={
              currentPage == page
                ? "pagination-button active"
                : "pagination-button"
            }
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
