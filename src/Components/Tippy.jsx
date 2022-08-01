import React from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

const TippyWrapper = ({ children, value }) => {
    return (
        <Tippy
            content={value}
            placement='top'
            animation='scale-subtle'
            theme='material'
            arrow={true}
            duration={200}
            delay={[10, 0]}
            distance={8}>
            {children}
        </Tippy>
    );
};

export default TippyWrapper;
