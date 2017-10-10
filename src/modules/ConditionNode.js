class ConditionNode extends Node{
  constructor(options){
    super(options);
    this.outputs["true"]=[];
    this.outputs["false"]=[];
    this.options.condition=typeof this.options.condition !== "undefined"?this.options.condition:"false";
    this.options.code=eval('function(params,o){'+
      'if('+this.options.condition+'){'+
        'o("true",params);'+
      '}else{'+
        'o("false",params);'+
      '}'+
    '}');
  }
}