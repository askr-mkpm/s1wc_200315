import {PureRaymarch} from './gl';
import {klab} from './gl';
import '../styles/index.scss';

const canvas = <HTMLCanvasElement>document.getElementById("glCanvas");

let pr = new klab(canvas);//new PureRaymarch(canvas);

pr.init();

// window.addEventListener('resize', function(){
//     pr.resize();
// });