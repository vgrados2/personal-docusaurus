```shell
 npm init stencil
```

Stencil se puede usar para crear componentes independientes o aplicaciones completas. Después de ejecutar init, se le proporcionará un mensaje para que pueda elegir el tipo de proyecto para comenzar.

```
? Pick a starter › - Use arrow-keys. Return to submit.

❯  ionic-pwa     Everything you need to build fast, production ready PWAs
   app           Minimal starter for building a Stencil app or website
   component     Collection of web components that can be used anywhere
```

seleccionamos del tipo compoonent para crear una libreria  de componentes visuales

![image-20200517164222447](C:\Users\VICTOR GRADOS\AppData\Roaming\Typora\typora-user-images\image-20200517164222447.png)

Un aspecto importante de los componentes Web es la **encapsulación** — **ser capaz de mantener la estructura de marcado, estilo, y comportamiento oculto y separado de otro código en la página para que las diferentes partes no entre en conflicto**, y el código pueda permanecer limpio y agradable. El API de DOM Shadow es un parte clave para esto, proporcionando una forma de enlazar un DOM oculto y separado a un elemento. Este artículo cubre lo aspectos básicos para utilizar Shadow DOM.



## **Métodos de ciclo de vida (ganchos)**

Observe la `componentDidLoad`función y `console.log`en ella. Si ejecutamos la aplicación ahora, veremos nuestra apiKey registrada en la consola.

El método de clase `componentDidLoad`es un gancho de ciclo de vida. Lo que significa que se activa en un punto definido en la vida del componente. Los desarrolladores con experiencia en React reconocerán el nombre.

Aquí hay algunos ganchos de uso común (métodos de ciclo de vida en Stencil):

- **componentWillLoad ()** se activa antes de renderizar
- **componentDidLoad ()** se activa después de la representación (inserción en el DOM)
- **componentWillUpdate ()** se activa antes de actualizar
- **componentDidUpdate ()** se activa después de la actualización
- **componentDidUnload ()** se desencadena después de desmontar (eliminar del DOM)

CONDICIONALES EN EL METODO RENDER

https://www.joshmorony.com/understanding-jsx-for-stencil-js-applications/

https://phenomejs.org/docs/rendering-jsx.html