const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function() {
  PubSub.publish('Families:all-families-ready', this.data);

  PubSub.subscribe('FamiliesMenuView:selected', (event) => {
    const chosenFamilyName = event.detail;
    const selectedFamilyObject = this.findByName(chosenFamilyName);
    PubSub.publish('InstrumentFamilies:family-ready', selectedFamilyObject);
  });
};

InstrumentFamilies.prototype.findByName = function(searchName) {
  const foundFamily = this.data.find((currentFamily) => {
    return currentFamily.name === searchName;
  });
  return foundFamily;
};

module.exports = InstrumentFamilies;
