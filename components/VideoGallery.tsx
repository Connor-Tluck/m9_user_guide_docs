import React, { useState } from 'react';

export default function VideoGallery() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
      {[1, 2, 3].map((num) => (
        <VideoThumbnail key={num} videoId={num} />
      ))}
    </div>
  );
}

function VideoThumbnail({ videoId }: { videoId: number }) {
  const [open, setOpen] = useState(false);
  const videoSrc = 'https://www.w3schools.com/html/mov_bbb.mp4';

  return (
    <>
      <div
        style={{
          width: 240,
          cursor: 'pointer',
          border: '1px solid #ccc',
          borderRadius: 8,
          overflow: 'hidden',
          background: '#111',
        }}
        onClick={() => setOpen(true)}
      >
        <video width="240" height="135" style={{ display: 'block' }} muted>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={{ padding: 8, color: '#fff', textAlign: 'center' }}>
          Video {videoId}
        </div>
      </div>
      {open && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setOpen(false)}
        >
          <div
            style={{ background: '#222', padding: 24, borderRadius: 12 }}
            onClick={(e) => e.stopPropagation()}
          >
            <video width="480" height="270" controls autoPlay>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div style={{ textAlign: 'right', marginTop: 8 }}>
              <button
                onClick={() => setOpen(false)}
                style={{
                  padding: '6px 16px',
                  borderRadius: 4,
                  background: '#444',
                  color: '#fff',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 