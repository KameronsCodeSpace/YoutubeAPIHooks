import React from 'react'
import YouTube from 'react-youtube';
import { Paper, Typography } from "@material-ui/core"


const VideoDetail = (props) => {

    console.log('Params Video Info video', props.match.params.id)
    const opts = {
        width: '960',
        height: '720',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
    };
    return (
        <React.Fragment>
            <Paper elevation={6} style={{ height: '80%' }}>
                <YouTube
                    videoId={props.match.params.id}
                    opts={opts}
                />
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                {/* <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channgelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography> */}
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail