import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FAVORITE, GET_FAVORITE } from "../utils/actions";
import API from "../utils/API";
import { Card, Button } from "react-bootstrap";

const FavoritesList = () => {
  const [state, dispatch] = useStoreContext();

  const getFavorites = () => {
    API.getAllBooks({}).then(({ data }) =>
      dispatch({
        type: GET_FAVORITE,
        data: data,
      })
    );
  };

  const removeFromFavorites = (id) => {
    API.deleteBook(id).then(({ data }) =>
      dispatch({
        type: REMOVE_FAVORITE,
        data: { data, state },
      })
    );
  };

  useEffect(() => {
    getFavorites();
  }, [state.savedBooks]);

  return (
    <div className="col-sm-12">
      <h1 className="text-center">Here's All of Your Favorite Books</h1>
      {state.savedBooks.length ? (
        <div>
          {state.savedBooks.map((item) => (
            <div className="d-flex flex-wrap mb-5 border border-success">
              <Card
                key={item._id}
                style={{ width: "17rem" }}
                className="border-end-success"
              >
                <Card.Title className="mb-4 ml-2">
                  {item.title} by {item.authors}
                </Card.Title>
                <Card.Img
                  style={{ width: "10rem" }}
                  variant="top"
                  src={item.image}
                  className="ml-5 mb-2"
                />
              </Card>
              <Card.Body style={{ width: "18rem" }}>
                <div className="float-right">
                  <Button
                    href={item.link}
                    target="_blank"
                    variant="primary"
                    style={{ marginRight: "10px" }}
                  >
                    View
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => removeFromFavorites(item._id)}
                  >
                    Delete
                  </Button>
                  <br></br>
                </div>
                <Card.Text className="mt-5">{item.description}</Card.Text>
              </Card.Body>
            </div>
          ))}
        </div>
      ) : (
        <h3>You haven't added any favorites yet!</h3>
      )}
      <div className="mt-5">
        <Link to="/">Back to home</Link>
      </div>
    </div>
  );
};

export default FavoritesList;
