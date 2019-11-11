

export class Comment {
    public id: string;
    public postId: string;
    public nickname: string;
    public body: string;
    public email: string;
    public creationDate:string;

    public constructor() {
        this.postId = "";
        this.nickname = "";
        this.email = "";
        this.body = "";
        this.creationDate = Date.now.toString();
    }
}