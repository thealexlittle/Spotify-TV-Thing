import React, { useState, useEffect } from 'react';
import NowPlaying from './NowPlaying'
import Login from './Login'
import './App.css';
import Queue from './Queue';

function App() {

  const [token, setToken] = useState('');
  const [tracklist, setTracklist] = useState([]);
  const [current_track, setTrack] = useState();
  const [status, setStatus] = useState();
  const [time, setTime] = useState(new Date());

  useEffect(() => {

    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    async function getTracks() {
      const response = await fetch("https://api.spotify.com/v1/me/player/queue",
        { method: "GET", headers: { Authorization: `Bearer ${token}` } })

      const tracks = await response.json();

      setTracklist(tracks.queue?.splice(0,10))
      setTrack(tracks.currently_playing)
    }

    async function getPlaybackStatus() {
      const response = await fetch("https://api.spotify.com/v1/me/player",
        { method: "GET", headers: { Authorization: `Bearer ${token}` } })

      const status = await response.json();
      console.log(response);
      setStatus(status)
    }

    getToken();
    getTracks();
    getPlaybackStatus().catch(e => {
      console.log(e);
    });
    
    const interval = setInterval(() => {
      setTime(new Date());
    },1000);

    return () => clearInterval(interval);

  }, [token, time]);

  return (
    <>
      {(token === '' || status === undefined) ? <Login /> :
        <>
          <NowPlaying track={current_track} status={status} />
          <Queue queue={tracklist} />
        </>
      }
    </>
  );
}

export default App;
