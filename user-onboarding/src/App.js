import logo from "./logo.svg";
import "./App.css";
import { OnboardingContainer } from "./OnboardingContainer";
import { UserList } from "./UserList";
import { Form } from "./Form";
import { Header } from "./Header";
import { CheckboxSection, Section } from "./Section";
import { Input } from "./Input";
import { CheckboxLabel, Label } from "./Label";
import { Button } from "./Button";
import { ErrorContainer } from "./Errors";

function App() {
  return (
    <OnboardingContainer>
      <UserList></UserList>
      <ErrorContainer>
        <ol className="error-list"></ol>
      </ErrorContainer>
      <Form>
        <Header>User Onboarding Form</Header>
        <Section>
          <Input type="text" placeholder="Enter First Name" />
          <Label>First Name</Label>
        </Section>
        <Section>
          <Input type="text" placeholder="Enter Last Name" />
          <Label>Last Name</Label>
        </Section>
        <Section>
          <Input type="email" placeholder="Enter Email Address" />
          <Label>Email Address</Label>
        </Section>
        <Section>
          <Input type="password" placeholder="Enter Password" />
          <Label>Password</Label>
        </Section>
        <CheckboxSection>
          <CheckboxLabel>Agree To Terms Of Service</CheckboxLabel>
          <input type="checkbox" />
        </CheckboxSection>
        <Button>Submit</Button>
      </Form>
    </OnboardingContainer>
  );
}

export default App;
