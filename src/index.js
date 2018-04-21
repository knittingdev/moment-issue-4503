import _ from 'lodash';
import moment from 'moment';
import 'moment/locale/fr';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Today is ', moment('2018-04-21').format('dddd')], ' ');

  return element;
}

document.body.appendChild(component());
