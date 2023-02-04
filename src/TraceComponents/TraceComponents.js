// function TraceComponents(props) {
    function TraceComponents({componentsname,title,name}) {
    // console.log(props);
    return(
        <>
            {/* <h1>TraceComponents{props.componentsname}</h1>
            <span>title{props.title}</span>
            <span>Name{props.name}</span> */}

            <h1>TraceComponents{componentsname}</h1>
            <span>title{title}</span>
            <span>Name{name}</span>
        </>
    )

}
export default TraceComponents