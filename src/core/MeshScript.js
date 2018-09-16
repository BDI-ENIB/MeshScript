import {Link} from "./Link.js";
export class MeshScript{
  constructor(descriptor,nodeList){
    descriptor=isSet(descriptor)?descriptor:{};
    nodeList=isSet(nodeList)?nodeList:{};
    var nodeDescriptors=isSet(descriptor.nodes)?descriptor.nodes:[];
    var linkDescriptors=isSet(descriptor.links)?descriptor.links:[];
    this.nodes={};
    this.links={};
    //node creation from patern
    for(var i=0;i<nodeDescriptors.length;i++){
      if(isSet(nodeDescriptors[i].id) && isSet(nodeDescriptors[i].type) && nodeDescriptors[i].type in nodeList){
        this.nodes[nodeDescriptors[i].id]=new nodeList[nodeDescriptors[i].type](nodeDescriptors[i]);
      }
    }
    //link creation from patern
    for(var i=0;i<linkDescriptors.length;i++){
      if(isSet(linkDescriptors[i].id) && isSet(linkDescriptors[i].start) && isSet(linkDescriptors[i].end) && isSet(linkDescriptors[i].output)){
        this.links[linkDescriptors[i].id]=new Link(this.nodes[linkDescriptors[i].start],linkDescriptors[i].output,this.nodes[linkDescriptors[i].end]);
      }
    }
  }
  destroy(){
    for(var i in this.links){
      this.links[i].disconnect();
      delete this.links[i];
    }
    for(var i in this.nodes){
      delete this.nodes[i];
    }
  }
  pause(){
    for(var i in this.links){
      this.links[i].pause();
    }
  }
  unpause(){
    for(var i in this.links){
      this.links[i].unpause();
    }
  }
}
function isSet(i){
  return typeof i !== "undefined";
}