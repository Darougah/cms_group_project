
const FilterBar = () => (
  <div className="filter-bar">
    <button>Sweaters</button>
    <button>Tops</button>
    <button>Jackets</button>
    <button>Hats</button>
    <select>
      <option>Popular</option>
      <option>Newest</option>
      <option>Price: High to Low</option>
      <option>Price: Low to High</option>
    </select>
  </div>
);

export default FilterBar;
