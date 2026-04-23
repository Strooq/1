import React from "react";
import {
  ShieldCheck,
  FileText,
  Users,
  Clock3,
  ChevronRight,
  BadgeEuro,
  Building2,
  Phone,
  Mail,
  CalendarDays,
  ArrowRight,
  ArrowDown,
  ArrowLeft,
  ShoppingBag,
  X,
} from "lucide-react";

const inputClass =
  "w-full rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm outline-none focus:border-orange-400";

const plans = [
  {
    name: "Basis",
    note: "Voor kleine bedrijven",
    price: "Vanaf €195 p/m",
    features: [
      "Tot 10 medewerkers",
      "1 loonronde p/m",
      "Digitale loonstroken",
      "Standaard support",
    ],
  },
  {
    name: "Groei",
    note: "Voor groeiende teams",
    price: "Vanaf €395 p/m",
    features: [
      "Tot 35 medewerkers",
      "Doorlopende support",
      "Mutaties verwerken",
      "Prioriteit support",
    ],
  },
  {
    name: "Maatwerk",
    note: "Voor complexere payroll",
    price: "Offerte op maat",
    features: [
      "Grotere teams",
      "Meerdere loonrondes",
      "Maatwerk proces",
      "Vast aanspreekpunt",
    ],
  },
  {
    name: "Losse loonstroken",
    note: "Voor incidentele verwerkingen",
    price: "€15 per loonstrook",
    features: [
      "Geen bundel nodig",
      "Afrekening per loonstrook",
      "Geschikt voor losse runs",
      "Snel inzetbaar",
    ],
  },
] as const;

const services = [
  {
    title: "Periodieke salarisverwerking",
    text: "Wekelijkse, vierwekelijkse en maandelijkse verwerking voor vaste loonrondes.",
    icon: <Clock3 className="h-5 w-5" />,
  },
  {
    title: "Loonstroken",
    text: "Heldere digitale loonstroken per medewerker en periode.",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Mutaties",
    text: "Van starters en stoppers tot salariswijzigingen en bonussen.",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Payrollprocessen",
    text: "Duidelijke workflow voor input, controles en rapportages.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Rapportages",
    text: "Overzichten voor finance en management.",
    icon: <BadgeEuro className="h-5 w-5" />,
  },
  {
    title: "Payrollsupport",
    text: "Voor werkgevers, mkb en accountants.",
    icon: <Building2 className="h-5 w-5" />,
  },
] as const;

const sectors = [
  {
    title: "Horeca",
    text: "Flexibele roosters, parttimers en wisselende verloning.",
    badge: "24/7",
  },
  {
    title: "Retail",
    text: "Piekuren, meerdere contractvormen en schaalbare verwerking.",
    badge: "Multi-shift",
  },
  {
    title: "MKB",
    text: "Vaste loonrondes, overzicht en directe payrollsupport.",
    badge: "MKB-ready",
  },
  {
    title: "Grotere organisaties",
    text: "Aansluiting op bestaande payrollsoftware en processen.",
    badge: "Scale",
  },
] as const;

const faqs = [
  {
    question: "Voor wie is STROOQ bedoeld?",
    answer:
      "Voor werkgevers, mkb en accountants die salarisverwerking strakker willen organiseren.",
  },
  {
    question: "Hoe werkt de afrekening?",
    answer:
      "Je registreert online. Daarna volgt onboarding. Facturatie vindt achteraf plaats op basis van loonstroken en extra opties.",
  },
  {
    question: "Wat kost onboarding?",
    answer: "€120 vaste opstartkosten plus €25 per medewerker.",
  },
  {
    question: "Wanneer geldt meerwerk?",
    answer: "Bij correcties of extra uitzoekwerk geldt €75 per uur excl. btw.",
  },
] as const;

const overview = [
  { label: "Loonrondes", value: "Wekelijks / maandelijks" },
  { label: "Online", value: "Digitaal ingericht" },
  { label: "Focus", value: "Werkgevers, mkb & accountants" },
  { label: "Prioriteit", value: "Reactie binnen 1 werkdag" },
] as const;

const processCards = [
  {
    step: "01",
    title: "Aanmelding",
    text: "Klant kiest online een pakket en vult direct de aanvraag in.",
  },
  {
    step: "02",
    title: "Onboarding",
    text: "Gegevens worden gecontroleerd en de inrichting wordt gestart.",
  },
  {
    step: "04",
    title: "Live",
    text: "De klant kan operationeel starten met een online payrollflow.",
  },
  {
    step: "03",
    title: "Inrichting",
    text: "Payrollproces, mutaties en accounttoegang worden ingericht.",
  },
] as const;

const timelineSteps = [
  {
    step: "Stap 1",
    title: "Online registreren",
    text: "Kies een pakket of losse loonstroken en vul direct je gegevens in.",
  },
  {
    step: "Stap 2",
    title: "Offerte-akkoord",
    text: "Je geeft online akkoord op de prijsopzet, prijsstructuur en voorwaarden.",
  },
  {
    step: "Stap 3",
    title: "Onboarding en inrichting",
    text: "Bij volledige en correcte aanlevering is de inrichting uiterlijk binnen 2 werkdagen live.",
  },
  {
    step: "Stap 4",
    title: "Toegang en verwerking",
    text: "De klant ontvangt toegang tot een online operationeel account en de verwerking kan direct starten.",
  },
] as const;

type FieldProps = {
  label: string;
  required?: boolean;
  children: React.ReactNode;
};

function Field({ label, required = false, children }: FieldProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label} {required ? <span className="text-red-500">*</span> : null}
      </label>
      {children}
    </div>
  );
}

