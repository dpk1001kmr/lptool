class ImageEditorView {
  onSetEvent(
    handleImageUrlInput,
    handleImageAltTextInput,
    handleImageWidthInput,
    handleImageAlignLeft,
    handleImageAlignCenter,
    handleImageAlignRight,
    handleImagePaddingTop,
    handleImagePaddingRight,
    handleImagePaddingBottom,
    handleImagePaddingLeft,
    handleSelectImageCss
  ) {
    document.querySelector("#image-url").addEventListener("input", handleImageUrlInput);
    document.querySelector("#image-alt-text").addEventListener("input", handleImageAltTextInput);
    document.querySelector("#image-width").addEventListener("input", handleImageWidthInput);
    document.querySelector("#image-align-left").addEventListener("click", handleImageAlignLeft);
    document.querySelector("#image-align-center").addEventListener("click", handleImageAlignCenter);
    document.querySelector("#image-align-right").addEventListener("click", handleImageAlignRight);
    document.querySelector("#image-pt").addEventListener("input", handleImagePaddingTop);
    document.querySelector("#image-pr").addEventListener("input", handleImagePaddingRight);
    document.querySelector("#image-pb").addEventListener("input", handleImagePaddingBottom);
    document.querySelector("#image-pl").addEventListener("input", handleImagePaddingLeft);
    document.querySelector("#select-image-css").addEventListener("change", handleSelectImageCss);
  }

  setImageDemo(src) {
    document.querySelector("#image-demo").src = src;
  }

  openImageEditor() {
    document.querySelectorAll(".editor").forEach(function(item) {
      item.style.display = "none";
    });
    document.querySelector(".image-editor").style.display = "block";
  }

  loadImageEditor(item) {
    this.setImageDemo(item.src);
    document.querySelector("#image-url").value = item.src;
    document.querySelector("#image-alt-text").value = item.alt;
    document.querySelector("#image-width").value = item.css.width;
    document.querySelector("#image-pt").value = item.css.pt;
    document.querySelector("#image-pr").value = item.css.pr;
    document.querySelector("#image-pb").value = item.css.pb;
    document.querySelector("#image-pl").value = item.css.pl;
  }

  loadImageCssList(customCss) {
    const customCssArray = Object.entries(customCss);
    let list = customCssArray.filter(function(item, index) {
        return item[1].type === "image";
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
    document.querySelector("#select-image-css").innerHTML = html;
  }
}

const imageEditorView = new ImageEditorView();

export { imageEditorView };