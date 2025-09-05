import {
    CustomAccordion,
    CustomAccordionItem,
    CustomAccordionTrigger,
    CustomAccordionContent,
} from '../components/ui/faq-accordion';

type FAQ = {
    question: string;
    answer: string;
};

type FAQSectionProps = {
    faqs?: FAQ[];
    title?: string;
    subtitle?: string;
};

const DEFAULT_FAQS: FAQ[] = [
    {
        question: 'Fazer tatuagem dói muito?',
        answer:
            'A sensação varia conforme a região do corpo, tamanho da tatuagem e sensibilidade individual. Utilizamos técnicas para minimizar o desconforto e sempre orientamos sobre o que esperar. A maioria dos clientes considera a experiência tranquila.',
    },
    {
        question: 'Quanto tempo demora uma sessão?',
        answer:
            'Depende do tamanho e complexidade do design. Tatuagens pequenas levam de 1-2 horas, enquanto peças maiores podem necessitar sessões de 3-6 horas ou múltiplas sessões. Sempre conversamos sobre o tempo estimado na consulta.',
    },
    {
        question: 'Como me preparar para a sessão?',
        answer:
            'Tenha uma boa noite de sono, alimente-se bem antes da sessão, mantenha-se hidratado e evite álcool 24h antes. Use roupas confortáveis que permitam acesso à área a ser tatuada. Traga um acompanhante se desejar.',
    },
    {
        question: 'Quando preciso fazer retoque?',
        answer:
            'Nem toda tatuagem precisa de retoque. Quando necessário, oferecemos retoque gratuito em até 60 dias, desde que os cuidados tenham sido seguidos corretamente. O retoque ajuda a intensificar cores e ajustar detalhes.',
    },
    {
        question: 'Quanto tempo demora para cicatrizar?',
        answer:
            'A cicatrização superficial leva cerca de 7-14 dias, mas a cicatrização completa pode levar de 4-6 semanas. Durante este período, é fundamental seguir todas as orientações de cuidados que fornecemos.',
    },
    {
        question: 'Posso fazer tatuagem sobre cicatriz?',
        answer:
            'Sim, em muitos casos é possível tatuar sobre cicatrizes. Avaliamos cada caso individualmente, considerando o tipo, idade e localização da cicatriz. Algumas técnicas especiais podem ser necessárias para um resultado perfeito.',
    },
];

export default function FAQSection({
    faqs = DEFAULT_FAQS,
    title = 'Perguntas Frequentes',
    subtitle = 'Tire suas dúvidas mais comuns sobre o processo, preparo e cuidados.',
}: FAQSectionProps) {
    return (
        <section id="faq" className="py-20 bg-black font-serif">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl mt-4 font-extrabold tracking-tight text-white">
                        {title}
                    </h2>

                    <div className="w-20 h-1 bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] mx-auto mt-6" />

                    <p className="mt-4 text-lg font-serif text-gray-300 max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <CustomAccordion
                    type="single"
                    collapsible
                    defaultValue="item-0"
                    className="space-y-6"
                >
                    {faqs.map((faq, index) => (
                        <CustomAccordionItem key={index} value={`item-${index}`}>
                            <CustomAccordionTrigger className="bg-white px-6 py-4 rounded-lg">
                                <span className="font-semibold font-sans bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FFD700] bg-clip-text text-transparent">
                                    {faq.question}
                                </span>
                            </CustomAccordionTrigger>

                            <CustomAccordionContent>
                                <p className="text-gray-800 dark:text-white leading-relaxed font-serif">
                                    {faq.answer}
                                </p>
                            </CustomAccordionContent>
                        </CustomAccordionItem>
                    ))}
                </CustomAccordion>

                <div className="mt-12 text-center">
                    <p className="text-gray-300 mb-4">
                        Não encontrou a resposta que procurava?
                    </p>
                    <a
                        href="https://wa.me/5561999999999?text=Olá,+gostaria+de+saber+mais."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:underline"
                    >
                        <span>Entre em contato conosco</span>
                        <svg
                            className="w-4 h-4 text-primary-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>

            </div>
        </section>
    );
}
