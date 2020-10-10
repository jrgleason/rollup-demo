# Jackie R. Gleason UI

This is my personal ui framework. 

## Getting started

Add 
    
    <script src="//unpkg.com/@jrg/ui/target/jrg-ui.esm.mjs" type="module"></script>
    
To your existing site. Then start declaring components...

    <jrg-top-bar-fixed></jrg-top-bar-fixed>
    <div class="jrg-wrapper-main">
      <jrg-splash></jrg-splash>
      <jrg-sidebar url="/site.config.json"></jrg-sidebar>
    </div>