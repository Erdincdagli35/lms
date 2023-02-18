import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryCreateComponent } from './library-create/library-create.component';
import { LibraryDeleteComponent } from './library-delete/library-delete.component';
import { LibraryDetailsComponent } from './library-details/library-details.component';
import { LibraryEditComponent } from './library-edit/library-edit.component';
import { LibraryListComponent } from './library-list/library-list.component';
import { LibraryAddToShelfComponent } from './library-add-to-shelf/library-add-to-shelf.component';
import { LibraryRemoveToShelfComponent } from './library-remove-to-shelf/library-remove-to-shelf.component';

const routes: Routes = [
  { path: 'library-create', component: LibraryCreateComponent },
  { path: '', redirectTo: 'library', pathMatch: 'full' },
  { path: 'library-update/:id', component: LibraryEditComponent},
  { path: 'libraries-all', component: LibraryListComponent },
  { path: 'library-delete/:id', component: LibraryDeleteComponent},
  { path: 'library-details/:id', component: LibraryDetailsComponent},
  { path: 'library-add-to-shelf/:id', component: LibraryAddToShelfComponent},
  { path: 'library-remove-to-shelf/:id/:shelfIds', component: LibraryRemoveToShelfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
