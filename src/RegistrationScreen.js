import RegistrationForm from "./RegistrationForm.js";



function RegistrationScreen() {
  
  //ResgitraionForm can transition to the following 5 state:
  // (1) Initial, (2)Loading, (3) validationFailed,(4)succesful, (5)unsuccesful
  const [state, setState] = ""


  return (
    <div>
      <RegistrationForm/>

    </div>
  );
}


export default RegistrationScreen;
