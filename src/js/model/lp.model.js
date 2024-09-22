/**
 * this class defines the model data structure and its methods for the lp
 */
class LandingPageModel {
  constructor() {
    this.draggedItem = null;
    this.selectedItem = null;
    this.selectedItemId = null;
    this.selectedItemType = null;
    this.selectedItemIndex = null;

    this.customCss = {};
    this.array = [];
  }

  /**
   * this method sets meta data for the selected lp element
   */
  setMetaData() {
    this.selectedItemId = this.selectedItem.id;
    this.selectedItemType = this.selectedItemId.split("-")[0];
    this.selectedItemIndex = this.array.findIndex((item) => {
      return item.id === this.selectedItemId;
    });
  }


  /**
   * this method swaps the position of the array items while dragging the lp element
   * @param {*index of first array} id1 
   * @param {*index of second array} id2 
   */
  swapArrayItems(id1, id2) {
    const index1 = this.array.findIndex(function(item) {
      return item.id === id1;
    });
    const index2 = this.array.findIndex(function(item) {
      return item.id === id2;
    });

    const arr = [...this.array];

    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    this.array = [...arr];
  }

  /**
   * this methos inserts lp item by comparing there type for example image or text or bullet etc.
   * @returns nothing
   */
  insertItem() {
    if(this.draggedItem === "image") { this.insertImage(); return;}
    if(this.draggedItem === "text") { this.insertText(); return;}
    if(this.draggedItem === "bullet") { this.insertBullet(); return;}
    if(this.draggedItem === "cta") { this.insertCTA(); return;}
  }

  /**
   * this method inserts an image item in the array
   */
  insertImage() {
    this.array.push({
      id: "image" + "-" + Date.now(),
      type: "image",
      src: "http://visionayrsolutions.com/sstcp/ss_at/at/VMRay-Inc-Logo.png",
      alt: "image",
      css: {
        width: 30,
        align: "left",
        pt: 0,
        pr: 0,
        pb: 0,
        pl: 0,
      },
      defaultCssCode: "",
      defualtCssClassName: "",
      selectedCssClassName: "",
    });

    this.generateImageDefaultCss();
  }


  /**
   * this method generates default css code for newly inserted image item
   */
  generateImageDefaultCss () {
    const index = this.array.length - 1;
    const imageItem = this.array[index];
    
    let css = `
      .${imageItem.id}-default {
          text-align: ${imageItem.css.align};
          padding-top: ${imageItem.css.pt}px;
          padding-right: ${imageItem.css.pr}px;
          padding-bottom: ${imageItem.css.pb}px;
          padding-left: ${imageItem.css.pl}px;
      }
      .${imageItem.id}-default img {
        width: ${imageItem.css.width}%;
      }
    `;

    this.array[index].defaultCssCode = css;
    this.array[index].defualtCssClassName = `${imageItem.id}-default`;
    console.log(this.array);
  }

  /**
   * this method updates the default css code for the selected image item
   */
  updateImageDefaultCss () {
    const index = this.selectedItemIndex;
    const imageItem = this.array[index];
    
    let css = `
      .${imageItem.id}-default {
          text-align: ${imageItem.css.align};
          padding-top: ${imageItem.css.pt}px;
          padding-right: ${imageItem.css.pr}px;
          padding-bottom: ${imageItem.css.pb}px;
          padding-left: ${imageItem.css.pl}px;
      }
      .${imageItem.id}-default img {
        width: ${imageItem.css.width}%;
      }
    `;

    this.array[index].defaultCssCode = css;
    this.array[index].defualtCssClassName = `${imageItem.id}-default`;
    console.log(this.array);
  }

  /**
   * this method updates the selected css class name based on its argument
   * @param {*css class name} value 
   */
  updateImageSelectedCssClassName(value) {
    if(value === "default") {
      this.array[this.selectedItemIndex].selectedCssClassName = this.array[this.selectedItemIndex].defualtCssClassName;
    } else {
      this.array[this.selectedItemIndex].selectedCssClassName = value;
    }
  }

  /**
   * this methods updates the image link for the selected image item
   * @param {*image link} value 
   */
  updateImageSrc(value) {
    const updatedObject = {
      ...this.array[this.selectedItemIndex],
      src: value,
    }
    this.array[this.selectedItemIndex] = updatedObject;
    console.log(this.array);
  }

  /**
   * this method updates the image alt value for the selected image item
   * @param {*image alt value} value 
   */
  updateImageAlt(value) {
    const updatedObject = {
      ...this.array[this.selectedItemIndex],
      alt: value,
    }
    this.array[this.selectedItemIndex] = updatedObject;
    console.log(this.array);
  }

