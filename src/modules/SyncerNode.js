import {Node} from "../core/Node.js";
export class SyncerNode extends Node{
  constructor(options){
    super(options);
    this.outputs["output"]=[];
    this.options.awaits=typeof this.options.awaits !== "undefined"?this.options.awaits:2;
    this.options.triggedLinksId=[];
    this.options.code=function(p,o){
      if(!(p.linkId in this.triggedLinksId)){
        this.triggedLinksId.push(p.linkId);
      }
      if(this.triggedLinksId.length>=this.awaits){
        this.triggedLinksId=[];
        o("output",p);
      }
    };
  }
}