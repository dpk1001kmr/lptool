import { landingPageController } from "../controller/lp.controller.js";
import { lpModel } from "../model/lp.model.js";

class LandingPageView {
  constructor() {
    this.html = ``;
    this.css = ``;
  }

  render(array) {
    this.html = ``;
    this.css = ``;

    Object.values(lpModel.customCss).forEach((item, index) => {
      this.css += item.value;
    });

    array.forEach((item, index) => {
      if (item.type === "image") this.css += item.defaultCssCode;
      if (item.type === "text") this.css += item.defaultCssCode;
      if (item.type === "bullet") this.css += item.defaultCssCode;
      // const style = document.querySelector("#lp-css-code").innerHTML = this.css;
    });

    const style = (document.querySelector("#lp-css-code").innerHTML = this.css);

    array.forEach((item, index) => {
      if (item.type === "image") {
        this.renderImage2(item, index);
        return;
      }
      if (item.type === "text") {
        this.renderText2(item, index);
        return;
      }
      if (item.type === "bullet") {
        this.renderBullet2(item, index);
        return;
      }
      if (item.type === "cta") {
        this.renderCTA(item, index);
        return;
      }
    });
    document.querySelector(".droppable").innerHTML = this.html;

    /**
     * Set dragstart and dragend to each lpItem
     * Note: following code for dragstart and dragend
     * ****: are breaking the mvc pattern.(have to fix it later)
     */

    const draggables = document.querySelectorAll('[data-class="draggable"]');
    draggables.forEach((item) => {
      item.addEventListener("dragstart", (e) => {
        lpModel.draggedItem = this.getSelectedItem(e.target);
      });
      item.addEventListener("dragend", function (e) {
        lpModel.draggedItem = null;
      });
    });
  }

  renderImage(item, index) {
    this.html += `
      <div 
        style="
          position: relative;
          border: none;
          border-top: ${
            lpModel.selectedItemIndex === index
              ? "1px solid var(--slate-300)"
              : "none"
          };
          border-bottom: ${
            lpModel.selectedItemIndex === index
              ? "1px solid var(--slate-300)"
              : "none"
          };

          text-align: ${item.css.align};
          padding-top: ${item.css.pt}px;
          padding-right: ${item.css.pr}px;
          padding-bottom: ${item.css.pb}px;
          padding-left: ${item.css.pl}px;
        "
        id="${item.id}" 
        draggable="true" 
        data-class="draggable">
        <img src="${item.src}" style="width:${item.css.width}%" alt="${
      item.alt
    }" data-type="image" />

        ${this.sideButtons(index)}
      </div>
    `;
  }

  renderImage2(item, index) {
    this.html += `
      <div 
        style="
          position: relative;
          border: none;
          border-top: ${
            lpModel.selectedItemIndex === index
              ? "1px solid var(--slate-300)"
              : "none"
          };
          border-bottom: ${
            lpModel.selectedItemIndex === index
              ? "1px solid var(--slate-300)"
              : "none"
          };
        "
        id="${item.id}"
        class="${
          item.selectedCssClassName
            ? item.selectedCssClassName
            : item.defualtCssClassName
        }"
        draggable="true" 
        data-class="draggable">
        <img src="${item.src}" alt="${item.alt}" data-type="image" />

        ${this.sideButtons(index)}
      </div>
    `;
  }

  renderText(item, index) {
    this.html += `
      <div 
        style="
          position: relative;
          border: none;
          border-top: ${
            lpModel.selectedItemIndex === index
              ? "1px solid var(--slate-300)"
              : "none"
          };
          border-bottom: ${
            lpModel.selectedItemIndex === index
              ? "1px solid var(--slate-300)"
              : "none"
          };

          color: ${item.css.color};
          text-align: ${item.css.align};
          font-size: ${item.css.fontSize}px;
          line-height: ${item.css.lineHeight}px;
          padding-top: ${item.css.pt}px;
          padding-right: ${item.css.pr}px;
          padding-bottom: ${item.css.pb}px;
          padding-left: ${item.css.pl}px;
        "
        id="${item.id}" 
        draggable="true" 
        data-class="draggable">
        ${item.text}

        ${this.sideButtons(index)}
      </div>
    `;
  }

  renderText2(item, index) {
    this.html += `
      <div 
        style="
          position: relative;
          border: none;
          border-top: ${
            lpModel.selectedItemIndex === index
              ? "1px solid var(--slate-300)"
              : "none"
          };
          border-bottom: ${
            lpModel.selectedItemIndex === index
              ? "1px solid var(--slate-300)"
              : "none"
          };
        "
        id="${item.id}"
        class="${
          item.selectedCssClassName
            ? item.selectedCssClassName
            : item.defualtCssClassName
        }"
        draggable="true" 
        data-class="draggable">
        ${item.text}

        ${this.sideButtons(index)}
      </div>
    `;
  }

