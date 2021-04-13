
export default  ({name})=>{
    if(name==='nitesh'){
        return new Error("Wrong name");
    }
    return (
        <h1> Student name = {name}</h1>
    )
}