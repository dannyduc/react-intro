/** @jsx React.DOM */

var shapeEditor = React.render(
    <ShapeEditor />,
  document.getElementsByClassName('container')[0]
);


function readShapes() {
  var file = $('.shapes-picker').val(),
    text = SHAPES[file] || '';

  $('.editor').val(text);
  shapeEditor.setState({ text: text }); // force a render
}

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}

function toDisplayWord(camelCase) {
  camelCase = capitalize(camelCase);
  return camelCase.replace(/[A-Z]/g, function(m) {
    return ' ' + m.toUpperCase();
  });
}

function initShapesPicker() {
  var frag = document.createDocumentFragment();
  frag.appendChild($('<option/>', {
    value: '--',
    text: '-- Select a sample --'
  }).get(0));

  for (var key in SHAPES) {
    frag.appendChild($('<option/>', {
      value: key,
      text: toDisplayWord(key)
    }).get(0));
  }

  var $shapesPicker = $('.shapes-picker');

  $shapesPicker.append(frag);
  $shapesPicker.change(readShapes);

  readShapes();
}

 initShapesPicker(); // load time