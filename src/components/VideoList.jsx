export default class VideoList extends React.Component {
  constructor(props) {
    super(props);
    console.log(Object.values(this.props.videos[0])[0]);
  }
  render() {
    return (
      <div className="video-list">
        {Object.values(this.props.videos[0])[0].map((video, i) =>
          <div key={i}><h5><em></em>{video.snippet.title}</h5></div>
        )}
      </div>
    );
  }
}
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

/* <div><h5><em>videoListEntry</em> view goes here</h5></div>
      <div><h5><em>videoListEntry</em> view goes here</h5></div>
      <div><h5><em>videoListEntry</em> view goes here</h5></div>
      <div><h5><em>videoListEntry</em> view goes here</h5></div> */
// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
// export default VideoList