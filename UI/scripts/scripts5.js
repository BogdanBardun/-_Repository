class PostModel{
    
    constructor(photoPosts){
        this._photoPosts = photoPosts;
}
    _sortByDate(Post) {
    Post.sort(function (a, b) {
        if (a.createdAt - b.createdAt < 0) {
            return 1;
        } else {
            return -1;
        }
    })
}

    _validate(post) {
    if (!post.id) {
        console.log("error post id");
        return false;
    }

    if (post.description.length === 0) {
        console.log("error post description");
        return false;
    }
    else {
        if (post.description.length >= 200 ) {
            console.log(" description length error " + post.description.length);
            return false;
        }
    }
    if (!post.createdAt) {
        console.log("error post date");
        return false;
    }
    if (!post.author) {
        console.log("error post author");
        return false;
    }
    if(!post.photoLink){
        console.log("wrong post photoLink");
        return false;
    }
    return true;
}

_addAll(photoPosts) {
    this._photoPosts = [];
    const invalid = [];
    for (var i = 0; i < photoPosts.length; i++) {
        if (this._validate(photoPosts[i])) {
            this._photoPosts.push(photoPosts[i]);
        }
        else {
            invalid.push(photoPosts[i]);
        }
    }
    return invalid;
}
_getPage(skip = 0, top = 10, filterConfig ) {
    var res = photoPosts.slice();
    this._sortByDate(res);
    if(filterConfig.author){
        res = res.filter(function (post) {
            return post.author.toLowerCase() === filterConfig.author.toLowerCase();
        });
    }
    if(filterConfig.createdAt){
        res = res.filter(function (post) {
            return post.createdAt.getDate() === new Date(filterConfig.createdAt).getDate();
        });
    }
    res = res.slice(skip, skip+top);
    return res;
}

_get(idP) {
    var l = false;
    for(var i = 0; i < photoPosts.length; i++)
    {
        if(photoPosts[i].id === idP){
            l = true;
            return photoPosts[i];
        }
    }
    console.log("id not exist");
    return l;
}

_add(post) {
    if (this._validate(post)) {
        post.id = photoPosts.length + 1;
        photoPosts.push(post);
        return true;
    }
    else return false;
}

_edit(postID, post) {
    var copy = Object.assign({}, this._get(postID));
    if (post.id) return false;
    if (post.description) copy.description = post.description;
    if (post.createdAt) return false;
    if (post.location) copy.location = post.location;
    if (post.author) return false;
    if (post.photoLink) copy.photoLink = post.photoLink;

    if (this._validate(copy)) {
        for (var i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id === postID) {
                photoPosts[i] = copy;
                return true;
            }
        }
    } else return false;
}

