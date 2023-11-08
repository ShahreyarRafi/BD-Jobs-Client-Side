import React from 'react';

const Blogs = () => {
    return (
        <div className="max-w-6xl mx-auto font-primary py-16 px-5">
            <h1 className='text-4xl lg:text-5xl font-bold mb-7' id="understanding-access-tokens-and-refresh-tokens-in-react">Understanding Access Tokens and Refresh Tokens in React</h1>
            <p className='text-lg leading-8'>When building applications with React, it&#39;s essential to understand the concepts of access tokens and refresh tokens. In this article, we&#39;ll explore what they are, how they work, and where to store them on the client-side.</p>
            <h2 className='text-3xl font-bold mb-4 mt-6' id="access-tokens-and-refresh-tokens">Access Tokens and Refresh Tokens</h2>
            <h3 className='text-xl font-bold mb-3' id="what-is-an-access-token-">What is an Access Token?</h3>
            <p className='text-lg leading-8'>An access token is a secure and short-lived piece of information that is used to grant access to a resource or perform a specific action. In the context of web applications, access tokens are commonly used to authenticate users and authorize them to access certain parts of the application. They are often associated with user sessions and have a limited lifespan, typically ranging from minutes to a few hours.</p>
            <h3 className='text-xl font-bold mb-3' id="what-is-a-refresh-token-">What is a Refresh Token?</h3>
            <p className='text-lg leading-8'>A refresh token, on the other hand, is a long-lived token used to obtain new access tokens. It serves as a mechanism to refresh an access token without requiring the user to log in again. Refresh tokens are usually stored securely on the client-side and are used to request a new access token when the current one expires. They are typically valid for a longer period, making them a valuable component of secure authentication systems.</p>
            <h2 className='text-3xl font-bold mb-4 mt-6' id="how-do-they-work-">How Do They Work?</h2>
            <p className='text-lg leading-8'>Access tokens and refresh tokens work in tandem to ensure secure and seamless user authentication and authorization:</p>
            <ol>
                <li><p className='text-lg leading-8'><strong>User Authentication</strong>: When a user logs into your React application, they typically provide their credentials (username and password) to the server. In response, the server generates an access token and a refresh token.</p>
                </li>
                <li><p className='text-lg leading-8'><strong>Access Token Usage</strong>: The access token is sent with each request to protected resources or APIs. It contains information about the user&#39;s identity and permissions. Access tokens have a limited lifespan, so they must be regularly refreshed to maintain user sessions.</p>
                </li>
                <li><p className='text-lg leading-8'><strong>Token Expiry</strong>: When an access token expires, the client can use the refresh token to request a new access token without requiring the user to log in again. This process is transparent to the user and ensures a smooth user experience.</p>
                </li>
                <li><p className='text-lg leading-8'><strong>Revocation</strong>: If a user logs out or their account is compromised, you can revoke both the access and refresh tokens to invalidate them and prevent unauthorized access.</p>
                </li>
            </ol>
            <h2 className='text-3xl font-bold mb-4 mt-6' id="where-to-store-tokens-on-the-client-side-">Where to Store Tokens on the Client-Side?</h2>
            <p className='text-lg leading-8'>Storing tokens securely on the client-side is crucial for maintaining the integrity of your authentication system. It&#39;s recommended to use browser storage options such as:</p>
            <ul>
                <li><p className='text-lg leading-8'><strong>LocalStorage</strong>: Stores data with no expiration time. This option is suitable for access tokens but poses a security risk if used for refresh tokens.</p>
                </li>
                <li><p className='text-lg leading-8'><strong>SessionStorage</strong>: Stores data for the duration of a page session. It&#39;s more secure than LocalStorage but is still susceptible to XSS attacks.</p>
                </li>
                <li><p className='text-lg leading-8'><strong>Cookies</strong>: Store tokens as HttpOnly cookies, which are not accessible via JavaScript, making them a more secure choice. Refresh tokens are commonly stored this way.</p>
                </li>
            </ul>
            <p className='text-lg leading-8'>In conclusion, access tokens and refresh tokens are fundamental in securing user authentication and authorization in React applications. Understanding how they work and where to store them on the client-side is essential for building robust and secure applications.</p>
            <h1 className='text-4xl lg:text-5xl font-bold mb-10 mt-14' id="exploring-express-js-and-nest-js">Exploring Express.js and Nest.js</h1>
            <h2 className='text-3xl font-bold mb-4 mt-6' id="what-is-express-js-">What is Express.js?</h2>
            <p className='text-lg leading-8'>Express.js is a popular web application framework for Node.js. It simplifies the development of web applications by providing a set of powerful features and tools. Express.js is known for its simplicity, flexibility, and excellent middleware support, making it an ideal choice for building web servers and APIs in the Node.js ecosystem.</p>
            <h2 className='text-3xl font-bold mb-4 mt-6' id="what-is-nest-js-">What is Nest.js?</h2>
            <p className='text-lg leading-8'>Nest.js, also known as Nest, is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. Nest.js draws inspiration from Angular, making it highly modular and easy to test. It uses TypeScript as its primary language, allowing developers to benefit from strong typing and tooling for improved code quality and maintainability.</p>
            <p className='text-lg leading-8'>Nest.js offers a comprehensive architecture and a range of features, such as dependency injection, middleware, and decorators, making it an excellent choice for building complex and scalable applications. It is particularly well-suited for developing RESTful APIs and real-time applications.</p>
            <h1 className='text-4xl lg:text-5xl font-bold mb-10 mt-14' id="explaining-your-code">Explaining Your Code</h1>
            <p className='text-lg leading-8'>To provide a code explanation, I would need more context about the specific code you&#39;d like me to explain. Please provide the code or describe the part of your React, Express.js, or Nest.js application that you&#39;d like to have explained, and I&#39;ll be happy to provide a detailed explanation.</p>
            <p className='text-lg leading-8'>It seems you&#39;ve shared code snippets from different parts of your React application, including routing, front-end components for displaying jobs, and some back-end code for handling data. Let&#39;s go through the code and briefly explain its functionality.</p>
            <h2 className='text-3xl font-bold mb-4 mt-6' id="react-router-configuration">React Router Configuration</h2>
            <p className='text-lg leading-8'>You&#39;ve defined the routes for your React application using React Router. The <code>router</code> object defines various routes, components, and loaders for data retrieval. You have routes for your main pages, including home, registration, login, contact us, about us, all jobs, blogs, add a job, job update, my jobs, applied jobs, job details, and the cart page.</p>
            <p className='text-lg leading-8'>You&#39;re using private routes for some pages, which means they are accessible only to authenticated users.</p>
            <h2 className='text-3xl font-bold mb-4 mt-6' id="back-end-code">Back-End Code</h2>
            <p className='text-lg leading-8'>The back-end code is implemented using Express.js and MongoDB to handle data. Key routes and functions include:</p>
            <ul>
                <li><p className='text-lg leading-8'><strong><code>/applied-jobs</code></strong>: This route handles job applications. It allows users to apply for a job, and job poster can see applied jobs.</p>
                </li>
                <li><p className='text-lg leading-8'><strong><code>/jobs</code></strong>: Retrieves all job listings.</p>
                </li>
                <li><p className='text-lg leading-8'><strong><code>/jobs/:id</code></strong>: Retrieves a specific job listing by its ID.</p>
                </li>
                <li><p className='text-lg leading-8'><strong><code>/my-jobs/:email</code></strong>: Retrieves job listings posted by a specific user, identified by their email.</p>
                </li>
                <li><p className='text-lg leading-8'><strong><code>/jobs</code> (POST request):</strong> Allows users to post a new job listing.</p>
                </li>
                <li><p className='text-lg leading-8'><strong><code>/my-jobs/:id</code> (DELETE request):</strong> Allows the deletion of a job listing by its ID.</p>
                </li>
                <li><p className='text-lg leading-8'><strong><code>/jobs/:id</code> (PUT request):</strong> Updates job listing details.</p>
                </li>
                <li><p className='text-lg leading-8'><strong><code>/job/:id</code> (PUT request):</strong> Increments the number of applicants for a job listing.</p>
                </li>
            </ul>
            <p className='text-lg leading-8 mb-4'>The React application is structured with routes set up using React Router. The router object specifies routes, components, and data retrieval methods. Routes include the main pages such as home, registration, login, contact us, about us, all jobs, blogs, add a job, job update, my jobs, applied jobs, job details, and the cart page.</p>
            <p className='text-lg leading-8 mb-7'>Private routes are utilized for certain pages, restricting access to authenticated users.</p>
            <h2 className='text-3xl font-bold mb-4 mt-6' id="front-end-components">Front-End Components</h2>
            <h3 className='text-xl font-bold mb-2 mt-5' id="-alljobs-component"><code>AllJobs</code> Component</h3>
            <p className='text-lg leading-8'>This component displays a list of job listings with search functionality. Users can filter jobs by searching for specific titles. The component also has sorting and filtering options based on job categories. It uses Tailwind CSS for styling.</p>
            <h3 className='text-xl font-bold mb-2 mt-5' id="-appliedjobs-component"><code>AppliedJobs</code> Component</h3>
            <p className='text-lg leading-8'>This component displays job listings that the user has applied for, categorized by job type (e.g., On Site, Remote). It includes filtering options to select a specific job category and uses Tailwind CSS for styling.</p>
            <h3 className='text-xl font-bold mb-2 mt-5' id="-myjobs-component"><code>MyJobs</code> Component</h3>
            <p className='text-lg leading-8'>This component displays job listings posted by the logged-in user. Users can also delete job listings, and there&#39;s a link to update job details. It provides a loading indicator while data is being fetched and uses Tailwind CSS for styling.</p>
            <p className='text-lg leading-8'>Your code also makes use of context (likely for managing user authentication) and integrates with libraries like SweetAlert for confirmation dialogs and tooltips.</p>
            <p className='text-lg leading-8'>These components are part of your job finder website&#39;s user interface, allowing users to explore, apply for, and manage job listings. Your application provides a smooth and intuitive user experience. You can further improve and expand these components as needed to enhance your website&#39;s features and functionality.</p>

        </div>
    );
};

export default Blogs;