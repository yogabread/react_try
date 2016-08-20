var Content = React.createClass({
  getInitialState() {
    return { microposts: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/microposts.json', (response) => { this.setState({ microposts: response }) });
  },

  handleSubmit(micropost) {
    let newState = this.state.microposts.concat(micropost);
    this.setState({ microposts: newState })
  },

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/microposts/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeIdeaFromDOM(id);
      }
    });
  },

  removeIdeaFromDOM(id) {
    let newMicroposts = this.state.microposts.filter((micropost) => {
      return micropost.id != id;
    });

    this.setState({ microposts: newMicroposts });
  },

  handleUpdate(micropost) {
    $.ajax({
      url: `/api/v1/microposts/${micropost.id}`,
      type: 'PUT',
      data: { micropost: micropost },
      success: (micropost) => {
        this.updateMicroposts(micropost)
      }
    });
  },

  updateMicroposts(micropost) {
    let microposts = this.state.microposts.filter((s) => { return s.id != micropost.id });
    microposts.push(micropost);

    this.setState({ microposts: microposts });
  },

  render() {
    return (
      <div>
        <NewMicropost handleSubmit={this.handleSubmit} />
        <AllMicroposts microposts={this.state.microposts}
                   handleDelete={this.handleDelete}
                   onUpdate={this.handleUpdate} />
      </div>
    )
  }
});