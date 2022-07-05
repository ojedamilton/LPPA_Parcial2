# LPPA Parcial 2
### Aplicación web utilizando HTML, CSS y Javascript : [Mi sitio Web](https://ojedamilton.github.io/LPPA_Parcial2/index.html)
- Página de login (Inicio de sesión)
- Página de dashboard (tabla con información).
#### PANTALLA LOGIN
- Al momento de realizar el inicio de sesión, se obtienen los datos ingresados desde Javascript y se
realiza una request de tipo POST a esta URL “https://basic-server-one.vercel.app/login”.

- Si la respuesta no es exitosa, se muestra un mensaje de error.

- Si la respuesta es exitosa se hacen 2 cosas:
1. Redirige a la pantalla del Dashboard.
2. Guarda en LocalStorage una variable con valor booleano indicando que el usuario inició sesión.

- Al momento de cargar dicha página, consulta si el usuario ya inició sesión previamente o no. Si el
usuario ya inició sesión, la pantalla Login automáticamente se dirige a la pantalla Dashboard,
“salteando” el Login. Caso contrario, mostramos la pantalla de Login.
#### PANTALLA DASHBOARD
- Realizamos una request GET a la URL “https://basic-server-one.vercel.app/users”
- Mostramos el resultado en una tabla HTML.
- En caso de que la request falle, mostramos  un mensaje de error.
- En el header de esta pantalla agregamos  un botón “Logout” que borra el valor de login guardado en
LocalStorage y redireccionamos a la pantalla de Login  utilizando la web Api “Location”