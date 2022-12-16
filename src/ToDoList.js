import {Component} from 'react';
import check from './icons8-write-99.png'

export class ToDoList  extends Component{
     state = {
        userInput: "",
        list: []
     }
onChangeAction(e){
    this.setState({userInput:e})
    console.log(e)
}
addAction(input) {
    if (input === ''){
        alert('Please fill in the field')
    }
    else{ let actionList = this.state.list;
        actionList.push(input);
        this.setState ({list: actionList, userInput:''})}
   
}
cross(event){
    const li = event.target;
    li.classList.toggle('crossed')
}
deleteAction(){
    let actionList = this.state.list;
    actionList = [];
    this.setState({list:actionList})

}
onFormSubmit(e) {
    e.preventDefault();
}

     render(){
        return(
            <div className = "main">
                <form onSubmit = {this.onFormSubmit}>
                <div className="block">
                    <input type="text" placeholder='What do you want to do today?' onChange = {(e) => {this.onChangeAction(e.target.value)}}/>
                </div>
                <div className="block">
                    <button className="add" onClick ={() => this.addAction(this.state.userInput)}>Add</button>
                </div>
                <div className = "block">
                <ul>
                    {this.state.list.map((item,index) =>(
                        <li onClick ={this.cross} key = {index}><img src = {check} width ="25px" alt = "icon"/>{item}</li>
                    ))}
                </ul>
                </div>
            <div className="block">
                <button className="delete" onClick = {() => this.deleteAction()}>Delete</button>
                </div> 
                </form>
            </div>
        )
     }
}