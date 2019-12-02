type PostData = {
    userId:number;
    title:string;
    description:string;
    pictureUrl?:string;
    creationDate:string;
    updatedAt?:string;
    categories:string[];
}

export interface Post {
    id:string;
    data:PostData;
}

