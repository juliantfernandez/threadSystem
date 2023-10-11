class LikesServices {
    constructor() {
        this.likes = 0;
        this.dislikes = 0;
    }

    like() {
        this.likes++;
    }

    dislike() {
        this.dislikes++;
    }

    getLikes() {
        return this.likes;
    }

    getDislikes() {
        return this.dislikes;
    }
}

class Comment extends LikesServices {
    constructor(msg) {
        super();
        this.message = msg;
    }
}

class CommentsServices {
    constructor() {
        this.comments = [];
        this.commentsID = 0;
    }

    addComment(comentario) {
        this.commentsID++;
        this.comments.push({ id: this.commentsID, comentario: comentario });
    }

    getComments() {
        return this.comments;
    }
}

const thread = new CommentsServices();
console.log(thread);
console.log('\n');

let firstThread = new Comment('Test Comment');
thread.addComment(firstThread);
thread.getComments()

console.log(thread);
console.log(thread.getComments());
