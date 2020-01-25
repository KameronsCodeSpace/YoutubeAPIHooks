import React from 'react'
import { Grid } from '@material-ui/core'
import VideoItem from './videoItem'

const VideoList = ({ video, videos, onVideoSelect }) => {
    if (!video) {

        return <div>No Search Results. Search for videos above!</div>
    }

    const listOfVideosLeft = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)
    const listOfVideosRight = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} />)

    return (

        <Grid container spacing={10}>
            <Grid item xs={6}>
                {listOfVideosLeft.slice(0, 4)}
            </Grid>
            <Grid item xs={6}>
                {listOfVideosRight.slice(4, 8)}
            </Grid>
        </Grid>
    )
}

export default VideoList