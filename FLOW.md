1. Browser loads index.html
2.  <h1>Angular is loading...</h1> is displayed
3. runtime, polyfills, .. vendor, ..main.js downloaded
4.  platformBrowserDynamic()
            .bootstrapModule(AppModule); executed 
    
    4.1 BrowserModule loaded, then CommonModule, Compiler loaded
    4.2 Angular scans declaration 
          [Angular detected all components/pipe/services,
                                   selector, etc ]
       
       ***JIT - Angular Just In Time Compilation 
            Convert HTML into JavaScript code (.ngfactory.js)
            Conversion happens in Browser, converted files are kept in ng:// temp folder

            Browser doesn't have typescript, private/missing attributes are not validated from html to ts files

            HTML ==> JS

      ***AOT - Ahead of Time Compilation
            Convert HTML to JavaScript at the development/build machine
            Using Node.js where TypeScript available

            HTML ==> TS ==> JavaScript (validation with HTML and TS possible)

    4.3 Angular search for bootstrap section
                        [AppComponent]

    4.4. Create AppComponent instance
    4.5. Take app.component view, place inside <app-root>

