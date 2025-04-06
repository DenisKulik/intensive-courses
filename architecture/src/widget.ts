class EventEmitter {
  private listeners: { [key: string]: Function[] } = {};

  on(event: string, callback: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  once(event: string, callback: Function) {
    const onceWrapper = (...args: any[]) => {
      callback.apply(this, args);
      this.off(event, onceWrapper);
    };
    this.on(event, onceWrapper);
  }

  off(event?: string, callback?: Function) {
    if (!event) {
      // Clear all events if no event specified
      this.listeners = {};
      return;
    }

    if (!callback) {
      // Clear all callbacks for the specified event
      delete this.listeners[event];
      return;
    }

    // Remove specific callback for the event
    const callbacks = this.listeners[event];
    if (callbacks) {
      this.listeners[event] = callbacks.filter((cb) => cb !== callback);
      if (this.listeners[event].length === 0) {
        delete this.listeners[event];
      }
    }
  }

  emit(event: string, ...args: any[]) {
    const callbacks = this.listeners[event];
    if (callbacks) {
      callbacks.forEach((callback) => {
        callback.apply(this, args);
      });
    }
  }
}

class Widget extends EventEmitter {
  render() {}

  mount() {}
}

class Button extends Widget {}

const btn = new Button();

btn.on("click", console.log);
