## Key Features

### Search and Filter Functionality

- **Server-Side Handling**: Search and filter functions are executed on the server side using URL parameters. This setup emulates an API's response, offering filtered, paginated, and sorted results, akin to platforms like Shopify.
- **Potential for Pagination/Infinite Loading**: The server-side approach lays the groundwork for future enhancements like pagination or infinite scrolling.
- **CSS-Based View Modification**: For manipulating views, we use a straightforward approach with CSS and classes. This method suits our current use case; however, for more complex scenarios involving numerous columns, a more sophisticated technique may be necessary.

### Rendering Strategy

- **Use of `getServerSideProps`**: Considering the dynamic nature of an e-commerce platform, where products change frequently, `getServerSideProps` is utilized for Server-Side Rendering (SSR). This choice is made over other Next.js strategies, such as client-side product calls.
- **Advantages Over Static Rendering**: Static rendering is avoided to eliminate caching issues. Notably, the latest version of Next.js has evolved in its approach to rendering strategies, which is reflected in our project's architecture.

### FeaturedImage Component

- **Handling Broken Image Links**: To address the issue of broken image links, the `FeaturedImage` component is incorporated. This component automatically displays a fallback image if the original image fails to load, ensuring a seamless user experience.

## Getting Started

### Cloning the Repository

To clone the repository, run the following command:

```bash
git clone https://github.com/santiljanomalaj/mayoral-assignment.git
```

### Running the Project

Once the repository is cloned, navigate to the project directory and install the dependencies:

```bash
cd mayoral-assignment
npm install
```

To start the project locally, run:

```bash
npm run dev
```

This will start the development server, and the application will be accessible at http://localhost:3000.

### Running Tests

To ensure the quality and functionality of the project, tests have been written. Run the tests using:

```bash
npm test
```

## Conclusion

This project is designed with scalability and user experience in mind, leveraging Next.js's capabilities for a dynamic, efficient e-commerce platform. The choices in rendering strategies, error handling, and view manipulation are geared towards creating a robust and adaptable application.
