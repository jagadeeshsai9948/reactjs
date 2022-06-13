import React from 'react'

class ClassComponent extends React.Component{
    state={
        username:"jagadeesh",
        age:23,
        employees:["ramsir","anitha akka","jagadeesh","shanmukh"],
        country:"india"
    }
 render(){
     console.log(this.props)
     console.log(this.state)
     {/*console.log(this.props.name}
     console.log(this.props.year)*/}
     return(
         <div>
             <h1>This Is From Class</h1>
             <p>{this.props.name} {this.props.children}</p>
             <p>{this.state.username} {this.state.age}</p>
             {/* <p>{this.state.employees[0]}</p>
             <p>{this.state.employees[1]}</p>
             <p>{this.state.employees[2]}</p>
             <p>{this.state.employees[3]}</p> */}
         </div>
     )
 }
}
export default ClassComponent