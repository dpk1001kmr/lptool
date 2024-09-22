import Quill from 'quill';
import { lpModel } from '../model/lp.model';
import { landingPageView } from '../view/lp.view';

// const options = {
//   debug: 'info',
//   modules: {
//     toolbar: true,
//   },
//   placeholder: 'Compose an epic...',
//   theme: 'snow'
// };

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  // ['blockquote', 'code-block'],
  // ['link', 'image', 'video', 'formula'],
  ['link'],

  // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  // [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  // [{ 'direction': 'rtl' }],                         // text direction

  // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  // [{ 'font': [] }],
  // [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

const options = {
  debug: 'info',
  modules: {
    toolbar: toolbarOptions,
  },
  placeholder: 'Compose an epic...',
  theme: 'snow'
};

const quill = new Quill('#quill-editor', options);

quill.on('text-change', (delta, oldDelta, source) => {
  lpModel.updateTextConent(quill.root.innerHTML);
  landingPageView.render(lpModel.array);
});

export { quill };