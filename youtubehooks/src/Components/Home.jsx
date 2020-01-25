import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Search from './Search';
import axios from 'axios'
// import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import API_KEY from '../secrets'
// import { Redirect } from 'react-router-dom';

const Home = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setVideo] = useState(null);

    useEffect(() => {
        //if I add this we will see a list of videos right away
        // handleSubmit('Dark Souls')
    }, [])

    const handleSubmit = async (searchTerm) => {
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
        setVideos(response.data.items)
        setVideo(response.data.items[0])

        console.log("state2", selectedVideo)

    }

    const onVideoSelect = (video) => {
        console.log("Working", video)

        setVideo(video.id.videoId)

        // <VideoDetail video={selectedVideo} />
        console.log("state", selectedVideo)
        // return <Redirect to='/video' video={this.selectedVideo} />
    }

        return (
            <Grid justify='center' spacing={10}>
                <Grid container justify="center" spacing={10} item xs={12}>
                        <Grid item xs={10}>
                            <Search onFormSubmit={handleSubmit} />
                        </Grid>
                        <Grid item xs={10}>
                            <VideoList video={selectedVideo} videos={videos} onVideoSelect={onVideoSelect} />

                        </Grid>

                </Grid>

            </Grid>

        );
    }

export default Home;