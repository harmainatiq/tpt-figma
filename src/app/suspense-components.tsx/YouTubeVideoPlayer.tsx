
import React from 'react';

const YoutubeVideoPlayer = ({ embedID }: any) => (
  <iframe
    className="w-full h-full border-secondary border-1"
    src={`https://www.youtube.com/embed/${embedID}`}
    title="Testimonial Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
);

export default YoutubeVideoPlayer;