  /**
   * this method updates the image width value for the selected image item
   * @param {*image width value} value 
   */
  updateImageWidth(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            width: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateImageDefaultCss();
  }

  /**
   * this method updates the image alignment value for the selected image item
   * @param {*image alignment value (left | center | right)} value 
   */
  updateImageAlign(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            align: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateImageDefaultCss();
  }

  /**
   * this method updates the image container padding-top value for the selected image item
   * @param {*image container padding-top value} value 
   */
  updateImagePaddingTop(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            pt: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateImageDefaultCss();
  }

  /**
   * this method updates the image container padding-right value for the selected image item
   * @param {*image container padding-right value} value 
   */
  updateImagePaddingRight(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            pr: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateImageDefaultCss();
  }

  /**
   * this method updates the image container padding-bottom value for the selected image item
   * @param {*image container padding-bottom value} value 
   */
  updateImagePaddingBottom(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            pb: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateImageDefaultCss();
  }

  /**
   * this method updates the image container padding-left value for the selected image item
   * @param {*image container padding-left value} value 
   */
  updateImagePaddingLeft(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            pl: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateImageDefaultCss();
  }


  /**
   * this method inserts an text item in the array
   */
  insertText() {
    this.array.push({
      id: "text" + "-" + Date.now(),
      type: "text",
      text: "<p>This is a text item.</p>",
      css: {
        color: "#000000",
        align: "left",
        fontSize: "14",
        lineHeight: "21",
        pt: 0,
        pr: 0,
        pb: 0,
        pl: 0,
      },
      defaultCssCode: "",
      defualtCssClassName: "",
      selectedCssClassName: "",
    })
    this.generateTextDefaultCss ()
  }

  /**
   * this method generates default css code for newly inserted text item
   */
  generateTextDefaultCss () {
    const index = this.array.length - 1;
    const textItem = this.array[index];
    
    let css = `
      .${textItem.id}-default {
          color: ${textItem.css.color};
          text-align: ${textItem.css.align};
          font-size: ${textItem.css.fontSize}px;
          line-height: ${textItem.css.lineHeight}px;
          padding-top: ${textItem.css.pt}px;
          padding-right: ${textItem.css.pr}px;
          padding-bottom: ${textItem.css.pb}px;
          padding-left: ${textItem.css.pl}px;
      }
    `;

    this.array[index].defaultCssCode = css;
    this.array[index].defualtCssClassName = `${textItem.id}-default`;
    console.log(this.array);
  }

  /**
   * this method updates the default css code for the selected text item
   */
  updateTextDefaultCss () {
    const index = this.selectedItemIndex;
    const textItem = this.array[index];
    
    let css = `
      .${textItem.id}-default {
          color: ${textItem.css.color};
          text-align: ${textItem.css.align};
          font-size: ${textItem.css.fontSize}px;
          line-height: ${textItem.css.lineHeight}px;
          padding-top: ${textItem.css.pt}px;
          padding-right: ${textItem.css.pr}px;
          padding-bottom: ${textItem.css.pb}px;
          padding-left: ${textItem.css.pl}px;
      }
    `;

    this.array[index].defaultCssCode = css;
    this.array[index].defualtCssClassName = `${textItem.id}-default`;
    console.log(this.array);
  }

  /**
   * this method updates the selected css class name based on its argument for the selected text item
   * @param {*css class name} value 
   */  
  updateTextSelectedCssClassName(value) {
    if(value === "default") {
      this.array[this.selectedItemIndex].selectedCssClassName = this.array[this.selectedItemIndex].defualtCssClassName;
    } else {
      this.array[this.selectedItemIndex].selectedCssClassName = value;
    }
  }

  /**
   * this method updates the text color based on its argument for the selected text item
   * @param {*color value} value 
   */
  updateTextColor(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            color: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateTextDefaultCss();
  }

  updateTextAlign(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            align: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateTextDefaultCss();
  }

  updateTextFontSize(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            fontSize: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateTextDefaultCss();
  }

  updateTextLineHeight(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            lineHeight: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateTextDefaultCss();
  }

  updateTextPaddingTop(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            pt: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateTextDefaultCss();
  }
  updateTextPaddingRight(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            pr: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateTextDefaultCss();
  }
  updateTextPaddingBottom(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            pb: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateTextDefaultCss();
  }
  updateTextPaddingLeft(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            pl: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateTextDefaultCss();
  }

  /*
  updateTextConent(text) {
    this.selectedItemObject.text = text;
    this.array[this.selectedItemIndex] = this.selectedItemObject;
  }
  */

  updateTextConent(text) {
    // this.selectedItemObject.text = text;
    this.array[this.selectedItemIndex].text = text;
  }

