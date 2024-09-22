class DraggableView {
  onDragEvent(handleDragStart, handleDragEnd) {
    const draggables = document.querySelectorAll(".draggable");
    draggables.forEach(function (item, index) {
      item.addEventListener('dragstart', handleDragStart);
      item.addEventListener('dragend', handleDragEnd);
    })
  }
}

const draggableView = new DraggableView();

export { draggableView };