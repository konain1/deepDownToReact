import React, { memo } from 'react';

export const Header = memo(function Header(props) {
    return (
        <>
            <p>{props.title}</p>
        </>
    );
});

// export default Header
