import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
class CreateProject extends Component {
    state = {
        title: " ",
        content: " "
    }
    handlChange = (capturingChangeAction) => {
        this.setState({
            [capturingChangeAction.target.id]: capturingChangeAction.target.value
        })
    }
    handleSubmit = (capturingChangeAction) => {
        capturingChangeAction.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state)
    }
    render() {
        return (
            <div className="container"> 
                <form onSubmit={this.handleSubmit} className="white"> {/*giving the form an action and also a color */}
                    <h5 className="grey-text text-darken-3">Create new project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handlChange} /> {/*onChange an event hanlder, will capture user when the update or dete in the field*/}
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Project Conent</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handlChange}> </textarea> 
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}
export default connect(null ,mapDispatchToProps)(CreateProject)