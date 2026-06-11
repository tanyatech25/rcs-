import React from 'react';
import { faqs } from '../../constants/faqs';
import FAQItem from '../ui/FAQItem';
import './FAQ.css';

export function FAQ() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-heading">
      <div className="faq__inner">
        <h2 id="faq-heading" className="faq__title">Questions answered</h2>
        <div className="faq__list" role="list">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.id} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;

