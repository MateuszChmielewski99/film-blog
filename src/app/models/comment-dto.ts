import {Comment} from './comment';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class CommentDto {
    postId:number;
    captchaResponse:string;
    email: string;
    nickname: string;
    title: string;
    body: string;
    creationDate:Timestamp<string>;

    constructor(data:Comment, response:string){
        this.body = data.body;
        this.captchaResponse = response;
        this.email = data.email;
        this.nickname = data.nickname;
        this.postId = data.postId;
        this.creationDate = data.creationDate;
    }
}
