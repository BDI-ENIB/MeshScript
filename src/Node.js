class Node{
  constructor(options){
    this.options=typeof options !== "undefined"?options:{};
    this.outputs = {};
    if(typeof this.options.outputs !== "undefined"){
      for(var i=0;i<this.options.outputs.length;i++){
        this.outputs[this.options.outputs[i]]=[];
      }
    }
    this.options.code=typeof this.options.code !== "undefined"?this.options.code:function(p,o){};
  }
  connect(output,link){
    if(output in this.outputs){
      var id=Math.round(Math.random()*1000000);
      this.outputs[output].push({id:id,link:link});
      return id;
    }else return false;
  }
  disconnect(id){
    for(var output in this.outputs){
      for(var i=0;i<this.outputs[output].length;i++){
        if(this.outputs[output][i].id == id)this.outputs[output].splice(i,1);
      }
    }
  }
  log(){
    console.log(this.options);
    console.log(this.outputs);
  }
  trigger(params){
    var outputs=this.outputs;
    this.options.code(params,
      function(output,params){
        if(output in outputs){
          for(var i=0;i<outputs[output].length;i++){
            outputs[output][i].link.trigger(params);
          }
        }
      }
    );
  }
}