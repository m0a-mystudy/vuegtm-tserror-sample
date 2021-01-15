# vuegtm-tserror-sample

compile error! please help

```
ERROR in src/components/HelloWorld.vue:42:15
TS2339: Property 'trackView' does not exist on type 'Plugin_2'.
  Property 'trackView' does not exist on type 'PluginInstallFunction & { install?: PluginInstallFunction | undefined; }'.
    40 |   },
    41 |   mounted(){
  > 42 |     this.$gtm.trackView("MyScreenName", "currentpath");
       |               ^^^^^^^^^
    43 |   }
    44 | });
    45 | </script>
```


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
