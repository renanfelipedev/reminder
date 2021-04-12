import { Timer } from './Timer.js';
import { Emitter } from './Emitter.js';
import { Notifyer } from './Notifyer.js';

export const App = {
  async start() {
    try {
      const timeout = 60 * 10;
      Timer.init(timeout);

      Emitter.on('countdown-start', () => {});
      Emitter.on('countdown-end', () => {
        Notifyer.notify({ body: 'Teste', title: 'Teste' });
        Timer.init(timeout);
      });
    } catch (error) {
      console.error(error.message);
    }
  },
};
