import { lpModel } from "../model/lp.model.js";
import { landingPageView } from "../view/lp.view.js";
import { landingPageController } from "./lp.controller.js";

class DroppableOverlayController {
  handleDragEnter(e) {
    e.preventDefault();
  }

  handleDragLeave(e) {
    e.preventDefault();
  }

  handleDragOver(e) {
    e.preventDefault();
  }

  handleDrop(e) {
    e.preventDefault();
    lpModel.insertItem();
    
    /**
     * After inserting the we also have to render it.
    */
    landingPageView.render(lpModel.array);
    

    /**
     * After rendering the lp set drag and drop events to each and every element of LP
     */
  }
}

const droppableOverlayController = new DroppableOverlayController();

export { droppableOverlayController };