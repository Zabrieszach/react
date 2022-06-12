import React, { Component } from 'react';

class VideoListItem extends Component {
  constructor(props) {
    super(props);
  }

  onVideoSelect(video) {
    this.props.onVideoSelect(video);
  }

  render() {

    const imgUrl = this.props.video.snippet.thumbnails.default.url;

    return (
      <div onClick={() => this.onVideoSelect(this.props.video)}>
        <div className="text-white">
          <div className="media-body">
            <h5>{this.props.video.snippet.title}</h5>
          </div>
          <div>
            <img className="media-body" src={imgUrl} />
          </div>
        </div>
      </div>
    )
  }
}

export default VideoListItem;
