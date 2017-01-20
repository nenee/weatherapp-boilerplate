import { h, Component } from 'preact';
import { Router } from 'preact-router';

// import required Components from 'components/'
import Iphone from './iphone';
import Ipad from './ipad';

export default class App extends Component {
//var App = React.createClass({

	// url handler
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	// once the components are loaded, checks if the url bar has a path with "ipad" in it, if so sets state of tablet to be true
    componentDidMount() {
    	const urlBar = window.location.href;
    	if(urlBar.includes("ipad")) {
    		this.setState({
    			"isTablet": true
    		});
    	} else {
    		this.setState({
    			"isTablet": false
    		});
    	}
	}

	/*
		A render method to display the required Component on screen (iPhone or iPad) : selected by checking component's isTablet state
	*/
   	render(){
   		if(this.state.isTablet){
   			return (
			<div id="app">
				<Ipad/ >
	   		</div>   				
   			);
   		} 
   		else {
   			return (
				<div id="app">
					<Iphone/>
	   			</div>
	   		);
   		}
	}
}