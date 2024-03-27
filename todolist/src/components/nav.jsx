function TopNav(props) {
    return <div className="topNav" style={{backgroundColor: props.theme.nav}}>
        {props.children}
    </div>
}

export default TopNav;