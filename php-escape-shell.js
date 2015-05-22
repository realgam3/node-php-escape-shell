function escapeshellarg(str, isWindows) {
    if(isWindows === true) {
        return '"' + str.replace(/["%]/g, ' ') + '"';
    }
    return "'" + str.replace(/'/g, "'\\'") + "'";
}
exports.escapeshellarg = escapeshellarg;

exports.php_escapeshellarg = function(str) {
    return escapeshellarg(str, /^win/.test(process.platform))
};

function escapeshellcmd(str, isWindows, escapeWinEnv) {
    // Set Default Value: True.
    if (typeof(escapeWinEnv) === "undefined") { escapeWinEnv = true; }

    var escaped_cmd = str.replace(
        /(["'#&;`\|\*\?~<>\^\(\)\[\]\{\}\$\\\x0A\xFF])/g,
        (isWindows === true) ? '^$1': '\\$1'
    );
    if ((escapeWinEnv === true) && (isWindows === true)) {
        escaped_cmd = str.replace('%', '^$1');
    }
    return escaped_cmd;
}
exports.escapeshellcmd = escapeshellcmd;

exports.php_escapeshellcmd = function(str) {
    return escapeshellcmd(str, /^win/.test(process.platform), true)
};