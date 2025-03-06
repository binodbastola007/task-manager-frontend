const FilterBar = ({ filter, setFilter }) => {
    return (
      <div className="p-4 flex gap-2">
        <button onClick={() => setFilter("all")} className="border p-2">
          All
        </button>
        <button onClick={() => setFilter("completed")} className="border p-2">
          Completed
        </button>
        <button onClick={() => setFilter("pending")} className="border p-2">
          Pending
        </button>
      </div>
    );
  };
  
  export default FilterBar;
  