!function(n){var r={};function _(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,_),e.l=!0,e.exports}_.m=n,_.c=r,_.d=function(n,r,t){_.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},_.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},_.t=function(n,r){if(1&r&&(n=_(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(_.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var e in n)_.d(t,e,function(r){return n[r]}.bind(null,e));return t},_.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return _.d(r,"a",r),r},_.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},_.p="",_(_.s=9)}([function(n,r,_){var t=_(1),e=_(3),o=_(8);function u(n,r){var _=e.get(n.f||"default"),u=o(n);return u.thoughts=r?"\\":"o",t[r?"say":"think"](n.text||n._.join(" "),n.n?null:n.W)+"\n"+_(u)}r.say=function(n){return u(n,!0)},r.think=function(n){return u(n,!1)},r.list=e.list},function(n,r,_){_(2);function t(n,r,_){var t,h=function(n,r){n=n.replace(/\r\n?|[\n\u2028\u2029]/g,"\n").replace(/^\uFEFF/,"");var _=[];if(r)for(var t=0;t<n.length;){var e=n.indexOf("\n",t),o=Math.min(t+r,-1===e?n.length:e);_.push(n.substring(t,o)),t=o,"\n"===n.charAt(t)&&(t+=1)}else _=n.split("\n");return _}(n,r),s=function(n){for(var r=0,_=0,t=n.length;_<t;_+=1)n[_].length>r&&(r=n[_].length);return r}(h);if(1===h.length)t=[" "+o(s),_.only[0]+" "+h[0]+" "+_.only[1]," "+u(s)];else{t=[" "+o(s)];for(var i=0,c=h.length;i<c;i+=1){var $;$=0===i?_.first:i===c-1?_.last:_.middle,t.push($[0]+" "+e(h[i],s)+" "+$[1])}t.push(" "+u(s))}return t.join("\n")}function e(n,r){return n+new Array(r-n.length+1).join(" ")}function o(n){return new Array(n+3).join("_")}function u(n){return new Array(n+3).join("-")}r.say=function(n,r){return delimiters={first:["/","\\"],middle:["|","|"],last:["\\","/"],only:["<",">"]},t(n,r,delimiters)},r.think=function(n,r){return delimiters={first:["(",")"],middle:["(",")"],last:["(",")"],only:["(",")"]},t(n,r,delimiters)}},function(n,r){r.endianness=function(){return"LE"},r.hostname=function(){return"undefined"!=typeof location?location.hostname:""},r.loadavg=function(){return[]},r.uptime=function(){return 0},r.freemem=function(){return Number.MAX_VALUE},r.totalmem=function(){return Number.MAX_VALUE},r.cpus=function(){return[]},r.type=function(){return"Browser"},r.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},r.networkInterfaces=r.getNetworkInterfaces=function(){return{}},r.arch=function(){return"javascript"},r.platform=function(){return"browser"},r.tmpdir=r.tmpDir=function(){return"/tmp"},r.EOL="\n",r.homedir=function(){return"/"}},function(n,r,_){_(4);var t=_(6),e=_(7).cowdefs;r.get=function(n){var r=e[n];return r||(r=e.default),function(n){return t(r,n)}},r.list=function(n){var r=[];for(var _ in e)r.push(_);n(null,r)}},function(n,r,_){(function(n){function _(n,r){for(var _=0,t=n.length-1;t>=0;t--){var e=n[t];"."===e?n.splice(t,1):".."===e?(n.splice(t,1),_++):_&&(n.splice(t,1),_--)}if(r)for(;_--;_)n.unshift("..");return n}function t(n,r){if(n.filter)return n.filter(r);for(var _=[],t=0;t<n.length;t++)r(n[t],t,n)&&_.push(n[t]);return _}r.resolve=function(){for(var r="",e=!1,o=arguments.length-1;o>=-1&&!e;o--){var u=o>=0?arguments[o]:n.cwd();if("string"!=typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(r=u+"/"+r,e="/"===u.charAt(0))}return(e?"/":"")+(r=_(t(r.split("/"),function(n){return!!n}),!e).join("/"))||"."},r.normalize=function(n){var o=r.isAbsolute(n),u="/"===e(n,-1);return(n=_(t(n.split("/"),function(n){return!!n}),!o).join("/"))||o||(n="."),n&&u&&(n+="/"),(o?"/":"")+n},r.isAbsolute=function(n){return"/"===n.charAt(0)},r.join=function(){var n=Array.prototype.slice.call(arguments,0);return r.normalize(t(n,function(n,r){if("string"!=typeof n)throw new TypeError("Arguments to path.join must be strings");return n}).join("/"))},r.relative=function(n,_){function t(n){for(var r=0;r<n.length&&""===n[r];r++);for(var _=n.length-1;_>=0&&""===n[_];_--);return r>_?[]:n.slice(r,_-r+1)}n=r.resolve(n).substr(1),_=r.resolve(_).substr(1);for(var e=t(n.split("/")),o=t(_.split("/")),u=Math.min(e.length,o.length),h=u,s=0;s<u;s++)if(e[s]!==o[s]){h=s;break}var i=[];for(s=h;s<e.length;s++)i.push("..");return(i=i.concat(o.slice(h))).join("/")},r.sep="/",r.delimiter=":",r.dirname=function(n){if("string"!=typeof n&&(n+=""),0===n.length)return".";for(var r=n.charCodeAt(0),_=47===r,t=-1,e=!0,o=n.length-1;o>=1;--o)if(47===(r=n.charCodeAt(o))){if(!e){t=o;break}}else e=!1;return-1===t?_?"/":".":_&&1===t?"/":n.slice(0,t)},r.basename=function(n,r){var _=function(n){"string"!=typeof n&&(n+="");var r,_=0,t=-1,e=!0;for(r=n.length-1;r>=0;--r)if(47===n.charCodeAt(r)){if(!e){_=r+1;break}}else-1===t&&(e=!1,t=r+1);return-1===t?"":n.slice(_,t)}(n);return r&&_.substr(-1*r.length)===r&&(_=_.substr(0,_.length-r.length)),_},r.extname=function(n){"string"!=typeof n&&(n+="");for(var r=-1,_=0,t=-1,e=!0,o=0,u=n.length-1;u>=0;--u){var h=n.charCodeAt(u);if(47!==h)-1===t&&(e=!1,t=u+1),46===h?-1===r?r=u:1!==o&&(o=1):-1!==r&&(o=-1);else if(!e){_=u+1;break}}return-1===r||-1===t||0===o||1===o&&r===t-1&&r===_+1?"":n.slice(r,t)};var e="b"==="ab".substr(-1)?function(n,r,_){return n.substr(r,_)}:function(n,r,_){return r<0&&(r=n.length+r),n.substr(r,_)}}).call(this,_(5))},function(n,r){var _,t,e=n.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function h(n){if(_===setTimeout)return setTimeout(n,0);if((_===o||!_)&&setTimeout)return _=setTimeout,setTimeout(n,0);try{return _(n,0)}catch(r){try{return _.call(null,n,0)}catch(r){return _.call(this,n,0)}}}!function(){try{_="function"==typeof setTimeout?setTimeout:o}catch(n){_=o}try{t="function"==typeof clearTimeout?clearTimeout:u}catch(n){t=u}}();var s,i=[],c=!1,$=-1;function a(){c&&s&&(c=!1,s.length?i=s.concat(i):$=-1,i.length&&l())}function l(){if(!c){var n=h(a);c=!0;for(var r=i.length;r;){for(s=i,i=[];++$<r;)s&&s[$].run();$=-1,r=i.length}s=null,c=!1,function(n){if(t===clearTimeout)return clearTimeout(n);if((t===u||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(n);try{t(n)}catch(r){try{return t.call(null,n)}catch(r){return t.call(this,n)}}}(n)}}function X(n,r){this.fun=n,this.array=r}function g(){}e.nextTick=function(n){var r=new Array(arguments.length-1);if(arguments.length>1)for(var _=1;_<arguments.length;_++)r[_-1]=arguments[_];i.push(new X(n,r)),1!==i.length||c||h(l)},X.prototype.run=function(){this.fun.apply(null,this.array)},e.title="browser",e.browser=!0,e.env={},e.argv=[],e.version="",e.versions={},e.on=g,e.addListener=g,e.once=g,e.off=g,e.removeListener=g,e.removeAllListeners=g,e.emit=g,e.prependListener=g,e.prependOnceListener=g,e.listeners=function(n){return[]},e.binding=function(n){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(n){throw new Error("process.chdir is not supported")},e.umask=function(){return 0}},function(n,r){function _(n){return n&&n.replace?n.replace(/\$/g,"$$$$"):n}n.exports=function(n,r){var t=_(r.eyes),e=_(r.tongue);return-1!==n.indexOf("$the_cow")&&(n=function(n){n=n.replace(/\r\n?|[\n\u2028\u2029]/g,"\n").replace(/^\uFEFF/,"");var r=/\$the_cow\s*=\s*<<"*EOC"*;*\n([\s\S]+)\nEOC\n/.exec(n);return r?r[1].replace(/\\{2}/g,"\\").replace(/\\@/g,"@").replace(/\\\$/g,"$"):(console.error("Cannot parse cow file\n",n),n)}(n)),n.replace(/\$thoughts/g,r.thoughts).replace(/\$eyes/g,t).replace(/\$tongue/g,e).replace(/\$\{eyes\}/g,t).replace(/\$\{tongue\}/g,e)}},function(n,r){r.cowdefs={"beavis.zen":"##\r\n## Beavis, with Zen philosophy removed.\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts         __------~~-,\r\n    $thoughts      ,'            ,\r\n          /               \\\\\r\n         /                :\r\n        |                  '\r\n        |                  |\r\n        |                  |\r\n         |   _--           |\r\n         _| =-.     .-.   ||\r\n         o|/o/       _.   |\r\n         /  ~          \\\\ |\r\n       (____\\@)  ___~    |\r\n          |_===~~~.`    |\r\n       _______.--~     |\r\n       \\\\________       |\r\n                \\\\      |\r\n              __/-___-- -__\r\n             /            _ \\\\\r\nEOC\r\n","bud-frogs":"##\r\n## The Budweiser frogs\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts\r\n          oO)-.                       .-(Oo\r\n         /__  _\\\\                     /_  __\\\\\r\n         \\\\  \\\\(  |     ()~()         |  )/  /\r\n          \\\\__|\\\\ |    (-___-)        | /|__/\r\n          '  '--'    ==`-'==        '--'  '\r\nEOC\r\n",bunny:"##\r\n## A cute little wabbit\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts   \\\\\r\n        \\\\ /\\\\\r\n        ( )\r\n      .( o ).\r\nEOC\r\n",cheese:"##\r\n## The cheese from milk & cheese\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts\r\n      _____   _________\r\n     /     \\\\_/         |\r\n    |                 ||\r\n    |                 ||\r\n   |    ###\\\\  /###   | |\r\n   |     0  \\\\/  0    | |\r\n  /|                 | |\r\n / |        <        |\\\\ \\\\\r\n| /|                 | | |\r\n| |     \\\\_______/   |  | |\r\n| |                 | / /\r\n/||                 /|||\r\n   ----------------|\r\n        | |    | |\r\n        ***    ***\r\n       /___\\\\  /___\\\\\r\nEOC\r\n",chick:"$the_cow = <<\"EOC\";\r\n$thoughts\r\n $thoughts\r\n\r\n        .---.\r\n     _ /     ' .---.\r\n     >|  o    `     `\\\r\n     ` \\       .---._ '._ ,\r\n        '-.;         /`  /'\r\n           \\    '._.'   /\r\n            '.        .'\r\n              `\";--\\_/\r\n       jgs    _/_   |\r\n           -'`/  .--;--\r\n             '    .'\r\n\r\nEOC\r\n","chicken-and-egg":'$the_cow = <<"EOC";\r\n$thoughts\r\n $thoughts\r\n\r\n\r\n              /\'._     _,\r\n              \\   ;__.\'  }\r\n          (`-._;-" _.--.}\'\r\n          /_\'    /`    _}     _.--"""-.\r\n            `.   \\_._.;     .\'         \\\r\n              \'-.__ /      /            |\r\n      jgs      _/  `\\      \\            /\r\n              ^`   ^`       \'._       .\'\r\n                               `"""""`\r\nEOC\r\n',cower:"##\r\n## A cowering cow\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts\r\n        ,__, |    | \r\n        (oo)\\\\|    |___\r\n        (__)\\\\|    |   )\\\\_\r\n             |    |_w |  \\\\\r\n             |    |  ||   *\r\n\r\n             Cower....\r\nEOC\r\n",daemon:"##\r\n## 4.4 >> 5.4\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts         ,        ,\r\n    $thoughts       /(        )`\r\n     $thoughts      \\\\ \\\\___   / |\r\n            /- _  `-/  '\r\n           (/\\\\/ \\\\ \\\\   /\\\\\r\n           / /   | `    \\\\\r\n           O O   ) /    |\r\n           `-^--'`<     '\r\n          (_.)  _  )   /\r\n           `.___/`    /\r\n             `-----' /\r\n<----.     __ / __   \\\\\r\n<----|====O)))==) \\\\) /====\r\n<----'    `--' `.__,' \\\\\r\n             |        |\r\n              \\\\       /\r\n        ______( (_  / \\\\______\r\n      ,'  ,-----'   |        \\\\\r\n      `--{__________)        \\\\/\r\nEOC\r\n",default:'$the_cow = <<"EOC";\r\n        $thoughts   ^__^\r\n         $thoughts  ($eyes)\\\\_______\r\n            (__)\\\\       )\\\\/\\\\\r\n             $tongue ||----w |\r\n                ||     ||\r\nEOC\r\n',doge:"##\r\n## Doge\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts\r\n\r\n           _                _\r\n          / /.           _-//\r\n         / ///         _-   /\r\n        //_-//=========     /\r\n      _///        //_ ||   ./\r\n    _|                 -__-||\r\n   |  __              - \\\\   \\\r\n  |  |#-       _-|_           |\r\n  |            |#|||       _   |  \r\n |  _==_                       ||\r\n- ==|.=.=|_ =                  |\r\n|  |-|-  ___                  |\r\n|    --__   _                /\r\n||     ===                  |\r\n |                     _. //\r\n  ||_         __-   _-  _|\r\n     \\_______/  ___/  _|\r\n                   --*\r\nEOC\r\n","dragon-and-cow":"##\r\n## A dragon smiting a cow, possible credit to kube@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n                       $thoughts                    ^    /^\r\n                        $thoughts                  / \\\\  // \\\\\r\n                         $thoughts   |\\\\___/|      /   \\\\//  .\\\\\r\n                          $thoughts  /O  O  \\\\__  /    //  | \\\\ \\\\           *----*\r\n                            /     /  \\\\/_/    //   |  \\\\  \\\\          \\\\   |\r\n                            \\@___\\@`    \\\\/_   //    |   \\\\   \\\\         \\\\/\\\\ \\\\\r\n                           0/0/|       \\\\/_ //     |    \\\\    \\\\         \\\\  \\\\\r\n                       0/0/0/0/|        \\\\///      |     \\\\     \\\\       |  |\r\n                    0/0/0/0/0/_|_ /   (  //       |      \\\\     _\\\\     |  /\r\n                 0/0/0/0/0/0/`/,_ _ _/  ) ; -.    |    _ _\\\\.-~       /   /\r\n                             ,-}        _      *-.|.-~-.           .~    ~\r\n            \\\\     \\\\__/        `/\\\\      /                 ~-. _ .-~      /\r\n             \\\\____($eyes)           *.   }            {                   /\r\n             (    (--)          .----~-.\\\\        \\\\-`                 .~\r\n             //__\\\\\\\\  \\\\__ Ack!   ///.----..<        \\\\             _ -~\r\n            //    \\\\\\\\               ///-._ _ _ _ _ _ _{^ - - - - ~\r\nEOC\r\n",dragon:"##\r\n## The Whitespace Dragon\r\n##\r\n$the_cow = <<EOC;\r\n      $thoughts                    / \\\\  //\\\\\r\n       $thoughts    |\\\\___/|      /   \\\\//  \\\\\\\\\r\n            /0  0  \\\\__  /    //  | \\\\ \\\\    \r\n           /     /  \\\\/_/    //   |  \\\\  \\\\  \r\n           \\@_^_\\@'/   \\\\/_   //    |   \\\\   \\\\ \r\n           //_^_/     \\\\/_ //     |    \\\\    \\\\\r\n        ( //) |        \\\\///      |     \\\\     \\\\\r\n      ( / /) _|_ /   )  //       |      \\\\     _\\\\\r\n    ( // /) '/,_ _ _/  ( ; -.    |    _ _\\\\.-~        .-~~~^-.\r\n  (( / / )) ,-{        _      `-.|.-~-.           .~         `.\r\n (( // / ))  '/\\\\      /                 ~-. _ .-~      .-~^-.  \\\\\r\n (( /// ))      `.   {            }                   /      \\\\  \\\\\r\n  (( / ))     .----~-.\\\\        \\\\-'                 .~         \\\\  `. \\\\^-.\r\n             ///.----..>        \\\\             _ -~             `.  ^-`  ^-_\r\n               ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~\r\n                                                                  /.-~\r\nEOC\r\n","elephant-in-snake":"##\r\n## Do we need to explain this?\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts              ....       \r\n           ........    .      \r\n          .            .      \r\n         .             .      \r\n.........              .......\r\n..............................\r\n\r\nElephant inside ASCII snake\r\nEOC\r\n",elephant:"##\r\n## An elephant out and about\r\n##\r\n$the_cow = <<EOC;\r\n $thoughts     /\\\\  ___  /\\\\\r\n  $thoughts   // \\\\/   \\\\/ \\\\\\\\\r\n     ((    O O    ))\r\n      \\\\\\\\ /     \\\\ //\r\n       \\\\/  | |  \\\\/ \r\n        |  | |  |  \r\n        |  | |  |  \r\n        |   o   |  \r\n        | |   | |  \r\n        |m|   |m|  \r\nEOC\r\n",eyes:'##\r\n## Evil-looking eyes\r\n##\r\n$the_cow = <<EOC;\r\n    $thoughts\r\n     $thoughts\r\n                                   .::!!!!!!!:.\r\n  .!!!!!:.                        .:!!!!!!!!!!!!\r\n  ~~~~!!!!!!.                 .:!!!!!!!!!UWWW\\$\\$\\$ \r\n      :\\$\\$NWX!!:           .:!!!!!!XUWW\\$\\$\\$\\$\\$\\$\\$\\$\\$P \r\n      \\$\\$\\$\\$\\$##WX!:      .<!!!!UW\\$\\$\\$\\$"  \\$\\$\\$\\$\\$\\$\\$\\$# \r\n      \\$\\$\\$\\$\\$  \\$\\$\\$UX   :!!UW\\$\\$\\$\\$\\$\\$\\$\\$\\$   4\\$\\$\\$\\$\\$* \r\n      ^\\$\\$\\$B  \\$\\$\\$\\$\\\\     \\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$   d\\$\\$R" \r\n        "*\\$bd\\$\\$\\$\\$      \'*\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$o+#" \r\n             """"          """"""" \r\nEOC\r\n',"flaming-sheep":"##\r\n## The flaming sheep, contributed by Geordan Rosario (geordan@csua.berkeley.edu)\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts            .    .     .   \r\n   $thoughts      .  . .     `  ,     \r\n    $thoughts    .; .  : .' :  :  : . \r\n     $thoughts   i..`: i` i.i.,i  i . \r\n      $thoughts   `,--.|i |i|ii|ii|i: \r\n           U${eyes}U\\\\.'\\@\\@\\@\\@\\@\\@`.||' \r\n           \\\\__/(\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@)'  \r\n                (\\@\\@\\@\\@\\@\\@\\@\\@)    \r\n                `YY~~~~YY'    \r\n                 ||    ||     \r\nEOC\r\n",ghostbusters:'##\r\n## Ghostbusters!\r\n##\r\n$the_cow = <<EOC;\r\n          $thoughts\r\n           $thoughts\r\n            $thoughts          __---__\r\n                    _-       /--______\r\n               __--( /     \\\\ )XXXXXXXXXXX\\\\v.\r\n             .-XXX(   O   O  )XXXXXXXXXXXXXXX-\r\n            /XXX(       U     )        XXXXXXX\\\\\r\n          /XXXXX(              )--_  XXXXXXXXXXX\\\\\r\n         /XXXXX/ (      O     )   XXXXXX   \\\\XXXXX\\\\\r\n         XXXXX/   /            XXXXXX   \\\\__ \\\\XXXXX\r\n         XXXXXX__/          XXXXXX         \\\\__----\x3e\r\n ---___  XXX__/          XXXXXX      \\\\__         /\r\n   \\\\-  --__/   ___/\\\\  XXXXXX            /  ___--/=\r\n    \\\\-\\\\    ___/    XXXXXX              \'--- XXXXXX\r\n       \\\\-\\\\/XXX\\\\ XXXXXX                      /XXXXX\r\n         \\\\XXXXXXXXX   \\\\                    /XXXXX/\r\n          \\\\XXXXXX      >                 _/XXXXX/\r\n            \\\\XXXXX--__/              __-- XXXX/\r\n             -XXXXXXXX---------------  XXXXXX-\r\n                \\\\XXXXXXXXXXXXXXXXXXXXXXXXXX/\r\n                  ""VXXXXXXXXXXXXXXXXXXV""\r\nEOC\r\n',hellokitty:"##\r\n## Hello Kitty\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts\r\n      /\\\\_)o<\r\n     |      \\\\\r\n     | O . O|\r\n      \\\\_____/\r\nEOC\r\n",kiss:"##\r\n## A lovers' empbrace\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts\r\n             ,;;;;;;;,\r\n            ;;;;;;;;;;;,\r\n           ;;;;;'_____;'\r\n           ;;;(/))))|((\\\\\r\n           _;;((((((|))))\r\n          / |_\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\r\n     .--~(  \\\\ ~))))))))))))\r\n    /     \\\\  `\\\\-(((((((((((\\\\\\\\\r\n    |    | `\\\\   ) |\\\\       /|)\r\n     |    |  `. _/  \\\\_____/ |\r\n      |    , `\\\\~            /\r\n       |    \\\\  \\\\           /\r\n      | `.   `\\\\|          /\r\n      |   ~-   `\\\\        /\r\n       \\\\____~._/~ -_,   (\\\\\r\n        |-----|\\\\   \\\\    ';;\r\n       |      | :;;;'     \\\\\r\n      |  /    |            |\r\n      |       |            |\r\nEOC\r\n",kitty:"##\r\n## A kitten of sorts, I think\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts\r\n       (\"`-'  '-/\") .___..--' ' \"`-._\r\n         ` *_ *  )    `-.   (      ) .`-.__. `)\r\n         (_Y_.) ' ._   )   `._` ;  `` -. .-'\r\n      _.. `--'_..-_/   /--' _ .' ,4\r\n   ( i l ),-''  ( l i),'  ( ( ! .-'    \r\nEOC\r\n",koala:"##\r\n## From the canonical koala collection\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts\r\n       ___  \r\n     {~._.~}\r\n      ( Y )\r\n     ()~*~()   \r\n     (_)-(_)   \r\nEOC\r\n",kosh:"##\r\n## It's a Kosh Cow!\r\n##\r\n$the_cow = <<EOC;\r\n    $thoughts\r\n     $thoughts\r\n      $thoughts\r\n  ___       _____     ___\r\n /   \\\\     /    /|   /   \\\\\r\n|     |   /    / |  |     |\r\n|     |  /____/  |  |     |     \r\n|     |  |    |  |  |     |\r\n|     |  | {} | /   |     |\r\n|     |  |____|/    |     |\r\n|     |    |==|     |     |\r\n|      \\\\___________/      |\r\n|                         |\r\n|                         |\r\nEOC\r\n","luke-koala":"##\r\n## From the canonical koala collection\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts          .\r\n       ___   //\r\n     {~._.~}// \r\n      ( Y )K/  \r\n     ()~*~()   \r\n     (_)-(_)   \r\n     Luke    \r\n     Sywalker\r\n     koala   \r\nEOC\r\n","mech-and-cow":"                                   ,-----.\r\n                                   |     |\r\n                                ,--|     |-.\r\n                         __,----|  |     | |\r\n                       ,;::     |  `_____' |\r\n                       `._______|    i^i   |\r\n                                `----| |---'| .\r\n                           ,-------._| |== ||//\r\n                           |       |_|P`.  /'/\r\n                           `-------' 'Y Y/'/'\r\n                                     .==\\ /_\\\r\n   ^__^                             /   /'|  `i\r\n   (oo)\\_______                   /'   /  |   |\r\n   (__)\\       )\\/\\             /'    /   |   `i\r\n       ||----w |           ___,;`----'.___L_,-'`\\__\r\n       ||     ||          i_____;----\\.____i\"\"\\____\\\r\n\r\n\r\n\r\n\r\n\r\n",meow:"##\r\n## A meowing tiger?\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts ,   _ ___.--'''`--''//-,-_--_.\r\n      \\\\`\"' ` || \\\\\\\\ \\\\ \\\\\\\\/ / // / ,-\\\\\\\\`,_\r\n     /'`  \\\\ \\\\ || Y  | \\\\|/ / // / - |__ `-,\r\n    /\\@\"\\\\  ` \\\\ `\\\\ |  | ||/ // | \\\\/  \\\\  `-._`-,_.,\r\n   /  _.-. `.-\\\\,___/\\\\ _/|_/_\\\\_\\\\/|_/ |     `-._._)\r\n   `-'``/  /  |  // \\\\__/\\\\__  /  \\\\__/ \\\\\r\n        `-'  /-\\\\/  | -|   \\\\__ \\\\   |-' |\r\n          __/\\\\ / _/ \\\\/ __,-'   ) ,' _|'\r\n         (((__/(((_.' ((___..-'((__,'\r\nEOC\r\n",milk:"##\r\n## Milk from Milk and Cheese\r\n##\r\n$the_cow = <<EOC;\r\n $thoughts     ____________ \r\n  $thoughts    |__________|\r\n      /           /\\\\\r\n     /           /  \\\\\r\n    /___________/___/|\r\n    |          |     |\r\n    |  ==\\\\ /== |     |\r\n    |   O   O  | \\\\ \\\\ |\r\n    |     <    |  \\\\ \\\\|\r\n   /|          |   \\\\ \\\\\r\n  / |  \\\\_____/ |   / /\r\n / /|          |  / /|\r\n/||\\\\|          | /||\\\\/\r\n    -------------|   \r\n        | |    | | \r\n       <__/    \\\\__>\r\nEOC\r\n",moofasa:"##\r\n## MOOfasa.\r\n##\r\n$the_cow = <<EOC;\r\n       $thoughts    ____\r\n        $thoughts  /    \\\\\r\n          | ^__^ |\r\n          | ($eyes) |______\r\n          | (__) |      )\\\\/\\\\\r\n           \\\\____/|----w |\r\n                ||     ||\r\n\r\n\t         Moofasa\r\nEOC\r\n",moose:"$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts   \\\\_\\\\_    _/_/\r\n    $thoughts      \\\\__/\r\n           ($eyes)\\\\_______\r\n           (__)\\\\       )\\\\/\\\\\r\n            $tongue ||----w |\r\n               ||     ||\r\nEOC\r\n",mutilated:"##\r\n## A mutilated cow, from aspolito@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n       $thoughts   \\\\_______\r\n v__v   $thoughts  \\\\   O   )\r\n ($eyes)      ||----w |\r\n (__)      ||     ||  \\\\/\\\\\r\n  $tongue\r\nEOC\r\n",ren:"##\r\n## Ren \r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts\r\n    ____  \r\n   /# /_\\\\_\r\n  |  |/o\\\\o\\\\\r\n  |  \\\\\\\\_/_/\r\n / |_   |  \r\n|  ||\\\\_ ~| \r\n|  ||| \\\\/  \r\n|  |||_    \r\n \\\\//  |    \r\n  ||  |    \r\n  ||_  \\\\   \r\n  \\\\_|  o|  \r\n  /\\\\___/   \r\n /  ||||__ \r\n    (___)_)\r\nEOC\r\n",rooster:"$the_cow = <<\"EOC\";\r\n$thoughts\r\n $thoughts\r\n\r\n.\".\".\".\r\n(`       `)               _.-=-.\r\n'._.--.-;             .-`  -'  '.\r\n.-'`.o )  \\           /  .-_.--'  `\\\r\n`;---) \\    ;         /  / ;' _-_.-' `\r\n`;\"`  ;    \\        ; .  .'   _-' \\\r\n(    )    |        |  / .-.-'    -`\r\n '-.-'     \\       | .' ` '.-'-\\`\r\n  /_./\\_.|\\_\\      ;  ' .'-'.-.\r\n  /         '-._    \\` /  _;-,\r\n |         .-=-.;-._ \\  -'-,\r\n \\        /      `\";`-`,-\"`)\r\n  \\       \\     '-- `\\.\\\r\n   '.      '._ '-- '--'/\r\n     `-._     `'----'`;\r\n         `\"\"\"--.____,/\r\n                \\\\  \\\r\n                // /`\r\n            ___// /__\r\n  jgs     (`(`(---\"-`)\r\n\r\nEOC\r\n",satanic:"##\r\n## Satanic cow, source unknown.\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts  (__)  \r\n         (\\\\/)  \r\n  /-------\\\\/    \r\n / | 666 ||    \r\n*  ||----||      \r\n   ~~    ~~      \r\nEOC\r\n",sheep:"##\r\n## The non-flaming sheep.\r\n##\r\n$the_cow = <<EOC\r\n  $thoughts\r\n   $thoughts\r\n       __     \r\n      U${eyes}U\\\\.'\\@\\@\\@\\@\\@\\@`.\r\n      \\\\__/(\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@)\r\n           (\\@\\@\\@\\@\\@\\@\\@\\@)\r\n           `YY~~~~YY'\r\n            ||    ||\r\nEOC\r\n",skeleton:"##\r\n## This 'Scowleton' brought to you by one of \r\n## {appel,kube,rowe}@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n          $thoughts      (__)      \r\n           $thoughts     /$eyes|  \r\n            $thoughts   (_\"_)*+++++++++*\r\n                   //I#\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\I\\\\\r\n                   I[I|I|||||I I `\r\n                   I`I'///'' I I\r\n                   I I       I I\r\n                   ~ ~       ~ ~\r\n                     Scowleton\r\nEOC\r\n",small:'##\r\n## A small cow, artist unknown\r\n##\r\n$eyes = ".." unless ($eyes);\r\n$the_cow = <<EOC;\r\n       $thoughts   ,__,\r\n        $thoughts  ($eyes)____\r\n           (__)    )\\\\\r\n            $tongue||--|| *\r\nEOC\r\n',squirrel:"$the_cow = <<EOC;\r\n  $thoughts\r\n     $thoughts\r\n                  _ _\r\n       | \\__/|  .~    ~.\r\n       /$eyes `./      .'\r\n      {o__,   \\    {\r\n        / .  . )    \\\r\n        `-` '-' \\    }\r\n       .(   _(   )_.'\r\n      '---.~_ _ _|\r\n                                                     \r\nEOC\r\n",stegosaurus:"##\r\n## A stegosaur with a top hat?\r\n##\r\n$the_cow = <<EOC;\r\n$thoughts                             .       .\r\n $thoughts                           / `.   .' \" \r\n  $thoughts                  .---.  <    > <    >  .---.\r\n   $thoughts                 |    \\\\  \\\\ - ~ ~ - /  /    |\r\n         _____          ..-~             ~-..-~\r\n        |     |   \\\\~~~\\\\.'                    `./~~~/\r\n       ---------   \\\\__/                        \\\\__/\r\n      .'  O    \\\\     /               /       \\\\  \" \r\n     (_____,    `._.'               |         }  \\\\/~~~/\r\n      `----.          /       }     |        /    \\\\__/\r\n            `-.      |       /      |       /      `. ,~~|\r\n                ~-.__|      /_ - ~ ^|      /- _      `..-'   \r\n                     |     /        |     /     ~-.     `-. _  _  _\r\n                     |_____|        |_____|         ~ - . _ _ _ _ _>\r\nEOC\r\n",stimpy:"##\r\n## Stimpy!\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts     .    _  .    \r\n   $thoughts    |\\\\_|/__/|    \r\n       / / \\\\/ \\\\  \\\\  \r\n      /__|O||O|__ \\\\ \r\n     |/_ \\\\_/\\\\_/ _\\\\ |  \r\n     | | (____) | ||  \r\n     \\\\/\\\\___/\\\\__/  // \r\n     (_/         ||\r\n      |          ||\r\n      |          ||\\\\   \r\n       \\\\        //_/  \r\n        \\\\______//\r\n       __ || __||\r\n      (____(____)\r\nEOC\r\n",supermilker:"##\r\n## A cow being milked, probably from Lars Smith (lars@csua.berkeley.edu)\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts   ^__^\r\n   $thoughts  ($eyes)\\\\_______        ________\r\n      (__)\\\\       )\\\\/\\\\    |Super |\r\n       $tongue ||----W |       |Milker|\r\n          ||    UDDDDDDDDD|______|\r\nEOC\r\n",surgery:"##\r\n## A cow operation, artist unknown\r\n##\r\n$the_cow = <<EOC;\r\n          $thoughts           \\\\  / \r\n           $thoughts           \\\\/  \r\n               (__)    /\\\\         \r\n               ($eyes)   O  O        \r\n               _\\\\/_   //         \r\n         *    (    ) //       \r\n          \\\\  (\\\\\\\\    //       \r\n           \\\\(  \\\\\\\\    )                              \r\n            (   \\\\\\\\   )   /\\\\                          \r\n  ___[\\\\______/^^^^^^^\\\\__/) o-)__                     \r\n |\\\\__[=======______//________)__\\\\                    \r\n \\\\|_______________//____________|                    \r\n     |||      || //||     |||\r\n     |||      || @.||     |||                        \r\n      ||      \\\\/  .\\\\/      ||                        \r\n                 . .                                 \r\n                '.'.`                                \r\n\r\n            COW-OPERATION                           \r\nEOC\r\n",turkey:"##\r\n## Turkey!\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts                                  ,+*^^*+___+++_\r\n   $thoughts                           ,*^^^^              )\r\n    $thoughts                       _+*                     ^**+_\r\n     $thoughts                    +^       _ _++*+_+++_,         )\r\n              _+^^*+_    (     ,+*^ ^          \\\\+_        )\r\n             {       )  (    ,(    ,_+--+--,      ^)      ^\\\\\r\n            { (\\@)    } f   ,(  ,+-^ __*_*_  ^^\\\\_   ^\\\\       )\r\n           {:;-/    (_+*-+^^^^^+*+*<_ _++_)_    )    )      /\r\n          ( /  (    (        ,___    ^*+_+* )   <    <      \\\\\r\n           U _/     )    *--<  ) ^\\\\-----++__)   )    )       )\r\n            (      )  _(^)^^))  )  )\\\\^^^^^))^*+/    /       /\r\n          (      /  (_))_^)) )  )  ))^^^^^))^^^)__/     +^^\r\n         (     ,/    (^))^))  )  ) ))^^^^^^^))^^)       _)\r\n          *+__+*       (_))^)  ) ) ))^^^^^^))^^^^^)____*^\r\n          \\\\             \\\\_)^)_)) ))^^^^^^^^^^))^^^^)\r\n           (_             ^\\\\__^^^^^^^^^^^^))^^^^^^^)\r\n             ^\\\\___            ^\\\\__^^^^^^))^^^^^^^^)\\\\\\\\\r\n                  ^^^^^\\\\uuu/^^\\\\uuu/^^^^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\\r\n                     ___) >____) >___   ^\\\\_\\\\_\\\\_\\\\_\\\\_\\\\_\\\\)\r\n                    ^^^//\\\\\\\\_^^//\\\\\\\\_^       ^(\\\\_\\\\_\\\\_\\\\)\r\n                      ^^^ ^^ ^^^ ^\r\nEOC\r\n",turtle:"##\r\n## A mysterious turtle...\r\n##\r\n$the_cow = <<EOC;\r\n    $thoughts                                  ___-------___\r\n     $thoughts                             _-~~             ~~-_\r\n      $thoughts                         _-~                    /~-_\r\n             /^\\\\__/^\\\\         /~  \\\\                   /    \\\\\r\n           /|  O|| O|        /      \\\\_______________/        \\\\\r\n          | |___||__|      /       /                \\\\          \\\\\r\n          |          \\\\    /      /                    \\\\          \\\\\r\n          |   (_______) /______/                        \\\\_________ \\\\\r\n          |         / /         \\\\                      /            \\\\\r\n           \\\\         \\\\^\\\\\\\\         \\\\                  /               \\\\     /\r\n             \\\\         ||           \\\\______________/      _-_       //\\\\__//\r\n               \\\\       ||------_-~~-_ ------------- \\\\ --/~   ~\\\\    || __/\r\n                 ~-----||====/~     |==================|       |/~~~~~\r\n                  (_(__/  ./     /                    \\\\_\\\\      \\\\.\r\n                         (_(___/                         \\\\_____)_)\r\nEOC\r\n",tux:"##\r\n## TuX\r\n## (c) pborys@p-soft.silesia.linux.org.pl \r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts\r\n        .--.\r\n       |o_o |\r\n       |:_/ |\r\n      //   \\\\ \\\\\r\n     (|     | )\r\n    /'\\\\_   _/`\\\\\r\n    \\\\___)=(___/\r\n\r\nEOC\r\n","vader-koala":"##\r\n## Another canonical koala?\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts        .\r\n     .---.  //\r\n    Y|o o|Y// \r\n   /_(i=i)K/ \r\n   ~()~*~()~  \r\n    (_)-(_)   \r\n\r\n     Darth \r\n     Vader    \r\n     koala        \r\nEOC\r\n",vader:"##\r\n## Cowth Vader, from geordan@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n        $thoughts    ,-^-.\r\n         $thoughts   !oYo!\r\n          $thoughts /./=\\\\.\\\\______\r\n               ##        )\\\\/\\\\\r\n                ||-----w||\r\n                ||      ||\r\n\r\n               Cowth Vader\r\nEOC\r\n",www:"##\r\n## A cow wadvertising the World Wide Web, from lim@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n        $thoughts   ^__^\r\n         $thoughts  ($eyes)\\\\_______\r\n            (__)\\\\       )\\\\/\\\\\r\n             $tongue ||--WWW |\r\n                ||     ||\r\nEOC\r\n"}},function(n,r){var _={b:{eyes:"==",tongue:"  "},d:{eyes:"xx",tongue:"U "},g:{eyes:"$$",tongue:"  "},p:{eyes:"@@",tongue:"  "},s:{eyes:"**",tongue:"U "},t:{eyes:"--",tongue:"  "},w:{eyes:"OO",tongue:"  "},y:{eyes:"..",tongue:"  "}};n.exports=function(n){for(var r in _)if(!0===n[r])return _[r];return{eyes:n.e||"oo",tongue:n.T||"  "}}},function(n,r,_){"use strict";_.r(r);var t=_(0),e=_.n(t),o=function(n){return e.a.say({text:n})};new Vue({el:"#app",data:{fala:""},methods:{clickButton:function(){this.fala=o("treinamento JS")}}})}]);