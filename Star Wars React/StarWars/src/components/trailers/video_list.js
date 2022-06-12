import React, { Component } from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {

    const list_video = this.props.videos.map((video) =>
      <VideoListItem
        onVideoSelect={this.props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );

    return(
      <div>
        <div>
          {list_video}
        </div>
      </div>
    )
  }
}

export default VideoList;
