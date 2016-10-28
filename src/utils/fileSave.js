/* eslint-disable */

import FileSaver from 'file-saver';
console.log('FileSaver', FileSaver);

const fileContent = {
  "head": {
    "title": "RDX Synth File",
    "description": "RDX Synth is an experimental Synthesizer that works on a web browser",
    "url": "http://daniloprates.github.io/redux-synth"
  }
}

export default (props) => {
    console.log('props', props);

  let fileName = (prompt('Enter the preset name') || 'newPreset') + '.rdx';
  // let fileName = 'newPreset.rdx';

  let file = Object.assign({}, fileContent);

  file.synth = Object.assign({}, props.synth);
  console.log('file', file);

  JSON.stringify(file, null, 1);
  console.log('JSON.stringify(file, null, 1)', JSON.stringify(file, null, 1));

  file = new File([JSON.stringify(file, null, 1)], fileName, {type: "application/json;charset=utf-8"});
  FileSaver.saveAs(file);

}
