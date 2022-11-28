import React from 'react';

const Blog = () => {
    return (
        <div className='w-11/12 mx-auto mt-5 mb-3'>
            <div className='mb-4'>
                <h1 className='text-gray-900 font-mono'><strong>Question No.1:</strong> What are the different ways to manage a state in a React application?</h1>
                <p className='text-sm font-sans'><strong>Answer: </strong>React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app.</p>
            </div>
            <div className='mb-4'>
                <h1 className='text-gray-900 font-mono'><strong>Question No.2:</strong> How does prototypical inheritance work?</h1>
                <p className='text-sm font-sans'><strong>Answer: </strong>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className='mb-4'>
                <h1 className='text-gray-900 font-mono'><strong>Question No-3:</strong> What is a unit test? Why should we write unit tests?</h1>
                <p className='text-sm font-sans'><strong>Answer: </strong>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className='mb-4'>
                <h1 className='text-gray-900 font-mono'><strong>Question No-4:</strong> what is the difference between react angular and vue?</h1>
                <p className='text-sm font-sans'><strong>Answer: </strong>Both - Angular JS and React JS frameworks are used to create web interfaces for front end development. Angular is Google's matured and advanced JavaScript framework based on TypeScript, whereas Vue is a progressive open-source front-end JavaScript framework created by Evan You.</p>
            </div>
            
        </div>
    );
};

export default Blog;