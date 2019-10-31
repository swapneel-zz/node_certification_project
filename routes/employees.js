const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator/check');

const employeesValidators = require('../validators/employees');
const EmployeeModal = require('../models/Employee');

/* GET employees listing. */
router.get('/:id?', function(req, res, next) {
  const id = req.params.id;
  let query;
  if (id) {
    query = EmployeeModal.findOne({_id: id});
  } else {
    query = EmployeeModal.find({});
  }

  query.exec(function (err, employees) {
    if (err) return next(err);
    res.status(200).json(employees);
  });
});

/* PUT employee. */
router.put('/', employeesValidators.create, function(req, res, next) {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const employee = req.body;

  EmployeeModal.create({
    name: employee.name,
    email: employee.email,
    dob: employee.dob,
    department: employee.department,
    gender: employee.gender,
  }, function(err, employee) {
    if (err) return next(err);

    return res.status(200).json(employee);
  });
});

/* POST employee. */
router.post('/:id', employeesValidators.update, function(req, res, next) {
  const id = req.params.id;
  if (!id) {
    return res.status(400);
  }

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  const employee = req.body;
  const data = {};
  if(employee.name) {
    data.name = employee.name;
  }
  if(employee.email) {
    data.email = employee.email;
  }
  if(employee.dob) {
    data.dob = employee.dob;
  }
  if(employee.department) {
    data.department = employee.department;
  }
  if(employee.gender) {
    data.gender = employee.gender;
  }

  EmployeeModal.update({_id: id}, data, function(err) {
    if (err) return next(err);

    return res.status(200).json(Object.assign({}, {_id: id}, employee));
  });
});

/* DELETE employee. */
router.delete('/:id', employeesValidators.create, function(req, res, next) {
  const id = req.params.id;
  if (!id) {
    return res.status(400);
  }

  EmployeeModal.deleteOne({_id: id}, function(err, employee) {
    if (err) return next(err);

    return res.status(200).json(employee);
  });
});

module.exports = router;
