# Angular14-DotNet6-CRUD

This is a basic CRUD project with API calls from Angular 14 using C# .NET Core 6 as backend.<br/>
Database used- MS SQLServer(local)

## How to run
**For c# solution** 
1. In appsettings.json files, replace 'yourDatabase' with your own Database name.(Change has to be made in the line given below)
```
"ConnectionStrings": {
    "CardDetailApp": "Data Source=yourDatabase;Initial Catalog=CardDetailDb;Integrated Security=true;Encrypt=False;"
  }
  
```
2. Next migrate the database using the below commands in the terminal(usually done in the IDE itself)-
```
>add-migration
(Name will be asked here- give any name your prefer for the migration file, usually it's called initial)
>update-database
```
3. Once this is done, you can check the tables created in your local database.
4. Finally build and run the c# project as usual from the IDE

**For Angular** <br/><br/>

1. In the command prompt, go inside the project folder(here it is paymentApp) and type the command given below to compile it for the first time.
```
ng serve
```
That's all and you are good to go!

*There are no security functions included

