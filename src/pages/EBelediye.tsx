import { Header } from "@/components/common/Header";
import { ProfileLink } from "@/components/common/ProfileLink";
import { DebtInquiryForm } from "@/components/ebelediye/DebtInquiryForm";
import { InvoiceList } from "@/components/ebelediye/InvoiceList";
import { CheckoutBar } from "@/components/ebelediye/CheckoutBar";
import { PaymentGateway } from "@/components/ebelediye/PaymentGateway";
import { QuickPaymentLinks } from "@/components/ebelediye/QuickPaymentLinks";
import { PaymentHistoryList } from "@/components/ebelediye/PaymentHistoryList";
import { useEBelediyeForm } from "@/hooks/useEBelediyeForm";
import quickPaymentLinksData from "@/data/quickPaymentLinksData.json";
import paymentHistoryData from "@/data/paymentHistoryData.json";

export function EBelediye() {
  const form = useEBelediyeForm();

  return (
    <>
      <Header trailing={<ProfileLink />} />

      <main className="absolute inset-0 flex flex-col gap-stack-lg overflow-y-auto px-container-margin pb-[140px] pt-[80px]">
        <DebtInquiryForm
          tcId={form.tcId}
          onTcIdChange={form.setTcId}
          isTcIdValid={form.isTcIdValid}
          isQuerying={form.isQuerying}
          onSubmit={form.searchInvoices}
        />
        <InvoiceList
          invoices={form.invoices}
          selectedIds={form.selectedIds}
          onToggle={form.toggleInvoiceSelection}
          hasQueried={form.hasQueried}
          isQuerying={form.isQuerying}
        />
        <QuickPaymentLinks links={quickPaymentLinksData} />
        <PaymentHistoryList entries={paymentHistoryData} />
      </main>

      <CheckoutBar total={form.selectedTotal} isVisible={form.invoices.length > 0} onCheckout={form.openPayment} />

      <PaymentGateway
        isOpen={form.isPaymentOpen}
        onClose={form.closePayment}
        cardName={form.cardName}
        onCardNameChange={form.setCardName}
        cardNumberFormatted={form.cardNumberFormatted}
        onCardNumberChange={form.setCardNumber}
        expiryDate={form.expiryDate}
        onExpiryDateChange={form.setExpiryDate}
        cvv={form.cvv}
        onCvvChange={form.setCvv}
        total={form.selectedTotal}
        paymentStatus={form.paymentStatus}
        onSubmit={form.submitPayment}
      />
    </>
  );
}
