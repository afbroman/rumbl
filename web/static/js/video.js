import Player from './player';

const Video = {
  init(socket, element) {
    if (!element) { return; }
    const playerId = element.getAttribute('data-player-id');
    const videoId = element.getAttribute('data-id');
    socket.connect();
    Player.init(element.id, playerId, () => {
      this.onReady(videoId, socket);
    });
  },

  onReady(videoId, socket) {
    let msgContainer = document.getElementById('msg-container');
    let msgInput = document.getElementById('msg-input');
    let postButton = document.getElementById('msg-submit');
    let vidChannel = socket.channel(`videos:${videoId}`);
    // TODO join the vidChannel
  },
};

export default Video;
