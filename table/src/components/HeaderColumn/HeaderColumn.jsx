import React, { Component } from 'react';

class HeaderColumn extends Component {
  state = {
    renameColumnMode: false,
    value: this.props.item,
  }

  onClick = (e) => {
    console.log(e.target);

    this.setState({
      renameColumnMode: true,
    })
  }

  onChange = (e) => {
    console.log(this)
    this.setState({
      value: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value)

    this.setState({
      renameColumnMode: false,
    })
  }

  render() {
    const { key } = this.props;
    const { renameColumnMode, value } = this.state;

    return (

      <th
        key={key}
        className="tabble__header-elem"
        onClick={this.onClick}
      >

          {!renameColumnMode
            ? (
              <div className="header-elem">
                <div clasName="header-elem__value">{value}</div>
              </div>
            )
            : (
              <form className="tabble__header-elem_form" onSubmit={this.handleSubmit}>
                <input className="tabble__header-elem_input" type="text" value={value} onChange={this.onChange} />
                <input className="tabble__header-elem_submit" type="submit" value="ok" />
              </form>
            )
          }
      </th >

    )
  }
}

export default HeaderColumn;
