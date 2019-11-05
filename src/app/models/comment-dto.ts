import {Comment} from './comment';

export class CommentDto {
    postId:number;
    captchaResponse:string;
    email: string;
    nickname: string;
    title: string;
    body: string;

    constructor(data:Comment, response:string){
        this.body = data.body;
        this.captchaResponse = response;
        this.email = data.email;
        this.nickname = data.nickname;
        this.postId = data.postId;
        this.title = data.title;
    }
}
