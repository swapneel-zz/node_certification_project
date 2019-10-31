const { check, checkSchema } = require('express-validator/check');

module.exports = {
  create: checkSchema({
    name: {
      in: ['body'],
      isLength: {
        options: { min: 3 }
      }
    },
    email: {
      in: ['body'],
      isEmail: true
    },
    dob: {
      in: ['body'],
      isISO8601: true,
      toDate: true
    },
    department: {
      in: ['body'],
      isLength: {
        options: { min: 3 }
      }
    },
    gender: {
      in: ['body'],
      isIn: {
        options: [['male', 'female']]
      }
    }
  }),
  update: [
    check('name').optional({nullable: false, checkFalsy: false}),
    check('email').optional({nullable: false, checkFalsy: false}),
    check('email').optional({nullable: false, checkFalsy: false}),
    check('department').optional({nullable: false, checkFalsy: false}),
    check('gender').isIn(['male', 'female']).optional({nullable: false, checkFalsy: false}),
  ]
};
