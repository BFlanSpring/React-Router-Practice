### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
    React Router is a library for handling navigation through React apps. Its main purpose is to provide a way to declare dynamic, client side routing in a React app. This can allow for smoother tarnsitions without reloading pages, faster page laoding, preserving state as well as reducing server load.

- What is a single page application?
    A single page app is one that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. Examples of popular SPAs include Gmail, Facebook, Twitter, and various web applications built with JavaScript frameworks. SPAs have become increasingly popular due to their ability to provide a responsive and engaging user experience, especially in the context of web applications that require frequent updates and real-time interactions.

- What are some differences between client side and server side routing?
    Client-side routing handles navigation within a web application on the user's device, dynamically updating content without full page reloads, providing a smoother user experience. In contrast, server-side routing involves the server processing requests and returning complete HTML pages, resulting in full page reloads when navigating between different views. Client-side routing is commonly associated with Single Page Applications, while server-side routing is traditional in multi-page applications.

- What are two ways of handling redirects with React Router? When would you use each?
    React Router offers two main approaches for handling redirects: the <Redirect> component and the useHistory hook. The <Redirect> component is suitable for declarative redirects within a component, based on conditions like authentication status. On the other hand, the useHistory hook is used for programmatic, imperative redirects, allowing for more dynamic redirection triggered by external events or interactions, such as form submissions. The choice between them depends on whether the redirect is best managed within a component's rendering logic or imperatively based on external events.

- What are two different ways to handle page-not-found user experiences using React Router? 
    404 page not found redirect routes are important in every application. in React there are a few ways to regester a 404 not found page. One of the most common ways would be using the <switch> component aand <route> with render or component prop. Another way users can redirect to a 404 page is by using the 'render' prop of route, where he render prop allows you to render an element inline with the route definition, giving thr user more control over what gets rendered based on condtionals.

- How do you grab URL parameters from within a component using React Router?
    In React Router, you can access URL parameters using the useParams hook provided by the react-router-dom library. This hook allows you to retrieve the parameters from the current route in a functional component.

- What is context in React? When would you use it?
    Context is a way to pass data through the component tree without having to pass props manually at every level in that tree. Rather than passing some context continually through each linked tree memeber, this provides a way to share values like themes, authentication status, as well as any other global data between components without explicitly passing them through each level through the component hierarchy.

- Describe some differences between class-based components and function components in React.
    Both class-based components and function components are used to define the structure and behavior of user interface elements. But function components do not require a render method. A class-based component does not use hooks, they rely on lifecycle methods for side effects. It is also imortant to note that function components access context by using the useContext hook as well as that props validation defined outside of the component function.

- What are some of the problems that hooks were designed to solve?
    Hooks enable the extraction and reusing stateful logic using custom hooks, which makes it easier to share and manage logic across different components. Function components with hooks provide a more concise and readable syntax, keeping the codebase more maintainable. Managing state conponents woukd not be as easy without hooks, the useState hook allows functional components to manage local state, providing an easier way to handle component level state without the need for class components. Another large thing to not is that with the introduction of custom hooks, it now allows developers to extract and share logic across components, reducing code duplication and imporoving maintainability.