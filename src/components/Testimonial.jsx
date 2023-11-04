import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
        <h2>Testimonial</h2>
        <section>
            <TestimonalCard name={"Abhishek"} feedback={"Your Teaching skills are so good"}/>
            <TestimonalCard name={"Ramzul"} feedback={"Wow what a portfolio, doesn't expect this to be on youtube!"}/>
            <TestimonalCard name={"Sundar Pichai"} feedback={"Amazing seems like you should the Google CEO"}/>
        </section>
    </div>
  );
};

const TestimonalCard = ({ name, feedback }) => (
    <article>
      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User"/>
        <h4>{name}</h4>
        <p>{feedback}</p>
    </article>
)

export default Testimonial;