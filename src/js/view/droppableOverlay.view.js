class DroppableOverlayView {
  onDropEvent(handleDragEnter, handleDragLeave, handleDragOver, handleDrop) {
    const droppableOverlay = document.querySelector(".droppable-overlay");

    droppableOverlay.addEventListener('dragenter', handleDragEnter);
    droppableOverlay.addEventListener('dragleave', handleDragLeave);
    droppableOverlay.addEventListener('dragover', handleDragOver);
    droppableOverlay.addEventListener('drop', handleDrop);
  }
}

const droppableOverlayView = new DroppableOverlayView();

export { droppableOverlayView };