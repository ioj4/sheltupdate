import { getFinal } from './patchModule.js';

global.app.get('/:branch/distro/app/:channel/:platform/:arch/:hostVersion/:moduleName/:moduleVersion/full.distro', (req, res) => {
  if (!branches[req.params.branch]) {
    res.status(404);
    
    res.send('Invalid GooseUpdate branch');
    return;
  }

  const toSend = getFinal(req);
  res.send(toSend);
});