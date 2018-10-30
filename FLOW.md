1. Browser loads index.html
2.  <h1>Angular is loading...</h1> is displayed
3. runtime, polyfills, .. vendor, ..main.js downloaded
4.  platformBrowserDynamic()
            .bootstrapModule(AppModule); executed 
    
    4.1 BrowserModule loaded, then CommonModule, Compiler loaded
    4.2 Angular scans declaration 
          [Angular detected all components/pipe/services,
                                   selector, etc ]
       ***JIT
    4.3 Angular search for bootstrap section
                        [AppComponent]

    4.4. Create AppComponent instance
    4.5. Take app.component view, place inside <app-root>

