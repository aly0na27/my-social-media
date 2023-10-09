import React from "react"

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {

        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        // debugger
        this.props.updateProfileStatus(this.state.status)
    }

    onChangeStatus = (e) => {
        // debugger
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        debugger
        return (
            <div>
                {this.props.userId === 30096 ? (
                    !this.state.editMode
                    ? <div>
                        <span onClick={this.activateEditMode}>{this.props.status ? this.props.status : "----"}</span>
                      </div>
                    : <div>
                        <input onBlur={this.deactivateEditMode}
                               autoFocus={this.state.editMode}
                               value={this.state.status}
                               onChange={this.onChangeStatus}
                        >

                        </input>
                    </div>
                ) : <div>
                    <span>{this.props.status ? this.props.status : "----"}</span>
                </div>
                }

            </div>
        )
    }
}

export default Status