function compile(target, sources) {
  var obj = link(sources.map(object));
  var generators = {
    dcpu: genDCPU
  };
  return generators[target](obj);
}
