var AllMicroposts = React.createClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  onUpdate(micropost) {
    this.props.onUpdate(micropost);
  },

  render() {
    let microposts = this.props.microposts.map((micropost, index) => {
      return (
        <div key={index}>
          <Micropost micropost={micropost}
                 handleDelete={this.handleDelete.bind(this, micropost.id)}
                 handleUpdate={this.onUpdate}/>
        </div>
      )
    });

    return (
      <div>
        {microposts}
      </div>
    )
  }
});