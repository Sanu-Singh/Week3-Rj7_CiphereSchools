import React,{useState} from "react";
import Userdetails from "./userdetails";
import Test from "../test";
// class Alluserlist extends React.Component{
//     state={
//         name:"Gollu Singh"
//     };
//     alluser = [
//       { name: "Sanu Singh", email: "abc@email.com", phone: 1201214589 },
//       { name: "prashant Kumar", email: "hyijjkf@email.com", phone: 5252665230 },
//       { name: "Sanu Singh", email: "fghj@email.com", phone: 7896541230 },
//     ];
//     render(){
//         setTimeout(()=>{
//             this.setState({name:"Sonu Kumar"});
//         },5000);
//     return (
//     <div>
//         <h1> The name is {this.state.name}</h1>
//         {
//             this.alluser.map((user,index)=>(
//             <Userdetails key={index} user={user} />
//         ))}
//     </div>
//     );
// }
// }

// const Alluserlist=()=>{
//    const [state,setState]= useState("ramesh"); // xyz array contains state, and setter function
//    return(
//     <h1>Name is : {state}</h1>
//    )
// }

// const Alluserlist=()=>{
//     const [state, setState] = useState({
//       name: "ramesh"
//     });
//     let alluser = [
//       { name: "Sanu Singh", email: "abc@email.com", phone: 1201214589 },
//       { name: "prashant Kumar", email: "hyijjkf@email.com", phone: 5252665230 },
//       { name: "Sanu Singh", email: "fghj@email.com", phone: 7896541230 },
//     ];
//     let setStatename=(name)=>{
//         setState({...state,name})
//     }
//     return (
//     <div>
//         <Test name={state.name} setName={setStatename} />
//         {
//             alluser.map((user,index)=>(
//             <Userdetails key={index} user={user} />
//         ))}
//     </div>
//     );
// }
class Alluserlist extends React.Component{
    state={
        name:"Gollu Singh"
    };
    setStateName=(name)=>{
      this.setState({...this.state,name})
    }
    componentDidMount(){
      console.log("All user list was mounted");
    }
    alluser = [
      { name: "Sanu Singh", email: "abc@email.com", phone: 1201214589 },
      { name: "prashant Kumar", email: "hyijjkf@email.com", phone: 5252665230 },
      { name: "Sanu Singh", email: "fghj@email.com", phone: 7896541230 },
    ];
    render(){
    return (
    <div>
        <Test name={this.state.name} setName={this.setStateName} />
        {
            this.alluser.map((user,index)=>(
            <Userdetails key={index} user={user} />
        ))}
    </div>
    );
}
}
export default Alluserlist