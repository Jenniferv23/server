const {authCheck} = require('../helpers/auth')

const me = async (parent, args, {req, res}) => {
   await authCheck(req);
    return 'Raymond Silver'
};

module.exports = {
    Query:{
        me
    }
};