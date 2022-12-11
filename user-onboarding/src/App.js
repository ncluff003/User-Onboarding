import logo from "./logo.svg";
import "./App.css";
import { OnboardingContainer } from "./OnboardingContainer";
import { User, UserList } from "./UserList";
import { Form } from "./Form";
import { Header } from "./Header";
import { CheckboxSection, Section } from "./Section";
import { CheckboxInput, Input } from "./Input";
import { CheckboxLabel, Label } from "./Label";
import { Button } from "./Button";
import { Error, ErrorContainer } from "./Errors";
import { useEffect, useState } from "react";
import { onboardSchema } from "./Schema";
import * as yup from "yup";
import axios from "axios";
import qs from "qs";
import { DateTime } from "luxon";

const initialOnboardingValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  agree: false,
};

function App() {
  const [formValues, setFormValues] = useState(initialOnboardingValues);
  const [formErrors, setFormErrors] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [users, setUsers] = useState([]);

  const renderErrors = (schema, name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((error) => setFormErrors({ ...formErrors, [name]: error.errors[0] }));
  };

  const onBoardUser = (event) => {
    event.preventDefault();
    console.log(formValues);
    try {
      const onboard = async () => {
        const response = await axios({
          method: "POST",
          url: `https://reqres.in/api/users`,
          data: qs.stringify({
            name: `${formValues.firstname} ${formValues.lastname}`,
            email: formValues.email,
            password: formValues.password,
            agree: formValues.agree,
          }),
        });
        console.log(response.data);
        setUsers([...users, response.data]);
      };
      onboard();
    } catch (error) {}
  };

  const change = (event) => {
    const { type, name, value, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    renderErrors(onboardSchema, name, valueToUse);
    setFormValues({ ...formValues, [name]: valueToUse });
  };

  useEffect(() => {
    onboardSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <OnboardingContainer>
      <ErrorContainer>
        {formErrors && (
          <ol className="error-list">
            {Object.keys(formErrors).map((error, index) => {
              if (formErrors[error] !== "") {
                return (
                  <Error className="error" key={index}>
                    {formErrors[error]}
                  </Error>
                );
              }
            })}
          </ol>
        )}
      </ErrorContainer>
      <Form>
        <Header>User Onboarding Form</Header>
        <Section>
          <Input type="text" name="firstname" id="firstname" placeholder="Enter First Name" onChange={(e) => change(e)} />
          <Label>First Name</Label>
        </Section>
        <Section>
          <Input type="text" name="lastname" id="lastname" placeholder="Enter Last Name" onChange={(e) => change(e)} />
          <Label>Last Name</Label>
        </Section>
        <Section>
          <Input type="email" name="email" id="email" placeholder="Enter Email Address" onChange={(e) => change(e)} />
          <Label>Email Address</Label>
        </Section>
        <Section>
          <Input type="password" name="password" id="password" placeholder="Enter Password" onChange={(e) => change(e)} />
          <Label>Password</Label>
        </Section>
        <CheckboxSection>
          <CheckboxLabel>Agree To Terms Of Service</CheckboxLabel>
          <CheckboxInput type="checkbox" name="agree" id="agree" onChange={(e) => change(e)} />
        </CheckboxSection>
        <Button disabled={disabled} onClick={(e) => onBoardUser(e)}>
          Submit
        </Button>
      </Form>
      <UserList>
        {users &&
          users.map((user, index) => {
            return <User user={user} key={index} />;
          })}
      </UserList>
    </OnboardingContainer>
  );
}

export default App;
