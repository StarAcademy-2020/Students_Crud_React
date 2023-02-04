import { Component } from "react";

export default class Content extends Component{
    
    render()
    {
        return(
            <>
                <h1>Content from Content components:::{this.props.name}{this.props.value}</h1>
            </>
        )
    }
}