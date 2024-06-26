import React from "react";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("parent constructor");
    }

    componentDidMount() {
        console.log("parent componentDidmount");
    }

    render() {
        console.log("parent render");
        return (
            <div className="bg-gray-100 min-h-screen p-8">
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
                    <p className="text-lg text-gray-700 mb-4">
                        Welcome to our food app, a project created with passion and dedication. This app is developed using React, showcasing a modern, responsive, and user-friendly interface to help you find and enjoy delicious food.
                    </p>
                    <p className="text-md text-gray-700 mb-4">
                        My name is Nishant Shaw, and I'm a dedicated developer constantly striving to create impactful web applications, demonstrating my skills and expertise in modern web development.
                    </p>
                    <p className="text-md text-gray-700 mb-6">
                        For any inquiries or further information, feel free to reach out to me at <a href="mailto:nishantshaw51@gmail.com" className="text-blue-500 hover:underline">nishantshaw51@gmail.com</a>.
                    </p>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
                    <div className="space-y-4">
                        <UserClass name={"Akshay Saini (classes)"} />
                        <UserClass name={"Elon Musk (classes)"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;


// import React from "react";
// import UserClass from "./UserClass";
// import { Component } from "react";
// import { render } from "react-dom";
// class About extends Component{
//     constructor(props){
//         super(props);
//         console.log("parent constructor");
//     }
    
//     componentDidMount(){
//         console.log("parent componentDidmount");
//     }
//     render(){
//         console.log("parent render");
//         return(
//            <div>
//             <h1>About</h1>
//             <h1>This is namaste react web series</h1>
    
//             <UserClass name={"akhsay saini (classes)"}/>
//             <UserClass name={"elon musk (classes)"}/>
//            </div> 
//         );
//     }
// }
// export default About;
/*expectations : -parent constructor
-parent render
    akshay constructor
    akshay render
    akshay componentDidMount

    elon constructor
    elon render
    elon componentDidMount
-parent componentDidMount 

reality: 
Parent constructor
parent render
akshay child constructor
akshay child render
elon child constructor
elon child render
<DOM MANIPULATION - IN A SINGLE BATCH>
akshay childcomponentdidmount
elon componentdidmount
parent componentdidmount*/