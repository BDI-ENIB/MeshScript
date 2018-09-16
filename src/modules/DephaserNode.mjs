import {Node} from "../core/Node.mjs";
export class DephaserNode extends Node{
  constructor(options){
    super(options);
    this.outputs["output"]=[];
    this.options.period=typeof this.options.period !== "undefined"?this.options.period:1000;
    this.options.code=function(p,o){
      setTimeout(function(){
        o("output",p);
      },this.period);
    };
  }
}