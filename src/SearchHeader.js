import { useState } from 'react';

function SearchHeader({ search }) {

  const [valueInput, setValue] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // debugger;
    search(valueInput);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (

    <div className="searchDiv">
      <form className='seacrhFrom' onSubmit={handleFormSubmit}>
        <label className="seacrhTitle" >Ne Arıyorsunuz?</label>
        <input className="seacrhInput" value={valueInput} onChange={handleChange} />
      </form>
    </div>

  );
}

export default SearchHeader;