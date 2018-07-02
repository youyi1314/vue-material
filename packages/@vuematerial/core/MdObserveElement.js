export default (el, config, cb) => {
  if ('MutationObserver' in window && el) {
    const observer = new MutationObserver(cb)

    observer.observe(el, config)

    return {
      disconnect: () => {
        observer.disconnect()
      }
    }
  }
}
