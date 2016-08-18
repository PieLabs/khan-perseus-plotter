import Plotter from './plotter.jsx';
import Feedback from './feedback.jsx';

var Main = React.createClass({

  /**
   * The plotter requires a handler for trackInteraction
   */
  handleTrackInteraction: function() {

  },
  handlePlotterChange: function(event){
    this.props.session.response = event.values;
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
        static={this.props.model.isStatic}
        onChange={this.handlePlotterChange}
        trackInteraction={this.handleTrackInteraction}></Plotter.Widget>
      <Feedback correct={this.props.model.correct} message={this.props.model.message}/>
      </div>;
  } 
});

pie.framework('react').register('khan-perseus-plotter', Main);