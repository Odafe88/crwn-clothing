import React from 'react';

import { ButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
    <ButtonContainer {...props}>
        {children}
    </ButtonContainer>
)

export default CustomButton;