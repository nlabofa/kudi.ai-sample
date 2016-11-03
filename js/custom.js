window.Parsley
  .addValidator('cvvCode', {
    requirementType: 'integer',
    validateString: function(value, requirement) {
      return  value.length === requirement;
    },
    messages: {
      en: 'The length of the value should be 3',
    }
  });
  window.Parsley
  .addValidator('expYear', {
    requirementType: 'integer',
    validateString: function(value, requirement) {
      return  value.length === requirement;
    },
    messages: {
      en: 'The length of the value should be 4',
    }
  });
window.Parsley
  .addValidator('bvnCode', {
    requirementType: 'integer',
    validateString: function(value, requirement) {
      return  value.length === requirement;
    },
    messages: {
      en: 'The length of the value should be 11',
    }
  });