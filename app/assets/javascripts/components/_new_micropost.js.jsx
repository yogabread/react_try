var NewMicropost = React.createClass({
  handleClick() {
    
    let content = this.refs.content.value;

    $.ajax({
      url: '/api/v1/microposts',
      type: 'POST',
      data: { micropost: { content: content } },
      success: (micropost) => {
        this.props.handleSubmit(micropost);
      }
    });
  },

  render() {
    return (
      <div>
        <input ref='content' placeholder='Post your updates here' />
        <input type="hidden" name="user_id" value={ this.props.user_id } />
        <button onClick={this.handleClick} className="btn btn-success btn-sm">Submit</button>
      </div>
    )
  }
});