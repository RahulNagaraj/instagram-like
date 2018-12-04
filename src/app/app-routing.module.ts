import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { FollowingComponent } from './following/following.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';

const appRoutes:Routes = [
  { path: '', component: HomeComponent },
  { path: 'allposts', component: AllPostsComponent },
  { path: 'following', component: FollowingComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'myposts', component: MyPostsComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}