  renderBullet(item, index) {
    this.html += `
      <div 
        style="
          position: relative;
          display:flex;
          border: none;
          border-top: ${
            lpModel.selectedItemIndex === index
              ? "1px solid var(--slate-300)"
              : "none"
          };
          border-bottom: ${
            lpModel.selectedItemIndex === index
              ? "1px solid var(--slate-300)"
              : "none"
          };
        "
        id="${item.id}" 
        draggable="true" 
        data-class="draggable">
        <div
          style="
            color: ${item.bulletPointCss.color};
            text-align: ${item.bulletPointCss.align};
            font-size: ${item.bulletPointCss.fontSize}px;
            line-height: ${item.bulletPointCss.lineHeight}px;
            padding-top: ${item.bulletPointCss.pt}px;
            padding-right: ${item.bulletPointCss.pr}px;
            padding-bottom: ${item.bulletPointCss.pb}px;
            padding-left: ${item.bulletPointCss.pl}px;
        ">
         <p>&bull;</p>
        </div>
        <div 
          style="
            flex-grow: 1;
            color: ${item.bulletTextCss.color};
            text-align: ${item.bulletTextCss.align};
            font-size: ${item.bulletTextCss.fontSize}px;
            line-height: ${item.bulletTextCss.lineHeight}px;
            padding-top: ${item.bulletTextCss.pt}px;
            padding-right: ${item.bulletTextCss.pr}px;
            padding-bottom: ${item.bulletTextCss.pb}px;
            padding-left: ${item.bulletTextCss.pl}px;
        ">
          ${item.text}
        </div>
        ${this.sideButtons(index)}
      </div>
    `;
  }

  renderBullet2(item, index) {
    this.html += `
      <div 
        style="
          position: relative;
          border: none;
          border-top: ${
            lpModel.selectedItemIndex === index
              ? "1px solid var(--slate-300)"
              : "none"
          };
          border-bottom: ${
            lpModel.selectedItemIndex === index
              ? "1px solid var(--slate-300)"
              : "none"
          };
        "
        id="${item.id}" 
        class="${
          item.selectedCssClassName
            ? item.selectedCssClassName
            : item.defualtCssClassName
        }"
        draggable="true" 
        data-class="draggable">
        <div class="bullet">
         <p>&bull;</p>
        </div>
        <div class="text">
          ${item.text}
        </div>
        ${this.sideButtons(index)}
      </div>
    `;
  }

  renderCTA(item, index) {
    this.html += `
      <div 
        style="
          position: relative;
          border: none;
          border-top: ${
            lpModel.selectedItemIndex === index
              ? "1px solid var(--slate-300)"
              : "none"
          };
          border-bottom: ${
            lpModel.selectedItemIndex === index
              ? "1px solid var(--slate-300)"
              : "none"
          };

          text-align: ${item.css.align};
          padding-top: ${item.css.pt}px;
          padding-right: ${item.css.pr}px;
          padding-bottom: ${item.css.pb}px;
          padding-left: ${item.css.pl}px;
        "
        id="${item.id}" 
        draggable="true" 
        data-class="draggable">
        <button
          style="
            border: none;
            outline: none;

            font-size: ${item.css.fontSize}px;
            color: ${item.css.color};
            background-color: ${item.css.backgroundColor};
            width: ${item.css.width}px;
            height: ${item.css.height}px;
            border-radius: ${item.css.borderRadius}px;
            font-weight: normal;
          ">
          ${item.text}
        </button>

        ${this.sideButtons(index)}
      </div>
    `;
  }

  sideButtons(index) {
    return `
    <div
    class="lp-item-edit"
    style="
      display: ${lpModel.selectedItemIndex === index ? "block" : "none"};
      position: absolute;
      top: -3px;
      left: -92px;
    "
    >
    <button class="delete-lp-item-btn">
      Delete
    </button>
    <button class="copy-lp-item-btn">
      Copy
    </button>
    </div>
    `;
  }

  onEventDelegationEvent(handleEventDelegation) {
    document
      .querySelector(".droppable")
      .addEventListener("click", handleEventDelegation);
  }

  getSelectedItem(element) {
    while (!element.parentElement.classList.contains("droppable")) {
      element = element.parentElement;
    }
    return element;
  }

  onDropEvent(handleDragEnter, handleDragLeave, handleDragOver, handleDrop) {
    const droppable = document.querySelector(".droppable");
    droppable.addEventListener("dragenter", handleDragEnter);
    droppable.addEventListener("dragleave", handleDragLeave);
    droppable.addEventListener("dragover", handleDragOver);
    droppable.addEventListener("drop", handleDrop);
  }
}

const landingPageView = new LandingPageView();

export { landingPageView };
