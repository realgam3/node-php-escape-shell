var phpescapeshell = require('../');
var assert = require('assert');

var test_string = "%\"'#&;`|*?~<>^()[]{}$\\\x0A\xFF";

// escapeshellarg - isWindows=false, escapeWinEnv=false
assert.equal(
    phpescapeshell.escapeshellarg(test_string, false, false),
    "'%\"'\\'#&;`|*?~<>^()[]{}$\\\x0A\xFF'"
);
// escapeshellarg - isWindows=false, escapeWinEnv=true
assert.equal(
    phpescapeshell.escapeshellarg(test_string, false, true),
    "'%\"'\\'#&;`|*?~<>^()[]{}$\\\x0A\xFF'"
);
// escapeshellarg - isWindows=true, escapeWinEnv=false
assert.equal(
    phpescapeshell.escapeshellarg(test_string, true, false),
    "\"% '#&;`|*?~<>^()[]{}$\\\x0A\xFF\""
);
// escapeshellarg - isWindows=true, escapeWinEnv=true
assert.equal(
    phpescapeshell.escapeshellarg(test_string, true, true),
    "\"  '#&;`|*?~<>^()[]{}$\\\x0A\xFF\""
);
// escapeshellarg - No Modifications Needed
assert.equal(
    phpescapeshell.escapeshellarg("Hello World - Test String!"),
    "\"Hello World - Test String!\""
);


// escapeshellcmd - isWindows=false, escapeWinEnv=false
assert.equal(
    phpescapeshell.escapeshellcmd(test_string, false, false),
    "%\\\"\\'\\#\\&\\;\\`\\|\\*\\?\\~\\<\\>\\^\\(\\)\\[\\]\\{\\}\\$\\\\\\\x0A\\\xFF"
);
// escapeshellcmd - isWindows=false, escapeWinEnv=true
assert.equal(
    phpescapeshell.escapeshellcmd(test_string, false, true),
    "%\\\"\\'\\#\\&\\;\\`\\|\\*\\?\\~\\<\\>\\^\\(\\)\\[\\]\\{\\}\\$\\\\\\\x0A\\\xFF"
);
// escapeshellcmd - isWindows=true, escapeWinEnv=false
assert.equal(
    phpescapeshell.escapeshellcmd(test_string, true, false),
    "%^\"^'^#^&^;^`^|^*^?^~^<^>^^^(^)^[^]^{^}^$^\\^\x0A^\xFF"
);
// escapeshellcmd - isWindows=true, escapeWinEnv=true
assert.equal(
    phpescapeshell.escapeshellcmd(test_string, true, true),
    "^%^\"^'^#^&^;^`^|^*^?^~^<^>^^^(^)^[^]^{^}^$^\\^\x0A^\xFF"
);
// escapeshellcmd - No Modifications Needed
assert.equal(
    phpescapeshell.escapeshellcmd("Hello World - Test String!"),
    "Hello World - Test String!"
);
