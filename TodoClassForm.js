import {Component} from 'react';

class TodoClassForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
    render(){
        return(
            <div>
                <form onSubmit= {this.props.submit}>
                    <input type="text" name = "input" placeholder = "Enter here"/>
                    <button>Submit</button>
                </form>
                <button onClick={this.props.deleteAll}>Delete All</button>
            </div>
        )
    }
}
export default TodoClassForm;