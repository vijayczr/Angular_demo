export class Recipe{
    public name:string;
    public Description : string;
    public ImagePath : string;


    constructor(name:string , desc : string , imagepath : string){
        this.name = name;
        this.Description = desc;
        this.ImagePath = imagepath;
    }
}