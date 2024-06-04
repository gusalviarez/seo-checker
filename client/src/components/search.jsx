import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Search = () => {

  const navigate = useNavigate(); // Get navigation function
  const [data, setData] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setData(e.currentTarget[0].value)
    console.log(data)

    // Clear the input field
    e.currentTarget[0].value = ""

    // Redirect to the desired route using navigate
    navigate('/result'); // Replace '/new-route' with your actual route path

  }

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input className="search-input" type="text" />
      <button className="search-button">Search</button>
    </form>
  );
}

export default Search;
