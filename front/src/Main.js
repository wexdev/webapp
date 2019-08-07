import React from 'react';

class Main extends React.Component {
    render() {

	const getData= () => {
	    document.getElementById("inData").innerHTML = "hostname:" + window.location.hostname;
	    
	    //var mySocket = new WebSocket("ws://localhost:8848");
	    //var mySocket = new WebSocket("ws://"+ window.location.hostname + ":8848");
	    var mySocket = new WebSocket("ws://"+ "127.0.1.1" + ":8848");
	    
	    mySocket.onmessage = (event) => {
		document.getElementById("inData").innerHTML = event.data;		
	    }
	};
	
	return (
		<p>	  
		WEX Fab
		<button onClick={()=>{getData()}}> Click me </button>
		<p>Received data = <span id="inData"></span></p>
		</p>
		
	);
    }
}

export default Main;
