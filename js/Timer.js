import { View } from './View.js';
import { Emitter } from './Emitter.js';

export const Timer = {
  time: 60 * 25,
  currentTime: 0,
  interval: null,

  timeToMinutes: time => Math.floor(time / 60),
  timeToSeconds: time => time % 60,
  formatTime: time => String(time).padStart(2, '0'),

  init(time) {
    Emitter.emit('countdown-start');

    Timer.currentTime = time || Timer.time;
    Timer.interval = setInterval(Timer.countdown, 1000);
  },

  countdown() {
    Timer.renderView(Timer.currentTime);
    Timer.currentTime -= 1;

    if (Timer.currentTime < 0) {
      Timer.resetInterval();
      return;
    }
  },

  renderView(time) {
    const minutes = Timer.timeToMinutes(time);
    const seconds = Timer.timeToSeconds(time);

    View.render({
      minutes: Timer.formatTime(minutes),
      seconds: Timer.formatTime(seconds),
    });
  },

  resetInterval() {
    clearInterval(Timer.interval);
    Emitter.emit('countdown-end');
  },
};
