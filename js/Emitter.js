export const Emitter = {
  events: {},

  on(event, callback) {
    Emitter.events[event] = Emitter.events[event] || [];
    Emitter.events[event].push(callback);
  },

  emit(event, ...rest) {
    const eventExists = event in Emitter.events;

    if (eventExists) {
      Emitter.events[event].forEach(e => e(...rest));
    }
  },
};
