import React from "react";
import GroceryListModal from "./GroceryListModal";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {
  // Popover,
  // Tooltip,
  Button
  // Modal
  // OverlayTrigger
  // Well
} from "react-bootstrap";

class Header extends React.Component {
  componentWillMount() {
    // console.log("MOUNTING HEADER");
  }

  componentDidMount() {
    // console.log("HEADER MOUNTED!")
  }

  render() {
    const generateButton = (
      <ReactCSSTransitionGroup
        transitionName="generate-button-animation"
        transitionAppear={true}
        transitionAppearTimeout={1500}
        transitionEnterTimeout={1500}
        transitionLeaveTimeout={1500}
      >
        <div className="generate-button-container">
          <p>
            <Button
              onClick={this.props.loadMenu}
              type="submit"
              className="btn-success btn-block"
              bsSize="large"
            >
              {" "}
              Let the panda decide...{" "}
            </Button>
          </p>
        </div>
      </ReactCSSTransitionGroup>
    );

    // const HideGroceryListButton = (
    //   <p>
    //     <button type="submit" className="btn btn-hide btn-lg" id="hbutton" onClick={this.props.hideGroceryList}>
    //       {" "}
    //       Hide Grocery List{" "}
    //     </button>
    //   </p>
    // );

    return (
      <div className="jumbotron">
        
          <ReactCSSTransitionGroup
            transitionName="title-animation"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
            <h1 id="maintitle">
              Hey Mel ... <br />What do you want for dinner this week?
            </h1>
          </ReactCSSTransitionGroup>
          <div className="generate-button-container">
          {this.props.generateButtonHidden ? null : generateButton}
          </div>
          <div>
            {this.props.groceryButtonHidden ? null : (
              <GroceryListModal randomRecipes={this.props.randomRecipes} />
            )}
          
        </div>
      </div>
    );
  }
}

export default Header;
