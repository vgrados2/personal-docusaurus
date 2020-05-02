import {createGlobalStyle} from 'styled-components';

import galadaRegularWoff from './Galada-Regular.woff';
import galadaRegularWoff2 from './Galada-Regular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Galada';
        src: local('Galada'), local('Galada'),
        url(${galadaRegularWoff}) format('woff2'),
        url(${galadaRegularWoff2}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
`;
