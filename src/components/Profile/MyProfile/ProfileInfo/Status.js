import React from "react"

class Status extends React.Component {
    state = {
        editMode: false,
        statusText: "bla",
        setStatusText: (newStatusText) => {
            this.statusText = newStatusText
        }
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
    }


    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.state.statusText}</span>
                      </div>
                    : <div>
                        <input onBlur={this.deactivateEditMode} autoFocus={this.state.editMode} value={this.props.status}></input>
                    </div>
                }

            </div>
        )
    }
}

export default Status