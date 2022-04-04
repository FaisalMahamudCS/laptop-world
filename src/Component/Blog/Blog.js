import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className='container pt-5'>
            <h4>What is the context API?</h4>
            <p>Context API is a api which is used to reduce the duplicate code and lack of reusibility.
                if we want to send data using props from parent to immediate children.But if the target component is not under parent and it is not immediate children, use have to send data from parent to child child to next level and then another level which is called props dealing.
                So for solving the problem,we use context API.we can send from a component to any other component using context api without any intermediate  props drilling

            </p>
            <h4>What is Semantic Tag</h4>
            <p>HTML have semantic tag header,nav,section,article,aside,footer,mark,summary and many more.Insted of writing div div everytime for every element ,we have to use semantic tags.
                with nav tag it will understand by browser it is navigation.if we write heading as a div,browser will not understand it is heading or a simple div.
                it is easy to make the layout using semantic tag.
            </p>
            <h4>Difference Between Inline element,Block element,Inline Block element?</h4>
          <p>Block element default take 100% width .They don't give space to other in same line.
              inline elements take the width what they need.they let another element in the same line beside them.
              p which is block element will take whole line where anchor  will be on same line without going to next line.
               Inline block element  are also similar type as inline elements.inline block element doesn't start new line as same as inline element.it stay at same line.we can define its height and width as block element.so it is called inline element.          
          </p>
            </section>
        </div>
    );
};

export default Blog;