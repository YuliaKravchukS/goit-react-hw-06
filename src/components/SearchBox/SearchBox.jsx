import css from './SearchBox.module.css'
const SearchBox = ({value, handleInput}) => {
  
    return (
        <label className={css.labelSearch}>
            <span>Find contacts by name</span>
            <input type="text"
                value={value}
                onChange={handleInput}
                className={css.inputSearch}
         placeholder='Enter a name to search for'   />   
      </label>
    
  )
}

export default SearchBox