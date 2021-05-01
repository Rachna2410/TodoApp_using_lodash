
import {Component} from 'react';
import TodoClassForm from './TodoClassForm';
import TodoClassList from './TodoClassList';
class TodoUsingLodash  extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
    submit=(e)=>{
        e.preventDefault();
        let arr = [];
        arr.push(e.target.input.value);

        this.setState({
            data:this.state.data.concat(arr)

        },() => {
             
        });
    }

    componentDidUpdate(){
        localStorage.setItem('Todo',JSON.stringify(this.state.data))
       console.log(this.state.data);
        
    }
    deleteAll =()=>{
        let clearTodo=[];
        this.setState({data:this.clearTodo});
        localStorage.clear();
    }
    render(){
        return(
            <div>   
                <TodoClassForm data={this.state.data} submit={this.submit} deleteAll={this.deleteAll}/>
                 <TodoClassList data={this.state.data}/> 
            </div>
        )
    }
}
export default TodoUsingLodash ;
