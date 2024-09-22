import { lpModel } from "../model/lp.model";
import { landingPageView } from "../view/lp.view";

class BulletEditorController {
  handleBulletPointColorInput(e) {
    lpModel.updateBulletPointColor(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleBulletPointAlignLeft(e) {
    lpModel.updateBulletPointAlign("left");
    landingPageView.render(lpModel.array);
  }
  handleBulletPointAlignCenter(e) {
    lpModel.updateBulletPointAlign("center");
    landingPageView.render(lpModel.array);
  }
  handleBulletPointAlignRight(e) {
    lpModel.updateBulletPointAlign("right");
    landingPageView.render(lpModel.array);
  }
  handleBulletPointFontSizeInput(e) {
    lpModel.updateBulletPointFontSize(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleBulletPointLineHeightInput(e) {
    lpModel.updateBulletPointLineHeight(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleBulletPointPaddingTopInput(e) {
    lpModel.updateBulletPointPaddingTop(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleBulletPointPaddingRightInput(e) {
    lpModel.updateBulletPointPaddingRight(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleBulletPointPaddingBottomInput(e) {
    lpModel.updateBulletPointPaddingBottom(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleBulletPointPaddingLeftInput(e) {
    lpModel.updateBulletPointPaddingLeft(e.target.value);
    landingPageView.render(lpModel.array);
  }
  
  handleBulletTextColorInput(e) {
    lpModel.updateBulletTextColor(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleBulletTextAlignLeft(e) {
    lpModel.updateBulletTextAlign("left");
    landingPageView.render(lpModel.array);
  }
  handleBulletTextAlignCenter(e) {
    lpModel.updateBulletTextAlign("center");
    landingPageView.render(lpModel.array);
  }
  handleBulletTextAlignRight(e) {
    lpModel.updateBulletTextAlign("right");
    landingPageView.render(lpModel.array);
  }
  handleBulletTextFontSizeInput(e) {
    lpModel.updateBulletTextFontSize(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleBulletTextLineHeightInput(e) {
    lpModel.updateBulletTextLineHeight(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleBulletTextPaddingTopInput(e) {
    lpModel.updateBulletTextPaddingTop(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleBulletTextPaddingRightInput(e) {
    lpModel.updateBulletTextPaddingRight(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleBulletTextPaddingBottomInput(e) {
    lpModel.updateBulletTextPaddingBottom(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleBulletTextPaddingLeftInput(e) {
    lpModel.updateBulletTextPaddingLeft(e.target.value);
    landingPageView.render(lpModel.array);
  }

  handleBulletSelectCssInput(e) {
    lpModel.updateBulletSelectedCssClassName(e.target.value);
    landingPageView.render(lpModel.array);
  }

}

const bulletEditorController = new BulletEditorController();

export { bulletEditorController };