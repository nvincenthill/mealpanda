import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Col, Image, Thumbnail } from "react-bootstrap";
import RecipeModal from "./RecipeModal";
import RestaurantModal from "./RestaurantModal";

class MenuItem extends React.PureComponent {
  state = {
    isChanging: false,
    activeIndex: null
  };

  handleClick = () => {
    this.setState({ activeIndex: this.props.index });
    this.setState({ isChanging: true });
    setTimeout(this.changeClass, 1500);
  };

  changeClass = () => {
    console.log("reverting to static");
    this.props.changeRecipe(this.props.index)
    this.setState({ isChanging: false });
    this.setState({ activeIndex: null });
  };

  componentWillMount() {
    console.log("MOUNTING ITEM");
  }

  componentDidMount() {
    console.log("ITEM MOUNTED!");
  }

  componentDidUpdate() {}

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
      <Col id="menu-item" xs={12} sm={12} md={2}>
        <Thumbnail className="menu-item-thumbnail">
          <div id="single-menu-item">
            <h2 className="day">{this.props.week}</h2>
            <div
              id={
                this.state.isChanging
                  ? `menu-item-${this.props.index}-animation`
                  : "menu-items-static"
              }
            >
              <Image
                src={`/images/${this.props.recipeData.image}`}
                alt={this.props.recipeData.image}
                className="img"
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
                onClick={this.handleClick}
              >
                Change
              </button>
            </div>
          </div>
        </Thumbnail>
      </Col>
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
