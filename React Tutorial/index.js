
import React from "react"
// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"))
// ReactDOM.render(

//     <ul>
//         <li>This is the first element</li>
//         <li>This is the second unordered listr element</li>
//     </ul>,
//     document.getElementById("root")
// )

// function Item() {
//     return (
//         <div className="list-container">
//             <p className="list-header">This are the list of items in my bag for everyday work</p>
//             <ul className="lists>
//                 <li>Laptop</li>
//                 <li>Laptop charger</li>
//                 <li>HDMI Converter</li>
//                 <li>Wired Mouse</li>
//                 <li>Earpiece and lip bam</li>
//             </ul>
//         </div>
//     )
// }

// Create a navbar in JSX:
//     - Use the semantic `nav` element as the parent wrapper
//     - Have an h1 element with the brand name of your "website"
//     - Insert an unordered list for the other nav elements
//         - Inside the `ul`, have three `li`s for "Pricing",
//         "About", and "Contact"
//     - Don't worry about styling yet - it'll just be plain-looking HTML for now


const nav = (
    <nav>
        <h1> Creative.Aquila</h1>
        
        <ul> 
            <li>Pricing </li>
            <li> About </li>
            <li>Contact </li>
        </ul>
    </nav>
)

ReactDOM.render(nav, document.getElementById("root"))