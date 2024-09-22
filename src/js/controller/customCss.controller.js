import { lpModel } from "../model/lp.model.js";
import { bulletEditorView } from "../view/bulletEditor.view.js";
import { customCSSView } from "../view/customCss.view.js";
import { imageEditorView } from "../view/imageEditor.view.js";
import { landingPageView } from "../view/lp.view.js";
import { textEditorView } from "../view/textEditor.view.js";


class CustomCssController {
  handleCustomCssSelectInput(e) {
    const value = e.target.value;
    if(value === "-1") {
      customCSSView.resetValues();
      return;
    }

    const item = lpModel.customCss[value];
    customCSSView.loadValues(item);
  }
  handleCustomCssClassnameInput(e) {
    console.log(e.target.value);
  }
  handleCustomCssCodeInput(e) {
    console.log(e.target.value);
  }
  handleCustomCssTypeInput(e) {
    console.log(e.target.value);
  }
  handleCustomCssAddButton(e) {
    // if css already exists then update
    // if css does not exist then insert
    const {
      customCssSelectValue,
      customCssClassnameValue,
      customCssCodeValue, 
      customCssTypeValue
    } = customCSSView.getValues();
    lpModel.customCss[customCssClassnameValue] = {
      type: customCssTypeValue,
      value: customCssCodeValue,
    };
    console.log(lpModel.customCss);
    
    // render select custom css dropdown
    const list = Object.keys(lpModel.customCss);
    customCSSView.loadCustomCssList(list);

    // reset values (empty values)
    customCSSView.resetValues();

    // load image css dropdown in image editor tab
    imageEditorView.loadImageCssList(lpModel.customCss);
    // load text css dropdown in text editor tab
    textEditorView.loadTextCssList(lpModel.customCss);
    // load bullet css dropdown in bullet editor tab
    bulletEditorView.loadBulletCssList(lpModel.customCss);
    // load cta css dropdown in cta editor tab

    // render landing page
    landingPageView.render(lpModel.array);

  }
}

const customCssController = new CustomCssController();

export { customCssController };