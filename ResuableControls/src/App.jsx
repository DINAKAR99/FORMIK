import "./App.css";
import FormikContainer from "./components/FormikContainer";
import { LoginForm } from "./components/LoginForm";
import { RegisterationForm } from "./components/RegisterationForm";
import { CourseEnroll } from "./components/CourseEnroll";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/* <FormikContainer /> */}
        <CourseEnroll />
      </div>
    </ChakraProvider>
  );
}

export default App;
