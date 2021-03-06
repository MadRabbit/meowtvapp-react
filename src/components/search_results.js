import React, {ActivityIndicatorIOS} from "react-native";
import Reflux from "reflux";
import VideosStore from "../stores/videos_store";
import VideosList from "./videos_list";
import styles from "../styles";

export default class SearchResults extends React.Component {

  constructor() {
    super();
    this.state  = {};
    this.reflux = Reflux.listenTo(VideosStore, function(videos) {
      this.setState({videos: videos});
    });
  }

  componentDidMount() {
    this.reflux.componentDidMount.call(this);
  }

  componentWillUnmount() {
    this.reflux.componentWillUnmount.call(this);
  }

  render() {
    if (this.state.videos) {
      return <VideosList videos={this.state.videos} onSelect={this.props.onSelect} />;
    } else {
      return <ActivityIndicatorIOS style={styles.locker} />;
    }
  }
}
