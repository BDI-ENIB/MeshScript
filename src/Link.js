class Link{
  constructor(i,n,o){
    this.i=i;
    this.o=o;
    this.n=n;
    this.p=false;
    this.s=false;
    this.d=this.i.connect(n,this);
  }
  trigger(params){
    if(!this.p)this.o.trigger(params);
    else{
      s=true;
      sp=params;
    }
  }
  breack(){
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
      this.p=false;
      this.trigger(this.sp);
    }
    else this.p=false;
  }
}