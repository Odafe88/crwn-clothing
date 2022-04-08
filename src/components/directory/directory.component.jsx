import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/menu-item.component";

import { selectDirectorySelection } from "../../redux/directory/directory.selectors";

import { MenuContainer } from "./directory.styles";

const Directory = ({ sections }) => (
    <MenuContainer>
        {sections.map(({ id, ...otherSectionProps }) => (
            <MenuItem key={id} {...otherSectionProps} />
        ))}
    </MenuContainer>
)




const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySelection
})


export default connect(mapStateToProps)(Directory);
