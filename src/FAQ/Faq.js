import React from "react";
import Accordian from "./Accordian";

const Faq = () => {
  return (
    <section class="faq-container">
      <div class="faq-container-header">
        <h2>Frequently Asked Questions</h2>
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <div class="faq-container-menu">
        <hr />
        <Accordian question="What is Bookmark?">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
            quis quam ornare mattis.
          </p>
        </Accordian>
        <Accordian question="How can I request a new browser?">
          <p>
            Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
            ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
            aliquet convallis ultricies. Mauris augue massa, ultricies non
            ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis
            ultricies. Mauris augue massa, ultricies non ligula. Suspendisse
            imperdiet.
          </p>
        </Accordian>
        <Accordian question="Is there a mobile app?">
          <p>
            Sed consectetur quam id neque fermentum accumsan. Praesent luctus
            vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
            quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin
            ex et ultricies bibendum.
          </p>
        </Accordian>
        <Accordian question="What about other Chromium browsers?">
          <p>
            Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
            mi, at euismod dui. Aliquam vitae neque eget nisl gravida
            pellentesque non ut velit. More Info 35,000+ already joined Stay
            up-to-date with what we’re doing Contact Us Features Pricing Contact
          </p>
        </Accordian>
      </div>
      <button>More Info</button>
    </section>
  );
};

export default Faq;