  insertBullet() {
    this.array.push({
      id: "bullet" + "-" + Date.now(),
      type: "bullet",
      text: "<p>This is a bullet item.</p>",
      bulletPointCss: {
        color: "#000000",
        align: "left",
        fontSize: "14",
        lineHeight: "21",
        pt: 0,
        pr: 0,
        pb: 0,
        pl: 0,
      },
      bulletTextCss: {
        color: "#000000",
        align: "left",
        fontSize: "14",
        lineHeight: "21",
        pt: 0,
        pr: 0,
        pb: 0,
        pl: 0
      },
      defaultCssCode: "",
      defualtCssClassName: "",
      selectedCssClassName: "",
    });
    this.generateBulletDefaultCss();
    console.log(this.array);
  }

  /**
   * this method generates default css code for newly inserted bullet item
   */
  generateBulletDefaultCss () {
    const index = this.array.length - 1;
    const bulletItem = this.array[index];
    
    let css = `
      .${bulletItem.id}-default {
        display: flex;
      }
      .${bulletItem.id}-default .bullet {
        color: ${bulletItem.bulletPointCss.color};
        text-align: ${bulletItem.bulletPointCss.align};
        font-size: ${bulletItem.bulletPointCss.fontSize}px;
        line-height: ${bulletItem.bulletPointCss.lineHeight}px;
        padding-top: ${bulletItem.bulletPointCss.pt}px;
        padding-right: ${bulletItem.bulletPointCss.pr}px;
        padding-bottom: ${bulletItem.bulletPointCss.pb}px;
        padding-left: ${bulletItem.bulletPointCss.pl}px;
      }
      .${bulletItem.id}-default .text {
        color: ${bulletItem.bulletTextCss.color};
        text-align: ${bulletItem.bulletTextCss.align};
        font-size: ${bulletItem.bulletTextCss.fontSize}px;
        line-height: ${bulletItem.bulletTextCss.lineHeight}px;
        padding-top: ${bulletItem.bulletTextCss.pt}px;
        padding-right: ${bulletItem.bulletTextCss.pr}px;
        padding-bottom: ${bulletItem.bulletTextCss.pb}px;
        padding-left: ${bulletItem.bulletTextCss.pl}px;
        flex-grow: 1;
      }
    `;

    this.array[index].defaultCssCode = css;
    this.array[index].defualtCssClassName = `${bulletItem.id}-default`;
    console.log(this.array);
  }

  /**
   * this method updates the default css code for the selected bullet item
   */
  updateBulletDefaultCss () {
    const index = this.selectedItemIndex;
    const bulletItem = this.array[index];
    
    let css = `
      .${bulletItem.id}-default {
        display: flex;
      }
      .${bulletItem.id}-default .bullet {
        color: ${bulletItem.bulletPointCss.color};
        text-align: ${bulletItem.bulletPointCss.align};
        font-size: ${bulletItem.bulletPointCss.fontSize}px;
        line-height: ${bulletItem.bulletPointCss.lineHeight}px;
        padding-top: ${bulletItem.bulletPointCss.pt}px;
        padding-right: ${bulletItem.bulletPointCss.pr}px;
        padding-bottom: ${bulletItem.bulletPointCss.pb}px;
        padding-left: ${bulletItem.bulletPointCss.pl}px;
      }
      .${bulletItem.id}-default .text {
        color: ${bulletItem.bulletTextCss.color};
        text-align: ${bulletItem.bulletTextCss.align};
        font-size: ${bulletItem.bulletTextCss.fontSize}px;
        line-height: ${bulletItem.bulletTextCss.lineHeight}px;
        padding-top: ${bulletItem.bulletTextCss.pt}px;
        padding-right: ${bulletItem.bulletTextCss.pr}px;
        padding-bottom: ${bulletItem.bulletTextCss.pb}px;
        padding-left: ${bulletItem.bulletTextCss.pl}px;
        flex-grow: 1;
      }
    `;

    this.array[index].defaultCssCode = css;
    this.array[index].defualtCssClassName = `${bulletItem.id}-default`;
    console.log(this.array);
  }

  /**
   * this method updates the selected css class name based on its argument
   * @param {*css class name} value 
   */
  updateBulletSelectedCssClassName(value) {
    if(value === "default") {
      this.array[this.selectedItemIndex].selectedCssClassName = this.array[this.selectedItemIndex].defualtCssClassName;
    } else {
      this.array[this.selectedItemIndex].selectedCssClassName = value;
    }
  }

