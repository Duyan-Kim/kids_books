import React, { useState } from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

const SearchItem = () => {
  const [input, setInput] = useState("");
  const btn = () => {
    console.log(input);
  };

  return (
    <div className="inputGroupDiv">
      <InputGroup>
        <FormControl
          placeholder="책검색"
          className="FormControl"
          name="query"
          onInput={(e) => setInput(e.target.value)}
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={() => btn()}>
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

SearchItem.propTypes = {
  value: PropTypes.string,
};

export default SearchItem;
