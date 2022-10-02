export class Question 
{
    qID: number ;
    qTopic: string | undefined ;
    qanswer: string= "";
    
    constructor(){
        this.qID = 0;
        this.qTopic = "";
        this.qanswer = "";    
    }
}
