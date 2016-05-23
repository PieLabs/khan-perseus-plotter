var Feedback = React.createClass({
  displayName: 'Feedback',

  render: function () {
    if (this.props.correct === undefined) {
      return React.createElement('div', null);
    } else {
      var classname = 'plotter-feedback alert';
      classname += ' ' + (this.props.correct ? ' alert-success' : ' alert-warning');
      return React.createElement(
        'div',
        { className: classname },
        this.props.message
      );
    }
  }
});

module.exports = Feedback;
