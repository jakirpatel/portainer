angular.module('portainer')
.controller('porSliderController', function () {
  var ctrl = this;

  ctrl.options = {
    floor: ctrl.floor,
    ceil: ctrl.ceil,
    step: ctrl.step,
    precision: ctrl.precision,
    showSelectionBar: true,
    translate: function(value, sliderId, label) {
      if (label === 'floor' || value === 0) {
        return 'unlimited';
      }
      return value;
    },
    onChange: function() {
      ctrl.onChange();
    }
  };

});
