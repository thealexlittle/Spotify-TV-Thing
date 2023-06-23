import React, { useState, useEffect } from 'react';

const tracks = [{
    name: "",
    album: {
        images: [
            { url: "" }
        ]
    },
    artists: [
        { name: "" }
    ]
}]

function Queue(props) {
    return (
        <section id="queue-box">
            <h1>Queue</h1>
            <div id="track-list">
                {
                    props.queue?.map((track, i) => (
                        <QueuedTrack track={track} key={i} />
                    ))
                }
            </div>
        </section>
    );
}

export default Queue

const track = {
    name: "",
    album: {
        images: [
            { url: "" }
        ]
    },
    artists: [
        { name: "" }
    ]
}

const artist = { name: "" }

function QueuedTrack(props) {

    return (
        <>
            <div className="queue-track">
                <img className="queue-art" src={props.track.album.images[0].url} alt="" />
                <div className="queue-track-info">
                    <h5>{props.track.name}</h5>
                    <ul className='queue-artists'>
                        {
                            props.track.artists.map((artist, i) => (
                                <li key={i}>{artist.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}