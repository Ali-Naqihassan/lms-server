// const Validator = require("validator")
// const isEmpty = require("./is-empty")

// const validateFacultyRegisterInput = (data) => {
//   console.log(data)
//   let errors = {}
//   data.name = !isEmpty(data.name) ? data.name : ""
//   data.email = !isEmpty(data.email) ? data.email : ""
//   data.department = !isEmpty(data.department) ? data.department : ""
//   data.designation = !isEmpty(data.designation) ? data.designation : ""
//   data.dob = !isEmpty(data.dob) ? data.dob : ""
//   data.gender = !isEmpty(data.gender) ? data.gender : ""
//   data.cnic = !isEmpty(data.cnic) ? data.cnic : ""
//   data.facultyMobileNumber = !isEmpty(data.facultyMobileNumber)
//     ? data.facultyMobileNumber
//     : " "
//   if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
//     errors = "Name must be between 2 and 30 characters"
//   }

//   if (Validator.isEmpty(data.name)) {
//     errors = "Name field is required"
//   }

//   if (!Validator.isEmail(data.email)) {
//     errors = "Email is invalid"
//   }

//   if (Validator.isEmpty(data.email)) {
//     errors = "Email field is required"
//   }

//   if (Validator.isEmpty(data.department)) {
//     errors = "Department field is required"
//   }

//   if (Validator.isEmpty(data.dob)) {
//     errors = "DOB field is required"
//   }
//   if (Validator.isEmpty(data.designation)) {
//     errors = "Designation field is required"
//   }
//   if (Validator.isEmail(data.cnic)) {
//     errors = "cnic field is required"
//   }
//   if (Validator.isEmail(data.gender)) {
//     errors = "gender field is required"
//   }
//   if (Validator.isEmail(data.facultyMobileNumber))
//     errors = "Mobile Number field is required"
//   return {
//     errors,
//     isValid: isEmpty(errors),
//   }
// }

// module.exports = validateFacultyRegisterInput
const Joi = require("joi")

module.exports = function (faculty) {
  const facultySchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    dob: Joi.string().length(10).required(),
    email: Joi.string().email().required(),
    gender: Joi.string().required(),
    designation: Joi.string().required(),
    facultyMobileNumber: Joi.string().min(11).max(13),
    department: Joi.string().min(3).max(50).required(),
    cnic: Joi.string().min(13).max(15).required(),

    // registrationNumber: Joi.string().required(),
  })
  return facultySchema.validate(faculty)
}
