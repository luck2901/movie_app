import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const{location, histoty} = this.props;
        if(location.state ===undefined){
            history.pushState("/");
        }
    }
    render(){
        const{location} = this.props;
        if(location.state){
            return <span>{location.state.title}</span>;
        }
        else{
            return null;
        }
    }
}

export default Detail;