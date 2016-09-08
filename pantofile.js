/**
 * Copyright (C) 2016 yanni4night.com
 * pantofile.js
 *
 * changelog
 * 2016-09-07[20:52:18]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */
'use strict';

module.exports = panto => {
    require('load-panto-transformers')(panto);
    require('time-panto')(panto);

    panto.setOptions({
        cwd: __dirname,
        src: '.',
        output: 'dist'
    });

    panto.$('src/**/*.{js,jsx}').tag('JSX').read().babel({
        extend: '.babelrc',
        isSlient: false
    }).browserify({
        entry: 'src/index.jsx',
        bundle: 'bundle.js',
        process: {
            env: {
                NODE_ENV: 'production'
            }
        },
        aliases: {
            "react": "preact-compat",
            "react-dom": "preact-compat"
        }
    }).write();

    panto.$('src/*.html').tag('HTML').copy({flatten: true});
    panto.$('node_modules/normalize.css/normalize.css', true).tag('NORMALIZE').copy({
        flatten: true
    });
    panto.$('src/index.sass').tag('SASS').read().sass().write({
      destname: 'index.css'
    });
};
