import axios from "axios";

const API ={

  searchNYT : function(searchTerm, startYear, endYear) {
    return axios.get("http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=7abc40b58b3a472bbe3ae53b1146d46c &q=" + searchTerm+ "&begin_date=" + startYear + "&end_date=" + endYear );
  },


  // Gets all articles
  getArticles: function() {
    return axios.get("/");
  },
  
  
  removeArticles: function(id) {
    return axios.delete("/" + id);
  },
  // Saves a artcile to the database
  getSavedArticles: function(articleData) {
    return axios.post("/", articleData);
  }
  };



  export default API;