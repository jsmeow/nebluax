self.onmessage = function(message) {
  const { data, x, y } = message.data;

  self.postMessage({ data, x, y });
};
