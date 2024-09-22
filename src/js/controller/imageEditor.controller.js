import { lpModel } from "../model/lp.model.js";
import { imageEditorView } from "../view/imageEditor.view.js";
import { landingPageView } from "../view/lp.view.js";

class ImageEditorController {
  handleImageUrlInput(e){
    imageEditorView.setImageDemo(e.target.value);
    lpModel.updateImageSrc(e.target.value);
    landingPageView.render(lpModel.array);
  }

  handleImageAltTextInput(e) {
    lpModel.updateImageAlt(e.target.value);
    landingPageView.render(lpModel.array);
  }

  handleImageWidthInput(e) {
    lpModel.updateImageWidth(e.target.value);
    landingPageView.render(lpModel.array);
  }

  handleImageAlignLeft(e) {
    lpModel.updateImageAlign("left");
    landingPageView.render(lpModel.array);
  }

  handleImageAlignCenter(e) {
    lpModel.updateImageAlign("center");
    landingPageView.render(lpModel.array);
  }

  handleImageAlignRight(e) {
    lpModel.updateImageAlign("right");
    landingPageView.render(lpModel.array);
  }

  handleImagePaddingTop(e) {
    lpModel.updateImagePaddingTop(e.target.value);
    landingPageView.render(lpModel.array);
  }

  handleImagePaddingRight(e) {
    lpModel.updateImagePaddingRight(e.target.value);
    landingPageView.render(lpModel.array);
  }

  handleImagePaddingBottom(e) {
    lpModel.updateImagePaddingBottom(e.target.value);
    landingPageView.render(lpModel.array);
  }

  handleImagePaddingLeft(e) {
    lpModel.updateImagePaddingLeft(e.target.value);
    landingPageView.render(lpModel.array);
  }

  handleSelectImageCss(e) {
    lpModel.updateImageSelectedCssClassName(e.target.value);
    landingPageView.render(lpModel.array);
  }
}

const imageEditorController = new ImageEditorController();

export { imageEditorController };