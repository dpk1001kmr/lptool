class TextEditorView {
  onSetEvent(
    handleTextColorInput,
    handleTextAlignLeft,
    handleTextAlignCenter,
    handleTextAlignRight,
    handleFontSizeInput,
    handleLineHeightInput,
    handleTextPaddingTop,
    handleTextPaddingRight,
    handleTextPaddingBottom,
    handleTextPaddingLeft,
    handleSelectTextCss,
  ) {
    document.querySelector("#text-color").addEventListener("input", handleTextColorInput);
    document.querySelector("#text-align-left").addEventListener("click", handleTextAlignLeft);
    document.querySelector("#text-align-center").addEventListener("click", handleTextAlignCenter);
    document.querySelector("#text-align-right").addEventListener("click", handleTextAlignRight);
    document.querySelector("#text-font-size").addEventListener("input", handleFontSizeInput);
    document.querySelector("#text-line-height").addEventListener("input", handleLineHeightInput);
    document.querySelector("#text-pt").addEventListener("input", handleTextPaddingTop);
    document.querySelector("#text-pr").addEventListener("input", handleTextPaddingRight);
    document.querySelector("#text-pb").addEventListener("input", handleTextPaddingBottom);
    document.querySelector("#text-pl").addEventListener("input", handleTextPaddingLeft);
    document.querySelector("#select-text-css").addEventListener("change", handleSelectTextCss);
  }
  openTextEditor() {
    document.querySelectorAll(".editor").forEach(function(item) {
      item.style.display = "none";
    });
    document.querySelector(".text-editor").style.display = "block";
  }
  loadTextEditor(item) {
    document.querySelector("#text-color").value = item.css.color;
    document.querySelector("#text-font-size").value = item.css.fontSize;
    document.querySelector("#text-line-height").value = item.css.lineHeight;
    document.querySelector("#text-pt").value = item.css.pt;
    document.querySelector("#text-pr").value = item.css.pr;
    document.querySelector("#text-pb").value = item.css.pb;
    document.querySelector("#text-pl").value = item.css.pl;
  }

  loadTextCssList(customCss) {
    const customCssArray = Object.entries(customCss);
    let list = customCssArray.filter(function(item, index) {
        return item[1].type === "text";
    });
    list = list.map(function(item, index) {
      return item[0];
    });
    
    let html = `<option value="default">default</option>`;
    list.forEach(function(item, index) {
      html += `
        <option value="${item}">${item}</option>
      `;
    });
    document.querySelector("#select-text-css").innerHTML = html;
  }
}

const textEditorView = new TextEditorView();

export { textEditorView };