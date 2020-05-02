### ANGULAR 5
--------------------------------------------------

#### INSTALACIÓN
+ ##### DESDE GIT :
`https://github.com/angular/quickstart`

`npm install`

`npm start`
##### DESDE ANGULAR CLI :
-----------------------------------------------------
* VERSION MINIFICADA :
  `ng new MY-PROYECT -p MYPR --minimal true --routing true`
  
  cz-adminfront-new
  `npm install `
  `ng serve`
- VERSION NORMAL :

  `npm install -g @angular/cli`

  `ng new mi_proyecto`

  ```ng serve```
---------------------------------------------------
  #### PASOS BASICOS PARA UN PROYECTO 
 ---------------------------------------------------
 + ##### Creacion de un nuevo modulo
    `ng g m lib/components`
 + ##### Creacion de un nuevo modulo con routing
    `ng generate module home --routing true`
  + ##### Creacion de un nuevo componente
    `ng g c lib/components/footer --export`
    ________________________________________________________
    --flat  -> PARA NO CREAR UNA CARPETA ESPECIFICA
-----------------------------------------------------------
   #### CONVERTIR UNA APLICACION A SASS 
    `ng set defaults.styleExt scss `
---------------------------------------------------
##### INSTALACION CLASICA

+ ng g m views/not-found
+ ng g c views/not-found/not-found --export --flat

---------------------------------------------------
#### COMPILACION FINAL
-----------------------------------------------------
 + ##### COMPILACION PARA DEV
 
    `ng build`

 + ##### COMPILACION PARA PRODUCCION
 
    `ng build --prod`
     ng build --prod --aot --sm
    
+ ##### COMPILACION PARA PREVISUALIZACION
   `ng serve --prod `

#### COMANDOS CLI
 ---------------------------------------------------

| TIPO        | COMANDO     |  
| ------------- |:-----:|
| Component     |  ng g component my-new-component |
| Directive          | ng g directive my-new-directive|
| Pipe	              |   ng g pipe my-new-pipe|
| Service	          | ng g service my-new-service  |
| Class	            | ng g class my-new-class    |
| Guard	            | ng g guard my-new-guard   | 
| Interface	        | ng g interface my-new-interface    | 
| Enum	            | ng g enum my-new-enum    | 
| Module	          | ng g module my-module    |
 ---------------------------------------------------

###### INSTALAR COMPONENTES 
----------------------------------------
npm i milligram --save
npm install moment --save


PARA INCLUIR DEPENDENCIAS--

.angular-cli.json
+ ######  EXAMPLE: 

```json
{
  "styles": [
      "../node_modules/milligram/dist/milligram.min.css",
      "styles.css"
      ],
  "scripts": ["../node_modules/moment/min/moment.min.js"]
}
```
 ---------------------------------------------------

INSTALANDO TRANSLATE : 
------------------------------

npm install @ngx-translate/core --save
npm install @ngx-translate/http-loader


INSTALAR BOOTSTRAP
::::::::::::::::::::::::::::::::::::::::::::::::::::::
   npm i bootstrap@4.0.0-alpha.6 jquery tether --save
   
   
   ERROR  NG SERVE  @angular-devkit/core
   
   npm i -D @angular-devkit/core
   ----------------------
  
  OTROS ENLACES: 
  #### METODOS PARA CONSULTAR OBSERVABLES
  
  https://coryrylan.com/blog/angular-multiple-http-requests-with-rxjs
  
  https://netbasal.com/rxjs-six-operators-that-you-must-know-5ed3b6e238a0
  
  merge map > forkjoin
  
  ng new My_New_Project --style=scss