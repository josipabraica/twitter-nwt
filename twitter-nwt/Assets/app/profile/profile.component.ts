﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FORM_DIRECTIVES } from '@angular/common';

import { User } from './../Common/Models/User';
import { UserService } from './../Common/Services/UserService';

@Component({
    moduleId: module.id,
    selector: 'my-profile',
    templateUrl: 'profile.template.html',
    directives: [FORM_DIRECTIVES],
    styleUrls: ['./../../../../Content/forms.css']
})

export class ProfileComponent implements OnInit {
    errorMessage: string;
    user: User;
    password: string;
    updatedUser: any;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() { this.getUser(); }

    getUser() {
        this.user = this.userService.currentUser;
        console.log("In component: ", this.user);
    }

    updateUser() {
        this.updatedUser = {
            id: this.user.id,
            username: this.user.username,
            password: this.user.password,
            name: this.user.name,
            lastname: this.user.lastname,
            email: this.user.email
        }
        this.userService.updateUser(this.updatedUser)
            .subscribe(
            user => { this.user = user; console.log("Updated user data: ", this.user); },
                error => this.errorMessage = <any>error
            );
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['/dashboard']);
    }
}