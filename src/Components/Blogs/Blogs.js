import React from "react";

const Blogs = () => {
  return (
    <div>
      <div className="p-10 font-medium">
        <h1 className="text-4xl text-center mb-2">What is Context API?</h1>
        <p>
          Context API is a React structure that enable you to exchange unique
          details and assists in solving prop-drilling from all levels of your
          application. The React Context API is a way for a React app to
          effectively produce global variable that can be pass around. This is
          moving props from grandparent to grandchild. Context is also watch as
          an easier.!
        </p>
      </div>
      <div className="p-10 font-medium">
        <h1 className="text-4xl text-center mb-8">
          Inline Vs Block Vs Inline-Block
        </h1>
        <div className="grid md:grid-cols-3">
          <span>
            <p className="text-xl mb-2 border-b-2 border-blue-400 w-3/4">
              Inline Element
            </p>
            <ul className="list-disc">
              <li>The Element doesn't start on a new line</li>
              <li>It's only hold just the width it requires</li>
              <li>You Can't set the width or height</li>
            </ul>
          </span>
          <span>
            <p className="text-xl mb-2 border-b-2 border-blue-400 w-3/4">
              Block Element
            </p>
            <ul className="list-disc">
              <li>The Element will start on a new line</li>
              <li>It's hold teh ful width available</li>
              <li>You Can set width and height</li>
            </ul>
          </span>
          <span>
            <p className="text-xl mb-2 border-b-2 border-blue-400 w-3/4">
              Inline-Block Element
            </p>
            <ul className="list-disc">
              <li>The Element was like Inline Element</li>
              <li>The Element doesn't start on a new Line</li>
              <li>You Can set Width or Height</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
