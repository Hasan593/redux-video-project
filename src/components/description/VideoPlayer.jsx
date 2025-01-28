const VideoPlayer = () => {
    return (
        <iframe
            width="100%"
            className="aspect-video"
            src={''}
            title={'Md Hasan Uddin'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    );
};

export default VideoPlayer;