import { siteConfig } from "@/config/site";

export default function RefundPage() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Refund &amp; Cancellation Policy
        </h1>
        <div className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            1. Overview
          </h2>
          <p>
            {siteConfig.name.legal} (&ldquo;the Patsanstha&rdquo;) is a
            co-operative credit society. As a financial institution, our
            products and services are primarily deposit and loan-based in
            nature. Consequently, conventional &ldquo;refund&rdquo; scenarios
            as applicable to goods or retail services do not typically arise in
            our day-to-day operations.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            2. Deposits
          </h2>
          <p>
            Deposits made with the Patsanstha (savings, fixed, recurring, etc.)
            are governed by the terms agreed upon at the time of opening the
            account or creating the deposit. Premature withdrawal or closure,
            where permitted, is subject to applicable terms, penalties, and
            regulatory guidelines as notified from time to time.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            3. Loan Repayments
          </h2>
          <p>
            Loan repayments are non-refundable once applied to the outstanding
            loan account. Any excess payment made in error will be adjusted
            against future installments or credited back to the member&rsquo;s
            savings account after verification, at the discretion of the
            Patsanstha.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            4. Fees &amp; Charges
          </h2>
          <p>
            Processing fees, administrative charges, and any other fees
            collected by the Patsanstha are generally non-refundable. In the
            event of a transaction error attributable to the Patsanstha, the
            incorrectly charged amount will be refunded to the member&rsquo;s
            account within a reasonable period after investigation.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            5. Erroneous Transactions
          </h2>
          <p>
            If you believe a transaction has been processed in error, please
            notify us immediately. We will investigate the matter and, if an
            error is confirmed, take corrective action including reversal or
            adjustment of the transaction as appropriate.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            6. Cancellation of Services
          </h2>
          <p>
            Requests for cancellation of any standing instructions, auto-debit
            mandates, or enrolled services must be submitted in writing at our
            branch office or via official communication channels at least 7
            working days before the next scheduled transaction date. The
            Patsanstha is not liable for transactions processed before a
            cancellation request is confirmed.
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            7. Contact Us
          </h2>
          <p>
            For any queries related to refunds, cancellations, or transaction
            disputes, please contact us:
            <br />
            Email:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline text-blue-600 hover:underline"
            >
              {siteConfig.email}
            </a>
            <br />
            Phone:{" "}
            <a
              href={`tel:${siteConfig.contact}`}
              className="inline text-blue-600 hover:underline"
            >
              {siteConfig.contact}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
