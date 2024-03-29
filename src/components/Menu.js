import React from "react";
import MenuItem from "./MenuItem";
import { Grid, Row } from "react-bootstrap";

class Menu extends React.Component {
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

    return (
      <Collapse isOpened={!this.props.menuHidden}>
        <Grid className="menu">
          <Row className="show-grid">
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
                  isChanging={this.props.isChanging} 
                  activeIndex={this.props.activeIndex}
                  handleClick={this.props.handleClick}
                />
              ))}
          </Row>
        </Grid>
      </Collapse>
    );
  }
}

export default Menu;
