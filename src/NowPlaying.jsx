import React, { useState, useEffect, useCallback } from 'react';

function NowPlaying(props) {
    return (
        <>
            <section id="player-box">
                <h1>Now Playing</h1>
                <img id="album-art" src={props.track?.album.images[0].url} alt="" />
                <div id="details">
                    <h2 id="track-name">{props.track?.name}</h2>
                    <div id="artist-box">
                        {
                            props.track?.artists.map((artist, i) => (
                                <h3 key={i}>{artist.name} </h3>
                            ))
                        }
                    </div>
                </div>
                <ProgressBar status={props.status}/>
            </section>
        </>
    );
}

export default NowPlaying

function ProgressBar(props){
    var per = (100*props.status?.progress_ms/props.status?.item?.duration_ms.toString());
    console.log("Progress:",per)
    return(
        <div id='bar-background'>
            <div id='bar' style={{width: per+"%"}}></div>
        </div>
    )
}