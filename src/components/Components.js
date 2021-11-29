import React from 'react';

// components below
import TestComponent from '@/components/TestComponent';

const Components = {
    "TestComponent": TestComponent,
}

export default (component) => {
    if(typeof Components[component?.name] !== "undefined") {
        return React.createElement(
            Components[component?.name],
            {
                key: component?.id,
                ...component.props
            }
        )
    }
    return undefined
}
