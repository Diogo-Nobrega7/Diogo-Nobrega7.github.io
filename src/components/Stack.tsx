import { stack } from "@/content/site";
import { Section, Tag } from "./ui";

export function Stack() {
  return (
    <Section
      id="stack"
      index="03"
      label="Stack"
      title="Ferramentas, por domínio"
      intro="Sem barra de porcentagem: o nível em cada uma aparece nos cases e no código."
    >
      <div className="divide-y divide-line border-y border-line">
        {stack.map((group) => (
          <div key={group.domain} className="grid gap-4 py-7 md:grid-cols-[16rem_1fr] md:gap-8">
            <div>
              <h3 className="font-medium">{group.domain}</h3>
              <p className="mt-1 text-sm text-faint">{group.note}</p>
            </div>
            <ul className="flex flex-wrap content-start gap-1.5">
              {group.items.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