  updateBulletPointColor(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        bulletPointCss: {
            ...item.bulletPointCss,
            color: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateBulletDefaultCss();
  }
  updateBulletPointAlign(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        bulletPointCss: {
            ...item.bulletPointCss,
            align: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateBulletDefaultCss();
  }
  updateBulletPointFontSize(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        bulletPointCss: {
            ...item.bulletPointCss,
            fontSize: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateBulletDefaultCss();
  }
  updateBulletPointLineHeight(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        bulletPointCss: {
            ...item.bulletPointCss,
            lineHeight: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateBulletDefaultCss();
  }
  updateBulletPointPaddingTop(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        bulletPointCss: {
            ...item.bulletPointCss,
            pt: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateBulletDefaultCss();
  }
  updateBulletPointPaddingRight(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        bulletPointCss: {
            ...item.bulletPointCss,
            pr: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateBulletDefaultCss();
  }
  updateBulletPointPaddingBottom(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        bulletPointCss: {
            ...item.bulletPointCss,
            pb: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateBulletDefaultCss();
  }
  updateBulletPointPaddingLeft(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        bulletPointCss: {
            ...item.bulletPointCss,
            pl: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateBulletDefaultCss();
  }

  updateBulletTextColor(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        bulletTextCss: {
            ...item.bulletTextCss,
            color: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateBulletDefaultCss();
  }
  updateBulletTextAlign(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        bulletTextCss: {
            ...item.bulletTextCss,
            align: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateBulletDefaultCss();
  }
  updateBulletTextFontSize(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        bulletTextCss: {
            ...item.bulletTextCss,
            fontSize: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateBulletDefaultCss();
  }
  updateBulletTextLineHeight(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        bulletTextCss: {
            ...item.bulletTextCss,
            lineHeight: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateBulletDefaultCss();
  }
  updateBulletTextPaddingTop(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        bulletTextCss: {
            ...item.bulletTextCss,
            pt: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateBulletDefaultCss();
  }
  updateBulletTextPaddingRight(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        bulletTextCss: {
            ...item.bulletTextCss,
            pr: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateBulletDefaultCss();
  }
  updateBulletTextPaddingBottom(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        bulletTextCss: {
            ...item.bulletTextCss,
            pb: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateBulletDefaultCss();
  }
  updateBulletTextPaddingLeft(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        bulletTextCss: {
            ...item.bulletTextCss,
            pl: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    this.updateBulletDefaultCss();
  }

  insertCTA() {
    this.array.push({
      id: "cta" + "-" + Date.now(),
      type: "cta",
      text: "Submit",
      css: {
        fontSize: 14,
        color: "#ffffff",
        backgroundColor: "#000000",
        width: 180,
        height: 40,
        borderRadius: 0,
        align: "left",
        pt: 0,
        pr: 0,
        pb: 0,
        pl: 0,
      }
    });
    console.log(this.array);
    console.log("CTA Inserted");
  }

  updateCtaText(value) {
    const updatedObject = {
      ...this.array[this.selectedItemIndex],
      text: value,
    }
    this.array[this.selectedItemIndex] = updatedObject;
    console.log(this.array);
  }
  updateCtaFontSize(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            fontSize: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    console.log(this.array);
  }
  updateCtaColor(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            color: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    console.log(this.array);
  }
  updateCtaBackgroundColor(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            backgroundColor: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    console.log(this.array);
  }
  updateCtaWidth(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            width: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    console.log(this.array);
  }
  updateCtaHeight(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            height: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    console.log(this.array);
  }
  updateCtaBorderRadius(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            borderRadius: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    console.log(this.array);
  }
  updateCtaAlign(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            align: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    console.log(this.array);
  }
  updateCtaPaddingTop(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            pt: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    console.log(this.array);
  }
  updateCtaPaddingRight(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            pr: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    console.log(this.array);
  }
  updateCtaPaddingBottom(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            pb: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    console.log(this.array);
  }
  updateCtaPaddingLeft(value) {
    let item = this.array[this.selectedItemIndex];
    item = {
        ...item,
        css: {
            ...item.css,
            pl: value,
        }
    }
    this.array[this.selectedItemIndex] = item;
    console.log(this.array);
  }

  deleteItem() {
    this.array = this.array.filter((item, index) => {
      return item.id !== this.selectedItemId;
    });
    this.selectedItem = null;
    this.selectedItemId = null;
    this.selectedItemType = null;
    this.selectedItemIndex = null;
    // this.selectedItemObject = null;
  }

  copyItem() {
    const selectedItemObject = this.array.find((item, index) => {
      return item.id === this.selectedItemId;
    });
    let selectedItemObjectClone = JSON.parse(JSON.stringify(selectedItemObject));
    selectedItemObjectClone = {...selectedItemObjectClone, id:selectedItemObject.type + "-" + Date.now()}
    this.array.push(selectedItemObjectClone);
  }
}

const lpModel = new LandingPageModel();

export { lpModel };