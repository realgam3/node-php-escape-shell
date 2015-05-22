node-php-escape-shell
============

Based on php shell metacharacters escape functions

Install
-------

    npm install node-php-escape-shell

Description
-------

### escapeshellarg

php_escapeshellarg() adds single quotes around a string and quotes/escapes any existing single quotes allowing you to pass a string directly to a shell function and having it be treated as a single safe argument.  
This function should be used to escape individual arguments to shell functions coming from user input.  
On Windows, php_escapeshellarg() instead removes percent signs, 
replaces double quotes with spaces and adds double quotes around the string. 

``` js
php_escapeshellarg(cmd)
```

escapeshellarg() adds more options to the php original escapeshellarg function, 
isWindows - added to allow escaping linux style args in windows os and vice versa. 
escapeWinEnv - added to disable escaping of windows environment variables like %windir%. 

``` js
escapeshellarg(cmd[, isWindows[, escapeWinEnv]])
```

### escapeshellcmd

php_escapeshellcmd() escapes any characters in a string that might be used to trick a shell command into executing arbitrary commands. 
This function should be used to make sure that any data coming from user input is escaped before this data is passed to the exec() functions. 
Following characters are preceded by a backslash: #&;`|*?~<>^()[]{}$\, \x0A and \xFF. ' and " are escaped only if they are not paired. 
In Windows, all these characters plus % are replaced by a space instead. 

``` js
php_escapeshellcmd(cmd)
```

escapeshellcmd() adds more options to the php original escapeshellcmd function,  
isWindows - added to allow escaping linux style args in windows os and vice versa. 
escapeWinEnv - added to disable escaping of windows environment variables like %windir%.

``` js
escapeshellcmd(cmd[, isWindows[, escapeWinEnv]])
```

Example
-------

### escapeshellarg

``` js
var php_escapeshellarg = require('php-escape-shell').php_escapeshellarg;

var dir = "src\" && nc -lvvp 4444 && echo \"";
console.log("cmd.exe /C dir " + php_escapeshellarg(dir));
```
Output (In Windows): cmd.exe /C dir "src  && nc -lvvp 4444 && echo  "

``` js
var escapeshellarg = require('php-escape-shell').escapeshellarg;

var dir = "%WINDIR%";
console.log("cmd.exe /C dir " + escapeshellarg(dir, true, false));
```
Output: cmd.exe /C dir "%WINDIR%"

### escapeshellcmd

``` js
var php_escapeshellcmd = require('php-escape-shell').php_escapeshellcmd;

var dir = "src\" && nc -lvvp 4444 && echo \"";
console.log(php_escapeshellcmd("cmd.exe /C dir " + dir));
```
Output (In Windows): cmd.exe /C dir src^" ^&^& nc -lvvp 4444 ^&^& echo ^"

``` js
var escapeshellcmd = require('php-escape-shell').escapeshellcmd;

var dir = "%WINDIR%";
console.log(escapeshellcmd("cmd.exe /C dir " + dir, true, false));
```
Output: cmd.exe /C dir %WINDIR%

License
-------

MIT
