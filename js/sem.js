

function object(source) {
  if(typeof source != 'string') return source;
  var tree = parser.parse(source);
  return tree;
}

function link(objects) {
  return objects[0];
}
