function printHello(event){
    console.log("Hello!");
    console.log(event);
}

function paragraph(){
    console.log("hello,I am a paragraph!");
}

function handleHover(){
    console.log("Hover")
}

function handleDbClick(){
    console.log("you double clicked");
}

export default function Button(){
    return (
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onClick={paragraph}>This is a Paragraph!</p>
            <p onMouseOver={handleHover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur perspiciatis repellat? Repellat distinctio suscipit, sapiente, labore odit tempore placeat vero ad commodi qui provident voluptates quis nemo nesciunt aliquam.</p>
            <button onDoubleClick={handleDbClick}>Double Click me</button>
        </div>
    )
}