type PriceRowProps = { label: string; value: string };
function PriceRow({ label, value }: PriceRowProps) {
  return (
    <div className="flex justify-between gap-4">
      <span>{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

type ToggleRowProps = {
  label: string;
  value: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};
function ToggleRow({ label, value, checked, onChange }: ToggleRowProps) {
  return (
    <label className="flex items-center justify-between rounded-2xl border border-orange-100 bg-white px-4 py-3 text-sm text-slate-700">
      <span>{label}</span>
      <span className="flex items-center gap-3">
        <span>{value}</span>
        <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      </span>
    </label>
  );
}

type CheckboxRowProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
};
function CheckboxRow({ checked, onChange, children }: CheckboxRowProps) {
  return (
    <label className="flex items-start gap-3">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="mt-1" />
      <span>{children}</span>
    </label>
  );
}

type IconRadioProps = {
  checked: boolean;
  onChange: () => void;
  title: string;
  children: React.ReactNode;
};
function IconRadio({ checked, onChange, title, children }: IconRadioProps) {
  return (
    <label className="flex items-center justify-center rounded-2xl border border-orange-100 bg-white px-4 py-4 text-slate-700 transition hover:bg-orange-50">
      <input type="radio" checked={checked} onChange={onChange} className="sr-only" />
      <span title={title} className={`inline-flex rounded-2xl p-3 ${checked ? "bg-orange-500 text-white" : "bg-orange-50 text-orange-600"}`}>
        {children}
      </span>
    </label>
  );
}

type FlowArrowProps = {
  className: string;
  children: React.ReactNode;
};
function FlowArrow({ className, children }: FlowArrowProps) {
  return (
    <div className={`pointer-events-none absolute z-10 ${className}`}>
      <div className="flex h-11 w-11 items-center justify-center rounded-[0.95rem] bg-orange-500 text-white shadow-[0_12px_24px_rgba(249,115,22,0.28)] ring-1 ring-orange-300/30">
        {children}
      </div>
    </div>
  );
}

export default function PayrollServicesWebsite() {
  const [selectedPlan, setSelectedPlan] = React.useState("Groei");
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [showPhonePopup, setShowPhonePopup] = React.useState(false);
  const [contactPreference, setContactPreference] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState("");

  const [companyName, setCompanyName] = React.useState("");
  const [contactName, setContactName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [kvkNumber, setKvkNumber] = React.useState("");
  const [employeeCount, setEmployeeCount] = React.useState(5);
  const [payrollFrequency, setPayrollFrequency] = React.useState("Maandelijks");
  const [preferredStartDate, setPreferredStartDate] = React.useState("");
  const [currentProvider, setCurrentProvider] = React.useState("");
  const [currentPayrollSoftware, setCurrentPayrollSoftware] = React.useState("");
  const [customPayrollSoftware, setCustomPayrollSoftware] = React.useState("");
  const [timeTrackingProvider, setTimeTrackingProvider] = React.useState("");
  const [customTimeTrackingProvider, setCustomTimeTrackingProvider] = React.useState("");
  const [hoursDeliveryMethod, setHoursDeliveryMethod] = React.useState("");
  const [customHoursDeliveryMethod, setCustomHoursDeliveryMethod] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [includeLoonaangifte, setIncludeLoonaangifte] = React.useState(false);
  const [includePensioen, setIncludePensioen] = React.useState(false);
  const [acceptedQuote, setAcceptedQuote] = React.useState(false);
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const supportPhoneDisplay = "020 233 86 39";
  const supportPhoneHref = "tel:+31000000000";
  const teamsBookingUrl = "https://calendly.com/hello-fidial/30min";
  const intakeMailbox = "hello@strooq.nl";
  const loginUrl = "https://www.strooq.nl";
  const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";

  const selectedPlanData = plans.find((plan) => plan.name === selectedPlan) ?? plans[1];

  const opstartIndicatie = 120 + employeeCount * 25;
  const losseIndicatie = selectedPlan === "Losse loonstroken" ? employeeCount * 15 : 0;
  const loonaangifteIndicatie = includeLoonaangifte ? Math.min(employeeCount * 2.5, 75) : 0;
  const pensioenIndicatie = includePensioen ? Math.min(employeeCount * 2.5, 75) : 0;

  const canSubmit = Boolean(
    selectedPlan &&
      companyName &&
      contactName &&
      emailAddress &&
      phoneNumber &&
      kvkNumber &&
      employeeCount > 0 &&
      payrollFrequency &&
      preferredStartDate &&
      acceptedQuote &&
      acceptedTerms
  );

  const missingFields = [
    !companyName ? "Bedrijfsnaam" : null,
    !contactName ? "Contactpersoon" : null,
    !emailAddress ? "E-mailadres" : null,
    !phoneNumber ? "Telefoonnummer" : null,
    !kvkNumber ? "KvK-nummer" : null,
    !(employeeCount > 0) ? "Aantal medewerkers" : null,
    !payrollFrequency ? "Verloningsfrequentie" : null,
    !preferredStartDate ? "Gewenste startdatum" : null,
    !acceptedQuote ? "Offerte-akkoord" : null,
    !acceptedTerms ? "Privacy en voorwaarden" : null,
  ].filter(Boolean) as string[];

  const handleLoginClick = () => {
    if (typeof window !== "undefined") {
      window.open(loginUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleContactAction = () => {
    if (contactPreference === "telefoon") {
      setShowPhonePopup(true);
      return;
    }
    if (contactPreference === "meeting" && teamsBookingUrl) {
      window.open(teamsBookingUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleRegistrationSubmit = async () => {
    if (!canSubmit) return;

    setSubmitError("");
    setSubmitted(false);

    const resolvedPayrollSoftware =
      currentPayrollSoftware === "Overig" && customPayrollSoftware
        ? `Overig: ${customPayrollSoftware}`
        : currentPayrollSoftware || "Niet ingevuld";

    const resolvedTimeTrackingProvider =
      timeTrackingProvider === "Overig" && customTimeTrackingProvider
        ? `Overig: ${customTimeTrackingProvider}`
        : timeTrackingProvider || "Niet ingevuld";

    const resolvedHoursDeliveryMethod =
      hoursDeliveryMethod === "Overig" && customHoursDeliveryMethod
        ? `Overig: ${customHoursDeliveryMethod}`
        : hoursDeliveryMethod || "Niet ingevuld";

    const payload = {
      companyName,
      contactName,
      emailAddress,
      phoneNumber,
      kvkNumber,
      employeeCount,
      payrollFrequency,
      preferredStartDate,
      currentProvider: currentProvider || "Niet ingevuld",
      currentPayrollSoftware: resolvedPayrollSoftware,
      timeTrackingProvider: resolvedTimeTrackingProvider,
      hoursDeliveryMethod: resolvedHoursDeliveryMethod,
      notes: notes || "Niet ingevuld",
      selectedPlan,
      selectedPlanPrice: selectedPlanData.price,
      includeLoonaangifte,
      includePensioen,
      onboardingIndicatie: opstartIndicatie,
      losseLoonstrokenIndicatie: losseIndicatie,
      loonaangifteIndicatie,
      pensioenIndicatie,
      acceptedQuote,
      acceptedTerms,
      submittedAt: new Date().toISOString(),
      source: "strooq-website",
    };

    try {
      setIsSubmitting(true);

      const response = await fetch(contactApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(result?.error || `Request failed with status ${response.status}`);
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Failed to submit aanvraag", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "De aanvraag kon niet worden verzonden. Probeer het opnieuw of neem direct contact op via hello@strooq.nl."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="top" className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-orange-100/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="block rounded-xl outline-none transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2">
            <p className="text-lg font-bold tracking-tight">STROOQ</p>
            <p className="text-xs text-slate-500">Online payroll provider</p>
          </a>

          <div className="hidden items-center gap-4 md:flex">
            <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
              <a href="#services">Diensten</a>
              <a href="#pricing">Tarieven</a>
              <a href="#faq">FAQ</a>
              <a href="#privacy">Privacy</a>
              <a href="#voorwaarden">Voorwaarden</a>
            </nav>
            <button type="button" onClick={handleLoginClick} className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50">
              Login
            </button>
            <button type="button" onClick={() => setDrawerOpen(true)} className="inline-flex items-center gap-2 rounded-2xl border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm hover:bg-orange-50">
              <ShoppingBag className="h-4 w-4 text-orange-500" />
              Aanvraag
            </button>
            <a href="#contact" className="rounded-xl bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">
              Plan gesprek
            </a>
          </div>
        </div>
      </header>

      {showPhonePopup && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center px-6">
          <button type="button" className="absolute inset-0 bg-slate-950/45" onClick={() => setShowPhonePopup(false)} />
          <div className="relative w-full max-w-md rounded-[2rem] border border-orange-100 bg-white p-8 shadow-2xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-600">Contact</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">Bel STROOQ direct</h3>
              </div>
              <button type="button" onClick={() => setShowPhonePopup(false)} className="rounded-2xl border border-slate-200 p-2 text-slate-500 hover:bg-slate-50">
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">Liever direct telefonisch contact? Bel ons via onderstaand nummer of laat in de aanvraag weten wanneer je teruggebeld wilt worden.</p>
            <div className="mt-6 rounded-[1.5rem] border border-orange-100 bg-orange-50/50 p-5">
              <a href={supportPhoneHref} className="inline-flex items-center gap-3 text-lg font-semibold text-slate-900">
                <Phone className="h-5 w-5 text-orange-600" />
                {supportPhoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}

      {drawerOpen && (
        <div className="fixed inset-0 z-[60]">
          <button type="button" className="absolute inset-0 bg-slate-950/45" onClick={() => setDrawerOpen(false)} />
          <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-slate-200 bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
              <div>
                <p className="text-sm font-medium text-slate-500">Registratie / offerte-akkoord</p>
                <h3 className="text-2xl font-bold tracking-tight">Start direct met je aanvraag</h3>
              </div>
              <button type="button" onClick={() => setDrawerOpen(false)} className="rounded-2xl border border-slate-200 p-2 text-slate-500 hover:bg-slate-50">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
              <div className="rounded-[1.5rem] border border-orange-100 bg-orange-50/40 p-5 shadow-sm">
                <p className="text-sm font-medium text-slate-500">Geselecteerde optie</p>
                <label className="mt-3 block text-sm font-medium text-slate-700">Pakket of optie</label>
                <select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)} className={`${inputClass} mt-2`}>
                  {plans.map((plan) => (
                    <option key={plan.name} value={plan.name}>
                      {plan.name}
                    </option>
                  ))}
                </select>
                <p className="mt-3 text-sm text-slate-600">{selectedPlanData.note}</p>
                <p className="mt-3 text-2xl font-bold tracking-tight">{selectedPlanData.price}</p>
              </div>

              <div className="rounded-[1.5rem] bg-slate-950 p-5 text-white">
                <p className="text-sm text-slate-300">Volgende stap</p>
                <p className="mt-2 text-lg font-semibold">Vul direct je gegevens in en geef online akkoord op de offerte-opzet.</p>
                <p className="mt-2 whitespace-pre-line text-sm text-slate-300">
                  {"Je geeft online akkoord op de prijsopzet. Daarna starten we onboarding.\n\nBij volledige en correcte aanlevering is de inrichting uiterlijk binnen 2 werkdagen live. De klant ontvangt dan ook toegang tot een online operationeel account. Optioneel kunnen wij de maandelijkse payroll ook verzorgen in de eigen payrollsoftware van de klant."}
                </p>
              </div>

              <div className="space-y-4 rounded-[1.5rem] border border-orange-100 bg-orange-50/40 p-5">
                <Field label="Bedrijfsnaam" required>
                  <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} className={inputClass} />
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Contactpersoon" required>
                    <input value={contactName} onChange={(e) => setContactName(e.target.value)} className={inputClass} />
                  </Field>
                  <Field label="E-mailadres" required>
                    <input value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} className={inputClass} />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Telefoonnummer" required>
                    <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={inputClass} />
                  </Field>
                  <Field label="KvK-nummer" required>
                    <input value={kvkNumber} onChange={(e) => setKvkNumber(e.target.value)} className={inputClass} />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Aantal medewerkers" required>
                    <input type="number" min="1" value={employeeCount} onChange={(e) => setEmployeeCount(Math.max(1, Number(e.target.value) || 1))} className={inputClass} />
                  </Field>
                  <Field label="Verloningsfrequentie" required>
                    <select value={payrollFrequency} onChange={(e) => setPayrollFrequency(e.target.value)} className={inputClass}>
                      <option>Maandelijks</option>
                      <option>Vierwekelijks</option>
                      <option>Wekelijks</option>
                      <option>Incidenteel</option>
                    </select>
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Gewenste startdatum" required>
                    <input type="date" value={preferredStartDate} onChange={(e) => setPreferredStartDate(e.target.value)} className={inputClass} />
                  </Field>
                  <Field label="Huidige salarisverwerker">
                    <input value={currentProvider} onChange={(e) => setCurrentProvider(e.target.value)} className={inputClass} />
                  </Field>
                </div>

                <Field label="Huidig payroll software">
                  <select value={currentPayrollSoftware} onChange={(e) => setCurrentPayrollSoftware(e.target.value)} className={inputClass}>
                    <option value="">Selecteer payroll software</option>
                    <option>AFAS</option>
                    <option>Nmbrs</option>
                    <option>Exact</option>
                    <option>Loket</option>
                    <option>Visma</option>
                    <option>ADP</option>
                    <option>SAP SuccessFactors</option>
                    <option>Workday</option>
                    <option>Dayforce</option>
                    <option>UKG</option>
                    <option>Oracle</option>
                    <option>SnelStart</option>
                    <option value="Overig">Overig</option>
                  </select>
                </Field>

                {currentPayrollSoftware === "Overig" && (
                  <Field label="Overig payroll software">
                    <input value={customPayrollSoftware} onChange={(e) => setCustomPayrollSoftware(e.target.value)} className={inputClass} />
                  </Field>
                )}

                <Field label="Provider urenregistratie">
                  <select value={timeTrackingProvider} onChange={(e) => setTimeTrackingProvider(e.target.value)} className={inputClass}>
                    <option value="">Selecteer provider</option>
                    <option>L1NDA</option>
                    <option>Dyflexis</option>
                    <option>Nmbrs</option>
                    <option>AFAS</option>
                    <option>Loket</option>
                    <option>Exact</option>
                    <option value="Overig">Overig</option>
                  </select>
                </Field>

                {timeTrackingProvider === "Overig" && (
                  <Field label="Overige provider urenregistratie">
                    <input value={customTimeTrackingProvider} onChange={(e) => setCustomTimeTrackingProvider(e.target.value)} className={inputClass} />
                  </Field>
                )}

                <Field label="Hoe worden uren momenteel aangeleverd?">
                  <select value={hoursDeliveryMethod} onChange={(e) => setHoursDeliveryMethod(e.target.value)} className={inputClass}>
                    <option value="">Selecteer aanlevermethode</option>
                    <option>Handmatig</option>
                    <option>Export / import</option>
                    <option>Koppeling</option>
                    <option>Via accountant</option>
                    <option value="Overig">Overig</option>
                  </select>
                </Field>

                {hoursDeliveryMethod === "Overig" && (
                  <Field label="Overige aanlevermethode">
                    <input value={customHoursDeliveryMethod} onChange={(e) => setCustomHoursDeliveryMethod(e.target.value)} className={inputClass} />
                  </Field>
                )}

                <Field label="Opmerkingen / bijzonderheden">
                  <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} className={inputClass} />
                </Field>

                <div className="space-y-3">
                  <ToggleRow label="Loonaangifte" value="€2,50 p.p. / max €75" checked={includeLoonaangifte} onChange={setIncludeLoonaangifte} />
                  <ToggleRow label="Pensioenaangifte" value="€2,50 p.p. / max €75" checked={includePensioen} onChange={setIncludePensioen} />
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                <p className="text-sm font-medium text-slate-500">Prijsindicatie</p>
                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  <PriceRow label="Onboarding" value={`€${opstartIndicatie.toFixed(2)}`} />
                  {losseIndicatie > 0 && <PriceRow label="Losse loonstroken" value={`€${losseIndicatie.toFixed(2)}`} />}
                  {loonaangifteIndicatie > 0 && <PriceRow label="Loonaangifte" value={`€${loonaangifteIndicatie.toFixed(2)}`} />}
                  {pensioenIndicatie > 0 && <PriceRow label="Pensioenaangifte" value={`€${pensioenIndicatie.toFixed(2)}`} />}
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 px-6 py-6">
              <div className="mb-4 rounded-[1.5rem] border border-orange-100 bg-orange-50/40 p-4 text-sm text-slate-700">
                Meerwerk voor correcties of extra uitzoekwerk: <span className="font-semibold">€75 per uur excl. btw</span>.
                <br />
                <span className="mt-2 inline-block">Bij volledige en correcte aanlevering is de inrichting uiterlijk binnen 2 werkdagen live, inclusief toegang tot een online operationeel account.</span>
              </div>
              <div className="mb-4 space-y-3 rounded-[1.5rem] border border-slate-200 bg-white p-5 text-sm text-slate-700">
                <CheckboxRow checked={acceptedQuote} onChange={setAcceptedQuote}>Ik ga akkoord met deze offerte-opzet en prijsstructuur.</CheckboxRow>
                <CheckboxRow checked={acceptedTerms} onChange={setAcceptedTerms}>Ik heb het privacybeleid en de voorwaarden gelezen en ga hiermee akkoord.</CheckboxRow>
              </div>
              <div className="flex flex-col gap-3">
                {!canSubmit && (
                  <div className="rounded-[1.25rem] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    Nog niet alles ingevuld: {missingFields.slice(0, 4).join(", ")}
                    {missingFields.length > 4 ? "..." : ""}
                  </div>
                )}
                <button type="button" disabled={!canSubmit || isSubmitting} onClick={handleRegistrationSubmit} className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold text-white ${canSubmit && !isSubmitting ? "bg-orange-500 hover:bg-orange-600" : "cursor-not-allowed bg-orange-300"}`}>
                  {isSubmitting ? "Aanvraag verzenden..." : "Registreer en geef akkoord"}
                  <ArrowRight className="h-4 w-4" />
                </button>
                {submitError && (
                  <div className="rounded-[1.5rem] border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                    {submitError}
                  </div>
                )}
                {submitted && (
                  <div className="rounded-[1.5rem] border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                    Aanvraag succesvol verzonden. We nemen zo snel mogelijk contact met je op.
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      )}

      <section className="relative overflow-hidden border-b border-orange-100 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.14),transparent_24%),linear-gradient(to_bottom,white,white)]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700 shadow-sm">
              <ShieldCheck className="h-4 w-4" />
              Online payroll provider voor werkgevers, mkb en accountants
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-slate-900 sm:text-6xl lg:text-7xl">
              Online payroll provider voor werkgevers die grip willen op iedere loonronde.
            </h1>
            <p className="mt-6 max-w-2xl text-[22px] leading-9 text-slate-600">
              STROOQ levert online payroll, digitale salarisverwerking en persoonlijke support voor werkgevers, mkb en accountants.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] hover:bg-orange-600 sm:w-auto">
                Plan een kennismaking
                <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex w-full items-center justify-center rounded-2xl border border-orange-200 bg-white px-7 py-4 text-sm font-semibold text-slate-800 shadow-sm hover:bg-orange-50 sm:w-auto">
                Bekijk diensten
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-900/80 bg-[#020617] p-7 text-white shadow-[0_30px_80px_rgba(2,6,23,0.28)] ring-1 ring-slate-800/60">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">Online payroll provider</p>
                <h2 className="mt-1 text-[2rem] font-bold tracking-tight text-white">Online ingericht payrollproces</h2>
              </div>
              <div className="rounded-full bg-orange-400/15 px-3 py-1 text-sm font-medium text-orange-300">Actief</div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {overview.map((item) => (
                <div key={item.label} className="group rounded-[1.4rem] border border-white/5 bg-white/10 p-5 transition hover:-translate-y-1 hover:border-orange-400/30 hover:bg-white/[0.13]">
                  <p className="text-sm text-slate-300">{item.label}</p>
                  <p className="mt-3 text-[2.05rem] font-bold leading-tight tracking-[-0.03em] text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Diensten voor terugkerende salarisprocessen</h2>
          <p className="mt-4 text-lg text-slate-600">Alles wat nodig is om loonrondes, loonstroken en mutaties strak te organiseren.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="inline-flex rounded-2xl bg-orange-50 p-3 text-orange-600">{service.icon}</div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Branches</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">Gebouwd voor moderne werkgevers</h3>
            <p className="mt-4 text-sm leading-6 text-slate-500">Een moderne payrollpartner voor sectoren met vaste loonrondes, wisselende contractvormen en schaalbare verwerking.</p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {sectors.map((sector) => (
              <div key={sector.title} className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_20px_40px_rgba(15,23,42,0.10)]">
                <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-700">{sector.badge}</div>
                <h4 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">{sector.title}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">{sector.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-orange-100 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="flex flex-col">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Zo werkt het</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">Van aanvraag tot live in één online flow</h2>
                <p className="mt-4 max-w-2xl text-lg text-slate-600">Een heldere weergave van hoe STROOQ het proces digitaal inricht vanaf eerste aanvraag tot operationele livegang.</p>
              </div>
              <div className="mt-10 flex-1 rounded-[1.75rem] border border-orange-200 bg-orange-50/60 p-5 shadow-sm">
                <div>
                  <p className="text-sm font-semibold text-orange-700">Van contact naar livegang</p>
                  <p className="mt-1 text-xs text-slate-500">Helder procesoverzicht</p>
                </div>
                <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-orange-100 bg-white p-4">
                  <div className="grid gap-3 sm:h-64 sm:grid-cols-2">
                    <a href="#contact" className="block rounded-[1.25rem] border border-orange-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange-600">Contact</p>
                          <p className="mt-2 text-sm font-semibold text-slate-900">Telefonisch of online meeting</p>
                        </div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                          {contactPreference === "meeting" ? <CalendarDays className="h-5 w-5" /> : <Phone className="h-5 w-5" />}
                        </div>
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-orange-100"><div className="h-2 w-[34%] rounded-full bg-orange-500" /></div>
                    </a>
                    <button type="button" onClick={() => setDrawerOpen(true)} className="rounded-[1.25rem] border border-orange-100 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange-600">Aanmelding</p>
                          <p className="mt-2 text-sm font-semibold text-slate-900">Online intake en akkoord</p>
                        </div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-600"><ShoppingBag className="h-5 w-5" /></div>
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-orange-100"><div className="h-2 w-[58%] rounded-full bg-orange-500" /></div>
                    </button>
                    <div className="rounded-[1.25rem] border border-orange-100 bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange-600">Onboarding</p>
                          <p className="mt-2 text-sm font-semibold text-slate-900">Binnen 2 werkdagen ingericht</p>
                        </div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-600"><ShieldCheck className="h-5 w-5" /></div>
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-orange-100"><div className="h-2 w-[78%] rounded-full bg-orange-500" /></div>
                    </div>
                    <div className="rounded-[1.25rem] border border-orange-500 bg-orange-500 p-4 text-white shadow-sm">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange-100">Live</p>
                          <p className="mt-2 text-sm font-semibold">Toegang tot online payroll portaal</p>
                        </div>
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white"><Building2 className="h-5 w-5" /></div>
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-white/20"><div className="h-2 w-full rounded-full bg-white" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col pt-6 lg:pt-[10.25rem]">
              <div className="h-full rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-slate-400">Procesoverzicht</p>
                    <h3 className="mt-1 text-2xl font-bold tracking-tight">Van aanvraag tot live</h3>
                  </div>
                  <div className="rounded-full bg-orange-400/15 px-3 py-1 text-sm font-medium text-orange-300">In 4 stappen live</div>
                </div>
                <div className="relative mt-6 grid gap-4 md:grid-cols-2">
                  <FlowArrow className="left-1/2 top-[22%] -translate-x-1/2 hidden md:block"><ArrowRight className="h-5 w-5" /></FlowArrow>
                  <FlowArrow className="right-[22%] top-1/2 -translate-y-1/2 hidden md:block"><ArrowDown className="h-5 w-5" /></FlowArrow>
                  <FlowArrow className="left-1/2 bottom-[22%] -translate-x-1/2 hidden md:block"><ArrowLeft className="h-5 w-5" /></FlowArrow>
                  {processCards.map((item, index) => {
                    const directionLabel = index === 0 ? "Stap 1 van 4" : index === 1 ? "Stap 2 van 4" : index === 2 ? "Stap 4 van 4" : "Stap 3 van 4";
                    return (
                      <button
                        key={item.step}
                        type="button"
                        onClick={() => {
                          if (item.title === "Aanmelding") setDrawerOpen(true);
                          if (item.title === "Live") window.location.hash = "#contact";
                        }}
                        className="relative min-h-[148px] rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-left transition hover:bg-white/[0.08]"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-300">{item.step}</span>
                          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">{directionLabel}</span>
                        </div>
                        <h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">Heldere tarieven voor salarisverwerking</h2>
            <p className="mt-4 text-lg text-slate-600">Kies voor een pakket of werk met losse loonstroken. Afrekening vindt achteraf plaats.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => {
              const isSelected = selectedPlan === plan.name;
              return (
                <div key={plan.name} className={`group rounded-[2rem] border p-8 shadow-sm transition ${isSelected ? "border-orange-500 bg-slate-900 text-white" : "border-orange-100 bg-orange-50/40 hover:-translate-y-1 hover:border-orange-300 hover:bg-white"}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={`text-sm font-medium ${isSelected ? "text-slate-300" : "text-slate-500"}`}>{plan.note}</p>
                      <h3 className="mt-2 text-2xl font-bold">{plan.name}</h3>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${isSelected ? "bg-orange-400/15 text-orange-300" : "border border-orange-100 bg-white text-slate-500"}`}>{isSelected ? "Geselecteerd" : "Selecteer"}</span>
                  </div>
                  <p className="mt-5 text-3xl font-bold tracking-tight">{plan.price}</p>
                  <ul className={`mt-6 space-y-3 ${isSelected ? "text-slate-200" : "text-slate-600"}`}>
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className={`mt-1 inline-block h-2.5 w-2.5 rounded-full ${isSelected ? "bg-white" : "bg-slate-900"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex gap-3">
                    <button type="button" onClick={() => setSelectedPlan(plan.name)} className={`flex-1 rounded-2xl px-5 py-3 text-sm font-semibold ${isSelected ? "border border-white/15 bg-white/10 text-white" : "border border-orange-200 bg-white text-slate-800"}`}>
                      Kies optie
                    </button>
                    <button type="button" onClick={() => { setSelectedPlan(plan.name); setDrawerOpen(true); }} className={`inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold ${isSelected ? "bg-orange-500 text-white" : "bg-slate-900 text-white"}`}>
                      <ShoppingBag className="h-4 w-4" />
                      Start aanvraag
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-orange-100 bg-orange-50/40">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hoe afrekening werkt</h2>
            <p className="mt-4 text-lg text-slate-600">Je registreert online, geeft akkoord en daarna starten we onboarding. Facturatie gebeurt achteraf.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {timelineSteps.map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded-[1.75rem] border border-orange-100 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_20px_40px_rgba(15,23,42,0.10)]">
                <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="inline-flex rounded-2xl bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">{item.step}</div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Veelgestelde vragen</h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-orange-100 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <div className="rounded-[2rem] bg-slate-950 p-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 lg:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Contact</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Klaar om je salarisverwerking strakker te regelen?</h2>
                <p className="mt-4 max-w-2xl text-lg text-slate-300">Bespreek met STROOQ jouw teamgrootte, loonfrequentie en ondersteuningsbehoefte.</p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <button type="button" onClick={handleLoginClick} className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 sm:w-auto">
                    Login
                  </button>
                  <a href="mailto:hello@strooq.nl" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 sm:w-auto">
                    <Mail className="h-4 w-4" />
                    hello@strooq.nl
                  </a>
                  <a href={supportPhoneHref} className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 sm:w-auto">
                    <Phone className="h-4 w-4" />
                    {supportPhoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-orange-100 bg-white p-8 text-slate-900 shadow-xl lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Plan een kennismaking</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight">Vertel kort waar je hulp bij zoekt</h3>
              <form className="mt-8 space-y-5">
                <input type="text" placeholder="Bedrijfsnaam" className={inputClass} />
                <div className="grid gap-5 sm:grid-cols-2">
                  <input type="text" placeholder="Contactpersoon" className={inputClass} />
                  <input type="text" placeholder="Functie" className={inputClass} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <input type="email" placeholder="E-mailadres" className={inputClass} />
                  <input type="tel" placeholder="Telefoonnummer" className={inputClass} />
                </div>
                <div className="rounded-2xl border border-orange-100 bg-orange-50/40 p-4">
                  <p className="text-sm font-medium text-slate-700">Voorkeur contactwijze</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <IconRadio checked={contactPreference === "telefoon"} onChange={() => setContactPreference("telefoon")} title="Graag terugbellen">
                      <Phone className="h-5 w-5" />
                    </IconRadio>
                    <IconRadio checked={contactPreference === "email"} onChange={() => setContactPreference("email")} title="Graag via e-mail">
                      <Mail className="h-5 w-5" />
                    </IconRadio>
                    <IconRadio checked={contactPreference === "meeting"} onChange={() => setContactPreference("meeting")} title="Graag online meeting">
                      <CalendarDays className="h-5 w-5" />
                    </IconRadio>
                  </div>
                </div>
                <textarea rows={5} placeholder="Licht hier kort je casus, aanvraag of toelichting toe" className={inputClass} />
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 sm:w-auto">
                    Verstuur aanvraag
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleContactAction}
                    data-teams-booking-ready="true"
                    data-teams-booking-url={teamsBookingUrl}
                    data-contact-action={contactPreference || "none"}
                    className={contactPreference === "meeting"
                      ? "inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-orange-500 bg-orange-500 px-6 py-3 text-sm font-semibold text-white sm:w-auto"
                      : contactPreference === "telefoon"
                      ? "inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white sm:w-auto"
                      : "inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-orange-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-orange-50 sm:w-auto"}
                  >
                    {contactPreference === "telefoon" ? "Bekijk telefoonnummer" : "Plan direct online meeting"}
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="privacy" className="border-t border-orange-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Privacybeleid</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Hoe STROOQ omgaat met persoonsgegevens</h2>
          <div className="mt-10 rounded-[1.75rem] border border-orange-100 bg-orange-50/40 p-8 shadow-sm">
            <div className="prose prose-slate max-w-none prose-headings:tracking-tight prose-p:leading-7">
              <h3>1. Wie wij zijn</h3>
              <p>STROOQ verleent diensten op het gebied van salarisverwerking, payrollsupport en aanverwante administratieve ondersteuning aan werkgevers, mkb-ondernemingen en accountants.</p>
              <p>STROOQ is gevestigd aan Louise Marie Loeberplantsoen 4, 1062 DD Amsterdam, ingeschreven bij de Kamer van Koophandel onder nummer 86233947 en geregistreerd onder btw-nummer NL863904294B01. Voor vragen over privacy of de verwerking van persoonsgegevens kun je contact opnemen met de afdeling privacy via privacy@strooq.nl.</p>
              <h3>2. Welke persoonsgegevens wij verwerken</h3>
              <p>Afhankelijk van de dienstverlening verwerken wij persoonsgegevens van contactpersonen van klanten, werknemersgegevens die nodig zijn voor salarisverwerking, communicatiegegevens, facturatiegegevens en overige informatie die door de klant wordt aangeleverd in het kader van de opdracht.</p>
              <h3>3. Doeleinden van verwerking</h3>
              <p>Wij verwerken persoonsgegevens uitsluitend voor zover dat nodig is voor het uitvoeren van salarisverwerking, onboarding, klantcontact, ondersteuning, facturatie, het voldoen aan wettelijke verplichtingen en het verbeteren van onze dienstverlening.</p>
              <h3>4. Grondslagen</h3>
              <p>Wij verwerken persoonsgegevens op basis van de uitvoering van een overeenkomst, het voldoen aan wettelijke verplichtingen, gerechtvaardigde belangen en waar nodig toestemming.</p>
              <h3>5. Verwerker of verwerkingsverantwoordelijke</h3>
              <p>Bij salarisverwerking in opdracht van een werkgever zal STROOQ in veel gevallen optreden als verwerker. Voor bepaalde eigen administratieve processen, zoals klantcontact en facturatie, kan STROOQ optreden als verwerkingsverantwoordelijke.</p>
              <h3>6. Delen met derden</h3>
              <p>Persoonsgegevens worden uitsluitend gedeeld met derden wanneer dat nodig is voor de uitvoering van de dienstverlening, voor naleving van wet- en regelgeving of wanneer de klant daarmee heeft ingestemd. Verwerking kan plaatsvinden via software- en dienstverleningspartners die worden ingezet voor salarisverwerking, hosting, communicatie, beveiliging en administratieve ondersteuning.</p>
              <h3>7. Bewaartermijnen</h3>
              <p>Wij bewaren persoonsgegevens niet langer dan noodzakelijk is voor het doel waarvoor zij zijn verzameld, tenzij een wettelijke bewaarplicht of een gerechtvaardigd belang een langere bewaartermijn vereist. Contact- en aanvraaggegevens worden maximaal tot 2 jaar na het laatste inhoudelijke contact bewaard, klant- en contractgegevens zolang de overeenkomst loopt en voor een redelijke periode daarna, factuur- en administratieve gegevens minimaal 7 jaar voor fiscale bewaarplichten, en gegevens die onderdeel zijn van salaris- of loonadministratie zolang dat noodzakelijk is voor de dienstverlening en toepasselijke wettelijke verplichtingen.</p>
              <h3>8. Beveiliging</h3>
              <p>STROOQ neemt passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, onbevoegde toegang, ongewenste wijziging of onrechtmatige verwerking. Persoonsgegevens worden in beginsel niet doorgegeven buiten de EU/EER.</p>
              <h3>9. Rechten van betrokkenen</h3>
              <p>Betrokkenen kunnen verzoeken indienen tot inzage, correctie, verwijdering, beperking van verwerking, overdraagbaarheid van gegevens en bezwaar, voor zover deze rechten op grond van de AVG van toepassing zijn.</p>
              <h3>10. Contact en klachten</h3>
              <p>Vragen of verzoeken over privacy kunnen worden gestuurd naar privacy@strooq.nl. Indien een betrokkene meent dat persoonsgegevens onjuist of onzorgvuldig worden verwerkt, kan daarnaast een klacht worden ingediend bij de Autoriteit Persoonsgegevens.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="voorwaarden" className="border-t border-orange-100 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">Algemene voorwaarden</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Algemene voorwaarden van STROOQ</h2>
          <div className="mt-10 rounded-[1.75rem] border border-white bg-white p-8 shadow-sm">
            <div className="prose prose-slate max-w-none prose-headings:tracking-tight prose-p:leading-7">
              <h3>1. Toepasselijkheid</h3>
              <p>Deze algemene voorwaarden zijn van toepassing op alle offertes, opdrachten, diensten en overeenkomsten van STROOQ, tenzij schriftelijk anders is overeengekomen.</p>
              <h3>2. Offertes en totstandkoming</h3>
              <p>Offertes van STROOQ zijn vrijblijvend, tenzij uitdrukkelijk anders vermeld. Een overeenkomst komt tot stand zodra een offerte, opdrachtbevestiging of online akkoord door de klant is bevestigd.</p>
              <h3>3. Kort proces van aanvraag tot dienstverlening</h3>
              <p>Het proces verloopt in beginsel als volgt: de klant dient online een aanvraag in, selecteert een pakket of dienst, verstrekt de benodigde bedrijfs- en contactgegevens en geeft akkoord op de prijsopzet en toepasselijke voorwaarden. Daarna start STROOQ de onboarding. Na volledige en correcte aanlevering van de vereiste gegevens wordt de dienstverlening ingericht en kan de salarisverwerking aanvangen.</p>
              <h3>4. Uitvoering van de dienstverlening</h3>
              <p>STROOQ zal de dienstverlening naar beste inzicht en vermogen uitvoeren. De klant blijft verantwoordelijk voor de tijdige, juiste en volledige aanlevering van alle gegevens die nodig zijn voor een correcte uitvoering van de opdracht.</p>
              <h3>5. Tarieven en facturatie</h3>
              <p>Tenzij anders overeengekomen worden tarieven uitgedrukt exclusief btw en andere heffingen van overheidswege. Facturatie kan plaatsvinden op basis van pakketten, losse loonstroken, onboardingkosten, aanvullende aangiften, correcties met terugwerkende kracht en eventueel meerwerk.</p>
              <h3>6. Betalingstermijn</h3>
              <p>Facturen dienen te worden voldaan binnen 21 dagen na factuurdatum, tenzij schriftelijk anders is overeengekomen.</p>
              <h3>7. Abonnementen en looptijd</h3>
              <p>Indien dienstverlening op abonnementsbasis wordt afgenomen, geldt een initiële basislooptijd van 3 maanden. Na afloop van deze eerste 3 maanden is de overeenkomst maandelijks opzegbaar met inachtneming van een opzegtermijn van 1 maand, tenzij schriftelijk anders is overeengekomen.</p>
              <h3>8. Niet-tijdige betaling</h3>
              <p>Bij niet-tijdige betaling is de klant van rechtswege in verzuim. STROOQ is in dat geval gerechtigd de wettelijke handelsrente in rekening te brengen bij handelstransacties. Daarnaast komen buitengerechtelijke incassokosten voor rekening van de klant conform de toepasselijke wettelijke regeling en staffel voor buitengerechtelijke incassokosten.</p>
              <h3>9. Meerwerk en correcties met terugwerkende kracht</h3>
              <p>Werkzaamheden die buiten de overeengekomen dienstverlening vallen, waaronder correcties, herstelwerkzaamheden, aanvullend uitzoekwerk of extra ondersteuning door onvolledige of onjuiste aanlevering, kunnen als meerwerk in rekening worden gebracht. Voor wijzigingen of correcties met terugwerkende kracht geldt in beginsel een basisfee van €35 per wijziging, vermeerderd met het geldende tarief per nieuwe loonstrook indien opnieuw verwerkte loonstroken noodzakelijk zijn.</p>
              <h3>10. Aansprakelijkheid</h3>
              <p>STROOQ is uitsluitend aansprakelijk voor directe schade die het rechtstreekse gevolg is van een toerekenbare tekortkoming, voor zover die aansprakelijkheid niet wettelijk is uitgesloten. Iedere aansprakelijkheid is beperkt tot het bedrag dat in het betreffende geval door de aansprakelijkheidsverzekering wordt uitgekeerd, of bij gebreke daarvan tot het bedrag dat voor de betreffende opdracht in rekening is gebracht over een redelijke periode.</p>
              <h3>11. Gegevens en medewerking van de klant</h3>
              <p>De klant staat in voor de juistheid, volledigheid en tijdigheid van aangeleverde informatie. Vertragingen of fouten die voortvloeien uit onjuiste of onvolledige aanlevering komen voor rekening en risico van de klant.</p>
              <h3>12. Privacy en vertrouwelijkheid</h3>
              <p>STROOQ behandelt vertrouwelijke informatie zorgvuldig en verwerkt persoonsgegevens in overeenstemming met toepasselijke privacywetgeving en het privacybeleid zoals gepubliceerd op de website.</p>
              <h3>13. Toepasselijk recht</h3>
              <p>Op alle rechtsverhoudingen met STROOQ is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in Nederland, tenzij dwingend recht anders voorschrijft.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <p className="text-lg font-bold tracking-tight text-slate-900">STROOQ</p>
              <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">Grip op iedere loonronde. Voor werkgevers, mkb en accountants.</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Bedrijfsgegevens</p>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <p>KvK: 86233947</p>
                <p>BTW: NL863904294B01</p>
                <p>Louise Marie Loeberplantsoen 4, 1062 DD Amsterdam</p>
                <p>hello@strooq.nl</p>
                <p>privacy@strooq.nl</p>
                <p>020 233 86 39</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Juridisch</p>
              <div className="mt-3 space-y-2 text-sm text-slate-600">
                <a href="#privacy" className="block hover:text-slate-900">Privacybeleid</a>
                <a href="#voorwaarden" className="block hover:text-slate-900">Algemene voorwaarden</a>
                <a href="#contact" className="block hover:text-slate-900">Contact</a>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">© {new Date().getFullYear()} STROOQ. Alle rechten voorbehouden.</div>
        </div>
      </footer>
    </div>
  );
}
