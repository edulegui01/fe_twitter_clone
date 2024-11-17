import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FollowersComponent } from './followers/followers.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: '',
        component: SidebarComponent,
        children:[
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'perfil/:username',
                component: PerfilComponent,
            },
            {
                path: 'list/:username',
                component: FollowersComponent,
            },
        ]
    },
];
