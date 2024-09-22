class CTAEditorView {
  onSetEvent(
    handleCtaTextInput,
    handleCtaFontSizeInput,
    handleCtaTextColorInput,
    handleCtaBackgroundColorInput,
    handleCtaWidthInput,
    handleCtaHeightInput,
    handleCtaBorderRadiusInput,
    handleCtaAlignLeft,
    handleCtaAlignCenter,
    handleCtaAlignRight,
    handleCtaPaddingTopInput,
    handleCtaPaddingRightInput,
    handleCtaPaddingBottomInput,
    handleCtaPaddingLeftInput
  ) {
    document.querySelector("#cta-text").addEventListener("input", handleCtaTextInput);
    document.querySelector("#cta-font-size").addEventListener("input", handleCtaFontSizeInput);
    document.querySelector("#cta-text-color").addEventListener("input", handleCtaTextColorInput);
    document.querySelector("#cta-background-color").addEventListener("input", handleCtaBackgroundColorInput);
    document.querySelector("#cta-width").addEventListener("input", handleCtaWidthInput);
    document.querySelector("#cta-height").addEventListener("input", handleCtaHeightInput);
    document.querySelector("#cta-border-radius").addEventListener("input", handleCtaBorderRadiusInput);
    document.querySelector("#cta-align-left").addEventListener("click", handleCtaAlignLeft);
    document.querySelector("#cta-align-center").addEventListener("click", handleCtaAlignCenter);
    document.querySelector("#cta-align-right").addEventListener("click", handleCtaAlignRight);
    document.querySelector("#cta-pt").addEventListener("input", handleCtaPaddingTopInput);
    document.querySelector("#cta-pr").addEventListener("input", handleCtaPaddingRightInput);
    document.querySelector("#cta-pb").addEventListener("input", handleCtaPaddingBottomInput);
    document.querySelector("#cta-pl").addEventListener("input", handleCtaPaddingLeftInput);
  }

  openCTAEditor() {
    document.querySelectorAll(".editor").forEach(function(item) {
      item.style.display = "none";
    });
    document.querySelector(".cta-editor").style.display = "block";
  }

  loadCtaEditor(item) {
    document.querySelector("#cta-text").value = item.text;
    document.querySelector("#cta-font-size").value = item.css.fontSize;
    document.querySelector("#cta-text-color").value = item.css.color;
    document.querySelector("#cta-background-color").value = item.css.backgroundColor;
    document.querySelector("#cta-width").value = item.css.width;
    document.querySelector("#cta-height").value = item.css.height;
    document.querySelector("#cta-border-radius").value = item.css.borderRadius;
    document.querySelector("#cta-pt").value = item.css.pt;
    document.querySelector("#cta-pr").value = item.css.pr;
    document.querySelector("#cta-pb").value = item.css.pb;
    document.querySelector("#cta-pl").value = item.css.pl;
  }
}

const ctaEditorView = new CTAEditorView();

export { ctaEditorView };