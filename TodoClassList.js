import {Component} from 'react';
import {IsEmpty,Map} from 'react-lodash';

class TodoClassList extends Component{
	 constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
	
	render(){
		return (
			<div>
			<br/><br/><br/>
			<IsEmpty value={this.props.data} yes={()=>(<h4></h4>)} 
      			no={() => (
        			<ul>
          				<Map collection={this.props.data} iteratee={i => <li key={i}>{i}</li>} /> 
        			</ul>
      			)}
    		/>
			<br/><br/><br/>
			</div>
		);
	}
}
export default TodoClassList;