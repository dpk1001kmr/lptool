import { lpModel } from "../model/lp.model.js";
import { landingPageView } from "../view/lp.view.js";

class TextEditorController {
  handleTextColorInput(e) {
    lpModel.updateTextColor(e.target.value);
    landingPageView.render(lpModel.array);
  }

  handleTextAlignLeft(e) {
    lpModel.updateTextAlign("left");
    landingPageView.render(lpModel.array);
  }
  
  handleTextAlignCenter(e) {
    lpModel.updateTextAlign("center");
    landingPageView.render(lpModel.array);
  }
  
  handleTextAlignRight(e) {
    lpModel.updateTextAlign("right");
    landingPageView.render(lpModel.array);
  }

  handleFontSizeInput(e) {
    lpModel.updateTextFontSize(e.target.value);
    landingPageView.render(lpModel.array);
  }

  handleLineHeightInput(e) {
    lpModel.updateTextLineHeight(e.target.value);
    landingPageView.render(lpModel.array);
  }

  handleTextPaddingTop(e) {
    lpModel.updateTextPaddingTop(e.target.value);
    landingPageView.render(lpModel.array);
  }

  handleTextPaddingRight(e) {
    lpModel.updateTextPaddingRight(e.target.value);
    landingPageView.render(lpModel.array);
  }
  
  handleTextPaddingBottom(e) {
    lpModel.updateTextPaddingBottom(e.target.value);
    landingPageView.render(lpModel.array);
  }
  
  handleTextPaddingLeft(e) {
    lpModel.updateTextPaddingLeft(e.target.value);
    landingPageView.render(lpModel.array);
  }

  handleSelectTextCss(e) {
    lpModel.updateTextSelectedCssClassName(e.target.value);
    landingPageView.render(lpModel.array);
  }
}

const textEditorController = new TextEditorController();

export { textEditorController };