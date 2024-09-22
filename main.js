/**
 * Note: this file is main controller of the app.
 */

import { lpModel } from "./src/js/model/lp.model.js";

import { draggableView } from "./src/js/view/draggable.view.js";
import { draggableController } from "./src/js/controller/draggable.controller.js";

import { droppableOverlayView } from "./src/js/view/droppableOverlay.view.js";
import { droppableOverlayController} from "./src/js/controller/droppableOverlay.controller.js";

import { landingPageView } from "./src/js/view/lp.view.js";
import { landingPageController } from "./src/js/controller/lp.controller.js";

import { imageEditorView } from "./src/js/view/imageEditor.view.js";
import { imageEditorController } from "./src/js/controller/imageEditor.controller.js";

import { textEditorView } from "./src/js/view/textEditor.view.js";
import { textEditorController } from "./src/js/controller/textEditor.controller.js";

import { bulletEditorView } from "./src/js/view/bulletEditor.view.js";
import { bulletEditorController } from "./src/js/controller/bulletEditor.controller.js";

import { quill } from "./src/js/controller/quillEditor.controller.js";


import { ctaEditorView } from "./src/js/view/ctaEditor.view.js";
import { ctaEditorController } from "./src/js/controller/ctaEditor.controller.js";


import { customCSSView } from "./src/js/view/customCss.view.js";
import { customCssController } from "./src/js/controller/customCss.controller.js";


function init() {
  draggableView.onDragEvent(
    draggableController.handleDragStart,
    draggableController.handleDragEnd
  );

  droppableOverlayView.onDropEvent(
    droppableOverlayController.handleDragEnter,
    droppableOverlayController.handleDragLeave,
    droppableOverlayController.handleDragOver,
    droppableOverlayController.handleDrop,
  );

  landingPageView.onEventDelegationEvent(
    landingPageController.handleEventDelegation
  );
  
  landingPageView.onDropEvent(
    landingPageController.handleDragEnter,
    landingPageController.handleDragLeave,
    landingPageController.handleDragOver,
    landingPageController.handleDrop
  );

  imageEditorView.onSetEvent(
    imageEditorController.handleImageUrlInput,
    imageEditorController.handleImageAltTextInput,
    imageEditorController.handleImageWidthInput,
    imageEditorController.handleImageAlignLeft,
    imageEditorController.handleImageAlignCenter,
    imageEditorController.handleImageAlignRight,
    imageEditorController.handleImagePaddingTop,
    imageEditorController.handleImagePaddingRight,
    imageEditorController.handleImagePaddingBottom,
    imageEditorController.handleImagePaddingLeft,
    imageEditorController.handleSelectImageCss,
  );

  textEditorView.onSetEvent(
    textEditorController.handleTextColorInput,
    textEditorController.handleTextAlignLeft,
    textEditorController.handleTextAlignCenter,
    textEditorController.handleTextAlignRight,
    textEditorController.handleFontSizeInput,
    textEditorController.handleLineHeightInput,
    textEditorController.handleTextPaddingTop,
    textEditorController.handleTextPaddingRight,
    textEditorController.handleTextPaddingBottom,
    textEditorController.handleTextPaddingLeft,
    textEditorController.handleSelectTextCss,
  );

  bulletEditorView.onSetEvent(
    bulletEditorController.handleBulletPointColorInput,
    bulletEditorController.handleBulletPointAlignLeft,
    bulletEditorController.handleBulletPointAlignCenter,
    bulletEditorController.handleBulletPointAlignRight,
    bulletEditorController.handleBulletPointFontSizeInput,
    bulletEditorController.handleBulletPointLineHeightInput,
    bulletEditorController.handleBulletPointPaddingTopInput,
    bulletEditorController.handleBulletPointPaddingRightInput,
    bulletEditorController.handleBulletPointPaddingBottomInput,
    bulletEditorController.handleBulletPointPaddingLeftInput,

    bulletEditorController.handleBulletTextColorInput,
    bulletEditorController.handleBulletTextAlignLeft,
    bulletEditorController.handleBulletTextAlignCenter,
    bulletEditorController.handleBulletTextAlignRight,
    bulletEditorController.handleBulletTextFontSizeInput,
    bulletEditorController.handleBulletTextLineHeightInput,
    bulletEditorController.handleBulletTextPaddingTopInput,
    bulletEditorController.handleBulletTextPaddingRightInput,
    bulletEditorController.handleBulletTextPaddingBottomInput,
    bulletEditorController.handleBulletTextPaddingLeftInput,
    
    bulletEditorController.handleBulletSelectCssInput,
  );

  ctaEditorView.onSetEvent(
    ctaEditorController.handleCtaTextInput,
    ctaEditorController.handleCtaFontSizeInput,
    ctaEditorController.handleCtaTextColorInput,
    ctaEditorController.handleCtaBackgroundColorInput,
    ctaEditorController.handleCtaWidthInput,
    ctaEditorController.handleCtaHeightInput,
    ctaEditorController.handleCtaBorderRadiusInput,
    ctaEditorController.handleCtaAlignLeft,
    ctaEditorController.handleCtaAlignCenter,
    ctaEditorController.handleCtaAlignRight,
    ctaEditorController.handleCtaPaddingTopInput,
    ctaEditorController.handleCtaPaddingRightInput,
    ctaEditorController.handleCtaPaddingBottomInput,
    ctaEditorController.handleCtaPaddingLeftInput
  )

  customCSSView.onSetEvent(
    customCssController.handleCustomCssSelectInput,
    customCssController.handleCustomCssClassnameInput,
    customCssController.handleCustomCssCodeInput,
    customCssController.handleCustomCssTypeInput,
    customCssController.handleCustomCssAddButton
  );
  const list = Object.keys(lpModel.customCss);
  customCSSView.loadCustomCssList(list);
}

init();

