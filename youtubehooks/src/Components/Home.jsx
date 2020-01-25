import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Search from './Search';
import axios from 'axios'
// import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import API_KEY from '../secrets'
// import { Redirect } from 'react-router-dom';

class Home extends Component {
    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        //if I add this we will see a list of videos right away
        // this.handleSubmit('Dark Souls')
    }

    handleSubmit = async (searchTerm) => {
        const url = `https://www.googleapis.com/youtube/v3/search?`
        const response = await axios.get(url, {
            params: {
                part: 'snippet',
                maxResults: 8,
                key: API_KEY,
                q: searchTerm
            }
        });
        console.log(response.data.items)
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
        console.log("state2", this.state.selectedVideo)

    }

    onVideoSelect = (video) => {
        console.log("Working", video)
        this.setState({
            selectedVideo: video.id.videoId
        })
        // <VideoDetail video={selectedVideo} />
        console.log("state", this.state.selectedVideo)
        // return <Redirect to='/video' video={this.selectedVideo} />
    }

    render() {

        const { selectedVideo, videos } = this.state

        return (
            <Grid justify='center' spacing={10}>
                <Grid container justify="center" spacing={10} item xs={12}>
                        <Grid item xs={10}>
                            <Search onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={10}>
                            <VideoList video={selectedVideo} videos={videos} onVideoSelect={this.onVideoSelect} />

                        </Grid>

                </Grid>

            </Grid>

        );
    }
}

export default Home;