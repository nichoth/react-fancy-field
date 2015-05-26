var React = require('react');
var FancyField = require('../FancyField.jsx');

function save() {
  console.log(arguments);
}
function deleter() {
  console.log(arguments);
}
var t = <span>some text</span>;

React.render(
  <FancyField
    textNode={t}
    onSave={save}
    onDelete={deleter}
  />,
  document.body
);
