import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class Comment {
    id: number;
    postId: number;
    email: string;
    nickname: string;
    body: string;
    creationDate:Timestamp<string>;

    public constructor() {
        this.id = -1;
        this.postId = -1;
        this.nickname = "";
        this.email = "";
        this.body = "";
        this.creationDate = new Timestamp(Date.now.toString(),2);
    }
}