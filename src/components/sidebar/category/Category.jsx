
const Category = () => {
  return (
    <div>
     <h2><b>Filters</b></h2>   
    <h2>Category</h2>
      <label name="Mens">
      <input type="radio" name="test"/>
      <span className="checkmark">All</span>
      </label><br />
      <label name="Mens">
      <input type="radio" name="test"/>
      <span className="checkmark">Men</span>
      </label><br />
      <label name="Mens">
      <input type="radio" name="test"/>
      <span className="checkmark">Women</span>
      </label><br />
      <label name="Mens">
      <input type="radio" name="test"/>
      <span className="checkmark">Jewellery</span>
      </label><br />
      <label name="Mens">
      <input type="radio" name="test"/>
      <span className="checkmark">Electronics</span>
      </label>
    </div>
  )
}

export default Category