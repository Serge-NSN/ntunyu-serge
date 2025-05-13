import React, { useState } from 'react';

// Helper to extract YouTube video ID from URL
function getYouTubeId(url) {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

const allCategories = [
  "All",
  "Podcast",
  "Promo",
  "Highlight",
  "YouTube",
  "Advert"
];

const videos = [
  {
    title: "SPARTAN Highlights",
    youtubeUrl: "https://youtu.be/SwNpL5VnpTg",
    tags: ["Highlight", "Tech"]
  },
  {
    title: "Introducing FoundIt",
    youtubeUrl: "https://youtu.be/AbLAhlK3yM4?si=ZNJXhHSeo2t2l9bA",
    tags: ["Promo"]
  },
  {
    title: "SEED BootCamp Highlights",
    youtubeUrl: "https://youtu.be/cYxsT94Qcw8",
    tags: ["Highlight", "YouTube"]
  },
  {
    title: "The Richest Family in South Africa",
    youtubeUrl: "https://youtu.be/nBHMHPUHGRA?si=qUL28A0LBBNJRrC6",
    tags: ["YouTube"]
  },
  {
    title: "Introducing Hyrre",
    youtubeUrl: "https://youtu.be/FYoUY_svE8g?si=okirkMvjwcwzDzRI",
    tags: ["Advert"]
  },
  {
    title: "BCC 2025",
    youtubeUrl: "https://youtu.be/ZMNB0Ozawqc",
    tags: ["Advert"]
  }
  // Add more videos as needed
];

const tagColors = {
  Podcast: "bg-secondary text-primary",
  Promo: "bg-accent text-primary",
  Highlight: "bg-secondary-dark text-primary",
  YouTube: "bg-primary-light text-secondary",
  Advert: "bg-primary text-accent"
};

const VideoShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredVideos = selectedCategory === "All"
    ? videos
    : videos.filter(video => video.tags.includes(selectedCategory));

  return (
    <section id="videos" className="py-20 bg-primary-light/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Video Portfolio</h2><br></br>
        {/* Category Navigation */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {allCategories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-mono text-sm transition-colors border border-secondary
                ${selectedCategory === category
                  ? "bg-secondary text-primary font-bold"
                  : "bg-primary-light text-secondary hover:bg-secondary hover:text-primary"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => {
            const videoId = getYouTubeId(video.youtubeUrl);
            const thumbnail = videoId
              ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
              : "";
            return (
              <div key={index} className="card group relative">
                {/* Tags */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                  {video.tags.map(tag => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-bold shadow ${tagColors[tag] || "bg-secondary text-primary"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                  <img
                    src={thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <svg
                      className="w-16 h-16 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </a>
                </div>
                <h3 className="text-xl font-bold gradient-text">{video.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;