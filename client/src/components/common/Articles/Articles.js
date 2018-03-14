import React, { Component } from "react";
import Footer from "./Footer";
import Search from "./Search";
import Results from "./Results";
import Saved from "./Saved";
import API from "../../../utils/API";

import { Route, Link } from "react-router-dom";

class Articles extends Component {
	constructor(props){
		super(props);
	
		//init states
		this.state = {
		  searchTerm: "",
	      limit: "5",
	      startYear: "",
	      endYear: "",
	      searchResults: [],
	      savedArticles: []
		};

		this.clearSearch = this.clearSearch.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount = () => {
		this.getSavedArticles();
	}

	saveArticle = (index) => {
		
	    API.saveArticle(this.state.searchResults[index]).then((response) => {
	      this.getArticles();
	    });
	}

	getSavedArticles = () => {
        API.getSavedArticles().then((response) => {
            if (response.data !== this.state.savedArticles) {
                this.setState({ savedArticles: response.data });
            }
        });
    }

    getArticles = () => {
	    API.getArticles().then((response) => {
	      this.setState({ savedArticles: response.data });
	    });
	}

   	removeArticle = (id) => {
	    API.removeArticle(id).then((response) => {
	      this.getSavedArticles();
	    });
	}


	  
		handleChange = (event)=>{
			let name = event.target.name;
			let value = event.target.value;
			this.setState({
				[name]: value

			})

		}
		

	  clearSearch() {
	    var newState = {
	      searchTerm: "",
	      limit: "5",
	      startYear: "",
	      endYear: "",
	      searchResults: []
	    };
	    this.setState(newState);
	  }

	  searchNYT = (searchTerm, startYear, endYear)  => {

	    API.searchNYT(searchTerm, startYear, endYear).then((response) => {

                var returns = [];
                for (var i = 0; i < response.data.response.docs.length; ++i)
                    returns.push(response.data.response.docs[i]);

                this.setState({searchResults : returns});
            });
	  }

	  handleFormSubmit = event => {
	  	event.preventDefault();
	  	this.searchNYT(this.state.searchTerm, this.state.startYear, this.state.endYear);
	  }

	render() {
		return (
			<div className="container">
			    <div className="jumbotron">
			      <h1 className="text-center"><strong><i className="fa fa-newspaper-o" aria-hidden="true" /> New York Times Search</strong></h1>
			    </div>
			    <Search 
				    	searchTerm = {this.state.searchTerm}
				    	limit = "5"
				    	startYear = {this.state.startYear}
							endYear = {this.state.endYear}
							handleChange  = {this.handleChange}
				    	handleFormSubmit={this.handleFormSubmit}
				    	clearSearch={this.clearSearch} />
			    <Route render={()=><Results 
			    	passedResults={this.state.searchResults}
			    	saveArticle={this.saveArticle} />} />
			    <Saved 
			    	savedArticles={this.state.savedArticles}
			    	removeArticle={this.removeArticle} />

			<Footer />
			</div> // End of container
		);
	}

}


export default Articles;