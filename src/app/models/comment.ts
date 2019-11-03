export class Comment {
    id: number;
    postId: number;
    email: string;
    nickname: string;
    title: string;
    body: string;

    public constructor() {
        this.id = -1;
        this.postId = -1;
        this.nickname = "";
        this.email = "";
        this.title = "";
        this.body = "";

    }
}