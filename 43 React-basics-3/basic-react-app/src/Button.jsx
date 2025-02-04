function printHello() {
    console.log("hello")
}

function printBye() {
    console.log("bye")
}

function printOlla(){
    console.log("olla")
}

export default function Button() {
    return (<div><button onClick={printHello}>Click Me</button>
        <p onClick={printBye}>This para is for demo</p>
        <p onMouseOver={printBye}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorum sed, quia quis corrupti neque. Voluptates nihil veritatis placeat laborum assumenda vero eveniet cupiditate, architecto deserunt facere culpa aliquam nobis?
        Eius, quos voluptatibus corrupti, fugit dolorem, rem veniam assumenda explicabo quasi omnis in autem. Odit assumenda dicta suscipit eligendi molestiae rem, beatae sunt? Illo quos explicabo sint quis voluptatem consequatur.
        Quidem asperiores temporibus quasi recusandae fugit tempore vitae quas. Dolor quidem explicabo architecto earum enim minus itaque modi perferendis. Iste voluptatibus perferendis atque laudantium eaque dolore soluta repellat laborum. Necessitatibus?</p>

        <button onDoubleClick={printOlla}>Olla</button>
        </div>)
        

}