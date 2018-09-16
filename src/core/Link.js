class Link{
  constructor(i,n,o){
    this.id=Math.round(Math.random()*1000000);//unique identifier
    this.i=i;//start node
    this.o=o;//end node
    this.n=n;//start node output name
    this.p=false;//pause
    this.s=false;//store activation if paused
    this.sp={};//store the parameters of the last stored activation
    this.d=this.i.connect(n,this);//start node output connection token
  }
  trigger(params){
    params.linkId=this.id;
    if(!this.p)this.o.trigger(params);//trigger end node
    else{//store the activation to be released at unpause
      this.s=true;
      this.sp=params;
    }
  }
  disconnect(){
    this.i.disconnect(this.d);
    delete this.i;
    delete this.o;
    delete this.n;
  }
  pause(){
    this.p=true;
  }
  unpause(){
    if(this.p && this.s){
      this.s=false;
      this.trigger(this.sp);
    }
    this.p=false;
  }
}