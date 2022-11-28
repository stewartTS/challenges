import "./FilterButtons.css";

export default function FilterButtons({ setType, currentType }) {
  const buttonTypes = ["story", "job", "poll"];

  const prettifyName = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="filter-bar">
      {buttonTypes.map((type) => {
        return (
          <button
            className={
              currentType == type ? "filter-buttons active" : "filter-buttons"
            }
            key={type}
            onClick={() => setType(type)}
          >
            {prettifyName(type)}
          </button>
        );
      })}
      <button
        className={
          currentType == null ? "filter-buttons active" : "filter-buttons"
        }
        onClick={() => setType(null)}
      >
        Show All
      </button>
    </div>
  );
}
