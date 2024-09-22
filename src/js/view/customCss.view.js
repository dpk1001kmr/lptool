class CustomCSSView {
  onSetEvent(
    handleCustomCssSelectInput,
    handleCustomCssClassnameInput,
    handleCustomCssCodeInput,
    handleCustomCssTypeInput,
    handleCustomCssAddButton
  ) {
    document.querySelector("#custom-css-select").addEventListener("change", handleCustomCssSelectInput);
    document.querySelector("#custom-css-classname").addEventListener("input", handleCustomCssClassnameInput);
    document.querySelector("#custom-css-code").addEventListener("input", handleCustomCssCodeInput);
    document.querySelector("#custom-css-type").addEventListener("change", handleCustomCssTypeInput);
    document.querySelector("#custom-css-add-btn").addEventListener("click", handleCustomCssAddButton);
  }

  loadCustomCssList(list) {
    const str = list.map(function(item, index) {
      return `<option value="${item}">${item}</option>`
    }).join("");
    const customCssSelectInputHtml = `
    <option selected value="-1">Select Custom CSS</option>
    ${str}
    `;
    document.querySelector("#custom-css-select").innerHTML = customCssSelectInputHtml;
  }

  getValues() {
    return {
      customCssSelectValue: document.querySelector("#custom-css-select").value,
      customCssClassnameValue: document.querySelector("#custom-css-classname").value,
      customCssCodeValue: document.querySelector("#custom-css-code").value,
      customCssTypeValue: document.querySelector("#custom-css-type").value,
    }
  }
  resetValues() {
    // document.querySelector("#custom-css-select").value = "";
    document.querySelector("#custom-css-classname").value = "";
    document.querySelector("#custom-css-code").value = "";
    document.querySelector("#custom-css-type").value = "-1";
  }

  loadValues(item) {
    document.querySelector("#custom-css-classname").value = document.querySelector("#custom-css-select").value;
    document.querySelector("#custom-css-code").value = item.value;
    document.querySelector("#custom-css-type").value = item.type;
  }
 }

const customCSSView = new CustomCSSView()

export { customCSSView };