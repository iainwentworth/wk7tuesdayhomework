const PubSub = require('../helpers/pub_sub.js');

const FamiliesMenuView = function(menu) {
  this.menu = menu;
};

FamiliesMenuView.prototype.bindEvents = function() {

  PubSub.subscribe('Families:all-families-ready', (event) => {
    console.log(event.detail);
    this.populate(event.detail);
  });

  this.menu.addEventListener('click', (event) => {
    const selectedFamilyName = event.target.id;
    PubSub.publish('FamiliesMenuView:selected', selectedFamilyName);
  });
};

FamiliesMenuView.prototype.populate = function(families){
  families.forEach((family) => {
    const familyLink = document.createElement('a');
    familyLink.id = family.name;
    familyLink.classList.add('family-menu-item');
    familyLink.innerText = family.name;
    this.menu.appendChild(familyLink);
  })
}

module.exports = FamiliesMenuView;
