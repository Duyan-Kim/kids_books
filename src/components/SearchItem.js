import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";

const SearchItem = () => {
  return (
    <div className="inputGroupDiv">
      <InputGroup>
        <FormControl placeholder="책검색" className="FormControl" />
        <InputGroup.Append>
          <Button variant="outline-secondary">Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

SearchItem.propTypes = {
  value: PropTypes.string,
};

export default SearchItem;
