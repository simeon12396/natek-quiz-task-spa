const MainLayout = (props) => {
    const { children } = props;

    return(
        <>
            <h1>header</h1>
            {children}
            <h1>footer</h1>
        </>
    )
};

export default MainLayout;