# Important information on this module

> This module should only contain :
> - declarables (components, directives and pipes) which we want to use in multiple lazy features
> - components from librairies (vendor/material/own components)
> - re-export `CommonModule` (it implements stuff like `*ngFor`, `*ngIf`, ...)

*It should **NEVER implement any services** (`providers: [ ]`) and only contain declarables and modules!*

*The reason for that is that every lazy loaded module would get its own service instance which is almost never what we want because in most cases, we expect services to be global singletons!
If we want to create "shared" services used in many parts of our appliction, we should implement them in the `/data` folder and use `providerIn: 'root'` syntax without putting them in `providers: [ ]` of any module...*

## Source
[This blog post](https://medium.com/@tomastrajan/how-to-build-epic-angular-app-with-clean-architecture-91640ed1656) from Tomas Strajan
