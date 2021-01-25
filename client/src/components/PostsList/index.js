import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { GET_FAVORITE } from "../../utils//actions";
import API from "../../utils/API";
import { Card, Button } from "react-bootstrap";

function PostsList() {
  const [state, dispatch] = useStoreContext();

  const getFavorites = () => {
    console.log("get favs");
    API.getAllBooks({}).then(({ data }) =>
      dispatch({
        type: GET_FAVORITE,
        data: data,
      })
    );
  };
  useEffect(getFavorites, []);

  const handleSave = (book) => {
    API.saveBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors[0],
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink,
      etag: book.etag,
    })
      .then(() => getFavorites())
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>All Searched Books</h1>

      {state.searchResults.length ? (
        <>
          {state.searchResults.map((item) => (
            <div
              key={item.etag}
              className="d-flex flex-wrap mb-5 border border-success"
            >
              <Card style={{ width: "17rem" }} className="border-end-success">
                <Card.Title className="mb-4 ml-2">
                  {item.volumeInfo.title} by {item.volumeInfo.authors}
                </Card.Title>
                <Card.Img
                  style={{ width: "10rem" }}
                  variant="top"
                  src={item.volumeInfo.imageLinks.thumbnail}
                  className="ml-5 mb-2"
                />
              </Card>
              <Card.Body style={{ width: "18rem" }}>
                <div className="float-right">
                  <Button
                    href={item.volumeInfo.infoLink}
                    target="_blank"
                    variant="primary"
                    style={{ marginRight: "10px" }}
                  >
                    View
                  </Button>
                  <Button variant="primary" onClick={() => handleSave(item)}>
                    Save
                  </Button>
                  <br></br>
                </div>
                <Card.Text className="mt-5">
                  {item.volumeInfo.description || "No description Available"}
                </Card.Text>
              </Card.Body>
            </div>
          ))}
        </>
      ) : (
        <h3>You haven't searched for books as yet</h3>
      )}
    </div>
  );
}

export default PostsList;
