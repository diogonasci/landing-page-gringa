import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { Section } from "./Section";

export const FAQ = () => {
  return (
    <Section>
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Como faço para baixar as Provas Antigas CSANL?
          </AccordionTrigger>
          <AccordionContent>
            As provas antigas do CSANL estão disponíveis na seção de downloads
            do site e podem ser baixadas gratuitamente. Para acessá-las, você
            precisa estar logado em sua conta.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Como funcionam as aulas particulares?
          </AccordionTrigger>
          <AccordionContent>
            As aulas particulares podem ser realizadas online ou
            presencialmente, dependendo da sua localização. O agendamento é
            feito através do WhatsApp da Equipe Aula 360 ou diretamente pela
            plataforma, onde você pode escolher o horário que melhor se encaixa
            na sua rotina. Todo o conteúdo é personalizado de acordo com as suas
            necessidades.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Como funcionam os aulões temáticos?
          </AccordionTrigger>
          <AccordionContent>
            Os aulões temáticos são realizados online e têm duração de duas
            horas. Eles são focados em revisões direcionadas para provas e
            testes, ocorrendo geralmente na véspera ou muito próximos à data da
            prova. Durante o aulão, o professor simula o conteúdo da prova/teste
            e realiza uma preparação específica para que o aluno chegue no dia
            da prova mais preparado e confiante.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Como funcionam os aulões personalizados?
          </AccordionTrigger>
          <AccordionContent>
            Os aulões personalizados são sugeridos pelos alunos, que escolhem o
            tema desejado e convidam outros participantes. Esses aulões ficam
            visíveis para outros alunos da mesma série na plataforma, permitindo
            que eles também se inscrevam. Assim que o mínimo de 5 alunos é
            alcançado, o aulão é confirmado e agendado. O aluno que criou o
            aulão não paga caso o número mínimo de participantes seja atingido.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Posso cancelar uma aula ou aulão agendado?
          </AccordionTrigger>
          <AccordionContent>
            Sim, o cancelamento pode ser feito até 24 horas antes do horário
            agendado. Caso contrário, poderá haver cobrança de uma taxa de
            cancelamento. Para cancelar, entre em contato diretamente pelo
            suporte na plataforma.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Section>
  );
};
