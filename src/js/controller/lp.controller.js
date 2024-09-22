import { lpModel } from "../model/lp.model.js";
import { bulletEditorView } from "../view/bulletEditor.view.js";
import { ctaEditorView } from "../view/ctaEditor.view.js";
import { imageEditorView } from "../view/imageEditor.view.js";
import { landingPageView } from "../view/lp.view.js";
import { tabView } from "../view/tab.view.js";
import { textEditorView } from "../view/textEditor.view.js";
import { quill } from "./quillEditor.controller.js";

class LandingPageController {
  handleDragEnter(e) {
    e.preventDefault();
  }

  handleDragLeave(e) {
    e.preventDefault();
  }

  handleDragOver(e) {
    e.preventDefault();

    const x = e.clientX;
    const y = e.clientY;
    let selectedItem = document.elementFromPoint(x, y);
    selectedItem = landingPageView.getSelectedItem(selectedItem);
    const selectedItemId = selectedItem.id;
    const draggedItemId = lpModel.draggedItem.id;
    lpModel.swapArrayItems(draggedItemId, selectedItemId);
    landingPageView.render(lpModel.array);
  }

  handleDrop(e) {
    e.preventDefault();
  }

  handleEventDelegation(e) {
    try {
      lpModel.selectedItem = landingPageView.getSelectedItem(e.target);
      lpModel.setMetaData();
    } catch (error) {
      lpModel.selectedItem = null;
      lpModel.selectedItemId = null;
      lpModel.selectedItemType = null;
      lpModel.selectedItemIndex = null;
      lpModel.selectedItemObject = null;
      tabView.closeAllEditors();
      tabView.openAddTab();
    } finally {
      landingPageView.render(lpModel.array);
      // quill.root.innerHTML = "";
      document.querySelector(".quill-editor-container").style.display = "none";
    }
    
    if(e.target.classList.contains("delete-lp-item-btn")) {
      lpModel.deleteItem();
      landingPageView.render(lpModel.array);
      return;
    }
    
    if(e.target.classList.contains("copy-lp-item-btn")) {
      lpModel.copyItem();
      landingPageView.render(lpModel.array);
      return;
    }

    if(lpModel.selectedItemType === "image") {
      tabView.openContentTab();
      imageEditorView.openImageEditor();
      /** load image editor */
      imageEditorView.loadImageEditor(lpModel.array[lpModel.selectedItemIndex]);
      return;
    }
    if(lpModel.selectedItemType === "text") {
      tabView.openContentTab();
      textEditorView.openTextEditor();
      /** load text editor */
      textEditorView.loadTextEditor(lpModel.array[lpModel.selectedItemIndex])

      document.querySelector(".quill-editor-container").style.display = "block";
      quill.root.innerHTML = lpModel.array[lpModel.selectedItemIndex].text;
      
      return;
    }
    if(lpModel.selectedItemType === "bullet") {
      tabView.openContentTab();
      bulletEditorView.openBulletEditor();
      /** load bullet editor */
      bulletEditorView.loadBulletEditor(lpModel.array[lpModel.selectedItemIndex]);

      document.querySelector(".quill-editor-container").style.display = "block";
      quill.root.innerHTML = lpModel.array[lpModel.selectedItemIndex].text;
      
      return;
    }
    if(lpModel.selectedItemType === "cta") {
      tabView.openContentTab();
      ctaEditorView.openCTAEditor();
      /** load bullet editor */
      ctaEditorView.loadCtaEditor(lpModel.array[lpModel.selectedItemIndex]);

      return;
    }
  }
}

const landingPageController = new LandingPageController();

export { landingPageController };