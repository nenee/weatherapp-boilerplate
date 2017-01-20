// import react 
import { h, render, Component } from 'preact';
import style from './style';
import $ from 'jquery';

export default class Ipad extends Component {
//var Ipad = React.createClass({

    // once the component is loaded, makes an ajax call to the wunderground API
    componentDidMount() {
    	// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
    	var url = "http://api.wunderground.com/api/c78f1a13d2ca6971/conditions/q/UK/London.json";
    	$.ajax({
    		url: url,
    		dataType: "jsonp",
    		success : this.parseResponse,
    		error: console.log("something went wrong with the API call")
    	})
    }
    /*
    	A render method to display HTML elements on the screen
    */
    render() {
        return (
            <div class={ style.container }>
            	<div class={ style.header }>
 	               	<div class={ style.city }>{ this.state.currentCity }</div>
 	               	<div class={ style.country }>{ this.state.currentCountry }</div>
    	            <div class={ style.conditions }>{ this.state.cond }</div>
        	        <span class={ style.temperature }>{ this.state.temp }</span>
        	    </div>
        	    <div class={ style.details }>
        	    </div>
            </div>
        );
    }

    /*
    	Method for parsing JSON response from the API
    */
    parseResponse = (parsed_json) => {
        var city = parsed_json['current_observation']['display_location']['city'];
        var country = parsed_json['current_observation']['display_location']['country'];
        var temp_c = parsed_json['current_observation']['temp_c'];
        var conditions = parsed_json['current_observation']['weather'];
        
        // set the state fields so they could be rendered later on
        this.setState({
        	currentCity: city,
        	currentCountry: country,
            temp: temp_c,
            cond : conditions
        });      
    }
}