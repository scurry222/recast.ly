import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

export default class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      videos: exampleVideoData,
      playing: exampleVideoData[0]
    };
    this.changeVideo = this.changeVideo.bind(this);
  }

  changeVideo(video) {
    this.setState({
      playing: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.playing} />
          </div>
          <div className="col-md-5">
            <VideoList click={this.changeVideo} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
// export default App;
