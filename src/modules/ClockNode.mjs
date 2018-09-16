import {Node} from "../core/Node.mjs";
export class ClockNode extends Node{
  constructor(options){
    super(options);
    this.outputs["output"]=[];
    this.options.period=typeof this.options.period !== "undefined"?this.options.period:1000;
    this.options.code=function(p,o){};
    var outputs=this.outputs;
    var clock=setInterval(function(){
      for(var i=0;i<outputs["output"].length;i++){
        outputs["output"][i].link.trigger({});
      }
    },this.options.period);
  }
}