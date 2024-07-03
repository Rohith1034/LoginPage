import LoginPage from "./Components/Loginpage.jsx"


const handleSubmit = (event) => {
  event.preventDefault();
  console.log("hello");
};

const handleChange = (event) => {
  // Handle form field changes
  console.log("hello");
};

function App() {
  return (
    <LoginPage
        backgroundColor="black"
        backgroundImage="https://images.unsplash.com/photo-1625242661157-e9e5708ffe5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        primaryColor="red"
        logo="https://example.com/logo.png"
        font="Arial, sans-serif"
        placeholderUsername="Enter your username"
        placeholderPassword="Enter your password"
        buttonText="Sign In"
        termAndConditionsColor="white"
        buttonColor='red'
        onSubmit={handleSubmit}
        onChange={handleChange}
    />
  );
}

export default App;
