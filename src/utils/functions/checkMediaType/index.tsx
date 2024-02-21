function checkMediaType(url: string): 'img' | 'video' | null {
  if (/\.jpg|\.jpeg|\.png|\.gif/i.test(url)) {
    return 'img';
  } else if (/\.mp4|\.webm|\.ogg/i.test(url)) {
    return 'video';
  } else {
    return null;
  }
}
export default checkMediaType;
