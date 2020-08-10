import React from 'react';

class HogCard extends React.Component{
    state = {
        details: false,
        hidden: false
    }

    detailHandler = () => {
        this.setState({details: !this.state.details})
    }

    hideHandler = () => {
        this.setState({hidden: !this.state.hidden})
    }

    render(){
        let string = this.props.hog.name.toLowerCase().split(' ').join('_')
        let pigImg = require(`../hog-imgs/${string}.jpg`)
        return(
            <div className="ui eight wide column">
                <button onClick={this.hideHandler}>{this.state.hidden ? "Show" : "Hide"}</button>
                    {this.state.hidden ?
                        null
                        :
                        <div className="card" onClick={this.detailHandler}>
                            <div className="image"><img src={pigImg} alt={this.props.hog.name}/></div>
                            <div className="content">
                                <div className="header">{this.props.hog.name}</div>
                        {this.state.details ?
                            <div className="description">
                                <br/>
                                <p>
                                Specialty: {this.props.hog.specialty} <br/>
                                Weight: {this.props.hog.weight} <br/>
                                Greased: {this.props.hog.greased ? "True" : "False"} <br/>
                                Highest Medal Achieved: {this.props.hog['highest medal achieved']}
                                </p>
                            </div> : null
                        } </div>
                        </div>
                    }
            </div>
        )
    }
}

export default HogCard;