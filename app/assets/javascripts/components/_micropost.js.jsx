var Micropost = React.createClass({
  getInitialState() {
    return { editable: false }
  },

  onUpdate() {
    if (this.state.editable) {
      let micropost   = { id: this.props.micropost.id,
                      content: this.refs.content.value }

      this.props.handleUpdate(micropost);
    }

    this.setState({ editable: !this.state.editable })
  },

  render() {
    let content = this.state.editable ? <textarea type='text'
                                                  ref='content'
                                                  defaultValue={this.props.micropost.content}>
                                        </textarea>
                                      : <p>{this.props.micropost.content}</p>
    return (
      <div>
        <div class="card">
          <p class="card-text">{content}</p>

          <button onClick={this.props.handleDelete} className="btn btn-danger btn-sm">
            Delete
          </button>

          <button onClick={this.onUpdate} className="btn btn-warning btn-sm">{this.state.editable ? 'Submit' : 'Edit' }</button>
        </div>
      </div>
    )
  }
});