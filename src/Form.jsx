function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was Submitted");
}

export default function form(){
    return(
    <form>
    <input placeholder="write somthing"/>
    <button onClick={handleFormSubmit}>Submit</button>
    </form>
    )
}