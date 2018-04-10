import React from "react";
import PropTypes from "prop-types";

class MenuItems extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number
    }),
    addToOrder: PropTypes.func
  };

  render() {
    // const { image, name, price, desc, status } = this.props.details;
    // const isAvailable = status === "available";
    return (
      <div class="thumbnail">
                <h2 class="day">Monday</h2>
                <img id="dinnerimg1" class="image" src="" alt="...">
                <div class="caption">
                    <h3 id="dinnername1" class = "name">Monday</h3>
                    <p id="dinnerdef1" class="definitions"> </p>
                    <p><a href="#" class="btn btn-default" role="button" id="modal1" data-toggle="modal" data-target="#recipeModal">Instructions</a>
                        <a href="#" class="btn btn-warning" role="button" id="delete1" onClick=removeRecipe()>Remove</a>
                    </p>
                  </div>
                  </div>
      // <li className="menu-fish">
        // <img src={image} alt={name} />
        // <h3 className="fish-name">
        //   {name}
        //   <span className="price">{price}</span>
        // </h3>
        // <p>{desc}</p>
        // <button
          // disabled={!isAvailable}
          // onClick={() => this.props.addToOrder(this.props.index)}
        // >
          // {isAvailable ? "Add To Order" : "Sold Out!"}
        // </button>
      // </li>
    )
  }
}

export default MenuItems;
