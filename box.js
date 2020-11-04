class Box extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
     super.display();
     //Matter.Body.setAngle(this.body, angle);
    }
  }