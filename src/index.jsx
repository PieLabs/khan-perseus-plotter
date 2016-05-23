var Plotter = require('./plotter');
var Feedback = require('./feedback');

var Main = React.createClass({
  handlePlotterChange: function(event){
    this.props.session.response = event.values;
  },
  handleTrackInteraction: function(){
    // console.log('handle track interaction changed', arguments);     
  },
  render: function(){
    
    var starting;
    if(this.props.session.response){
      starting = this.props.session.response;  
    } else {
      starting = _.map(this.props.model.categories, function(){
        return 1;
      });
    }
    
    var isStatic = this.props.env.mode !== 'gather';
    var correct, message;
    
    if(this.props.outcome && this.props.env.mode === 'evaluate'){
      correct = this.props.outcome.correctness === 'correct';
      message = this.props.outcome.feedback;
    }
     
    return <div>
      <a href="http://khan.github.io/perseus/" target="_blank">port of perseus plotter</a>
      <Plotter.Widget
        scaleY={this.props.model.scaleY}
        maxY={this.props.model.maxY}
        snapsPerLine={this.props.model.snapsPerLine}
        labelInterval={this.props.model.labelInterval}
        labels={this.props.model.labels}
        type={this.props.model.type}
        categories={this.props.model.categories}
        picUrl={this.props.model.picUrl}
        plotDimensions={this.props.model.plotDimensions}
        starting={starting}
        static={isStatic}
        onChange={this.handlePlotterChange}
        trackInteraction={this.handleTrackInteraction}></Plotter.Widget>
      <Feedback correct={correct} message={message}/>
      </div>;
  } 
});

// module.exports = Main;

pie.framework('react').register('khan-perseus-plotter', Main);