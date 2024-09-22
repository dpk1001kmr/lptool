import { lpModel } from "../model/lp.model.js";

class DraggableController {
  handleDragStart(e) {
    lpModel.draggedItem = e.target.dataset.type;
    document.querySelector(".droppable-overlay").style.height = "100%";
  }
  handleDragEnd(e) {
    lpModel.draggedItem = null;
    document.querySelector(".droppable-overlay").style.height = "0%";
  }
}
const draggableController = new DraggableController();

export { draggableController };