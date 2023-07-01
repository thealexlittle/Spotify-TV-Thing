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
    var url = props.track?.album.images ? props.track?.album.images[0].url : "";
    console.log(props.track)
    return (
        <>
            <div className="queue-track">
                <img className="queue-art" src={url} alt="" />
                <div className="queue-track-info">
                    <h5>{props.track.name}</h5>
                    <div className='queue-artists'>
                        {
                            props.track?.artists.map((artist, i) => (
                                <p key={i}>{artist.name}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}