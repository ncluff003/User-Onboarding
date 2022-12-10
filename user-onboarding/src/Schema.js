import * as yup from "yup";

export const onboardSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(2, `Your first name must have at least two characters.`)
    .matches(/^[A-Za-z]+$/, `Your first name must ONLY be letters.`)
    .required(`You must enter your first name to be onboarded.`),

  lastname: yup
    .string()
    .min(2, `Your last name must have at least two characters.`)
    .matches(/^[A-Za-z]+$/, `Your last name must ONLY be letters.`)
    .required(`You must enter your last name to be onboarded.`),

  email: yup
    .string()
    .email(`Your email address is in an invalid format.`)
    .matches(/[^@]+@[^@]+[\.]+(com|net|org|io|edu|(co.uk)|me|tech|money|gov)+$/)
    .required(`Your email address is required.`),

  password: yup
    .string()
    .min(8, `Your password must be eight characters in length.`)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%&\-\_])[A-Za-z\d@$!%&\-\_&]{8,}$/,
      `Your password must have at least one uppercase letter, one lowercase letter, one number, one special character, and be at least eight characters long.`
    )
    .required(),

  agree: yup.boolean().oneOf([true], `You must agree to the terms and services to be onboarded.`),
});
