import React from "react";

export const RefundPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

      <p className="mb-4">
        Thank you for shopping at{" "}
        <a
          href="https://www.coursekiya.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          www.coursekiya.com
        </a>
        . We strive to ensure that our learners are satisfied with their
        purchases. However, please read our refund policy carefully before
        making any purchase.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Non-Tangible Irrevocable Goods (“Digital Products”)
      </h2>
      <p className="mb-4">
        We do not issue refunds for non-tangible irrevocable goods (“digital
        products”) once the order is confirmed and the product (such as a
        course, module, or digital resource) has been delivered or made
        accessible to you.
      </p>
      <p className="mb-4">
        Since digital products are instantly accessible after purchase, refunds
        cannot be provided due to the intangible and non-returnable nature of
        such goods.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Subscription-Based Services
      </h2>
      <p className="mb-4">
        Some of our products or services may be offered on a subscription basis.
        You can cancel your subscription at any time, but please note that
        payments already processed for the current billing cycle are
        non-refundable. Your access will remain active until the end of the
        billing period.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Duplicate Purchases or Payment Errors
      </h2>
      <p className="mb-4">
        If you believe you were charged twice for the same product or service,
        or if an error occurred during payment processing, please contact us
        immediately at{" "}
        <a
          href="mailto:coursekiya@gmail.com"
          className="text-blue-600 underline"
        >
          coursekiya@gmail.com
        </a>{" "}
        with your transaction details. We will review your claim and, if found
        valid, issue a full or partial refund as appropriate.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Course Access or Delivery Issues
      </h2>
      <p className="mb-4">
        If you experience any issues receiving or accessing your purchased
        course or materials, we encourage you to contact us for assistance. We
        are committed to resolving access or delivery issues promptly to ensure
        your learning experience is uninterrupted.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Refund Exceptions</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          Refunds will not be issued for change of mind, accidental purchase, or
          failure to use the product.
        </li>
        <li>
          Refunds are not available once a certificate of completion has been
          issued for a course.
        </li>
        <li>
          Promotional or discounted purchases are non-refundable unless required
          by applicable law.
        </li>
        <li>
          Partial refunds may be considered in exceptional cases involving
          verified technical errors or duplicate payments.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Processing Time</h2>
      <p className="mb-4">
        If a refund is approved, please allow 7–10 business days for the amount
        to be credited to your original method of payment. In some cases,
        processing time may vary depending on your financial institution.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p className="mb-4">
        If you have any questions about our Returns and Refunds Policy or need
        help with your purchase, please contact us at:
      </p>

      <div className="border-l-4 border-blue-500 pl-4 text-gray-700 mb-6">
        <p>Email:{" "}
          <a
            href="mailto:coursekiya@gmail.com"
            className="text-blue-600 underline"
          >
            coursekiya@gmail.com
          </a>
        </p>
      </div>

      <p className="text-sm text-gray-500 mt-10">
        Last updated: {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default RefundPolicy;
