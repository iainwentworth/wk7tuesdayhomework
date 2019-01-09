const familiesData = require('./data/instrument_family_data.js');
const InstrumentFamilies = require('./models/instrument_families.js');
const FamiliesMenuView = require('./views/families_menu_view.js');
const FamilyInfoView = require('./views/family_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const menu = document.querySelector('#instrument-families');
  
  const menuView = new FamiliesMenuView(menu);
  menuView.bindEvents();

  const familiesDataModel = new InstrumentFamilies(familiesData);
  familiesDataModel.bindEvents();

  const detailsContainer = document.querySelector('section.family-details');

  const familyDetailsView = new FamilyInfoView(detailsContainer);
  familyDetailsView.bindEvents();
});
