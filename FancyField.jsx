var React = require('react');
var TextField = require('./lib/TextField.jsx');
var SaveButton = require('react-crud-buttons/lib/SaveButton.jsx');
var EditButton = require('react-crud-buttons/lib/EditButton.jsx');
var DeleteButton = require('react-crud-buttons/lib/DeleteButton.jsx');
var CancelButton = require('react-crud-buttons/lib/CancelButton.jsx');

var FancyField = React.createClass({

  propTypes: {
    textNode: React.PropTypes.node.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired,
  },

  getInitialState: function() {
    return {isEditing: false};
  },

  _handleEditClick: function(event) {
    event.preventDefault();
    console.log("bla");
    this.setState({ isEditing: true });
  },

  _handleDeleteClick: function(event) {
    event.preventDefault();
    this.props.onDelete();
  },

  _handleSaveClick: function(event) {
    event.preventDefault();
    this.props.onSave();
  },

  _handleCancelClick: function() {
    this.setState({ isEditing: false });
  },

  render: function() {

    var classes = this.state.isEditing ? 'is-editing' : '';
    var text = this.props.textNode.children;
    var hiddenStyle = {
      display: 'none',
    };
    var style = {
      display: 'inline-block'
    };

    return (
      <div className={'fancy-field '+classes} style={style}>

        <span style={this.state.isEditing ? hiddenStyle : {}}>
          {this.props.textNode}
          <EditButton onClick={this._handleEditClick} />
          <DeleteButton onClick={this._handleDeleteClick} />
        </span>

        <div style={this.state.isEditing ? {} : hiddenStyle}>
          <TextField
            hintText={text}
            defaultValue={text}
          />
          <SaveButton onClick={this._handleSaveClick} />
          <CancelButton onClick={this._handleCancelClick} />
        </div>

      </div>
    );
  }
});

module.exports = FancyField;
