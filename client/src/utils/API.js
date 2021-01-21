import axios from "axios";

export default {
  getAllBooks: function () {
    return axios.get("/api/books");
  },

  deleteBook: (id) => axios.delete("api/books/" + id),
  saveBook: function (postData) {
    return axios.post("/api/books", postData);
  },
};
