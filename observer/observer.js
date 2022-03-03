const EventEmitter = require("events");
const emitter = new EventEmitter();

//When event "newPost" is raised, this eventListener will send push notifications to each user. 
emitter.on('newPost', (subject, user, post, userName) => console.log(`Message for ${userName}: New post added to "${subject}" by user "${user}": ${post}`)) //we add the listener

//"Update" method will raise an event for each new post in the Subject
class User {
    constructor(name) {
        this.name = name;
    }
    update(subject, user, post) { 
        emitter.emit('newPost', subject, user, post, this.name);
    }
}

class Subject {

    constructor(name) {
        this.subjectName = name;
        this.userNames = [];
        this.subscriptors = [];
        this.posts = [];
    }

    subscribe(user) {
        this.userNames.push(user.name);
        this.subscriptors.push(user);
        console.log(`${this.subjectName} got a new follower called "${user.name}"!!!`);
    }

    write(post, user) {
        this.posts.push({ post: post, user: user });
        this.notify(post, user)
    }

    notify(post, userName) { //for loop para recorres todos los subscriptores y llamar a su método update
        this.subscriptors.forEach(subscriptor => {
            subscriptor.update(this.subjectName, userName, post);
        })
    }

    unsubscribe(user) {
        this.userNames = this.userNames.filter(x => {
            if (x != user) { return x }
        })
        console.log(`${this.subjectName} has lost a user called ${user.name}!!!`);
    }

}

//Create instances from Clases "User" and "Subject"
const user1 = new User("Tete")
const user2 = new User("Titi")
const subject1 = new Subject("IT Academy Youtube Channel")
const subject2 = new Subject("Free Online Cobol Course")

//user1 starts following subject1
subject1.subscribe(user1)
//user1 and user2 start following subject2
subject2.subscribe(user1)
subject2.subscribe(user2)

//Users modify Subject by writting posts
subject1.write('Should I do "Fundamentos de la Programación" first?', user1.name);
subject2.write('I cannot wait to start learning Cobol', user1.name)
subject2.write('Me neither, I fcking love Cobol', user2.name)

//These changes in Subject will raise events so that Users get notified


