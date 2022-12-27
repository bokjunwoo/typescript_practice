class Square1 {
  private static x = 10;
  public static y = 20;

  static addOne(param : number) {
    Square1.x += param
  }

  static printX() :void{
    console.log(Square1.x) 
  }
}

Square1.addOne(3)
Square1.addOne(10)
Square1.printX()

class Square2 {
  width:number;
  height:number;
  color:string;

  constructor(width : number, height : number, color : string) {
    this.width = width;
    this.height =  height;
    this.color = color;
  }

  draw() {
    let a = Math.random();
    let square = `<div style='position:relative;
      top:${a * 400}px;
      left:${a * 400}px;
      width:${this.width}px;
      height:${this.height}px;
      background:${this.color}'></div>`;
    document.body.insertAdjacentHTML('beforeend', square );
  }
}

let squares = new Square2(30, 30, 'blue')
squares.draw()
squares.draw()
squares.draw()
squares.draw()


class Square3 {  
  constructor (public width :number, public height :number, public color :string){
  }
  draw(){
    let a = Math.random();
    let square = `<div style="position:relative; 
      top:${a * 400}px; 
      left:${a * 400}px; 
      width:${this.width}px; 
      height : ${this.height}px; 
      background:${this.color}"></div>`;
    document.body.insertAdjacentHTML( 'beforeend', square );
  }
}


let 네모 = new Square3(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()