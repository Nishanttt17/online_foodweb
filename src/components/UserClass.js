import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userinfo:{
                name: "Dummy name",
                location:"default",
            },
        };   
        console.log(this.props.name+"child constructor");
    }
    async componentDidMount(){
        console.log(this.props.name+"child componentDidmount");
        const data=await fetch("https://api.github.com/users/Nishanttt17");
        const json=await data.json();
        
        this.setState({
            userinfo:json,
        })
        
        
        console.log(json);
    }
    componentDidUpdate(){
        console.log("component did update");
    }
    componentWillUnmount(){
        console.log("component will unmount")
    }
    render(){
        console.log(this.props.name+"child render");
        const {name,location}=this.state.userinfo;
        return (
            <div className="user-card">
        
        <h2>Name: {name}</h2>
        <h3>Location : {location}</h3>
        <h4>contact: nishanttt.s___</h4>


    </div>
        );
    }
}
export default UserClass;
/*
    -------MOUNTING---------
    CONSTRUCTOR(DUMMY)
    RENDER(DUMMY)
        <HTML DUMMY>
    COMPONENT DID MOUNT
        <API CALLS>
        <this.setState> ->state varibale is updated
    ------UPDATE----
        render(api data)
        <HTML (new api data)
        componentdidupdate
*/