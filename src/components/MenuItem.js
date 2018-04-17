import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Col, Image, Thumbnail } from "react-bootstrap";
import RecipeModal from "./RecipeModal";
import RestaurantModal from "./RestaurantModal";

class MenuItem extends React.Component {
  state = {
    className: "menu-items-animation",
    // meal1: this.props.recipeData[0],
    // meal2: this.props.recipeData[1],
    // meal3: this.props.recipeData[2],
    // meal4: this.props.recipeData[3],
    // meal5: this.props.recipeData[4],
    // meal6: this.props.recipeData[5]
  };

  changeClass = () => {
    this.setState({ className: "menu-items-animation" });
  };

  componentWillMount() {
    console.log("MOUNTING ITEM");
  }

  componentDidMount() {
    console.log("ITEM MOUNTED!");
  }

  componentDidUpdate() {
    console.log(`Updated item #${this.props.index}`);
    if (this.state.className === "fancy-flash-class-in") {
      setTimeout(this.changeClass, 500);
    }
  }

  componentWillUnmount() {
    console.log("ITEM KILLED!");
  }

  render() {
    const recipeOrRestaurantModal =
      this.props.recipeData["@type"] === "Recipe" ? (
        <RecipeModal recipeData={this.props.recipeData} />
      ) : (
        <RestaurantModal recipeData={this.props.recipeData} />
      );

    let item = (
      <div className={this.state.className}>
        <Col xs={12} sm={12} md={2}>
          <Thumbnail className="menu-item-thumbnail">
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
              {recipeOrRestaurantModal}
              <button
                className="btn btn-warning"
                onClick={() => this.props.changeRecipe(this.props.index)}
              >
                Remove
              </button>
            </div>
          </Thumbnail>
        </Col>{" "}
      </div>
    );
    return (
      <ReactCSSTransitionGroup
        transitionName="menu-items-animation"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        {item}
      </ReactCSSTransitionGroup>
    );
  }
}

export default MenuItem;
