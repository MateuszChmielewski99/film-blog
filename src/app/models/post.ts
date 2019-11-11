import {firestore} from 'firebase';
type PostData = {
    userId:number;
    title:string;
    description:Map<string,string>;
    pictureUrl?:string;
    creationDate:string;
    categories:string[];
    ingridients:Map<string,string>;
}

export class Post {
    id:string;
    data:PostData;
}

