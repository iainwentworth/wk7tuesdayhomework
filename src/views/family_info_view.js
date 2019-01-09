const PubSub = require('../helpers/pub_sub.js');

const FamilyInfoView = function(container) {
  this.container = container;
};

FamilyInfoView.prototype.bindEvents = function() {
  PubSub.subscribe('InstrumentFamilies:family-ready', (event) => {
    const familyObject = event.detail;
    this.render(familyObject);
  });
};

FamilyInfoView.prototype.render = function(family) {
  this.container.innerHTML = '';

  const heading = this.createHeading(family);
  const para = this.createPara(family);

  this.container.appendChild(heading);
  this.container.appendChild(para);
};

FamilyInfoView.prototype.createHeading = function(family) {
  const heading = document.createElement('h2');
  heading.textContent = family.name;
  return heading;
};

FamilyInfoView.prototype.createPara = function(family) {
  const para = document.createElement('p');
  para.textContent = family.description;
  return para;
};

module.exports = FamilyInfoView;
