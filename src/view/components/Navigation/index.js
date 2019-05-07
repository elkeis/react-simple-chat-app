import './Navigation.scss';
import Navigation from './Navigation';
import wrap from '../../wrap';

export default function _Navigation({onGoBack, description}) {
    return wrap([Navigation, {onGoBack, description}]);
}
