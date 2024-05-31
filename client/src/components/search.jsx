import { useState } from 'react';

const Search = () => {

  const [data, setData] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setData(e.currentTarget[0].value)
    console.log(data)

    // Clear the input field
    e.currentTarget[0].value = ""
  }

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input className="search-input" type="text" />
      <button className="search-button">Search</button>
    </form>
  );
}

export default Search;
