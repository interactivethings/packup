// React is provided by packup
import React from 'react';

// the current directory is set as webpack module root, so we don't need to use relative paths for importing
import App from 'components/App';

// The index.html with an #app element is also provided by packup
React.render(<App />, document.getElementById('app'));
