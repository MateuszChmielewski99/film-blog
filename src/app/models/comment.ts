export class Comment {
    id: number;
    postId: number;
    userId: number;
    email: string;
    name: string;
    body: string;

    public constructor() {
        this.id = -1;
        this.postId = -1;
        this.userId = -1;
        this.email = "";
        this.name = "";
        this.body = "";

    }
}