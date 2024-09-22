import { lpModel } from "../model/lp.model.js";
import { landingPageView } from "../view/lp.view.js";

class CTAEditorController {
  handleCtaTextInput(e) {
    lpModel.updateCtaText(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleCtaFontSizeInput(e) {
    lpModel.updateCtaFontSize(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleCtaTextColorInput(e) {
    lpModel.updateCtaColor(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleCtaBackgroundColorInput(e) {
    lpModel.updateCtaBackgroundColor(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleCtaWidthInput(e) {
    lpModel.updateCtaWidth(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleCtaHeightInput(e) {
    lpModel.updateCtaHeight(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleCtaBorderRadiusInput(e) {
    lpModel.updateCtaBorderRadius(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleCtaAlignLeft(e) {
    lpModel.updateCtaAlign("left");
    landingPageView.render(lpModel.array);
  }
  handleCtaAlignCenter(e) {
    lpModel.updateCtaAlign("center");
    landingPageView.render(lpModel.array);
  }
  handleCtaAlignRight(e) {
    lpModel.updateCtaAlign("right");
    landingPageView.render(lpModel.array);
  }
  handleCtaPaddingTopInput(e) {
    lpModel.updateCtaPaddingTop(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleCtaPaddingRightInput(e) {
    lpModel.updateCtaPaddingRight(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleCtaPaddingBottomInput(e) {
    lpModel.updateCtaPaddingBottom(e.target.value);
    landingPageView.render(lpModel.array);
  }
  handleCtaPaddingLeftInput(e) {
    lpModel.updateCtaPaddingLeft(e.target.value);
    landingPageView.render(lpModel.array);
  }
}

const ctaEditorController = new CTAEditorController();

export { ctaEditorController };