import React, { useState, FormEvent } from 'react';

interface Props {
  onFormSubmit: (term: string) => Promise<void>;
}

const SearchBar = ({ onFormSubmit }: Props) => {
  const [term, setTerm] = useState<string>('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Search for a video</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
