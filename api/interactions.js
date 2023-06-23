import cord from '../ayaka/cord';

export default ({body: aya}, {send}) => {
  
  if (!aya) {
    return send({error: ';-;'});
  }
  
  // PING from discord api (won't really work cus verify thingy, use discord-interactions to verify)
  if (aya.type == 1) { // PING
    return send({type: 1}); // PONG
  }

  if (aya.type != 2) {
    return send({error: 'donno that type! ;-;'});
  }

  return send( cord(aya) );

};