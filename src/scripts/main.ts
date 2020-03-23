import {PureRaymarch} from './gl';
import '../styles/index.scss';

const canvas = <HTMLCanvasElement>document.getElementById("glCanvas");

let pr = new PureRaymarch(canvas);

pr.init();

// window.addEventListener('resize', function(){
//     pr.resize();
// });