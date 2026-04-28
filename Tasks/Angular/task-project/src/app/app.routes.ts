import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Product } from './components/product/product';
import { Electronics } from './components/electronics/electronics';
import { About } from './components/about/about';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { AddProduct } from './components/home-child/add-product/add-product';
import { UpdateProduct } from './components/home-child/update-product/update-product';
import { DeleteProduct } from './components/home-child/delete-product/delete-product';

export const routes: Routes = [
    {path:"", component:Home , children:[
        {path:"add" , component:AddProduct},
        {path:"update" , component:UpdateProduct},
        {path:"delete" , component:DeleteProduct},
    ]},
    {path:"product", component:Product},
    {path:"elec", component:Electronics},
    {path:"about", component:About},
    {path:"**", component:PageNotFound},
]
