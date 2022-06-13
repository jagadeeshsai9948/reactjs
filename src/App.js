import First from "./First"
import  ClassComponent  from "./ClassComponent"
import StateFunction, {Demo} from "./StateFunction" 
function app(){
  return( 
        <div>
         <h1>Hello Everyone</h1>
         <p>How Are You</p>
         {/*<First/>
         <ClassComponent name="reactjs" year="2013"/>*/}
         <ClassComponent name="angular">This is about how to comment code using braces in reactjs</ClassComponent>
         <StateFunction/>
         <Demo/>
         {/* <StateFunction2/>
         <StateFunction3/>*/}
        </div>
)         
}
export default app