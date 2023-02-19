import React from "react";

const Layout = ({children} : {children: JSX.Element | JSX.Element[]}) => {
    return (
        <main className="relative flex flex-col items-center justify-center pb-40">{children}</main>
    )
}

export default Layout;