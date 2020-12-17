import React from "react";
import StarRating from "./StarRating";
import Col from "react-bootstrap/Col";

const SearchResult = ({ url, img, title, author, summary }) => {
  return (
    <Col sm={12} className="layout2" id="search-result-layout">
      <div className="search-result-div">
        <a href={url}>
          <img src={img} alt={title} />
          <h5>{title}</h5>
          <p>{author}</p>
        </a>
        <StarRating />
        <p className="summary">
          {summary}
          어둠의 마왕 볼드모트에게 부모를 잃고 홀로 살아남은 아이, 해리는 안전을
          위해 마법사가 아닌 사람인 ‘머글’ 페투니아 이모와 버논 이모부 손에
          길러지며 불우한 어린 시절을 보낸다. 열한 번째 생일날, 해그리드를 통해
          자신이 마법사라는 사실을 알게 된 해리는 호그와트 마법학교에 입학해
          헤르미온느 그레인저, 론 위즐리라는 친구들과 함께 영생을 주는 마법사의
          돌을 찾는 엄청난 모험을 시작하게 되는데…….
        </p>
      </div>
    </Col>
  );
};

export default SearchResult;
