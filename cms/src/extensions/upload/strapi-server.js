'use strict';

module.exports = (plugin) => {
  // Отключаем трансформацию изображений
  plugin.services['image-manipulation'] = {
    async generateThumbnail() {
      return null;
    },
    async generateResponsiveFormats() {
      return [];
    },
    async resizeTo() {
      return null;
    },
    bufferize() {
      return null;
    },
    crop() {
      return null;
    },
    async optimize() {
      return null;
    },
    getDimensions() {
      return null;
    },
    getMetadata() {
      return {};
    },
    resizeFileTo() {
      return null;
    },
  };

  return plugin;
}; 