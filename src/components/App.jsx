import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import ExampleVideo from '../data/exampleVideoData.js';

export default class App extends React.Component {
  constructor(props) { super(props); }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em><Search /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>videoList</em><VideoList videos={[{ExampleVideo}]} /></h5></div>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
// export default App;
