import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import SHOP_DATA from "../../shop.data";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionsItems }) => (
          <MenuItem key={id} {...sectionsItems} />
        ))}
      </div>
    );
  }
}

export default Directory;
