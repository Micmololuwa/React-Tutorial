
import React from "react"
// import ReactDOM  from "react-dom/client"

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


// const nav = (
//     <nav>
//         <h1> Creative.Aquila</h1>
        
//         <ul> 
//             <li>Pricing </li>
//             <li> About </li>
//             <li>Contact </li>
//         </ul>
//     </nav>
// )

// // ReactDOM.render(nav, document.getElementById("root")
// // ReactDOM.createRoot(document.getElementById("root")).render(nav)
// const root = ReactDOM.createRoot(document.getElementById("root")).render(nav)
// root.render(nav)
 

const page = (
    <div>
        <h1>My awesome wewbsite in React</h1>
        <h3>Reasons I love React</h3>
        <ol> 
            <li>It's composable</li>
            <li>It's declarative</li>
            <li>It's hirable skill to have</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

document.getElementById("root").append(JSON.stringify(page)) 