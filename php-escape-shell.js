function escapeshellarg(cmd, isWindows, escapeWinEnv) {
    /**
     @param {string} cmd
     @param {boolean} isWindows
     @param {boolean} escapeWinEnv
     @return {string}
     */
    // Set Default Value: True.
    if (typeof(isWindows) === "undefined") { isWindows = true; }
    if (typeof(escapeWinEnv) === "undefined") { escapeWinEnv = true; }

    if (isWindows === true) {
        var escaped_cmd = '"' + cmd.replace(/"/g, ' ') + '"';
        if (escapeWinEnv === true) {
            escaped_cmd = escaped_cmd.replace(/%/g, ' ')
        }
        return escaped_cmd;
    }
    return "'" + cmd.replace('\'', "'\\'") + "'";
}
exports.escapeshellarg = escapeshellarg;

exports.php_escapeshellarg = function(str) {
    return escapeshellarg(str, /^win/.test(process.platform))
};


function escapeshellcmd(cmd, isWindows, escapeWinEnv) {
    /**
     @param {string} cmd
     @param {boolean} isWindows
     @param {boolean} escapeWinEnv
     @return {string}
     */
    // Set Default Value: True.
    if (typeof(isWindows) === "undefined") { isWindows = true; }
    if (typeof(escapeWinEnv) === "undefined") { escapeWinEnv = true; }

    var escaped_cmd = cmd.replace(
        /(["'#&;`\|\*\?~<>\^\(\)\[\]\{\}\$\\\x0A\xFF])/g,
        (isWindows === true) ? '^$1': '\\$1'
    );
    if ((escapeWinEnv === true) && (isWindows === true)) {
        escaped_cmd = escaped_cmd.replace(/%/g, '^%');
    }
    return escaped_cmd;
}
exports.escapeshellcmd = escapeshellcmd;

exports.php_escapeshellcmd = function(str) {
    return escapeshellcmd(str, /^win/.test(process.platform), true)
};