_remove(id) {
    var index = -1;
    for (var i = 0; i < photoPosts.length; i++) {
        if (photoPosts[i].id === id) {
            index = i;
            break;
        }
    }
    if(index === -1){
        console.log("error id");
        return false;
    }
    photoPosts.splice(index, 1);
    return true;
}



}
var photoPosts = [
    {
        id: '1',   
        description: 'sportster 883',   
        createdAt: new Date('2011-10-17T14:25:26'),   
        author: '@Username',
        photoLink: 'images/883.jpg',
        hashTags: ['#hashtag1', '#hashtag3'],
        likes: ['@username1', '@username2', '@username4']    
    },
    {
        id: '2',   
        description: 'm3',   
        createdAt: new Date('2017-04-14T14:56:24'),   
        author: '@Username',
        photoLink: 'images/m3.jpg',
        hashTags: ['#hashtag1', '#hashtag2'],
        likes: ['@username1', '@username2', '@username3']   
    },
    {
        id: '3',   
        description: 'toyota mr2',   
        createdAt: new Date('2015-07-11T21:15:47'),   
        author: '@Username',
        photoLink: 'images/mr2.jpg',
        hashTags: ['#hashtag1'],
        likes: ['@username7', '@username2', '@username5']   
    },
    {
        id: '4',   
        description: 'honda integra',   
        createdAt: new Date('2018-04-23T14:50:14'),   
        author: '@Username',
        photoLink: 'images/integra.jpg',
        hashTags: [],
        likes: ['@username8', '@username3', '@username5']   
    },
    {
        id: '5',   
        description: 'skyline',   
        createdAt: new Date('2012-03-24T20:40:10'),   
        author: '@Username2',
        photoLink: 'images/34.jpg',
        hashTags: ['#hashtag1'],
        likes: ['@username7', '@username3', '@username1']   
    },
    {
        id: '6',   
        description: 'shelby gt500',   
        createdAt: new Date('2012-04-08T19:48:30'),   
        author: '@Username',
        photoLink: 'images/gt500.jpg',
        hashTags: [],
        likes: ['@username5', '@username4', '@username1']   
    },
    {
        id: '7',   
        description: '240sx',   
        createdAt: new Date('2012-04-04T10:25:18'),   
        author: '@Username2',
        photoLink: 'images/240.jpg',
        hashTags: ['#hashtag1'],
        likes: ['@username13', '@username2', '@username6']   
    },
    {
        id: '8',   
        description: 'hd soft tail',   
        createdAt: new Date('2010-12-06T14:50:21'),   
        author: '@Username',
        photoLink: 'images/softtail.jpg',
        hashTags: [],
        likes: ['@username1', '@username7', '@username9']   
    },
    {
        id: '9',   
        description: 'audi quattro',   
        createdAt: new Date('2009-12-08T23:50:51'),   
        author: '@Username2',
        photoLink: 'images/quattro.jpg',
        hashTags: [],
        likes: ['@username1', '@username7', '@username9']   
    },
    {
        id: '10',   
        description: 'dyna wide glide',   
        createdAt: new Date('2013-04-19T21:22:02'),   
        author: '@Username',
        photoLink: 'images/wideglide.jpg',
        hashTags: ['#hashtag1'],
        likes: ['@username3', '@username4', '@username10']   
    },
    {
        id: '11',   
        description: 'scirocco',   
        createdAt: new Date('1999-01-01T11:23:47'),   
        author: '@Username',
        photoLink: 'images/scirocco.jpg',
        hashTags: ['#hashtag1'],
        likes: ['@username2', '@username6', '@username13']   
    },
    {
        id: '12',   
        description: 'nissan 180sx',   
        createdAt: new Date('2014-09-25T17:44:20'),   
        author: '@Username',
        photoLink: 'images/180.jpg',
        hashTags: ['#hashtag1'],
        likes: ['@username2', '@username4', '@username1']   
    },
    {
        id: '13',   
        description: 'MB 190 EVO',   
        createdAt: new Date('2014-06-18T11:36:47'),   
        author: '@Username',
        photoLink: 'images/190.jpg',
        hashTags: ['#hashtag1'],
        likes: ['@username7', '@username11', '@username3']   
    },
    {
        id: '14',   
        description: 'Cheville SS',   
        createdAt: new Date('2017-01-11T09:17:47'),   
        author: '@Username2',
        photoLink: 'images/chevy.jpg',
        hashTags: [],
        likes: ['@username8', '@username1', '@username13']   
    },
    {
        id: '15',   
        description: 'Eclipse GT',   
        createdAt: new Date('2019-02-02T06:18:25'),   
        author: '@Username',
        photoLink: 'images/eclipse.jpg',
        hashTags: ['#hashtag1', '#hashtag3'],
        likes: ['@username4', '@username6', '@username7']   
    },
    {
        id: '16',   
        description: 'Focus RS',   
        createdAt: new Date('2008-11-15T13:44:46'),   
        author: '@Username2',
        photoLink: 'images/focus.jpg',
        hashTags: ['#hashtag1'],
        likes: ['@username2', '@username11', '@username1']   
    },
    {
        id: '17',   
        description: 'Mazda RX-7',   
        createdAt: new Date('2016-01-01T18:45:14'),   
        author: '@Username',
        photoLink: 'images/rx7.jpg',
        hashTags: [],
        likes: ['@username3', '@username9', '@username3']   
    },
    {
        id: '18',   
        description: 'Audi S2',   
        createdAt: new Date('2013-11-17T12:12:12'),   
        author: '@Username',
        photoLink: 'images/s2.jpg',
        hashTags: ['#hashtag3'],
        likes: ['@username2', '@username6', '@username4']   
    },
    {
        id: '19',   
        description: 'Ford Sierra Cosworth',   
        createdAt: new Date('2017-10-23T14:23:15'),   
        author: '@Username2',
        photoLink: 'images/sierra.jpg',
        hashTags: ['#hashtag1'],
        likes: ['@username1', '@username4', '@username13']   
    },
    {
        id: '20',   
        description: 'Porsche 911 Targa',   
        createdAt: new Date('2014-02-16T16:59:23'),   
        author: '@Username',
        photoLink: 'images/targa.jpg',
        hashTags: ['#hashtag1', '#hashtag3','#hashtag2'],
        likes: ['@username1', '@username5', '@username7']   
    }
]

const Model = new PostModel(photoPosts);

console.log(Model._getPage(0, 5, {createdAt: new Date("2017-10-23T14:23:15")}));

console.log(Model._getPage(0, 10, {author: "@Username"}));

console.log(Model._get('14'));

console.log(Model._get('56'));

console.log(Model._validate(Model._get("6")));

console.log(Model._validate(Model._get("88")));

console.log(Model._add({
    id: "33",
    description: "must be nice description",
    createdAt: new Date("2017-08-04"),
    author: "@Username4",
    photoLink: "images/sierra.jpg"
}));

console.log(Model._getPage(0, 10, {author: "@Username4"}));

console.log(Model._add({
    id: "73",
    description: "",
    createdAt: new Date(),
    author: "",
    photoLink: "images/s2.jpg"
}));

console.log(Model._addAll(photoPosts));

console.log(Model._remove("11"));

console.log(Model._remove("41"));

console.log(Model._edit("8", {photoLink: "images/chevy.jpg"}));

console.log(Model._get('8'));

console.log(Model._getPage(0, 10, {author: "@Username4"}));



