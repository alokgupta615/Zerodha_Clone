import React from "react";

function Brokerage() {
  return (
    <div className="container mt-5">
      <div className="row">
        <h5 className="text-center">
          <a href="" style={{ textDecoration: "none" }}>
            Calculate your costs upfront{" "}
          </a>
          using our brokerage calculator
        </h5>
        <h3 className="pl-5" style={{ marginLeft: "30px" }}>
          Charges explained
        </h3>
        <div className="col-6 p-5">
          <p className="fs-7">Securities/Commodities transaction tax</p>
          <p style={{ fontSize: "12px" }}>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p style={{ fontSize: "12px" }}>
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <p className="fs-7">Transaction/Turnover Charges</p>
          <p style={{ fontSize: "12px" }}>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p style={{ fontSize: "12px" }}>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p style={{ fontSize: "12px" }}>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnove
          </p>
          <p style={{ fontSize: "12px" }}>
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
          <p style={{ fontSize: "12px" }}>
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>
          <p className="fs-7">Call & trade</p>
          <p style={{ fontSize: "12px" }}>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>
          <p className="fs-7">Stamp charges</p>
          <p style={{ fontSize: "12px" }}>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>
          <p className="fs-7">NRI brokerage charges</p>
          <p style={{ fontSize: "12px" }}>
            <ul>
              <li>₹100 per order for futures and options.</li>
              <li>
                For a non-PIS account, 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
          </p>
          <p className="fs-7">Account with debit balance</p>
          <p style={{ fontSize: "12px" }}>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order instead of ₹20 per executed order.
          </p>
          <p className="fs-7">
            Charges for Investor's Protection Fund Trust (IPFT) by NSE
          </p>
          <p style={{ fontSize: "12px" }}>
            <ul>
              <li>
                Equity and Futures - ₹10 per crore + GST of the traded value.
              </li>
              <li>
                Options - ₹50 per crore + GST traded value (premium value).
              </li>
              <li>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </li>
            </ul>
          </p>

          <p className="fs-7">Margin Trading Facility (MTF)</p>
          <p style={{ fontSize: "12px" }}>
            <ul>
              <li>
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
                The interest is applied from T+1 day until the day MTF stocks
                are sold.
              </li>
              <li>
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </li>
              <li>
                MTF pledge charge: ₹15 + GST per pledge and unpledge request per
                ISIN.
              </li>
            </ul>
          </p>
        </div>
        <div className="col-6 p-5">
          <p className="fs-7">GST</p>
          <p style={{ fontSize: "12px" }}>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <p className="fs-7">SEBI Charges</p>
          <p style={{ fontSize: "12px" }}>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>
          <p className="fs-7">DP (Depository participant) charges</p>
          <p style={{ fontSize: "12px" }}>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p style={{ fontSize: "12px" }}>
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p style={{ fontSize: "12px" }}>
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <p className="fs-7">Pledging charges</p>
          <p style={{ fontSize: "12px" }}>
            ₹30 + GST per pledge request per ISIN.
          </p>
          <p className="fs-7">AMC (Account maintenance charges)</p>
          <p style={{ fontSize: "12px" }}>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA,{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Click here
            </a>
          </p>
          <p style={{ fontSize: "12px" }}>
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC,{" "}
            <a href="" style={{ textDecoration: "none" }}>
              {" "}
              Click here
            </a>
          </p>
          <p className="fs-7">Corporate action order charges</p>
          <p style={{ fontSize: "12px" }}>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>
          <p className="fs-7">Off-market transfer charges</p>
          <p style={{ fontSize: "12px" }}>₹25 per transaction..</p>
          <p className="fs-7">Physical CMR request</p>
          <p style={{ fontSize: "12px" }}>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for
            subsequent requests.
          </p>
          <p className="fs-7">Payment gateway charges</p>
          <p style={{ fontSize: "12px" }}>
            ₹9 + GST (Not levied on transfers done via UPI)
          </p>
          <p className="fs-7">Delayed Payment Charges</p>
          <p style={{ fontSize: "12px" }}>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account. Learn more.
          </p>
          <p className="fs-7">
            Trading using 3-in-1 account with block functionality
          </p>
          <p style={{ fontSize: "12px" }}>
            <ul>
              <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
              <li>Intraday Brokerage: 0.05% per executed order.</li>
            </ul>
          </p>
        </div>
        <p className="fs-7 " style={{ marginLeft: "30px" }}>
          Disclaimer
        </p>
        <p style={{ fontSize: "12px ", marginLeft: "30px" }}>
          For Delivery based trades, a minimum of ₹0.01 will be charged per
          contract note. Clients who opt to receive physical contract notes will
          be charged ₹20 per contract note plus courier charges. Brokerage will
          not exceed the rates specified by SEBI and the exchanges. All
          statutory and regulatory charges will be levied at actuals. Brokerage
          is also charged on expired, exercised, and assigned options contracts.
          Free investments are available only for our retail individual clients.
          Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20
          (whichever is less) as delivery brokerage. A brokerage of 0.25% of the
          contract value will be charged for contracts where physical delivery
          happens. For netted off positions in physically settled contracts, a
          brokerage of 0.1% will be charged.
        </p>
      </div>
    </div>
  );
}

export default Brokerage;
