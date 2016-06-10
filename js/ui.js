/**
 * React Bindings.
 *
 **/

'use strict';

let AssignmentList = React.createClass({
  render: function() {
    var assignmentNodes = this.props.data.map(function(assignment) {
      return (
        <div className='Assignment' key={assignment.id}>
          <div className="recent-header">
            <h2>{assignment.name}</h2>
            <hr />
          </div>

          <div className="recent-desc">
            {assignment.info.desc}
          </div>

          <div className="recent-info">

          </div>
        </div>
      );
    });

    return (
     <div className="AssignmentList">
       {assignmentNodes}
     </div>
    );
  }
})

let AssignmentBox = React.createClass({
  loadData: function() {
    let self = this;
    novajs.get('assignments/list', {})
      .then(function(data) {
        if(data.success === false) {
          return console.error('API Reported Fail');
        }
        var pos = data.data;

        self.setState({
          data: pos
        });

        console.log('rendered from server')
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  componentDidMount: function() {
    this.loadData();
  },
  getInitialState: function() {
    return {data:[]}
  },
  render: function() {
    return (
      <div className="AssignmentBox">
        <AssignmentList data={this.state.data}/>
      </div>
    );
  }
});

ReactDOM.render(
  <AssignmentBox />,
  document.getElementById('content')
)
