import React from "react";
import { Col, Image, Thumbnail } from "react-bootstrap";
import RecipeModal from "./RecipeModal";
import RestaurantModal from "./RestaurantModal";

class MenuItem extends React.PureComponent {
  state = {
  };
  render() {
    const recipeOrRestaurantModal =
      this.props.recipeData["@type"] === "Recipe" ? (
        <RecipeModal recipeData={this.props.recipeData} />
      ) : (
        <RestaurantModal recipeData={this.props.recipeData} />
      );

    let item = (
      <Col id="menu-item" xs={12} sm={12} md={2}>
        <Thumbnail className="menu-item-thumbnail">
          <div id="single-menu-item">
            <h2 className="day">{this.props.week}</h2>
            <div
              id={
                (this.props.activeIndex === this.props.index)
                  ? `menu-item-${this.props.index}-animation`
                  : "menu-items-static"
              }
            >
              <Image
                src={`/images/${this.props.recipeData.image}`}
                alt={this.props.recipeData.image}
                className="menu-item-image"
                rounded
              />
              <h3 className="name">{this.props.recipeData.name}</h3>
              <p className="definitions">
                {this.props.recipeData.description}
              </p>{" "}
              {recipeOrRestaurantModal}
              <div className="divider" />
              <button
                id="remove-recipe-button"
                className="btn btn-warning"
                onClick={() => this.props.handleClick(this.props.index)}
              >
                Change
              </button>
            </div>
          </div>
        </Thumbnail>
      </Col>
    );
    return (
        {item}
    );
  }
}

export default MenuItem;
