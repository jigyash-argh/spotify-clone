import collapseContext from "./collapseContex";
const collapseState=(props)=>{
return(
    <collapseContext.Provider>
    {props.children}
    </collapseContext.Provider>
)
}