import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Search = (props) => {
  const { hymn, setHymn } = props;
  const [hymnData, setHymnData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://hymnary.org/api/scripture?reference=${hymn.book}+${hymn.chapter}`
      )
      .then((res) => {
        let data = Object.values(res.data);

        setHymnData(data);
        setLoaded(true);
        console.log(hymnData);
      })
      .catch((err) => console.error(err));
  };
  const onChangeHandler = (e) => {
    setHymn({
      ...hymn,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
  };

  if (loaded == false) {
    //in case i want to take away the images later
  }
  return (
    <div className="">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h3>Enter a scripture:</h3>
          <label>Book </label>
          <br />
          <input type="text" name="book" onChange={onChangeHandler} />
          <br />
          <br />
          <label>Chapter</label>
          <br />
          <input type="text" name="chapter" onChange={onChangeHandler} />
          <br />
          <br />
          <button type="submit" className="btn">
            Search
          </button>
        </form>
        {/* <br /> */}
        <div className="imgDiv">
          <div>
            <img
              src="https://www.monasteryicons.com/images/popup/baptism-of-christ-icon-446.jpg"
              alt=""
              className="Image"
            />
            <p>
              "you have been born again, not of perishable seed but of
              imperishable, through the living and abiding word of God"
            </p>
          </div>
          <div>
            <img
              src="https://iconreader.files.wordpress.com/2011/03/crucifixion2.jpg"
              alt=""
              className="Image"
            />
            <p>
              "he was pierced for our transgressions; he was crushed for our
              iniquities; upon him was the chastisement that brought us peace,
              and with his wounds we are healed."
            </p>
          </div>
          <div>
            <img
              src="https://www.monasteryicons.com/images/popup/mystical-supper-icon-450.jpg"
              alt=""
              className="Image"
            />
            <p>
              "put away all filthiness and rampant wickedness and receive with
              meekness the implanted word, which is able to save your souls."
            </p>
          </div>
        </div>
        <br />
      </div>

      {hymnData.map((item, key) => {
        if (loaded == true)
          return (
            <div className="hymns">
              <br />
              {"title" in item ? (
                <p>Hymn Title: {item.title}</p>
              ) : (
                <p> Title Unknown </p>
              )}
              <br />
              <p>Scriptures Referenced: {item["scripture references"]}</p>
              <br />
              {"author" in item ? (
                <p>Written by: {item.author}</p>
              ) : (
                <p> Author Unknown </p>
              )}
              <br />
              <p>
                Sing the word of God:{" "}
                <a className="Link" href={item["text link"]}>
                  {" "}
                  {item["text link"]}
                </a>
              </p>
            </div>
          );
      })}
    </div>
  );
};
export default Search;
