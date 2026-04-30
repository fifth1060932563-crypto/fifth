const backgroundVideos = document.querySelectorAll("[data-bg-video]");

backgroundVideos.forEach((video) => {
  const loopDuration = Number(video.dataset.loopDuration || 0);

  video.addEventListener("loadedmetadata", () => {
    if (loopDuration > 0 && video.duration < loopDuration) {
      video.dataset.loopDuration = String(Math.max(1, Math.floor(video.duration)));
    }
  });

  if (loopDuration > 0) {
    video.addEventListener("timeupdate", () => {
      const maxDuration = Number(video.dataset.loopDuration || loopDuration);
      if (video.currentTime >= maxDuration - 0.08) {
        video.currentTime = 0.15;
        video.play().catch(() => {});
      }
    });
  }
});
