class BulletEditorView {
  onSetEvent(
    handleBulletPointColorInput,
    handleBulletPointAlignLeft,
    handleBulletPointAlignCenter,
    handleBulletPointAlignRight,
    handleBulletPointFontSizeInput,
    handleBulletPointLineHeightInput,
    handleBulletPointPaddingTopInput,
    handleBulletPointPaddingRightInput,
    handleBulletPointPaddingBottomInput,
    handleBulletPointPaddingLeftInput,

    handleBulletTextColorInput,
    handleBulletTextAlignLeft,
    handleBulletTextAlignCenter,
    handleBulletTextAlignRight,
    handleBulletTextFontSizeInput,
    handleBulletTextLineHeightInput,
    handleBulletTextPaddingTopInput,
    handleBulletTextPaddingRightInput,
    handleBulletTextPaddingBottomInput,
    handleBulletTextPaddingLeftInput,

    handleBulletSelectCssInput,
  ) {
    document.querySelector("#bullet-point-color").addEventListener("input", handleBulletPointColorInput);
    document.querySelector("#bullet-point-align-left").addEventListener("click", handleBulletPointAlignLeft);
    document.querySelector("#bullet-point-align-center").addEventListener("click", handleBulletPointAlignCenter);
    document.querySelector("#bullet-point-align-right").addEventListener("click", handleBulletPointAlignRight);
    document.querySelector("#bullet-point-font-size").addEventListener("input", handleBulletPointFontSizeInput);
    document.querySelector("#bullet-point-line-height").addEventListener("input", handleBulletPointLineHeightInput);
    document.querySelector("#bullet-point-pt").addEventListener("input", handleBulletPointPaddingTopInput);
    document.querySelector("#bullet-point-pr").addEventListener("input", handleBulletPointPaddingRightInput);
    document.querySelector("#bullet-point-pb").addEventListener("input", handleBulletPointPaddingBottomInput);
    document.querySelector("#bullet-point-pl").addEventListener("input", handleBulletPointPaddingLeftInput);
    
    document.querySelector("#bullet-text-color").addEventListener("input", handleBulletTextColorInput);
    document.querySelector("#bullet-text-align-left").addEventListener("click", handleBulletTextAlignLeft);
    document.querySelector("#bullet-text-align-center").addEventListener("click", handleBulletTextAlignCenter);
    document.querySelector("#bullet-text-align-right").addEventListener("click", handleBulletTextAlignRight);
    document.querySelector("#bullet-text-font-size").addEventListener("input", handleBulletTextFontSizeInput);
    document.querySelector("#bullet-text-line-height").addEventListener("input", handleBulletTextLineHeightInput);
    document.querySelector("#bullet-text-pt").addEventListener("input", handleBulletTextPaddingTopInput);
    document.querySelector("#bullet-text-pr").addEventListener("input", handleBulletTextPaddingRightInput);
    document.querySelector("#bullet-text-pb").addEventListener("input", handleBulletTextPaddingBottomInput);
    document.querySelector("#bullet-text-pl").addEventListener("input", handleBulletTextPaddingLeftInput);

    document.querySelector("#select-bullet-css").addEventListener("change", handleBulletSelectCssInput);
  }

  openBulletEditor() {
    document.querySelectorAll(".editor").forEach(function(item) {
      item.style.display = "none";
    });
    document.querySelector(".bullet-editor").style.display = "block";
  }

  loadBulletEditor(item) {
    document.querySelector("#bullet-point-color").value = item.bulletPointCss.color;
    document.querySelector("#bullet-point-font-size").value = item.bulletPointCss.fontSize;
    document.querySelector("#bullet-point-line-height").value = item.bulletPointCss.lineHeight;
    document.querySelector("#bullet-point-pt").value = item.bulletPointCss.pt;
    document.querySelector("#bullet-point-pr").value = item.bulletPointCss.pr;
    document.querySelector("#bullet-point-pb").value = item.bulletPointCss.pb;
    document.querySelector("#bullet-point-pl").value = item.bulletPointCss.pl;

    document.querySelector("#bullet-text-color").value = item.bulletTextCss.color;
    document.querySelector("#bullet-text-font-size").value = item.bulletTextCss.fontSize;
    document.querySelector("#bullet-text-line-height").value = item.bulletTextCss.lineHeight;
    document.querySelector("#bullet-text-pt").value = item.bulletTextCss.pt;
    document.querySelector("#bullet-text-pr").value = item.bulletTextCss.pr;
    document.querySelector("#bullet-text-pb").value = item.bulletTextCss.pb;
    document.querySelector("#bullet-text-pl").value = item.bulletTextCss.pl;
  }

  loadBulletCssList(customCss) {
    const customCssArray = Object.entries(customCss);
    let list = customCssArray.filter(function(item, index) {
        return item[1].type === "bullet";
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
    document.querySelector("#select-bullet-css").innerHTML = html;
  }
}

const bulletEditorView = new BulletEditorView();

export { bulletEditorView };