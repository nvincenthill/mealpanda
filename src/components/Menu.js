import React from "react";
import MenuItem from "./MenuItem";
import { Grid, Row } from "react-bootstrap";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class Menu extends React.Component {
  componentWillMount() {
    // console.log("MOUNTING MENU");
  }

  componentDidMount() {
    // console.log("MENU MOUNTED!");
  }

  render() {
    const week = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];

    if (this.props.menuHidden) {
      return null;
    }

    return (
      <React.Fragment>
        <Grid className="menu">
          <Row className="show-grid">
            <ReactCSSTransitionGroup
              transitionName="menu-item-animation"
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              {Object.keys(this.props.recipeData).map(key => (
                <MenuItem
                  key={key}
                  index={key}
                  week={week[key]}
                  recipeData={this.props.recipeData[key]}
                  changeRecipe={this.props.changeRecipe}
                  handleCloseInformationModal={
                    this.props.handleCloseInformationModal
                  }
                  handleShowInformationModal={
                    this.props.handleShowInformationModal
                  }
                />
              ))}
            </ReactCSSTransitionGroup>
          </Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Menu;
