import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent  { 
    name: string; 
    address: address;  
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];

    constructor(private postsService: PostsService) {
        this.name = 'Angular for everyone'; 
        this.address = {
            street: "1st street",
            city: "Town One",
            state: "WA"
        }
        this.hobbies = ['Music', 'Movies', 'Sports'];
        this.showHobbies = false;

        this.postsService.getPosts().subscribe(
            posts => {
                this.posts = posts;
            }
        )
    }   

    toggleHobbies() {
        console.log("show");
        if(this.showHobbies)
            this.showHobbies = false;
        else
            this.showHobbies = true;
    }

    addHobby(hobby: string ){
        this.hobbies.push(hobby)
    }

    deleteHobby(i: number){
        this.hobbies.splice(i, 1);
    }
}

 interface address {
     street: string;
     city: string;
     state: string   
    }

    interface Post {
        userId: number;
        id: number;
        title: string;
        body: string
    }