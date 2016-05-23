var Feedback = React.createClass({
  render: function(){
    if(this.props.correct === undefined){
      return <div></div>
    } else {
      var classname = 'plotter-feedback alert';
      classname += ' ' + (this.props.correct ? ' alert-success' : ' alert-warning');
      return <div className={classname}>{this.props.message}</div>
    }
  }
});

module.exports = Feedback;