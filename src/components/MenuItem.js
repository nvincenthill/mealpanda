import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Col, Image, Thumbnail } from "react-bootstrap";
import RecipeModal from "./RecipeModal";
import RestaurantModal from "./RestaurantModal";

class MenuItem extends React.Component {
  render() {
    const recipeOrRestaurantModal =
      this.props.recipeData["@type"] === "Recipe"
        ? <RecipeModal recipeData={this.props.recipeData} />
        : <RestaurantModal recipeData={this.props.recipeData} />;
    return (
      <TransitionGroup component="div">
        <CSSTransition
          classNames="item"
          key={1}
          timeout={{ enter: 5000, exit: 5000 }}
        >
          <Col xs={12} sm={12} md={2}>
            <Thumbnail className="menu-item">
              <h2 className="day">{this.props.week}</h2>
              <div className="caption">
                <Image
                  src={`/images/${this.props.recipeData.image}`}
                  alt={this.props.recipeData.image}
                  className="img"
                  rounded
                />
                <h3 id="dinnername1" className="name">
                  {this.props.recipeData.name}
                </h3>
                <p id="dinnerdef1" className="definitions">
                  {this.props.recipeData.description}
                </p>{" "}
                <button
                  className="btn btn-warning"
                  onClick={() => this.props.changeRecipe(this.props.index)}
                >
                  Remove
                </button>
                <br />
                {recipeOrRestaurantModal}
              </div>
            </Thumbnail>
          </Col>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default MenuItem;
