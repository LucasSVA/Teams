import React from "react";
class TeamInfo extends React.Component {
    render() {
        return (
            <div className="team">
                <ul>
                    <li className="name">{this.props.shortName}</li>
                    <li><img src={this.props.image} alt="logo" className="image" /></li>
                    <li > Stade : {this.props.stade}</li>
                    <li>Address : {this.props.address}</li>
                    <li>Email : {this.props.email}</li>
                    <li>Tel : {this.props.tel}</li>
                    <li>Founded : {this.props.fondation}</li>
                </ul>

            </div>
        )
    }
}

export default TeamInfo